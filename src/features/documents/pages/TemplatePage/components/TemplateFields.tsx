import { FC } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { TemplateFormData } from "../types.ts";
import { styles } from '../TemplatePage.styles.ts'


interface TemplateFieldsProps {
    formData: TemplateFormData;
    onFieldChange: (field: keyof TemplateFormData) =>
        (event: React.ChangeEvent<HTMLInputElement>) => void;
};


const TemplateFields: FC<TemplateFieldsProps> = ({
    formData,
    onFieldChange,
}) => {
    return (
        <>
            <Box sx={styles.fieldsInfo}>
                <Typography sx={{ fontSize: '20px' }}>
                    Создать шаблон
                </Typography>
                <Box sx={styles.row}>
                    <TextField
                        label="Наименование"
                        variant="standard"
                        select
                        fullWidth
                        sx={styles.field}
                        value={formData.name}
                        onChange={onFieldChange('name')}
                    />
                    <TextField
                        label="Тип шаблона"
                        variant="standard"
                        select
                        fullWidth
                        sx={styles.field}
                        value={formData.templateType}
                        onChange={onFieldChange('templateType')}
                    />
                </Box>
            </Box>
        </>
    );
};

export default TemplateFields;