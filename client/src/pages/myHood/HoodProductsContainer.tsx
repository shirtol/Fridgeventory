import React from "react";
import ProductCard from "../../components/productCard/ProductCard";
import { useHood } from "../../context/hoodContext/Hood.context";
import { Hood } from "../../context/hoodContext/Hood.type";
import { StyledHoodProductsWrapper } from "./styles/StyledHoodProductsWrapper";

interface HoodProductsContainerProps {
    hood: Hood;
}

const HoodProductsContainer = ({ hood }: HoodProductsContainerProps) => {
    const { myHood, usersInHood } = useHood();

    const getUserEmail = (ownerId: string) => {
        const user = usersInHood?.find((user) => user._id === ownerId);
        return user?.email;
    };

    const SendEmailToPublisher = (ownerId: string, productName: string) => {
        const email = getUserEmail(ownerId);
        console.log(email);
        window.open(`mailto:${email}?subject=I'm interested in ${productName}`);
    };

    const renderHoodProducts = () => {
        return myHood?.availableProducts?.map((product) => {
            return (
                <ProductCard
                    shouldShowContextMenu={false}
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
