import { FC } from 'react';
import { TextField, Box } from "@mui/material";
import { commonStyles } from '../../../../common/mui/LeftSideCommon.ts';


type AuthFieldsProps = {
    emailError: string, 
    passwordError: string,
}

const AuthFields: FC<AuthFieldsProps> = ({
    emailError, 
    passwordError,
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
                name="password"
                label="Пароль"
                variant="standard"
                type="password"
                required
                error={!!passwordError}
                helperText={passwordError}
            />
        </Box>
    );
};

export default AuthFields;
