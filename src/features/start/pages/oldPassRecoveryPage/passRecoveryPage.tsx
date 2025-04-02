import { FC } from "react";
import '../../common/css/leftSideCommon.css'
import './passRecoveryPage.css'
import { commonStyles } from '../../common/mui/LeftSideCommon.ts'
import { Box, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const PassRecoveryPage: FC = () => {
    const sendIntervalMessageSeconds: number = 120;
    const sendIntervalToMailMessage: string = `${(sendIntervalMessageSeconds / 60) % 60}:00`;

    return (
        <>
            <form className="left-input-field">
                <h2 className="left-title">Забыли пароль?</h2>
                <TextField
                    label="E-mail"
                    variant="standard"
                    sx={{ width: "500px" }}
                ></TextField>

                <Button sx={commonStyles.submitButton} type="submit">
                    Восстановить пароль
                </Button>

                <Box sx={commonStyles.linkContainer}>
                    <p className="notification-text">
                        Мы вышлем вам сообщение на указанную почту
                    </p>
                    <p className="notification-text">
                        Повторный запрос можно будет отправить через
                        {" " + sendIntervalToMailMessage} мин
                    </p>

                    <Link to="/" className="left-sub-link">
                        Назад
                    </Link>
                </Box>


            </form>
        </>
    );
};

export default PassRecoveryPage;
