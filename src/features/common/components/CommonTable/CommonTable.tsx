import { FC, ReactNode } from "react";
import { Box, IconButton } from '@mui/material'
import { styles } from './CommonTable.styles';

// Интерфейс для данных таблицы
interface TableData {
    id: string | number; // уникальный идентификатор для key в map
    [key: string]: any; // допускаем любые поля в данных
}

interface CommonTableProps {
    // Массив заголовков столбцов (может быть строкой или React компонентом)
    columnNames: (string | ReactNode)[];
    // Данные таблицы
    tableData: TableData[];
    // CSS grid-template-columns для настройки ширины столбцов
    gridTemplateColumns: string;
}

const CommonTable: FC<CommonTableProps> = ({
    columnNames,
    tableData,
    gridTemplateColumns
}) => {
    // Создаем общие стили для сетки, которые будут использоваться и в header, и в строках
    const gridStyles = {
        display: 'grid',
        gridTemplateColumns: {gridTemplateColumns}, //Проблемное место, нужно передавать не объект а строку
        gap: '8px',
        padding: '12px',
        alignItems: 'center',
    };

    return (
        <>
            <Box sx={styles.table}>
                <Box sx={{
                    ...styles.tableHeader,
                    ...gridStyles
                }}>
                    {columnNames.map((columnName, index) => (
                        <Box
                            key={index}
                            component={'span'}
                        >
                            {columnName}
                        </Box>
                    ))}
                </Box>

                {tableData.map((record, rowIndex) => (
                    <Box
                        key={record.id}
                        sx={{
                            ...styles.tableRow,
                            ...gridStyles,
                            backgroundColor: rowIndex % 2 === 1 ? '#fff' : '#F8F8F8',
                        }}
                    >
                        {/* Преобразуем объект записи в массив значений, исключая id */}
                        {Object.entries(record)
                            .filter(([key]) => key !== 'id')
                            .map(([_, value], cellIndex) => (
                                <Box
                                    key={cellIndex}
                                    component={'span'}
                                >
                                    {value}
                                </Box>
                            ))}
                    </Box>
                ))}
            </Box>
        </>
    );
};

export default CommonTable;