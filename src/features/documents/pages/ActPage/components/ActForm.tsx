import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ActFields from './ActFields.tsx';
import ButtonCluster from '../../../../common/components/ButtonCluster/ButtonCluster.tsx';
import { ActFormData } from '../types.ts';
import { useFormHandler } from '../../../../common/hooks/useFormHandler.ts';

interface ActFormProps {
    onSuccess?: () => Promise<void>;
}

const ActForm: FC<ActFormProps> = ({ onSuccess }) => {
    const { id } = useParams();

    const initialData: ActFormData = {
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
                // await api.updateAct(id, data);
            } else {
                // await api.createAct(data);
            }
        }
    });

    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                // const response = await api.getActById(id);
                // setFormData(response.data);
            };
            fetchData();
        }
    }, [id]);

    return (
        <>
            <ActFields
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

export default ActForm; 