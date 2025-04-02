import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface FormSmallHandlerOptions<T> {
    initialData: T;
    onSave: (id: string | undefined, data: T) => Promise<void>;
}

export function useFormSmallHandler<T extends object>({
    initialData,
    onSave
}: FormSmallHandlerOptions<T>) {
    const [formData, setFormData] = useState<T>(initialData);
    const navigate = useNavigate();

    const handleChange = (field: keyof T) => (
        event: { target: { value: any } } | React.ChangeEvent<HTMLInputElement>
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


    const handleSubmit = async (id?: string) => {
        try {
            await onSave(id, formData);
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