import { FC } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LLCCustomerFormData } from "../types.ts";
import { styles } from '../CustomerPage.styles.ts'


interface LLCCustomerFieldsProps {
    formData: LLCCustomerFormData;
    onFieldChange: (field: keyof LLCCustomerFormData) =>
        (event: React.ChangeEvent<HTMLInputElement>) => void;
}


const CommonCustomerFields: FC<LLCCustomerFieldsProps> = ({
    formData,
    onFieldChange
}) => {
    return (
        <>
            <Box sx={styles.row}>
                <TextField
                    label="Название предприятия"
                    variant="standard"
                    fullWidth
                    sx={styles.field}
                    value={formData.enterprizeName}
                    onChange={onFieldChange('enterprizeName')}
                />
                <TextField
                    label="Юридический Адрес"
                    variant="standard"
                    fullWidth
                    sx={styles.field}
                    value={formData.legalAddress}
                    onChange={onFieldChange('legalAddress')}
                />
            </Box>
            <Box sx={styles.row}>
                <TextField
                    label="Фактический Адрес"
                    variant="standard"
                    fullWidth
                    sx={styles.field}
                    value={formData.currentAddress}
                    onChange={onFieldChange('currentAddress')}
                />
                <TextField
                    label="Контакты"
                    variant="standard"
                    fullWidth
                    sx={styles.field}
                    value={formData.contacts}
                    onChange={onFieldChange('contacts')}
                />
            </Box>
            <Box sx={styles.row}>
                <TextField
                    label="ИНН"
                    variant="standard"
                    sx={styles.field}
                    value={formData.inn}
                    onChange={onFieldChange('inn')}
                />
                <TextField
                    label="КПП"
                    variant="standard"
                    sx={styles.field}
                    value={formData.kpp}
                    onChange={onFieldChange('kpp')}
                />
                <TextField
                    label="ОРГН"
                    variant="standard"
                    sx={styles.field}
                    value={formData.ogrn}
                    onChange={onFieldChange('ogrn')}
                />
                <TextField
                    label="ОКВЭД"
                    variant="standard"
                    sx={styles.field}
                    value={formData.okved}
                    onChange={onFieldChange('okved')}
                />
                <TextField
                    label="ОКПО"
                    variant="standard"
                    sx={styles.field}
                    value={formData.okpo}
                    onChange={onFieldChange('okpo')}
                />
            </Box>
            <Box sx={styles.row}>
            <TextField
                    label="ОКАТО"
                    variant="standard"
                    sx={styles.field}
                    value={formData.okato}
                    onChange={onFieldChange('okato')}
                />
            </Box>
        </>
    );
};

export default CommonCustomerFields;