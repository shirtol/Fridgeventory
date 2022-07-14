import { useState } from "react";
import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import { StyledGridWrapper } from "../../components/layouts/StyledGridWrapper";
import { StyledMainWrapper } from "../../components/layouts/StyledMainWrapper";
import ProductCard from "../../components/productCard/ProductCard";
import { useHood } from "../../context/hoodContext/Hood.context";
import { useProduct } from "../../context/productContext/Product.context";
import { useUser } from "../../context/userContext/User.context";
import {
    deleteProductById,
    shareProductToHood,
} from "../../services/product.services";
import AddProductModal from "./AddProductModal";
import { StyledAddBtn } from "./styles/StyledAddBtn";

const Fridge = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { allProducts, setAllProducts, addProduct } = useProduct();
    const { myHood, getMyHood } = useHood();

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
        addProduct && addProduct(productAfterUpdating);
        await getMyHood!(myHood!._id);
    };

    const deleteProduct = async (productId: string) => {
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
                            text: "share",
                            onClick: async () =>
                                await shareProduct(product._id),
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
            <AddProductModal
                isShown={isModalOpen}
                closeModal={() => setIsModalOpen(false)}
            ></AddProductModal>
            <StyledMainWrapper>
                <StyledFlexWrapper
                    justifyContent="flex-end"
                    paddingRight="10rem"
                >
                    <StyledGridWrapper
                        gridTemplateCol="repeat(5, 1fr)"
                        gridTemplateColLaptop="repeat(4, 1fr)"
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
