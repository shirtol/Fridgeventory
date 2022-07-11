import Product from "../../context/productContext/Product.types";
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
import {
    deleteProductById,
    shareProductToHood,
} from "../../services/product.services";
import { useUser } from "../../context/userContext/User.context";
import { useProduct } from "../../context/productContext/Product.context";
import { useHood } from "../../context/hoodContext/Hood.context";
import { StyledExpireDays } from "./styles/StyledExpiryDays";
import { StyledFlexWrapper } from "../layouts/StyledFlexWrapper";

interface ProductCardProps {
    product: Product;
    isMyFridge: boolean;
    shouldShowContextMenu: boolean;
}

const ProductCard = ({
    product,
    isMyFridge,
    shouldShowContextMenu,
}: ProductCardProps) => {
    const { token } = useUser();
    const { allProducts, setAllProducts } = useProduct();
    const { myHood, getMyHood } = useHood();

    const handleDelete = async () => {
        const deletedProduct = await deleteProductById(product._id, token!);
        const newProductsArr = allProducts?.filter((product) => {
            return product._id !== deletedProduct._id;
        });
        setAllProducts!(newProductsArr!);
    };

    const addProductToHood = async () => {
        const { hoodAfterUpdating, productAfterUpdating } =
            await shareProductToHood(
                myHood?._id as string,
                token!,
                product._id
            );
        console.log(productAfterUpdating);
        await getMyHood!(myHood!._id);
    };

    const getExpiryDays = (date: Date) => {
        let difference = date.getTime() - new Date().getTime();
        let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
        return TotalDays;
    };

    const dayUntilExpiry = getExpiryDays(product.expiryDate);

    return (
        <>
            {/*@ts-ignore*/}
            <ContextMenuTrigger id={shouldShowContextMenu ? product._id : ""}>
                <StyledCard
                    hasShared={product.isShared}
                    isMyFridge={isMyFridge}
                >
                    <StyledFlexWrapper flexDirection="column">
                        <StyledImageBox>
                            <StyledProductImg
                                src={product.productImage}
                            ></StyledProductImg>
                        </StyledImageBox>
                        <StyledProductAmount>
                            {`amount: ${product.amount}`}
                        </StyledProductAmount>
                    </StyledFlexWrapper>
                    <StyledFlexWrapper flexDirection="column">
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
                {/*@ts-ignore*/}
                <ContextMenuItem onClick={addProductToHood}>
                    Give Product
                </ContextMenuItem>
                {/*@ts-ignore*/}
                <ContextMenuItem onClick={handleDelete}>
                    Delete Product
                </ContextMenuItem>
            </ContextMenu>
        </>
    );
};

export default ProductCard;
