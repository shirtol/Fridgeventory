import { useState } from "react";
import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import { StyledGridWrapper } from "../../components/layouts/StyledGridWrapper";
import { StyledMainWrapper } from "../../components/layouts/StyledMainWrapper";
import ProductCard, {
    getExpiryDays,
} from "../../components/productCard/ProductCard";
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

    const onAddBtnClicked = () => {
        setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
    };

    const shareProduct = async (productId: string) => {
        const { productAfterUpdating } = await shareProductToHood(
            myHood?._id as string,
            token!,
            productId
        );
        console.log(productAfterUpdating);

        updateProduct && updateProduct(productAfterUpdating);
        await getMyHood!(myHood!._id);
    };

    const handleUnShare = async (productId: string) => {
        const { productAfterUpdating } = await unShareProductToHood(
            myHood?._id as string,
            token!,
            productId
        );
        console.log(productAfterUpdating);

        updateProduct && updateProduct(productAfterUpdating);
        await getMyHood!(myHood!._id);
    };

    const enterEditProduct = async (product: Product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const deleteProduct = async (productId: string) => {
        const product = await getProductById(productId, token!);
        setSelectedProduct(product);
        const deletedProduct = await deleteProductById(productId, token!);
        const newProductsArr = allProducts?.filter((product) => {
            return product._id !== deletedProduct._id;
        });
        setAllProducts!(newProductsArr!);
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
                        menuItems={[
                            {
                                text: product.isShared ? "unshare" : "share",
                                onClick: async () =>
                                    product.isShared
                                        ? await handleUnShare(product._id)
                                        : await shareProduct(product._id),
                            },
                            {
                                text: "edit",
                                onClick: async () =>
                                    await enterEditProduct(product),
                            },
                            {
                                text: "delete",
                                onClick: async () =>
                                    await deleteProduct(product._id),
                            },
                        ]}
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

    return (
        <>
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
                <StyledFlexWrapper>
                    <StyledGridWrapper
                        gridTemplateCol="repeat(4, 1fr)"
                        gridTemplateColLaptopM="repeat(2, 1fr)"
                        gridTemplateColLaptop="repeat(2, 1fr)"
                        gridTemplateColsTablet="repeat(2, 1fr)"
                    >
                        {renderAllProducts()}
                    </StyledGridWrapper>
                </StyledFlexWrapper>

                <StyledAddBtn
                    className="fa-solid fa-circle-plus fa-3x"
                    onClick={onAddBtnClicked}
                ></StyledAddBtn>
            </StyledMainWrapper>
        </>
    );
};

export default Fridge;
