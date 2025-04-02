import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, IconButton } from '@mui/material';
import CommonTable from '../../../../common/components/CommonTable/CommonTable.tsx';
import ActionsMenu from '../../../../common/components/ActionsMenu/ActionsMenu.tsx';
import { styles } from '../PaymentListPage.styles.ts'
import SpreadIcon from '../../../../../assets/tableImages/spreadIcon.svg'


const columnNames = [
    '№',
    'Заказчик',
    'Договор',
    'Акт',
    'Сумма платежа',
    'Статус',
    'Дата изменения',
    <IconButton size="small" onClick={() => console.log('filtration complete')}>
        <img src={SpreadIcon} alt="edit" />
    </IconButton>,
];

interface PaymentTableProps {
    data: Array<{
        id: number;
        number: number;
        customer: string;
        agreement: string;
        act: string;
        paymentAmount: string;
        status: string;
        updatedAt: string;
    }>;
}

const PaymentTable: FC<PaymentTableProps> = ({ data }) => {
    const navigate = useNavigate();

    const handleCreateClick = () => {
        navigate('/payments/create');
    };

    const handleEditClick = (id: number) => {
        navigate(`${id}`);
    };

    const handleDeleteClick = (id: number) => {
        // Логика удаления
    };

    // Подготавливаем данные с компонентом действий
    const tableData = data.map(record => ({
        ...record,
        actions: <ActionsMenu recordId={record.id} />
    }));

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box
                sx={styles.addButton}
                onClick={handleCreateClick}
            >
                +
                <Box sx={{ borderBottom: '1px solid' }}>Создать</Box>
            </Box>
            <CommonTable
                columnNames={columnNames}
                tableData={tableData}
                gridTemplateColumns='0.5fr 2fr 1.5fr repeat(4, 1fr) 0.5fr'
            />
        </Box>

    );
};

export default PaymentTable; 