export interface AdditionalTableData {
    id: number;
    name: string;
    number: string;
    startDate: string;
    status: string;
}

export interface AdditionalFormData {
    agreement: string;
    number: string;
    startDate: Date | null;
    amount: string;
}