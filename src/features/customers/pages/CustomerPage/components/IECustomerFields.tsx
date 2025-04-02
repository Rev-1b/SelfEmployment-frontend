import { FC } from "react";
import { Box, TextField } from "@mui/material";
import { IECustomerFormData } from "../types.ts";
import { styles } from '../CustomerPage.styles.ts'


interface IECustomerFieldsProps {
    formData: IECustomerFormData;
    onFieldChange: (field: keyof IECustomerFormData) =>
        (event: React.ChangeEvent<HTMLInputElement>) => void;
}


const CommonCustomerFields: FC<IECustomerFieldsProps> = ({
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
                    label="Директор"
                    variant="standard"
                    fullWidth
                    sx={styles.field}
                    value={formData.ceo}
                    onChange={onFieldChange('ceo')}
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
                    label="Контакты"
                    variant="standard"
                    fullWidth
                    sx={styles.field}
                    value={formData.contacts}
                    onChange={onFieldChange('contacts')}
                />
                <TextField
                    label="ИНН"
                    variant="standard"
                    fullWidth
                    sx={styles.field}
                    value={formData.inn}
                    onChange={onFieldChange('inn')}
                />
                <TextField
                    label="ОГРНИП"
                    variant="standard"
                    fullWidth
                    sx={styles.field}
                    value={formData.ogrnip}
                    onChange={onFieldChange('ogrnip')}
                />
            </Box>
        </>
    );
};

export default CommonCustomerFields;