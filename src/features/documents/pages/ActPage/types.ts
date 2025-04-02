export interface ActTableData {
    id: number;
    name: string;
    number: string;
    startDate: string;
    status: string;
}

export interface ActFormData {
    parent: string;
    name: string;
    number: string;
    startDate: Date | null;
    template: string;
    customer: string;
}