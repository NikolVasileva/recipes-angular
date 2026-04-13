export interface User {
    _id: string;
    email: string,
    recipes?: string[],
    created_at?: string;
    accessToken: string;
    favorites?: string[];
}

export interface UserAuth {
    email: string;
    password: string;
}

export interface LoginData {
    email: string;
    password: string;
}