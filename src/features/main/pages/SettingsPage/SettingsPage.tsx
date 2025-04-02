import { FC } from "react";
import { Box, Typography } from '@mui/material';
import { useNavigate, useLocation } from "react-router-dom";

import LockIcon from '@mui/icons-material/Lock';
import HelpIcon from '@mui/icons-material/Help';
import DescriptionIcon from '@mui/icons-material/Description';
import SecurityIcon from '@mui/icons-material/Security';

import ContentBox from "../../../common/components/ContentBox/ContentBox.tsx"
import HeadNavButton from "../../../common/components/HeadNavButton/HeadNavButton.tsx";
import SettingItem from "./components/SettingItem.tsx";

import { styles } from './SettingsPage.styles.ts'
import { useFormSmallHandler } from "../../../../features/common/hooks/useFormSmallHandler.ts";
import PasswordChanger from "./components/PasswordChanger.tsx";

const initialData = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
}

const SettingsPage: FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const {
        formData,
        setFormData,
        handleChange,
        handleDateChange,
        handleSubmit,
        handleCancel
    } = useFormSmallHandler({
        initialData,
        onSave: async (id, data) => {
            if (id) {
                // await api.updateAdditional(id, data);
            } else {
                // await api.createAdditional(data);
            }
        }
    });

    return (
        <ContentBox>
            <Box sx={styles.navSection}>
                <HeadNavButton
                    label="Настройки"
                    state={location.pathname.startsWith('/settings') ? 'active' : 'default'}
                    onClick={() => { navigate('/settings') }}
                />
            </Box>
            <Box sx={{ marginTop: '40px' }}>
                <Box sx={styles.settingsContainer}>
                    <SettingItem icon={<LockIcon />} title="Смена пароля">
                        <PasswordChanger
                            formData={formData}
                            onFieldChange={handleChange}
                            onSubmit={handleSubmit}
                        />
                    </SettingItem>
                    <SettingItem icon={<HelpIcon />} title="Задать вопрос">
                        <Typography>Контент для вопросов</Typography>
                    </SettingItem>
                    <SettingItem icon={<DescriptionIcon />} title="Условия сервиса">
                        <Typography>Контент условий сервиса</Typography>
                    </SettingItem>
                    <SettingItem icon={<SecurityIcon />} title="Политика конфиденциальности">
                        <Typography>Контент политики конфиденциальности</Typography>
                    </SettingItem>
                </Box>
            </Box>
        </ContentBox>
    );
};

export default SettingsPage;