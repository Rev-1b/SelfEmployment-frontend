export type RequisiteData = {
    bank_name: string;
    card_number: string;
    user_account: string;
    bic: string;
    bank_account: string;
};

export type RequisitesResponse = RequisiteData & {
    id: string; // UUID4
};

export interface FrontendRequisite {
    id: string; // UUID4
    bankName: string;
    cardNumber: string;
    userAccount: string;
    bic: string;
    bankAccount: string;
}

export const transformRequisites = (response: RequisitesResponse): RequisiteData => {
    return {
        bank_name: response.bank_name,
        card_number: response.card_number,
        user_account: response.user_account,
        bic: response.bic,
        bank_account: response.bank_account,
    };
};