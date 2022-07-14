import { useState } from "react";
import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import { StyledGridWrapper } from "../../components/layouts/StyledGridWrapper";
import { StyledMainWrapper } from "../../components/layouts/StyledMainWrapper";
import ProductCard from "../../components/productCard/ProductCard";
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
import { StyledAddBtn } from "./styles/StyledAddBtn";

const Fridge = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { allProducts, setAllProducts, updateProduct } = useProduct();
    const { myHood, getMyHood } = useHood();
    const [selectedProduct, setSelectedProduct] = useState<Product>();

    const { token } = useUser();

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

    const renderAllProducts = () => {
        return allProducts?.map((product) => {
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
                    isMyFridge
                ></ProductCard>
            );
        });
    };

    return (
        <>
            {isModalOpen && (
                <AddProductModal
                    isShown={isModalOpen}
                    closeModal={() => setIsModalOpen(false)}
                    product={selectedProduct}
                ></AddProductModal>
            )}
            <StyledMainWrapper>
                <StyledFlexWrapper
                    justifyContent="flex-end"
                    paddingRight="10rem"
                >
                    <StyledGridWrapper
                        gridTemplateCol="repeat(5, 1fr)"
                        gridTemplateColLaptop="repeat(3, 1fr)"
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
