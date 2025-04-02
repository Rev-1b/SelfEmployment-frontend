import { FC } from 'react';

import TableFormLayout from '../../components/TableFormLayout/TableFormLayout.tsx';
import { useTableData } from '../../../common/hooks/useTableData.ts';
import ActTable from './components/ActTable.tsx';
import ActForm from './components/ActForm.tsx';


const mockAdditional = [
    {
        id: 1,
        name: 'Акт Aboba',
        number: '№1234',
        startDate: '2023-121-31',
        status: 'Создан',
    },
    {
        id: 2,
        name: '-',
        number: '№23423432',
        startDate: '2023-12-31',
        status: 'Создан',
    },
];


const ActPage: FC = () => {
    const { data, isLoading, refetch } = useTableData({
        // fetchData: () => console.log('Aboba'),
        mockData: mockAdditional
    });

    console.log(data)

    return (
        <TableFormLayout
            TableComponent={ActTable}
            FormComponent={ActForm}
            tableData={data}
            isLoading={isLoading}
        />
    );
};

export default ActPage; 