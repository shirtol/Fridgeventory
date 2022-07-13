import Product from "../productContext/Product.types";
import { User } from "../userContext/User.type";

export interface Hood {
    name?: string;
    location: string;
    peopleIdsArr: User[];
    _id: string;
    availableProducts: Product[];
}
