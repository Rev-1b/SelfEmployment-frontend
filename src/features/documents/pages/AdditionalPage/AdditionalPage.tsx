import { FC } from 'react';

import TableFormLayout from '../../components/TableFormLayout/TableFormLayout.tsx';
import { useTableData } from '../../../common/hooks/useTableData.ts';
import AdditionalTable from './components/AdditionalTable';
import AdditionalForm from './components/AdditionalForm';


const mockAdditional = [
    {
        id: 1,
        name: 'Приложение к договору №14',
        number: '№1234',
        startDate: '2023-12-31',
        status: 'Создан',
    },
    {
        id: 2,
        name: 'Undefined',
        number: '№23423432',
        startDate: '2023-12-31',
        status: 'Отклонен',
    },
    {
        id: 3,
        name: 'Приложение разработки',
        number: '№3423',
        startDate: '2023-12-31',
        status: 'Закрыт',
    },
];


const AdditionalPage: FC = () => {
    const { data, isLoading, refetch } = useTableData({
        // fetchData: () => console.log('Aboba'),
        mockData: mockAdditional
    });

    return (
        <TableFormLayout
            TableComponent={AdditionalTable}
            FormComponent={AdditionalForm}
            tableData={data}
            isLoading={isLoading}
        />
    );
};

export default AdditionalPage; 