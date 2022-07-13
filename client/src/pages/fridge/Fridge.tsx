import { useState } from "react";
import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import { StyledGridWrapper } from "../../components/layouts/StyledGridWrapper";
import { StyledMainArea } from "../../components/layouts/StyledMainArea";
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
                    shouldShowContextMenu={true}
                    product={product}
                    key={product._id}
                    isMyFridge={true}
                ></ProductCard>
            );
        });
    };

    return (
        <StyledMainArea>
            <AddProductModal
                isShown={isModalOpen}
                closeModal={() => setIsModalOpen(false)}
            ></AddProductModal>
            <StyledMainWrapper>
                <StyledFlexWrapper>
                    <StyledGridWrapper gridTemplateCol="repeat(3, 1fr)">
                        {renderAllProducts()}
                    </StyledGridWrapper>
                </StyledFlexWrapper>

                <StyledAddBtn
                    className="fa-solid fa-circle-plus fa-3x"
                    onClick={onAddBtnClicked}
                ></StyledAddBtn>
            </StyledMainWrapper>
        </StyledMainArea>
    );
};

export default Fridge;
