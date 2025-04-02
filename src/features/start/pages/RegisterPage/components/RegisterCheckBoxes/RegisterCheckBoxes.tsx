import { Box, Checkbox, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { styles } from './RegisterCheckBoxes.styles.ts'


type RegisterCheckBoxesProps = {
    serviceConditionsIsChecked: boolean,
    privacyPolicyIsChecked: boolean,
    toggleServiceConditions: () => void,
    togglePrivacyPolicy: () => void,
    
}

const RegisterCheckBoxes: FC<RegisterCheckBoxesProps> = ({
    serviceConditionsIsChecked,
    privacyPolicyIsChecked,
    toggleServiceConditions,
    togglePrivacyPolicy,

}) => {
    const navigate = useNavigate();
    return (
        <Box sx={styles.checkboxContainer}>
            <Box sx={styles.checkboxLinkElement}>
                <Checkbox
                    checked={serviceConditionsIsChecked}
                    onChange={toggleServiceConditions}
                />
                <Typography
                    sx={styles.checkboxLink}
                    onClick={() => navigate('/settings')}
                >
                    Я принимаю условия сервиса
                </Typography>
            </Box>
            <Box sx={styles.checkboxLinkElement}>
                <Checkbox
                    checked={privacyPolicyIsChecked}
                    onChange={togglePrivacyPolicy}
                />
                <Typography
                    sx={styles.checkboxLink}
                    onClick={() => navigate('/settings')}
                >
                    Я согласен(а) с политикой конфедициальности
                </Typography>
            </Box>
        </Box>
    );
};

export default RegisterCheckBoxes;   