export interface PaymentRecord {
    id: number;
    accountName: string;
    bank: string;
    card: string;
    accountNumber: string;
    bik: string;
    correspondentAccount: string;
}

export interface PaymentDetailsError {
    message: string;
    field?: string;
}

export interface APIResponse<T> {
    data: T;
    message?: string;
} 