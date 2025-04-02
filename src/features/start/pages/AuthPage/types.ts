export type AuthData = {
    email: string;
    password: string;
};

export type AuthError = {
    email?: string;
    password?: string;
    detail?: string;
};

export type TokenResponse = {
    access: string;
    refresh: string;
};

export type RefreshTokenResponse = {
    access: string;
};