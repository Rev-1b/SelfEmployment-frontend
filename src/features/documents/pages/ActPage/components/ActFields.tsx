import { FC } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ActFormData } from "../types.ts";
import { styles } from '../ActPage.styles.ts'


interface ActFieldsProps {
    formData: ActFormData;
    onFieldChange: (field: keyof ActFormData) =>
        (event: React.ChangeEvent<HTMLInputElement>) => void;
    onDateChange: (field: 'startDate') =>
        (date: Date | null) => void;
}


const ActFields: FC<ActFieldsProps> = ({
    formData,
    onFieldChange,
    onDateChange
}) => {
    return (
        <>
            <Box sx={styles.fieldsInfo}>
                <Typography sx={{ fontSize: '20px' }}>
                    Добавить акт
                </Typography>
                <Box sx={styles.row}>
                    <TextField
                        label="Акт к"
                        variant="standard"
                        select
                        fullWidth
                        sx={styles.field}
                        value={formData.parent}
                        onChange={onFieldChange('parent')}
                    />
                    <TextField
                        label="Наименование"
                        variant="standard"
                        fullWidth
                        sx={styles.field}
                        value={formData.number}
                        onChange={onFieldChange('number')}
                    />
                    <TextField
                        label="Номер акта"
                        variant="standard"
                        fullWidth
                        sx={styles.field}
                        value={formData.number}
                        onChange={onFieldChange('number')}
                    />
                    <DatePicker
                        label="Дата начала"
                        sx={styles.borderField}
                        value={formData.startDate}
                        onChange={onDateChange('startDate')}
                    />
                </Box>
                <Box sx={styles.row}>
                    <TextField
                        label="Шаблон"
                        variant="standard"
                        select
                        fullWidth
                        sx={styles.field}
                        value={formData.template}
                        onChange={onFieldChange('template')}
                    />
                </Box>
            </Box>
            <Box sx={styles.fieldsInfo}>
                <Typography sx={{ fontSize: '20px' }}>
                    Данные заказчика
                </Typography>
                <Box sx={styles.row}>
                    <TextField
                        label="Заказчик"
                        variant="standard"
                        select
                        fullWidth
                        sx={styles.field}
                        value={formData.customer}
                        onChange={onFieldChange('customer')}
                    >
                        {/* Здесь можно добавить опции для выбора */}
                    </TextField>
                </Box>
            </Box>
        </>
    );
};

export default ActFields;