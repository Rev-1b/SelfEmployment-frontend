import { FC, useState, useRef } from "react";
import { Box, TextField, IconButton, InputAdornment } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { styles } from '../SettingsPage.styles.ts'
import { PasswordChangerFormData } from "../types.ts";

interface PasswordChangerProps {
    formData: PasswordChangerFormData;
    onFieldChange: (field: keyof PasswordChangerFormData) =>
        (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit?: () => void;
}

const PasswordChanger: FC<PasswordChangerProps> = ({
    formData,
    onFieldChange,
    onSubmit
}) => {
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const oldPasswordRef = useRef<HTMLInputElement>();
    const newPasswordRef = useRef<HTMLInputElement>();
    const confirmPasswordRef = useRef<HTMLInputElement>();

    const handleClickShowPassword = (
        setter: React.Dispatch<React.SetStateAction<boolean>>,
        inputRef: React.MutableRefObject<HTMLInputElement | undefined>
    ) => () => {
        const selectionStart = inputRef.current?.selectionStart;
        setter(prev => !prev);
        // Восстанавливаем позицию курсора после обновления состояния
        setTimeout(() => {
            if (inputRef.current && typeof selectionStart === 'number') {
                inputRef.current.selectionStart = selectionStart;
                inputRef.current.selectionEnd = selectionStart;
            }
        }, 0);
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const getPasswordAdornment = (
        showPassword: boolean,
        onClick: () => void
    ) => ({
        endAdornment: (
            <InputAdornment position="end">
                <IconButton
                    onClick={onClick}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            </InputAdornment>
        )
    });

    return (
        <Box sx={styles.row}>
            <TextField
                label="Старый пароль"
                type={showOldPassword ? 'text' : 'password'}
                sx={styles.field}
                value={formData.oldPassword}
                onChange={onFieldChange('oldPassword')}
                inputRef={oldPasswordRef}
                InputProps={getPasswordAdornment(
                    showOldPassword,
                    handleClickShowPassword(setShowOldPassword, oldPasswordRef)
                )}
            />
            <TextField
                label="Новый пароль"
                type={showNewPassword ? 'text' : 'password'}
                sx={styles.field}
                value={formData.newPassword}
                onChange={onFieldChange('newPassword')}
                inputRef={newPasswordRef}
                InputProps={getPasswordAdornment(
                    showNewPassword,
                    handleClickShowPassword(setShowNewPassword, newPasswordRef)
                )}
            />
            <TextField
                label="Подтверждение пароля"
                type={showConfirmPassword ? 'text' : 'password'}
                sx={styles.field}
                value={formData.confirmPassword}
                onChange={onFieldChange('confirmPassword')}
                inputRef={confirmPasswordRef}
                InputProps={getPasswordAdornment(
                    showConfirmPassword,
                    handleClickShowPassword(setShowConfirmPassword, confirmPasswordRef)
                )}
            />
            <IconButton
                sx={styles.submitButton}
                onClick={onSubmit}
            >
                <CheckIcon />
            </IconButton>
        </Box>
    );
};

export default PasswordChanger;

