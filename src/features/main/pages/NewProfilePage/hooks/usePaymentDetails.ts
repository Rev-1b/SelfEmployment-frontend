import { useState, useEffect } from 'react';
import { FrontendRequisite } from '../types';
import { requisitesAPI } from '../api/requisites.ts';
import { RequisitesResponse } from '../types';

interface UsePaymentDetailsProps {
    initialData?: FrontendRequisite[];
    updateInterval?: number; // Интервал обновления в миллисекундах
}

export function usePaymentDetails({
    initialData = [],
    updateInterval = 30000, // По умолчанию обновляем каждые 5 минут
}: UsePaymentDetailsProps = {}) {
    const [records, setRecords] = useState<FrontendRequisite[]>(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const transformToFrontendRequisite = (requisite: RequisitesResponse): FrontendRequisite => {
        return {
            id: requisite.id,
            bankName: requisite.bank_name,
            cardNumber: requisite.card_number,
            userAccount: requisite.user_account,
            bic: requisite.bic,
            bankAccount: requisite.bank_account
        };
    };

    const transformToRequisiteData = (record: Omit<FrontendRequisite, 'id'>): RequisitesResponse => {
        return {
            id: '', // Это поле будет игнорироваться при создании
            bank_name: record.bankName,
            card_number: record.cardNumber,
            user_account: record.userAccount,
            bic: record.bic,
            bank_account: record.bankAccount,
        };
    };

    const fetchRecords = async (): Promise<void> => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await requisitesAPI.getAll();
            const transformedRecords = response.data.results.map(transformToFrontendRequisite);
            setRecords(transformedRecords);
            console.log(transformedRecords)
        } catch (err) {
            setError('Ошибка при загрузке платежных реквизитов');
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        // Первоначальная загрузка
        fetchRecords();

        // Установка интервала для обновления
        const intervalId = setInterval(fetchRecords, updateInterval);

        // Очистка интервала при размонтировании
        return () => clearInterval(intervalId);
    }, [updateInterval]);

    const handleAdd = async (newRecord: Omit<FrontendRequisite, 'id'>): Promise<void> => {
        setIsLoading(true);
        setError(null);
        try {
            // Сначала делаем запрос
            const response = await requisitesAPI.create(transformToRequisiteData(newRecord));
            const createdRecord = transformToFrontendRequisite(response.data);

            // После успешного ответа обновляем состояние
            setRecords(prev => [...prev, createdRecord]);
        } catch (err) {
            setError('Ошибка при добавлении платежных реквизитов');
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    const handleEdit = async (updatedRecord: FrontendRequisite): Promise<void> => {
        setIsLoading(true);
        setError(null);
        try {
            // Сначала делаем запрос
            await requisitesAPI.update(updatedRecord.id, transformToRequisiteData(updatedRecord));

            // После успешного ответа обновляем состояние
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

    const handleDelete = async (id: string | number): Promise<void> => {
        setIsLoading(true);
        setError(null);
        try {
            // Сначала делаем запрос
            await requisitesAPI.delete(id.toString());

            // После успешного ответа обновляем состояние
            setRecords(prev => prev.filter(record => record.id !== id));
        } catch (err) {
            setError('Ошибка при удалении платежных реквизитов');
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
    };
}; 