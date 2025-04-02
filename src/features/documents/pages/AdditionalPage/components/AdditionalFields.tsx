import { FC } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdditionalFormData } from "../types.ts";
import { styles } from '../AdditionalPage.styles.ts'


interface AdditionalFieldsProps {
    formData: AdditionalFormData;
    onFieldChange: (field: keyof AdditionalFormData) =>
        (event: React.ChangeEvent<HTMLInputElement>) => void;
    onDateChange: (field: 'startDate') =>
        (date: Date | null) => void;
}


const AdditionalFields: FC<AdditionalFieldsProps> = ({
    formData,
    onFieldChange,
    onDateChange
}) => {
    return (
        <>
            <Typography sx={{ fontSize: '20px' }}>
                Добавить дополнение к договору
            </Typography>
            <Box sx={styles.row}>
                <TextField
                    label="Приложение к договору"
                    variant="standard"
                    select
                    fullWidth
                    sx={styles.field}
                    value={formData.agreement}
                    onChange={onFieldChange('agreement')}
                />
                <TextField
                    label="Номер договора"
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
                <TextField
                    label="Сумма сделки"
                    sx={styles.borderField}
                    value={formData.amount}
                    onChange={onFieldChange('amount')}
                />
            </Box>
        </>
    );
};

export default AdditionalFields;