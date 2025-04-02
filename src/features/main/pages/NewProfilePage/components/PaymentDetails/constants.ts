export interface PaymentRecord {
    id: number;
    accountName: string;
    bank: string;
    card: string;
    accountNumber: string;
    bik: string;
    correspondentAccount: string;
};


export const emptyPaymentRecord = {
    accountName: '',
    bank: '',
    card: '',
    accountNumber: '',
    bik: '',
    correspondentAccount: ''
}; 


export const mockRecords: PaymentRecord[] = [
    {
        id: 1,
        accountName: 'Сбербанк 0012',
        bank: 'Сбербанк',
        card: '2200 2541 2365 0012',
        accountNumber: '23652147859245000000',
        bik: '512502358',
        correspondentAccount: '00000000125710000000365'
    },
    {
        id: 2,
        accountName: 'Тинькофф Основной',
        bank: 'Тинькофф',
        card: '5536 9144 2365 7841',
        accountNumber: '40817810899514523650',
        bik: '044525974',
        correspondentAccount: '30101810145250000974'
    }
];