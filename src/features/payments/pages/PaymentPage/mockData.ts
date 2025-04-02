import { Customer, Agreement, Additional, Act, Invoice, Check } from './types';

export const customers: Customer[] = [
    { id: 1, name: 'ООО "Ромашка"', subject: 'Юридическое лицо', type: 'LLC' },
    { id: 2, name: 'ИП Иванов', subject: 'Индивидуальный предприниматель', type: 'IE' },
];

export const agreements: Agreement[] = [
    { id: 1, number: 'Д-001/2024', customerId: 1, date: '2024-01-01' },
    { id: 2, number: 'Д-002/2024', customerId: 1, date: '2024-02-01' },
];

export const additionals: Additional[] = [
    { id: 1, number: 'П-001', agreementId: 1, date: '2024-01-15' },
    { id: 2, number: 'П-002', agreementId: 1, date: '2024-02-15' },
];

export const acts: Act[] = [
    {
        id: 1,
        number: 'А-001',
        agreementId: 1,
        additionalId: 1,
        amount: 100000,
        type: 'act',
        date: '2024-01-20',
        workDescription: 'Разработка программного обеспечения',
    },
    {
        id: 2,
        number: 'А-002',
        agreementId: 1,
        additionalId: 2,
        amount: 150000,
        type: 'act',
        date: '2024-02-20',
        workDescription: 'Техническая поддержка',
    },
];

export const invoices: Invoice[] = [
    {
        id: 1,
        number: 'С-001',
        agreementId: 1,
        additionalId: 1,
        amount: 100000,
        type: 'invoice',
        date: '2024-01-20',
        paymentPurpose: 'Оплата за разработку ПО',
    },
    {
        id: 2,
        number: 'С-002',
        agreementId: 2,
        amount: 75000,
        type: 'invoice',
        date: '2024-02-15',
        paymentPurpose: 'Предоплата за консультационные услуги',
    },
];

export const checks: Check[] = [
    {
        id: 1,
        number: 'Ч-001',
        agreementId: 2,
        amount: 50000,
        type: 'check',
        date: '2024-02-05',
        bankDetails: 'ПАО Сбербанк, БИК 044525225',
    },
    {
        id: 2,
        number: 'Ч-002',
        agreementId: 1,
        additionalId: 2,
        amount: 150000,
        type: 'check',
        date: '2024-02-25',
        bankDetails: 'АО Тинькофф Банк, БИК 044525974',
    },
];

export const mockApi = {
    getCustomers: () => Promise.resolve(customers),
    getAgreements: (customerId: number) =>
        Promise.resolve(agreements.filter(a => a.customerId === customerId)),
    getAdditionals: (agreementId: number) =>
        Promise.resolve(additionals.filter(a => a.agreementId === agreementId)),
    getActs: (agreementId: number, additionalId?: number) =>
        Promise.resolve(acts.filter(a =>
            a.agreementId === agreementId &&
            (additionalId ? a.additionalId === additionalId : true)
        )),
    getInvoices: (agreementId: number, additionalId?: number) =>
        Promise.resolve(invoices.filter(i =>
            i.agreementId === agreementId &&
            (additionalId ? i.additionalId === additionalId : true)
        )),
    getChecks: (agreementId: number, additionalId?: number) =>
        Promise.resolve(checks.filter(c =>
            c.agreementId === agreementId &&
            (additionalId ? c.additionalId === additionalId : true)
        )),
};