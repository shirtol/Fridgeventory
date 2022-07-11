import { useState } from "react";
import { StyledGridWrapper } from "../../components/layouts/StyledGridWrapper";
import { StyledMainWrapper } from "../../components/layouts/StyledMainWrapper";
import ProductCard from "../../components/productCard/ProductCard";
import { useProduct } from "../../context/productContext/Product.context";
import AddProductModal from "./AddProductModal";
import { StyledAddBtn } from "./styles/StyledAddBtn";

const Fridge = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { allProducts } = useProduct();

    const onAddBtnClicked = () => {
        setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
    };

    const renderAllProducts = () => {
        return allProducts?.map((product) => {
            return (
                <ProductCard
                    product={product}
                    key={product._id}
                    isMyFridge={true}
                ></ProductCard>
            );
        });
    };

    return (
        <StyledMainWrapper>
            <AddProductModal
                isShown={isModalOpen}
                closeModal={() => setIsModalOpen(false)}
            ></AddProductModal>
            <StyledGridWrapper>{renderAllProducts()}</StyledGridWrapper>

            <StyledAddBtn
                className="fa-solid fa-circle-plus fa-3x"
                onClick={onAddBtnClicked}
            ></StyledAddBtn>
        </StyledMainWrapper>
    );
};

export default Fridge;
