export enum CustomerType {
    COMMON = 'COMMON',
    LLC = 'LLC',
    IE = 'IE'
};

export interface CommonCustomerFormData {
    fio: string,
    address: string,
    inn: string,
    contacts: string, 
    // Pasport data
    series: number,
    number: number, 
    releasedBy: string,
    releaseDate: Date | null,
    unitCode: string,
};

export interface IECustomerFormData {
    enterprizeName: string,
    ceo: string,
    legalAddress: string,
    contacts: string, 
    // Pasport data
    inn: string,
    ogrnip: string, 
};

export interface LLCCustomerFormData {
    enterprizeName: string,
    legalAddress: string,
    currentAddress: string,
    contacts: string, 
    // Pasport data
    inn: string,
    kpp: string,
    ogrn: string,
    okved: string,
    okpo: string,
    okato: string, 
};

