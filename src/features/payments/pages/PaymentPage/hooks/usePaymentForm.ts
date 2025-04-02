import { useState, useEffect, ChangeEvent } from 'react';
import { PaymentFormData, PaymentFormOptions } from '../types';
import { mockApi } from '../mockData';
import { useNavigate } from 'react-router-dom';

interface UsePaymentFormProps {
    onSave: (id: string | undefined, data: PaymentFormData) => Promise<void>;
}

export const usePaymentForm = ({ onSave }: UsePaymentFormProps) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<PaymentFormData>({
        customerId: null,
        agreementId: null,
        additionalId: null,
        actId: null,
        invoiceId: null,
        checkId: null,
        amount: null,
    });

    const [options, setOptions] = useState<PaymentFormOptions>({
        customers: [],
        agreements: [],
        additionals: [],
        acts: [],
        invoices: [],
        checks: [],
    });

    useEffect(() => {
        mockApi.getCustomers().then(customers => {
            setOptions(prev => ({ ...prev, customers }));
        });
    }, []);

    useEffect(() => {
        if (formData.customerId) {
            mockApi.getAgreements(formData.customerId).then(agreements => {
                setOptions(prev => ({ ...prev, agreements }));
            });
            setFormData(prev => ({
                ...prev,
                agreementId: null,
                additionalId: null,
                actId: null,
                invoiceId: null,
                checkId: null,
                amount: null,
            }));
        }
    }, [formData.customerId]);

    useEffect(() => {
        if (formData.agreementId) {
            mockApi.getAdditionals(formData.agreementId).then(additionals => {
                setOptions(prev => ({ ...prev, additionals }));
            });
            Promise.all([
                mockApi.getActs(formData.agreementId, formData.additionalId),
                mockApi.getInvoices(formData.agreementId, formData.additionalId),
                mockApi.getChecks(formData.agreementId, formData.additionalId)
            ]).then(([acts, invoices, checks]) => {
                setOptions(prev => ({
                    ...prev,
                    acts,
                    invoices,
                    checks,
                }));
            });
            setFormData(prev => ({
                ...prev,
                actId: null,
                invoiceId: null,
                checkId: null,
                amount: null,
            }));
        }
    }, [formData.agreementId]);

    useEffect(() => {
        let totalAmount = 0;

        const selectedAct = formData.actId ? options.acts.find(a => a.id === formData.actId) : null;
        const selectedInvoice = formData.invoiceId ? options.invoices.find(i => i.id === formData.invoiceId) : null;
        const selectedCheck = formData.checkId ? options.checks.find(c => c.id === formData.checkId) : null;

        // Пока неправильно работает, тут не накопление а цифра только одного из
        if (selectedAct) totalAmount += selectedAct.amount;
        if (selectedInvoice) totalAmount += selectedInvoice.amount;
        if (selectedCheck) totalAmount += selectedCheck.amount;

        setFormData(prev => ({
            ...prev,
            amount: totalAmount || null,
        }));
    }, [
        formData.actId,
        formData.invoiceId,
        formData.checkId,
        options.acts,
        options.invoices,
        options.checks
    ]);

    const handleChange = (field: keyof PaymentFormData) => (
        event: ChangeEvent<{ value: unknown }>
    ) => {
        const value = event.target.value === '' ? null : (event.target.value as number);

        // Если меняется customer, очищаем все зависимые поля
        if (field === 'customerId') {
            setFormData(prev => ({
                ...prev,
                customerId: value,
                agreementId: null,
                additionalId: null,
                actId: null,
                invoiceId: null,
                checkId: null,
                amount: null,
            }));
        }
        // Если меняется agreement, очищаем зависимые поля
        else if (field === 'agreementId') {
            setFormData(prev => ({
                ...prev,
                agreementId: value,
                additionalId: null,
                actId: null,
                invoiceId: null,
                checkId: null,
                amount: null,
            }));
        }
        // Для остальных полей просто обновляем значение
        else {
            setFormData(prev => ({ ...prev, [field]: value }));
        }
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
        options,
        handleChange,
        handleSubmit,
        handleCancel,
    };
};