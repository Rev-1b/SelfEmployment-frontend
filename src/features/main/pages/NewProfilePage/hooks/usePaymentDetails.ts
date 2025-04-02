import { useState } from 'react';
import { PaymentRecord } from '../components/PaymentDetails/types.ts';
// import { paymentDetailsAPI } from '../api/paymentDetails'; // Предполагаемый API

interface UsePaymentDetailsProps {
    initialData: PaymentRecord[];
}

export function usePaymentDetails({
    initialData,
}: UsePaymentDetailsProps) {
    const [records, setRecords] = useState<PaymentRecord[]>(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleAdd = async (newRecord: Omit<PaymentRecord, 'id'>): Promise<void> => {
        setIsLoading(true);
        setError(null);
        try {
            // В реальном приложении здесь будет API запрос
            // const response = await paymentDetailsAPI.create(newRecord);
            // setRecords(prev => [...prev, response.data]);

            // Временная реализация без API
            const record = {
                id: Date.now(),
                ...newRecord
            };
            setRecords(prev => [...prev, record]);
        } catch (err) {
            setError('Ошибка при добавлении платежных реквизитов');
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    const handleEdit = async (updatedRecord: PaymentRecord): Promise<void> => {
        setIsLoading(true);
        setError(null);
        try {
            // В реальном приложении здесь будет API запрос
            // await paymentDetailsAPI.update(updatedRecord.id, updatedRecord);

            // Временная реализация без API
            setRecords(prev => prev.map(record =>
                record.id === updatedRecord.id ? updatedRecord : record
            ));
        } catch (err) {
            setError('Ошибка при обновлении платежных реквизитов');
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (id: number): Promise<void> => {
        setIsLoading(true);
        setError(null);
        try {
            // В реальном приложении здесь будет API запрос
            // await paymentDetailsAPI.delete(id);

            // Временная реализация без API
            setRecords(prev => prev.filter(record => record.id !== id));
        } catch (err) {
            setError('Ошибка при удалении платежных реквизитов');
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    const fetchRecords = async (): Promise<void> => {
        setIsLoading(true);
        setError(null);
        try {
            // В реальном приложении здесь будет API запрос
            // const response = await paymentDetailsAPI.getAll();
            // setRecords(response.data);

            // Временная реализация без API
            setRecords(initialData);
        } catch (err) {
            setError('Ошибка при загрузке платежных реквизитов');
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    return {
        records,
        isLoading,
        error,
        handleAdd,
        handleEdit,
        handleDelete,
        fetchRecords
    };
}; 