export interface Customer {
    id: number;
    name: string;
    subject: string;
    type: 'LLC' | 'IE' | 'COMMON';
}

export interface Agreement {
    id: number;
    number: string;
    customerId: number;
    date: string;
}

export interface Additional {
    id: number;
    number: string;
    agreementId: number;
    date: string;
}

export interface BaseDocument {
    id: number;
    number: string;
    agreementId: number;
    additionalId?: number;
    amount: number;
    date: string;
}

export interface Act extends BaseDocument {
    type: 'act';
    workDescription: string;
}

export interface Invoice extends BaseDocument {
    type: 'invoice';
    paymentPurpose: string;
}

export interface Check extends BaseDocument {
    type: 'check';
    bankDetails: string;
}

export type Document = Act | Invoice | Check;

export interface PaymentFormData {
    customerId: number | null;
    agreementId: number | null;
    additionalId: number | null;
    actId: number | null;
    invoiceId: number | null;
    checkId: number | null;
    amount: number | null;
};

export interface PaymentFormOptions {
    customers: Customer[];
    agreements: Agreement[];
    additionals: Additional[];
    acts: Act[];
    invoices: Invoice[];
    checks: Check[];
}