export interface CheckTableData {
    id: number;
    name: string;
    number: string;
    startDate: string;
    amount: number;
}

export interface CheckFormData {
    parent: string;
    name: string;
    number: string;
    addFile: string;
    amount: number;
    startDate: Date | null;
}