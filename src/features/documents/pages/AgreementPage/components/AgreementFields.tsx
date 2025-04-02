import { FC } from "react";
import { Box, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { styles } from "../AgreementPage.styles";
import { AgreementFormData } from "../types";

interface AgreementFieldsProps {
    formData: AgreementFormData;
    onFieldChange: (field: keyof AgreementFormData) =>
        (event: React.ChangeEvent<HTMLInputElement>) => void;
    onDateChange: (field: 'startDate' | 'endDate') =>
        (date: Date | null) => void;
}

const AgreementFields: FC<AgreementFieldsProps> = ({
    formData,
    onFieldChange,
    onDateChange
}) => {
    return (
        <>
            <Box sx={styles.row}>
                <TextField
                    label="Название договора"
                    variant="standard"
                    fullWidth
                    sx={styles.field}
                    value={formData.title}
                    onChange={onFieldChange('title')}
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
                    label="Дата начала договора"
                    sx={styles.borderField}
                    value={formData.startDate}
                    onChange={onDateChange('startDate')}
                />
                <DatePicker
                    label="Дата окончания договора"
                    sx={styles.borderField}
                    value={formData.endDate}
                    onChange={onDateChange('endDate')}
                />
            </Box>

            <Box sx={styles.row}>
                <TextField
                    label="Выбрать шаблон"
                    variant="standard"
                    select
                    fullWidth
                    sx={styles.field}
                    value={formData.template}
                    onChange={onFieldChange('template')}
                >
                    {/* Здесь можно добавить опции для выбора */}
                </TextField>
                <TextField
                    label="Выбрать реквизиты"
                    variant="standard"
                    select
                    fullWidth
                    sx={styles.field}
                    value={formData.requisites}
                    onChange={onFieldChange('requisites')}
                >
                    {/* Здесь можно добавить опции для выбора */}
                </TextField>
                <TextField
                    label="Сумма сделки"
                    type="number"
                    fullWidth
                    sx={styles.borderField}
                    value={formData.amount}
                    onChange={onFieldChange('amount')}
                />
            </Box>
        </>
    );
};

export default AgreementFields;