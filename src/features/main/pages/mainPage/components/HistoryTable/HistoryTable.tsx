import { Box } from "@mui/material";
import { FC } from "react";
import { styles } from './HistoryTable.styles.ts'

import CommonTable from "../../../../components/CommonTable/CommonTable.tsx";

const mockDocuments = [
    { id: 1, name: 'Договор с ИП', number: '23541', type: 'Договор', date: '25.06.2024' },
    { id: 2, name: 'Чек за окна', number: '13456f4hhf3', type: 'Чек', date: '13.05.2024' },
    { id: 3, name: 'Счет за оплату на Паркинг', number: '22563', type: 'Счет', date: '12.05.2024' },
].sort((a, b) => {
    const dateA = new Date(a.date.split('.').reverse().join('-'));
    const dateB = new Date(b.date.split('.').reverse().join('-'));
    return dateB.getTime() - dateA.getTime();
}).slice(0, 3);

const columnNames = [
    'Наименование',
    'Номер',
    'Тип',
    'Дата изменения',
]

const HistoryTable: FC = () => {
    return (
        <CommonTable
            columnNames={columnNames}
            tableData={mockDocuments}
            gridTemplateColumns="1.1fr 1.1fr 0.8fr 0.8fr"
        />
    )
};

export default HistoryTable;