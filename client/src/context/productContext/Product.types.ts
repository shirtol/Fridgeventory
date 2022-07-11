export default interface Product {
    name: string;
    amount: number;
    productImage: string;
    expiryDate: Date;
    category: string;
    _id: string;
    isShared: boolean;
}

export const parseProduct = (product: any) => ({
    ...product,
    expiryDate: new Date(product.expiryDate),
});
