import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CheckFields from './CheckFields.tsx';
import ButtonCluster from '../../../../common/components/ButtonCluster/ButtonCluster.tsx';
import { CheckFormData } from '../types.ts';
import { useFormHandler } from '../../../../common/hooks/useFormHandler.ts';

interface CheckFormProps {
    onSuccess?: () => Promise<void>;
}

const CheckForm: FC<CheckFormProps> = ({ onSuccess }) => {
    const { id } = useParams();

    const initialData: CheckFormData = {
        parent: '',
        name: '',
        number: '',
        addFile: '',
        amount: 0,
        startDate: null,
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
                // await api.updateCheck(id, data);
            } else {
                // await api.createCheck(data);
            }
        }
    });

    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                // const response = await api.getCheckById(id);
                // setFormData(response.data);
            };
            fetchData();
        }
    }, [id]);

    return (
        <>
            <CheckFields
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

export default CheckForm; 