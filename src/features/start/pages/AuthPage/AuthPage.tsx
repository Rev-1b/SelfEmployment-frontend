import { FC } from 'react';
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styles } from './AuthPage.styles';
import { useAuthForm } from './hooks/useAuthForm';
import AuthFields from './components/AuthFields/AuthFields';

const AuthPage: FC = () => {
    const navigate = useNavigate();
    const {
        emailError,
        passwordError,
        handleSubmit,
    } = useAuthForm();

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={styles.form}
        >
            <Typography variant="h2" sx={styles.title}>
                Авторизация
            </Typography>

            <AuthFields 
                emailError={emailError}
                passwordError={passwordError}
            />

            <Button
                sx={styles.submitButton}
                type="submit"
            >
                Войти
            </Button>

            {/* Возможно стоит вынести в отдельный контейнер, просто потому что могу */}
            <Box sx={styles.linkContainer}>
                <Typography
                    sx={styles.authRegLink}
                    onClick={() => navigate('/auth/register')}
                >
                    Регистрация
                </Typography>

                <Typography
                    sx={styles.forgotPasswordLink}
                    onClick={() => navigate('/auth/pass-recovery')}
                >
                    Забыли пароль?
                </Typography>
            </Box>
        </Box>
    );
};

export default AuthPage;
