import { FC } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { InvoiceFormData } from "../types.ts";
import { styles } from '../InvoicePage.styles.ts'


interface InvoiceFieldsProps {
    formData: InvoiceFormData;
    onFieldChange: (field: keyof InvoiceFormData) =>
        (event: React.ChangeEvent<HTMLInputElement>) => void;
    onDateChange: (field: 'startDate') =>
        (date: Date | null) => void;
}


const InvoiceFields: FC<InvoiceFieldsProps> = ({
    formData,
    onFieldChange,
    onDateChange
}) => {
    return (
        <>
            <Box sx={styles.fieldsInfo}>
                <Typography sx={{ fontSize: '20px' }}>
                    Добавить Счет
                </Typography>
                <Box sx={styles.row}>
                    <TextField
                        label="Счет к"
                        variant="standard"
                        select
                        fullWidth
                        sx={styles.field}
                        value={formData.parent}
                        onChange={onFieldChange('parent')}
                    />
                    <TextField
                        label="Название"
                        variant="standard"
                        fullWidth
                        sx={styles.field}
                        value={formData.name}
                        onChange={onFieldChange('name')}
                    />
                    <TextField
                        label="Номер счета"
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
                    <TextField
                        label="Реквизиты пользователя"
                        variant="standard"
                        select
                        fullWidth
                        sx={styles.field}
                        value={formData.userRequisites}
                        onChange={onFieldChange('userRequisites')}
                    />
                    <TextField
                        label="Сумма сделки"
                        type="number"
                        fullWidth
                        sx={styles.borderField}
                        value={formData.amount}
                        onChange={onFieldChange('amount')}
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
                    <TextField
                        label="Реквизиты заказчика"
                        variant="standard"
                        select
                        fullWidth
                        sx={styles.field}
                        value={formData.customerRequisites}
                        onChange={onFieldChange('customerRequisites')}
                    />
                </Box>
            </Box>
        </>
    );
};

export default InvoiceFields;