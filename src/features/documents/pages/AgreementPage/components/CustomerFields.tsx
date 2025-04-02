import { FC } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { styles } from "../AgreementPage.styles";
import { AgreementFormData } from "../types";

interface CustomerFieldsProps {
    formData: AgreementFormData;
    onFieldChange: (field: keyof AgreementFormData) =>
        (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomerFields: FC<CustomerFieldsProps> = ({
    formData,
    onFieldChange
}) => {
    return (
        <Box sx={styles.customerInfo}>
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
                >
                    {/* Здесь можно добавить опции для выбора */}
                </TextField>
            </Box>
        </Box>
    );
};

export default CustomerFields;