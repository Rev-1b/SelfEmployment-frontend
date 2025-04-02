import { FormEvent, useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { passRecoverAPI } from '../api/passRecover.ts';
import { PassRecoverData, PassRecoverError } from '../types.ts';

export const usePassRecoverForm = () => {
    const navigate = useNavigate();
    const [emailError, setEmailError] = useState<string>('');
    const [emailResponse, setEmailResponse] = useState<string>('');
    const [sendMessageDelay, setSendMessageDelay] = useState<number>(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const formatTime = (seconds: number): string => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setEmailError('');
        setEmailResponse('');

        const formData = new FormData(event.currentTarget);
        const passRecoverData: PassRecoverData = {
            email: formData.get("email") as string,
        };

        try {
            // const response = await passRecoverAPI.recoverPassword(passRecoverData);
            // const { email } = response.data;
            // setEmailResponse(email);

            setEmailResponse('new.luenkoaleksei@gmail.com');
            setSendMessageDelay(120);
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response?.status === 400) {
                    const errorData = error.response.data as PassRecoverError;
                    if (errorData.email) {
                        setEmailError(errorData.email);
                    };
                }
            } else {
                alert('Произошла непредвиденная ошибка');
            };
        };
    };

    useEffect(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        if (sendMessageDelay > 0) {
            intervalRef.current = setInterval(() => {
                setSendMessageDelay((prev) => {
                    if (prev <= 1) {
                        if (intervalRef.current) {
                            clearInterval(intervalRef.current);
                            intervalRef.current = null;
                        }
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [sendMessageDelay]);

    return {
        emailError,
        emailResponse,
        sendMessageDelay,
        formatTime,
        handleSubmit,
    };
}; 