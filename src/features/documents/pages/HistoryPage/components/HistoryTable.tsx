import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, IconButton, Typography } from '@mui/material';
import CommonTable from '../../../../common/components/CommonTable/CommonTable.tsx';
import ActionsMenu from '../../../../common/components/ActionsMenu/ActionsMenu.tsx';
import SpreadIcon from '../../../../../assets/tableImages/spreadIcon.svg'

const columnNames = [
    'Наименование',
    'Номер документа',
    'Тип',
    'Дата изменения',
    'Статус',
    <IconButton size="small" onClick={() => console.log('filtration complete')}>
        <img src={SpreadIcon} alt="edit" />
    </IconButton>
];

interface HistoryTableProps {
    data: Array<{
        id: number;
        name: string;
        number: string;
        documentType: string;
        updateDate: string;
        status: string;
    }>;
}

const HistoryTable: FC<HistoryTableProps> = ({ data }) => {
    const navigate = useNavigate();

    if (data.length === 0) {
        return null;
    }

    // Подготавливаем данные с компонентом действий
    const tableData = data.map(record => ({
        ...record,
        actions: <ActionsMenu recordId={record.id} />
    }));

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Typography sx={{ fontSize: '20px' }}>
                Показаны последние {data.length} записей
            </Typography>
            <CommonTable
                columnNames={columnNames}
                tableData={tableData}
                gridTemplateColumns='repeat(5, 1fr) 0.3fr'
            />
        </Box>

    );
};

export default HistoryTable; 