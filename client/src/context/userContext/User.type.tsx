export interface User {
    name: string;
    email: string;
    password: string;
    location?: string;
    tokens?: string[];
}
