import { FC } from "react";
import { styles } from './AgreementListPage.styles.ts'
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import CommonTable from "../../../common/components/CommonTable/CommonTable.tsx";

const mockDocuments = [
    {
        id: 1,
        name: "Документ 1",
        number: "12345",
        startDate: "2023-01-01",
        endDate: "2023-12-31",
        customer: "Клиент 1",
        act: "1",
        invoice: "0",
        check: "3",
        status: "Активен",
    },
    {
        id: 2,
        name: "Документ 2",
        number: "67890",
        startDate: "2023-02-01",
        endDate: "2023-11-30",
        customer: "Клиент 2",
        act: "1",
        invoice: "2",
        check: "2",
        status: "Завершен",
    },
    {
        id: 3,
        name: "Документ 3",
        number: "54321",
        startDate: "2023-03-01",
        endDate: "2023-10-31",
        customer: "Клиент 3",
        act: "3",
        invoice: "3",
        check: "3",
        status: "В процессе",
    },
];

const columnNames = [
    'Наименование',
    'Номер договора',
    'Дата начала',
    'Дата окончания',
    'Заказчик',
    'Акт',
    'Счет',
    'Чек',
    'Статус',
    ' + '
]


const AgreementListPage: FC = () => {
    const navigate = useNavigate()

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={styles.addButton} onClick={() => navigate('/documents/agreements/create')}>
                +
                <Box sx={{ borderBottom: '1px solid' }}>Создать</Box>
            </Box>
            <CommonTable
                columnNames={columnNames}
                tableData={mockDocuments}
                gridTemplateColumns='1.5fr repeat(3, 1fr) 1.5fr repeat(3, 0.4fr) 1fr 0.3fr'
            />

        </Box>
    );
};

export default AgreementListPage;