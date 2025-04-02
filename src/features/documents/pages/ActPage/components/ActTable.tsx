import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import CommonTable from '../../../../common/components/CommonTable/CommonTable.tsx';
import { styles } from '../ActPage.styles.ts'
import ActionsMenu from '../../../../common/components/ActionsMenu/ActionsMenu.tsx';

const columnNames = [
    'Наименование',
    'Номер акта',
    'Дата создания',
    'Статус',
    ' + ',
];

interface ActTableProps {
    data: Array<{
        id: number;
        name: string;
        number: string;
        startDate: string;
        status: string;
    }>;
}

const ActTable: FC<ActTableProps> = ({ data }) => {
    const navigate = useNavigate();

    if (data.length === 0) {
        return null;
    }

    const handleCreateClick = () => {
        navigate('/documents/agreements/act/create');
    };

    const handleEditClick = (id: number) => {
        navigate(`${id}`);
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
                gridTemplateColumns='repeat(4, 1fr) 0.3fr'
            />
        </Box>
    );
};

export default ActTable; 