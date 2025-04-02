import { FC } from 'react';

import { useTableData } from '../../../common/hooks/useTableData.ts';
import HistoryTable from './components/HistoryTable.tsx';


const mockData = [
    {
        id: 1,
        name: 'Договор поставки №123',
        number: 'DOG-2024-001',
        documentType: 'Договор',
        updateDate: '2024-03-15',
        status: 'Подписан',
    },
    {
        id: 2,
        name: 'Акт выполненных работ',
        number: 'ACT-2024-045',
        documentType: 'Акт',
        updateDate: '2024-03-14',
        status: 'На согласовании',
    },
    {
        id: 3,
        name: 'Дополнительное соглашение №1',
        number: 'DOP-2024-012',
        documentType: 'Дополнительное соглашение',
        updateDate: '2024-03-13',
        status: 'Черновик',
    },
    {
        id: 4,
        name: 'Договор аренды помещения',
        number: 'DOG-2024-089',
        documentType: 'Договор',
        updateDate: '2024-03-12',
        status: 'Отклонен',
    },
    {
        id: 5,
        name: 'Акт сверки',
        number: 'ACT-2024-102',
        documentType: 'Акт',
        updateDate: '2024-03-11',
        status: 'Подписан',
    },
    {
        id: 6,
        name: 'Дополнительное соглашение №2',
        number: 'DOP-2024-013',
        documentType: 'Дополнительное соглашение',
        updateDate: '2024-03-10',
        status: 'На согласовании',
    },
    {
        id: 7,
        name: 'Договор оказания услуг',
        number: 'DOG-2024-156',
        documentType: 'Договор',
        updateDate: '2024-03-09',
        status: 'Черновик',
    },
    {
        id: 8,
        name: 'Акт приема-передачи',
        number: 'ACT-2024-178',
        documentType: 'Акт',
        updateDate: '2024-03-08',
        status: 'Подписан',
    }
];


const HistoryPage: FC = () => {
    const { data, isLoading, refetch } = useTableData({
        // fetchData: () => console.log('Aboba'),
        mockData: mockData
    });

    return (
        <HistoryTable data={data} />
    );
};

export default HistoryPage; 