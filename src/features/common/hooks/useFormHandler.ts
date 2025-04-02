import { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

interface FormHandlerOptions<T> {
    initialData: T;
    onSuccess?: () => Promise<void>;
    onSave: (id: string | undefined, data: T) => Promise<void>;
}

export function useFormHandler<T extends object>({
    initialData,
    onSuccess,
    onSave
}: FormHandlerOptions<T>) {
    const [formData, setFormData] = useState<T>(initialData);
    const navigate = useNavigate();
    const outletContext = useOutletContext<{ onSuccess?: () => Promise<void> }>();

    const handleChange = (field: keyof T) => (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [field]: event.target.value,
        }));
    };

    const handleDateChange = (field: keyof T) => (date: Date | null) => {
        setFormData((prev) => ({
            ...prev,
            [field]: date,
        }));
    };

    const handleSuccess = async () => {
        if (onSuccess) {
            await onSuccess();
        } else if (outletContext?.onSuccess) {
            await outletContext.onSuccess();
        }
    };

    const handleSubmit = async (id?: string) => {
        try {
            await onSave(id, formData);
            await handleSuccess();
            navigate('..');
        } catch (error) {
            // Обработка ошибок
        }
    };

    const handleCancel = () => {
        navigate('..');
    };

    return {
        formData,
        setFormData,
        handleChange,
        handleDateChange,
        handleSubmit,
        handleCancel
    };
};