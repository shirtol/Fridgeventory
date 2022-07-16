import { useEffect, useState } from "react";
import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import { StyledGridWrapper } from "../../components/layouts/StyledGridWrapper";
import { StyledMainWrapper } from "../../components/layouts/StyledMainWrapper";
import NotLoggedInPage from "../../components/notLoggedIn/NotLoggedInPage";
import ProductCard, {
    getExpiryDays,
} from "../../components/productCard/ProductCard";
import HouseSpinner from "../../components/spinner/HouseSpinner";
import { useHood } from "../../context/hoodContext/Hood.context";
import { useProduct } from "../../context/productContext/Product.context";
import Product from "../../context/productContext/Product.types";
import { useUser } from "../../context/userContext/User.context";
import {
    deleteProductById,
    getProductById,
    shareProductToHood,
    unShareProductToHood,
} from "../../services/product.services";
import AddProductModal from "./AddProductModal";
import DeleteProductModal from "./deleteProductModal/DeleteProductModal";
import { useFilter } from "./filterBox/Filter.context";
import FilterModal from "./FilterModal";
import { StyledAddBtn } from "./styles/StyledAddBtn";
import { StyledFilterIcon } from "./styles/StyledFilterIcon";

const Fridge = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const { allProducts, setAllProducts, updateProduct } = useProduct();
    const { myHood, getMyHood } = useHood();
    const [selectedProduct, setSelectedProduct] = useState<Product>();
    const { token } = useUser();
    const { selectedCategories, expiryOption, lessThan, sortBy } = useFilter();
    const [isLoading, setIsLoading] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    // useEffect(() => {
    //     deleteProduct(product._id)
    // }, [])

    const onAddBtnClicked = () => {
        setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
    };

    const shareProduct = async (productId: string) => {
        setIsLoading(true);

        try {
            const { productAfterUpdating } = await shareProductToHood(
                myHood?._id as string,
                token!,
                productId
            );

            updateProduct && updateProduct(productAfterUpdating);
            await getMyHood!(myHood!._id);
        } catch (err) {
            console.error(err);
        }

        setIsLoading(false);
    };

    const handleUnShare = async (productId: string) => {
        setIsLoading(true);

        try {
            const { productAfterUpdating } = await unShareProductToHood(
                myHood?._id as string,
                token!,
                productId
            );
            updateProduct && updateProduct(productAfterUpdating);
            await getMyHood!(myHood!._id);
        } catch (err) {
            console.error(err);
        }

        setIsLoading(false);
    };

    const enterEditProduct = async (product: Product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const deleteProduct = async (productId: string) => {
        setIsLoading(true);
        setIsDeleteModalOpen(false);

        try {
            const product = await getProductById(productId, token!);
            setSelectedProduct(product);
            const deletedProduct = await deleteProductById(productId, token!);
            const newProductsArr = allProducts?.filter((product) => {
                return product._id !== deletedProduct._id;
            });
            setAllProducts!(newProductsArr!);
        } catch (err) {
            console.error(err);
        }
        setSelectedProduct(undefined);
        setIsLoading(false);
    };

    const filterByExpiry = (product: Product) => {
        switch (expiryOption) {
            case "Expired":
                return getExpiryDays(product.expiryDate) <= 0;
            case "In 5 days":
                return getExpiryDays(product.expiryDate) <= 5;
            case "Less than":
                return getExpiryDays(product.expiryDate) <= lessThan!;
            case "All":
            default:
                return true;
        }
    };

    const sortProducts = (a: Product, b: Product) => {
        switch (sortBy) {
            case "Name":
                return a.name > b.name ? 1 : -1;
            case "Category":
                return a.category > b.category ? 1 : -1;
            case "Expiry":
                return a.expiryDate > b.expiryDate ? 1 : -1;
            default:
                return 0;
        }
    };

    const createContextMenuItems = (product: Product) => {
        const shareitem = myHood
            ? [
                  {
                      text: (
                          <StyledFlexWrapper justifyContent="flex-start">
                              <span
                                  className="iconify"
                                  data-icon="ci:share"
                                  style={{
                                      color: "#444",
                                      fontSize: 20,
                                  }}
                              ></span>
                              {product.isShared ? "Unshare" : "Share"}
                          </StyledFlexWrapper>
                      ),
                      onClick: async () =>
                          product.isShared
                              ? await handleUnShare(product._id)
                              : await shareProduct(product._id),
                  },
              ]
            : [];
        return [
            ...shareitem,
            {
                text: (
                    <StyledFlexWrapper justifyContent="flex-start">
                        <span
                            className="iconify"
                            data-icon="bxs:edit"
                            style={{
                                color: "#444",
                                fontSize: 20,
                            }}
                        ></span>
                        Edit
                    </StyledFlexWrapper>
                ),
                onClick: async () => await enterEditProduct(product),
            },
            {
                text: (
                    <StyledFlexWrapper justifyContent="flex-start">
                        <span
                            className="iconify"
                            data-icon="fa-solid:trash"
                            style={{
                                color: "#d11a2a",
                                fontSize: 20,
                            }}
                        ></span>
                        <span
                            style={{
                                color: "#d11a2a",
                            }}
                        >
                            Delete
                        </span>
                    </StyledFlexWrapper>
                ),
                onClick: () => {
                    setSelectedProduct(product);
                    setIsDeleteModalOpen(true);
                },
            },
        ];
    };

    const renderAllProducts = () => {
        return allProducts
            ?.filter((product) =>
                selectedCategories?.length
                    ? selectedCategories?.includes(product.category)
                    : true
            )
            .filter(filterByExpiry)
            .sort(sortProducts)
            .map((product) => {
                return (
                    <ProductCard
                        product={product}
                        key={product._id}
                        menuItems={createContextMenuItems(product)}
                        isMyProduct
                    ></ProductCard>
                );
            });
    };

    const openSortAndFilterModal = () => {
        setIsFilterModalOpen((prev) => !prev);
    };

    const closeModal = () => {
        setSelectedProduct(undefined);
        setIsModalOpen(false);
    };

    const closeDeleteModal = () => {
        setSelectedProduct(undefined);
        setIsDeleteModalOpen(false);
    };

    return (
        <>
            <DeleteProductModal
                isShown={isDeleteModalOpen}
                closeModal={closeDeleteModal}
                onDeleteApproved={async () =>
                    await deleteProduct(selectedProduct!._id)
                }
            ></DeleteProductModal>
            <StyledFilterIcon
                className="fa-solid fa-filter fa-2x"
                onClick={openSortAndFilterModal}
            ></StyledFilterIcon>
            {isFilterModalOpen && (
                <FilterModal
                    closeModal={() => {
                        setIsFilterModalOpen(false);
                    }}
                ></FilterModal>
            )}
            {isModalOpen && (
                <AddProductModal
                    isShown={isModalOpen}
                    closeModal={closeModal}
                    product={selectedProduct}
                ></AddProductModal>
            )}
            <StyledMainWrapper>
                {isLoading ? (
                    <HouseSpinner isShown={isLoading} />
                ) : (
                    token && (
                        <StyledFlexWrapper>
                            <StyledGridWrapper
                                height="90vh"
                                gridTemplateCol="repeat(4, 1fr)"
                                gridTemplateColLaptopM="repeat(2, 1fr)"
                                gridTemplateColLaptop="repeat(2, 1fr)"
                                gridTemplateColsTablet="repeat(2, 1fr)"
                                gridTemplateColsTabletS="repeat(1, 1fr)"
                            >
                                {renderAllProducts()}
                            </StyledGridWrapper>
                        </StyledFlexWrapper>
                    )
                )}
                {token && (
                    <StyledAddBtn
                        className="fa-solid fa-circle-plus fa-3x"
                        onClick={onAddBtnClicked}
                    ></StyledAddBtn>
                )}
                {!token && <NotLoggedInPage />}
            </StyledMainWrapper>
        </>
    );
};

export default Fridge;
