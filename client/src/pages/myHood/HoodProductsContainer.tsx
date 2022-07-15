import React from "react";
import { StyledGridWrapper } from "../../components/layouts/StyledGridWrapper";
import ProductCard from "../../components/productCard/ProductCard";
import { useHood } from "../../context/hoodContext/Hood.context";
import { Hood } from "../../context/hoodContext/Hood.type";
import { useUser } from "../../context/userContext/User.context";
import { StyledHoodProductsWrapper } from "./styles/StyledHoodProductsWrapper";

interface HoodProductsContainerProps {
    hood: Hood;
}

const HoodProductsContainer = ({ hood }: HoodProductsContainerProps) => {
    const { myHood } = useHood();
    const { currUser } = useUser();

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
                    isMyProduct={product.owner === currUser?._id}
                ></ProductCard>
            );
        });
    };

    return (
        <StyledGridWrapper
            alignSelf="flex-start"
            gridTemplateColLaptopML="repeat(2, 1fr)"
            gridTemplateCol="repeat(4, 1fr)"
            gridTemplateColLaptopM="repeat(2, 1fr)"
            gridTemplateColLaptop="repeat(2, 1fr)"
            gridTemplateColsTablet="repeat(2, 1fr)"
        >
            {renderHoodProducts()}
        </StyledGridWrapper>
    );
};

export default HoodProductsContainer;
