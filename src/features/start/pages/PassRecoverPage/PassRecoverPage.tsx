import { FC } from 'react';
import { TextField, Box, Typography, Button } from "@mui/material";
import { styles } from './PassRecoverPage.styles';
import { usePassRecoverForm } from './hooks/usePassRecoverForm';
import { useNavigate } from 'react-router-dom';


const RegisterFields: FC = () => {
    const navigate = useNavigate();
    const {
        emailError,
        emailResponse,
        sendMessageDelay,
        formatTime,
        handleSubmit,
    } = usePassRecoverForm();

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={styles.form}
        >
            <Typography variant="h2" sx={styles.title}>
                Восстановление пароля
            </Typography>

            <Box sx={styles.inputFields}>
                <TextField
                    name="email"
                    label="E-mail"
                    variant="standard"
                    type="email"
                    required
                    error={!!emailError}
                    helperText={emailError}
                />

            </Box>

            <Button
                sx={styles.submitButton}
                type="submit"
                disabled={sendMessageDelay > 0}
            >
                Восстановить пароль
            </Button>

            <Box sx={styles.linkContainer}>
                <Typography sx={styles.notificationFont}>
                    {emailResponse
                        ? `Письмо отправлено на почту ${emailResponse}`
                        : 'Мы вышлем вам сообщение на указанную почту'
                    }
                </Typography>

                {sendMessageDelay > 0 && (
                    <Typography sx={styles.notificationFont}>
                        Повторный запрос можно будет отправить через {formatTime(sendMessageDelay)}
                    </Typography>
                )}

                <Typography
                    sx={styles.returnLink}
                    onClick={() => navigate('/auth')}
                >
                    Назад
                </Typography>
            </Box>
        </Box>
    );
};

export default RegisterFields;   
