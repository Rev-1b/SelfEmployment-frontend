import { FC } from 'react';
import { Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styles } from './RegisterPage.styles';
import { useRegisterForm } from './hooks/useRegisterForm.ts';
import RegisterFields from './components/RegisterFields/RegisterFields.tsx';
import RegisterCheckBoxes from './components/RegisterCheckBoxes/RegisterCheckBoxes.tsx';

const RegisterPage: FC = () => {
    const navigate = useNavigate();
    const {
        serviceConditionsIsChecked,
        privacyPolicyIsChecked,
        emailError,
        usernameError,
        passwordError,
        handleSubmit,
        toggleServiceConditions,
        togglePrivacyPolicy,
    } = useRegisterForm();

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={styles.form}
        >
            <Typography variant="h2" sx={styles.title}>
                Регистрация
            </Typography>

            <RegisterFields
                emailError={emailError}
                usernameError={usernameError}
                passwordError={passwordError}
            />

            <RegisterCheckBoxes
                serviceConditionsIsChecked={serviceConditionsIsChecked}
                privacyPolicyIsChecked={privacyPolicyIsChecked}
                toggleServiceConditions={toggleServiceConditions}
                togglePrivacyPolicy={togglePrivacyPolicy}
            />

            <Button
                sx={styles.submitButton}
                type="submit"
                disabled={!serviceConditionsIsChecked || !privacyPolicyIsChecked}
            >
                Зарегистрироваться
            </Button>


            <Box sx={styles.linkContainer}>
                <Typography
                    sx={styles.regAuthLink}
                    onClick={() => navigate('/auth')}
                >
                    Уже зарегистрированы?
                </Typography>
            </Box>

        </Box>
    );
};

export default RegisterPage;   
