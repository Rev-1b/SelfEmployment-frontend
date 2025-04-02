import { FC } from 'react';

import TableFormLayout from '../../components/TableFormLayout/TableFormLayout.tsx';
import { useTableData } from '../../../common/hooks/useTableData.ts';
import InvoiceTable from './components/InvoiceTable.tsx';
import InvoiceForm from './components/InvoiceForm.tsx';


const mockAdditional = [
    {
        id: 1,
        name: 'Счет от толи',
        number: '№1234',
        startDate: '2023-12-31',
        amount: 266,
        status: 'Создан',
    },
    {
        id: 2,
        name: 'Обостарт',
        number: '№23423432',
        startDate: '2023-12-31',
        amount: 266,
        status: 'Отклонен',
    },
];


const InvoicePage: FC = () => {
    const { data, isLoading, refetch } = useTableData({
        // fetchData: () => console.log('Aboba'),
        mockData: mockAdditional
    });

    console.log(data)

    return (
        <TableFormLayout
            TableComponent={InvoiceTable}
            FormComponent={InvoiceForm}
            tableData={data}
            isLoading={isLoading}
        />
    );
};

export default InvoicePage; 