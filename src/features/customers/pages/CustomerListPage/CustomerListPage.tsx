import { FC } from 'react';

import { useTableData } from '../../../common/hooks/useTableData.ts';
import CustomerTable from './components/CustomerTable.tsx';


const mockAdditional = [
    {
        id: 1,
        number: 1,
        name: 'ООО дыра в ноге',
        subject: 'OOO',
        contacts: 'tg.me',
        date: '2024-11-12',
    },
    {
        id: 2,
        number: 2,
        name: 'ИП любятово',
        subject: 'ИП',
        contacts: 'tg.me/lubatovo',
        date: '2024-11-12',
    },
];


const CustomerListPage: FC = () => {
    const { data, isLoading, refetch } = useTableData({
        // fetchData: () => console.log('Aboba'),
        mockData: mockAdditional
    });

    return (
        <CustomerTable data={data}/>
    );
};

export default CustomerListPage; 