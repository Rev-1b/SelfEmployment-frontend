export interface AgreementFormData {
    title: string;
    number: string;
    startDate: Date | null;
    endDate: Date | null;
    template: string;
    requisites: string;
    amount: string;
    customer: string;
    customerRequisites: string;
};