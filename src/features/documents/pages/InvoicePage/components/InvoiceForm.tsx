import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import InvoiceFields from './InvoiceFields.tsx';
import ButtonCluster from '../../../../common/components/ButtonCluster/ButtonCluster.tsx';
import { InvoiceFormData } from '../types.ts';
import { useFormHandler } from '../../../../common/hooks/useFormHandler.ts';

interface InvoiceFormProps {
    onSuccess?: () => Promise<void>;
}

const InvoiceForm: FC<InvoiceFormProps> = ({ onSuccess }) => {
    const { id } = useParams();

    const initialData: InvoiceFormData = {
        parent: '',
        name: '',
        number: '',
        startDate: null,
        template: '',
        customer: '',
    };

    const {
        formData,
        setFormData,
        handleChange,
        handleDateChange,
        handleSubmit,
        handleCancel
    } = useFormHandler({
        initialData,
        onSuccess,
        onSave: async (id, data) => {
            if (id) {
                // await api.updateInvoice(id, data);
            } else {
                // await api.createInvoice(data);
            }
        }
    });

    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                // const response = await api.getInvoiceById(id);
                // setFormData(response.data);
            };
            fetchData();
        }
    }, [id]);

    return (
        <>
            <InvoiceFields
                formData={formData}
                onFieldChange={handleChange}
                onDateChange={handleDateChange}
            />
            <ButtonCluster
                onSaveClick={() => handleSubmit(id)}
                onCancelClick={handleCancel}
            />
        </>
    );
};

export default InvoiceForm; 