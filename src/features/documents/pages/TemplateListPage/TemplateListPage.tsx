import { FC } from 'react';

import { useTableData } from '../../../common/hooks/useTableData.ts';
import TemplateTable from './components/TemplateTable.tsx';


const mockAdditional = [
    {
        id: 1,
        name: 'Шаблон стандартного договора',
        templateType: 'Договор',
    },
    {
        id: 2,
        name: 'Шаблон акта приема работ',
        templateType: 'Акт',
    },
];


const TemplateListPage: FC = () => {
    const { data, isLoading, refetch } = useTableData({
        // fetchData: () => console.log('Aboba'),
        mockData: mockAdditional
    });

    return (
        <TemplateTable data={data} />
    );
};

export default TemplateListPage; 