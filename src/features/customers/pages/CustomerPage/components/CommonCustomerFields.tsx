import { FC } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { CommonCustomerFormData } from "../types.ts";
import { styles } from '../CustomerPage.styles.ts'


interface CommonCustomerFieldsProps {
    formData: CommonCustomerFormData;
    onFieldChange: (field: keyof CommonCustomerFormData) =>
        (event: React.ChangeEvent<HTMLInputElement>) => void;
    onDateChange: (field: 'releaseDate') =>
        (date: Date | null) => void;
}


const CommonCustomerFields: FC<CommonCustomerFieldsProps> = ({
    formData,
    onFieldChange,
    onDateChange
}) => {
    return (
        <>
            <Box sx={styles.row}>
                <TextField
                    label="ФИО"
                    variant="standard"
                    fullWidth
                    sx={styles.field}
                    value={formData.fio}
                    onChange={onFieldChange('fio')}
                />
                <TextField
                    label="Адрес регистрации"
                    variant="standard"
                    fullWidth
                    sx={styles.field}
                    value={formData.address}
                    onChange={onFieldChange('address')}
                />
                <TextField
                    label="ИНН"
                    variant="standard"
                    fullWidth
                    sx={styles.field}
                    value={formData.inn}
                    onChange={onFieldChange('inn')}
                />
            </Box>
            <Box sx={styles.row}>
                <TextField
                    label="Контакты"
                    variant="standard"
                    fullWidth
                    sx={styles.field}
                    value={formData.contacts}
                    onChange={onFieldChange('contacts')}
                />
            </Box>
            <Typography sx={{ fontSize: '20px' }}>
                Паспортные данные
            </Typography>
            <Box sx={styles.row}>
                <TextField
                    label="Серия"
                    sx={styles.borderField}
                    value={formData.series}
                    onChange={onFieldChange('series')}
                />
                <TextField
                    label="Номер"
                    sx={styles.borderField}
                    value={formData.number}
                    onChange={onFieldChange('number')}
                />
                <TextField
                    label="Выдан"
                    sx={styles.borderField}
                    value={formData.releasedBy}
                    onChange={onFieldChange('releasedBy')}
                />
                <DatePicker
                    label="Дата выдачи"
                    sx={styles.borderField}
                    value={formData.releaseDate}
                    onChange={onDateChange('releaseDate')}
                />
                <TextField
                    label="Код подразделения"
                    sx={styles.borderField}
                    value={formData.unitCode}
                    onChange={onFieldChange('unitCode')}
                />
            </Box>
        </>
    );
};

export default CommonCustomerFields;