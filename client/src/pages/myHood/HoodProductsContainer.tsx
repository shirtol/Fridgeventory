import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import ProductCard from "../../components/productCard/ProductCard";
import { useHood } from "../../context/hoodContext/Hood.context";
import Product from "../../context/productContext/Product.types";
import { useUser } from "../../context/userContext/User.context";
import { User } from "../../context/userContext/User.type";
import { hoodContextMenuImages } from "../../utils/stylesUtils/images";
import { StyledContextMenuImage } from "./styles/StyledContextMenuImg";

const HoodProductsContainer = () => {
    const { myHood } = useHood();
    const { currUser } = useUser();

    const getUser = (ownerId: string) => {
        const user = myHood?.people?.find((user) => user._id === ownerId);

        return user;
    };

    const SendEmailToPublisher = (
        { email }: User,
        { name: productName }: Product
    ) => {
        window.open(`mailto:${email}?subject=I'm interested in ${productName}`);
    };

    const sendWhatsapp = ({ phone }: User) => {
        if (!phone) return;
        window.open(`https://wa.me/${phone}`);
    };

    const callPublisher = ({ phone }: User) => {
        if (!phone) return;
        window.open(`tel:${phone}`);
    };

    const createContextMenu = (product: Product) => {
        const user = getUser(product.owner)!;

        return [
            {
                text: (
                    <StyledFlexWrapper justifyContent="flex-start">
                        <StyledContextMenuImage
                            src={hoodContextMenuImages.email}
                        ></StyledContextMenuImage>
                        Send email to {user.name}
                    </StyledFlexWrapper>
                ),
                onClick: () => SendEmailToPublisher(user, product),
            },
            {
                text: (
                    <StyledFlexWrapper justifyContent="flex-start">
                        <StyledContextMenuImage
                            src={hoodContextMenuImages.whatsapp}
                            disabled={!user.phone}
                        ></StyledContextMenuImage>
                        Send message to {user.name}
                    </StyledFlexWrapper>
                ),
                onClick: () => sendWhatsapp(user),
            },
            {
                text: (
                    <StyledFlexWrapper justifyContent="flex-start">
                        <StyledContextMenuImage
                            src={hoodContextMenuImages.phone}
                            disabled={!user.phone}
                        ></StyledContextMenuImage>
                        Call {user.name}
                    </StyledFlexWrapper>
                ),
                onClick: () => callPublisher(user),
            },
        ];
    };

    const renderHoodProducts = () => {
        return myHood?.availableProducts?.map((product) => {
            return (
                <ProductCard
                    product={product}
                    key={product._id}
                    menuItems={createContextMenu(product)}
                    isMyProduct={product.owner === currUser?._id}
                ></ProductCard>
            );
        });
    };

    return (
        <StyledFlexWrapper
            alignSelf="flex-start"
            flexWrap="wrap"
            justifyContent="flex-start"
        >
            {renderHoodProducts()}
        </StyledFlexWrapper>
    );
};

export default HoodProductsContainer;
