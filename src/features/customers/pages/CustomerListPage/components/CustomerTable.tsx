import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, IconButton } from '@mui/material';
import CommonTable from '../../../../common/components/CommonTable/CommonTable.tsx';
import ActionsMenu from '../../../../common/components/ActionsMenu/ActionsMenu.tsx';
import { styles } from '../CustomerListPage.styles.ts'
import SpreadIcon from '../../../../../assets/tableImages/spreadIcon.svg'


const columnNames = [
    '№',
    'Наименование',
    'Субъект',
    'Контакты',
    'Дата',
    <IconButton size="small" onClick={() => console.log('filtration complete')}>
        <img src={SpreadIcon} alt="edit" />
    </IconButton>,
];

interface CustomerTableProps {
    data: Array<{
        id: number;
        number: number;
        name: string;
        subject: string;
        contacts: string;
        date: string;
    }>;
}

const CustomerTable: FC<CustomerTableProps> = ({ data }) => {
    const navigate = useNavigate();

    if (data.length === 0) {
        return null;
    }

    const handleCreateClick = () => {
        navigate('/customers/create');
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
                gridTemplateColumns='0.5fr 3fr repeat(3, 1fr) 0.5fr'
            />
        </Box>

    );
};

export default CustomerTable; 