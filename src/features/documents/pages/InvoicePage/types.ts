export interface InvoiceTableData {
    id: number;
    name: string;
    number: string;
    startDate: string;
    amount: number;
    status: string;
}

export interface InvoiceFormData {
    parent: string;
    name: string;
    number: string;
    startDate: Date | null;
    template: string;
    userRequisites: string;
    amount: number;
    customer: string;
    customerRequisites: string;
}