import { FormEvent, useState } from "react"
import { RegisterData } from "../types";
import { registerAPI } from "../api/register";
import { AxiosError } from "axios";

export const useRegisterForm = () => {
    const [serviceConditionsIsChecked, setServiceConditionsIsChecked] = useState<boolean>(false);
    const [privacyPolicyIsChecked, setPrivacyPolicyIsChecked] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<string>('');
    const [usernameError, setUsernameError] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setEmailError('');
        setUsernameError('');
        setPasswordError('');

        const sendFormData = new FormData(event.currentTarget);
        const password = sendFormData.get('password') as string;
        const confirmPassword = sendFormData.get('confirmPassword') as string;

        if (password != confirmPassword) {
            setPasswordError('Пароли не совпадают');
            return
        };

        const registerData: RegisterData = {
            email: sendFormData.get('email') as string,
            username: sendFormData.get('username') as string,
            password: password,
        };

        try {
            const response = await registerAPI.register(registerData);
            console.log(response);
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response?.status == 400) {
                    const errorData = error.response?.data
                    if (errorData.email) {
                        setEmailError(errorData.email);
                    };
                    if (errorData.username) {
                        setEmailError(errorData.username);
                    };

                    // } else if (error.response?.status == 401) {
                    //     // Handle 400 error
                    // };
                } else {
                    alert('Произошла неизвестная ошибка');
                }
            };

        };

    };

    const toggleServiceConditions = () => setServiceConditionsIsChecked(!serviceConditionsIsChecked);
    const togglePrivacyPolicy = () => setPrivacyPolicyIsChecked(!privacyPolicyIsChecked);

    return {
        serviceConditionsIsChecked,
        privacyPolicyIsChecked,
        emailError, 
        usernameError,
        passwordError,
        handleSubmit,
        toggleServiceConditions,
        togglePrivacyPolicy,
    };
};