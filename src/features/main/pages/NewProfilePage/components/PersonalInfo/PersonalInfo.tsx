import { FC } from "react";
import { Box, TextField } from "@mui/material";
import { styles } from "./PersonalInfo.styles.ts";

const PersonalInfo: FC = () => {
    return (
        <>
            <Box sx={styles.formSubtitle}>Заполните ваши данные</Box>
            
            <Box sx={styles.inputGroup}>
                <TextField
                    label="Фамилия"
                    variant="standard"
                    fullWidth
                />
                <TextField
                    label="Имя"
                    variant="standard"
                    fullWidth
                />
                <TextField
                    label="Отчество"
                    variant="standard"
                    fullWidth
                />
            </Box>

            <Box sx={styles.inputGroup}>
                <TextField
                    label="Логин"
                    variant="standard"
                    fullWidth
                />
                <TextField
                    label="E-mail"
                    variant="standard"
                    defaultValue="r.login@gmail.com"
                    fullWidth
                />
                <TextField
                    label="Телефон"
                    variant="standard"
                    fullWidth
                />
            </Box>
        </>
    );
};

export default PersonalInfo;