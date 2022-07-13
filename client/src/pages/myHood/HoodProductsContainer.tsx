import React from "react";
import ProductCard from "../../components/productCard/ProductCard";
import { useHood } from "../../context/hoodContext/Hood.context";
import { Hood } from "../../context/hoodContext/Hood.type";
import { StyledHoodProductsWrapper } from "./styles/StyledHoodProductsWrapper";

interface HoodProductsContainerProps {
    hood: Hood;
}

const HoodProductsContainer = ({ hood }: HoodProductsContainerProps) => {
    const { myHood } = useHood();

    const getUserEmail = (ownerId: string) => {
        const user = myHood?.people?.find((user) => user._id === ownerId);
        return user?.email;
    };

    const SendEmailToPublisher = (ownerId: string, productName: string) => {
        const email = getUserEmail(ownerId);
        window.open(`mailto:${email}?subject=I'm interested in ${productName}`);
    };

    const renderHoodProducts = () => {
        return myHood?.availableProducts?.map((product) => {
            return (
                <ProductCard
                    product={product}
                    key={product._id}
                    menuItems={[
                        {
                            text: "Get this product",
                            onClick: () =>
                                SendEmailToPublisher(
                                    product.owner,
                                    product.name
                                ),
                        },
                    ]}
                ></ProductCard>
            );
        });
    };

    return (
        <StyledHoodProductsWrapper>
            {renderHoodProducts()}
        </StyledHoodProductsWrapper>
    );
};

export default HoodProductsContainer;
