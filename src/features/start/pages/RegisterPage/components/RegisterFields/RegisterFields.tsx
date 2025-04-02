import { FC } from 'react';
import { TextField, Box } from "@mui/material";
import { commonStyles } from '../../../../common/mui/LeftSideCommon.ts';


type RegisterFieldsProps = {
    emailError: string,
    usernameError: string,
    passwordError: string,
};


const RegisterFields: FC<RegisterFieldsProps> = ({
    emailError,
    usernameError,
    passwordError
}) => {
    return (
        <Box sx={commonStyles.inputFields}>
            <TextField
                name="email"
                label="E-mail"
                variant="standard"
                type="email"
                required
                error={!!emailError}
                helperText={emailError}
            />
            <TextField
                name="username"
                label="Имя пользователя"
                variant="standard"
                type="text"
                required
                error={!!usernameError}
                helperText={usernameError}
            />
            <TextField
                name="password"
                label="Пароль"
                variant="standard"
                type="password"
                required
                error={!!passwordError}
                helperText={passwordError}
            />
            <TextField
                name="confirmPassword"
                label="Подтвердить пароль"
                variant="standard"
                type="password"
                required
                error={!!passwordError}
                helperText={passwordError}
            />
        </Box>
    );
};

export default RegisterFields;   
