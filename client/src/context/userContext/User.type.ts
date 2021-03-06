export interface User {
    name: string;
    email: string;
    password: string;
    tokens?: string[];
    hoods?: string[];
    icon?: UserAvatar;
    phone?: string;
    _id?: string;
}

export type UserAvatar =
    | "Hipster"
    | "Stalker"
    | "Karen"
    | "BusinessMan"
    | "Ginger"
    | "Brunette"
    | "Blonde";
