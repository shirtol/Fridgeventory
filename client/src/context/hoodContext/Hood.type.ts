import Product from "../productContext/Product.types";
import { User } from "../userContext/User.type";

export interface Hood {
    name?: string;
    location: string;
    people: User[];
    _id: string;
    availableProducts: Product[];
}
