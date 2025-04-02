import { FC } from 'react';

import TableFormLayout from '../../components/TableFormLayout/TableFormLayout.tsx';
import { useTableData } from '../../../common/hooks/useTableData.ts';
import CheckTable from './components/CheckTable.tsx';
import CheckForm from './components/CheckForm.tsx';


const mockAdditional = [
    {
        id: 1,
        name: 'Чек №14',
        number: '№1234',
        startDate: '2023-12-31',
        amount: 300000,
    },
    {
        id: 2,
        name: 'Undefined',
        number: '№23423432',
        startDate: '2023-12-31',
        amount: 8400,
    },
    {
        id: 3,
        name: 'Приложение разработки',
        number: '№3423',
        startDate: '2023-12-31',
        amount: 13000,
    },
];


const CheckPage: FC = () => {
    const { data, isLoading, refetch } = useTableData({
        // fetchData: () => console.log('Aboba'),
        mockData: mockAdditional
    });

    console.log(data)

    return (
        <TableFormLayout
            TableComponent={CheckTable}
            FormComponent={CheckForm}
            tableData={data}
            isLoading={isLoading}
        />
    );
};

export default CheckPage; 