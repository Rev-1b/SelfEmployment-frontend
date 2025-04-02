import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, IconButton } from '@mui/material';
import CommonTable from '../../../../common/components/CommonTable/CommonTable.tsx';
import { styles } from '../TemplateListPage.styles.ts'
import EditIcon from '../../../../../assets/tableImages/updateIcon.svg'
import CopyIcon from '../../../../../assets/tableImages/copyIcon.svg';
import DeleteIcon from '../../../../../assets/tableImages/deleteIcon.svg';

const columnNames = [
    'Наименование',
    'Тип шаблона',
    '',
    '',
    '+',
];

interface TemplateTableProps {
    data: Array<{
        id: number;
        name: string;
        templateType: string;
    }>;
}

const TemplateTable: FC<TemplateTableProps> = ({ data }) => {
    const navigate = useNavigate();

    if (data.length === 0) {
        return null;
    }

    const handleCreateClick = () => {
        navigate('/documents/templates/create');
    };

    const handleEditClick = (id: number) => {
        navigate(`${id}`);
    };

    const handleCopyClick = (id: number) => {
        // Логика копирования
    };

    const handleDeleteClick = (id: number) => {
        // Логика удаления
    };

    // Подготавливаем данные с компонентом действий
    const tableData = data.map(record => ({
        ...record,
        edit: (
            <IconButton size="small" onClick={() => handleEditClick(record.id)}>
                <img src={EditIcon} alt="edit" />
            </IconButton>
        ),
        copy: (
            <IconButton size="small" onClick={() => handleCopyClick(record.id)}>
                <img src={CopyIcon} alt="copy" />
            </IconButton>
        ),
        delete: (
            <IconButton size="small" onClick={() => handleDeleteClick(record.id)}>
                <img src={DeleteIcon} alt="delete" />
            </IconButton>
        )
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
                gridTemplateColumns='repeat(2, 1fr) repeat(3, 0.3fr)'
            />
        </Box>

    );
};

export default TemplateTable; 