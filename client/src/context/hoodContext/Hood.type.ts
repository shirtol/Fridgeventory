import { User } from "../userContext/User.type";

export interface Hood {
    name: string;
    location: string;
    peopleIdsArr: string[];
    _id: string;
    availableProducts: string[];
    people: User[];
}
