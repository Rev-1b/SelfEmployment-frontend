import { FC, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TemplateFields from './TemplateFields.tsx';
import ButtonCluster from '../../../../common/components/ButtonCluster/ButtonCluster.tsx';
import { TemplateFormData } from '../types.ts';
import { useFormHandler } from '../../../../common/hooks/useFormHandler.ts';

interface TemplateFormProps {
    onSuccess?: () => Promise<void>;
}

const TemplateForm: FC<TemplateFormProps> = ({ onSuccess }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const initialData: TemplateFormData = {
        name: '',
        templateType: '',
    };

    const {
        formData,
        setFormData,
        handleChange,
        handleSubmit,
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

    const handleCancel = () => {
        navigate('/documents/templates');
    };

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
            <TemplateFields
                formData={formData}
                onFieldChange={handleChange}
            />
            <ButtonCluster
                onSaveClick={() => handleSubmit(id)}
                onCancelClick={handleCancel}
            />
        </>
    );
};

export default TemplateForm; 