import { FC } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { CheckFormData } from "../types.ts";
import { styles } from '../CheckPage.styles.ts'


interface CheckFieldsProps {
    formData: CheckFormData;
    onFieldChange: (field: keyof CheckFormData) =>
        (event: React.ChangeEvent<HTMLInputElement>) => void;
    onDateChange: (field: 'startDate') =>
        (date: Date | null) => void;
}


const CheckFields: FC<CheckFieldsProps> = ({
    formData,
    onFieldChange,
    onDateChange
}) => {
    return (
        <>
            <Box sx={styles.fieldsInfo}>
                <Typography sx={{ fontSize: '20px' }}>
                    Добавить чек
                </Typography>
                <Box sx={styles.row}>
                    <TextField
                        label="Чек к"
                        variant="standard"
                        select
                        fullWidth
                        sx={styles.field}
                        value={formData.parent}
                        onChange={onFieldChange('parent')}
                    />
                    <TextField
                        label="Название чека"
                        variant="standard"
                        fullWidth
                        sx={styles.field}
                        value={formData.name}
                        onChange={onFieldChange('name')}
                    />
                    <TextField
                        label="Номер чека"
                        variant="standard"
                        fullWidth
                        sx={styles.field}
                        value={formData.number}
                        onChange={onFieldChange('number')}
                    />
                </Box>
                <Box sx={styles.row}>
                    <TextField
                        label="Прикрепить файл"
                        variant="standard"
                        select
                        fullWidth
                        sx={styles.field}
                        value={formData.addFile}
                        onChange={onFieldChange('addFile')}
                    />
                    <TextField
                        label="Сумма сделки"
                        type="number"
                        fullWidth
                        sx={styles.borderField}
                        value={formData.amount}
                        onChange={onFieldChange('amount')}
                    />
                    <DatePicker
                        label="Дата начала"
                        sx={styles.borderField}
                        value={formData.startDate}
                        onChange={onDateChange('startDate')}
                    />
                </Box>
            </Box>
        </>
    );
};

export default CheckFields;