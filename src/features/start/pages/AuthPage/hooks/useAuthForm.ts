import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { authAPI } from '../api/auth.ts';
import { AuthData, AuthError } from '../types.ts';
import { tokenService } from '../../../../common/services/tokenService.ts';

export const useAuthForm = () => {
    const navigate = useNavigate();
    const [emailError, setEmailError] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setEmailError('');
        setPasswordError('');

        const formData = new FormData(event.currentTarget);
        const authData: AuthData = {
            email: formData.get("email") as string,
            password: formData.get("password") as string,
        };

        try {
            const response = await authAPI.login(authData);
            const { access, refresh } = response.data;
            tokenService.setTokens(access, refresh);
            navigate('/profile');
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response?.status === 400) {
                    const errorData = error.response.data as AuthError;
                    if (errorData.email) {
                        setEmailError(errorData.email);
                    };
                    if (errorData.password) {
                        setPasswordError(errorData.password);
                    };
                    if (errorData.detail) {
                        setPasswordError(errorData.detail);
                    };
                } else if (error.response?.status === 401) {
                    setPasswordError('Неверный email или пароль');
                };
            } else {
                alert('Произошла ошибка при авторизации');
            };
        };
    };

    return {
        emailError,
        passwordError,
        handleSubmit,
    };
}; 