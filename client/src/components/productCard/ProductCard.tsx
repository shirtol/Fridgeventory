import Product, { MenuItem } from "../../context/productContext/Product.types";
import { StyledCard } from "./styles/StyledCard";
import { StyledCardTitle } from "./styles/StyledCardTitle";
import { StyledCategory } from "./styles/StyledCategory";
import { StyledExpireMsg } from "./styles/StyledExpireMsg";
import { StyledImageBox } from "./styles/StyledImageBox";
import { StyledProductAmount } from "./styles/StyledProductAmount";
import { StyledProductImg } from "./styles/StyledProductImg";
import {
    ContextMenuTrigger,
    ContextMenu,
    ContextMenuItem,
} from "rctx-contextmenu";
import { StyledExpireDays } from "./styles/StyledExpiryDays";
import { StyledFlexWrapper } from "../layouts/StyledFlexWrapper";
import "./styles/contextMenuStyle.css";
import { v4 as uuid } from "uuid";

interface ProductCardProps {
    product: Product;
    menuItems: MenuItem[];
    isMyProduct?: boolean;
}
export const getExpiryDays = (date: Date) => {
    const parsedDate = new Date(date);
    let difference = parsedDate.getTime() - new Date().getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
};

const ProductCard = ({ product, menuItems, isMyProduct }: ProductCardProps) => {
    const dayUntilExpiry = getExpiryDays(product.expiryDate);

    return (
        <>
            {/*@ts-ignore*/}
            <ContextMenuTrigger id={product._id}>
                <StyledCard
                    isShared={product.isShared}
                    isMyProduct={isMyProduct}
                >
                    <StyledFlexWrapper
                        height="100%"
                        flexDirection="column"
                        justifyContent="space-between"
                    >
                        <StyledImageBox>
                            <StyledProductImg
                                src={product.productImage}
                            ></StyledProductImg>
                        </StyledImageBox>
                        <StyledProductAmount>
                            {`amount: ${product.amount}`}
                        </StyledProductAmount>
                    </StyledFlexWrapper>
                    <StyledFlexWrapper flexDirection="column" height="100%">
                        <StyledCardTitle>{product.name}</StyledCardTitle>
                        <StyledCategory>{product.category}</StyledCategory>
                        <StyledExpireMsg>
                            Expires in{" "}
                            <StyledExpireDays numOfDays={dayUntilExpiry}>
                                {dayUntilExpiry}
                            </StyledExpireDays>{" "}
                            days
                        </StyledExpireMsg>
                    </StyledFlexWrapper>
                </StyledCard>
            </ContextMenuTrigger>

            {/*@ts-ignore*/}
            <ContextMenu id={product._id} animation="zoom">
                {menuItems.map((menuItem) => {
                    return (
                        /*@ts-ignore*/
                        <ContextMenuItem
                            onClick={menuItem.onClick}
                            key={uuid()}
                        >
                            {menuItem.text}
                        </ContextMenuItem>
                    );
                })}
            </ContextMenu>
        </>
    );
};

export default ProductCard;
