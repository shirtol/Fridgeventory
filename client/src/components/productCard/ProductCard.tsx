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

interface ProductCardProps {
    product: Product;
    isMyFridge: boolean;
}

const ProductCard = ({ product, isMyFridge }: ProductCardProps) => {
    const { token } = useUser();
    const { allProducts, setAllProducts } = useProduct();
    const { myHood, setMyHood, productsInHood, setProductsInHood, getMyHood } =
        useHood();

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

    return (
        <>
            {/*@ts-ignore*/}
            <ContextMenuTrigger id={product._id}>
                <StyledCard
                    hasShared={product.isShared}
                    isMyFridge={isMyFridge}
                >
                    <StyledCardTitle>{product.name}</StyledCardTitle>
                    <StyledCategory>{product.category}</StyledCategory>
                    <StyledImageBox>
                        <StyledProductImg
                            src={product.productImage}
                        ></StyledProductImg>
                    </StyledImageBox>
                    <StyledProductAmount>{product.amount}</StyledProductAmount>
                    <StyledExpireMsg>{`Expires in: ${product.expiryDate}`}</StyledExpireMsg>
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
