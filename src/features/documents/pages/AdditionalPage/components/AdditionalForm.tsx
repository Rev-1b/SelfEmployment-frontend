import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AdditionalFields from './AdditionalFields.tsx';
import ButtonCluster from '../../../../common/components/ButtonCluster/ButtonCluster.tsx';
import { AdditionalFormData } from '../types.ts';
import { useFormHandler } from '../../../../common/hooks/useFormHandler.ts';
import { Box } from '@mui/material';
import { styles } from '../AdditionalPage.styles.ts';

interface AdditionalFormProps {
    onSuccess?: () => Promise<void>;
}

const AdditionalForm: FC<AdditionalFormProps> = ({ onSuccess }) => {
    const { id } = useParams();

    const initialData: AdditionalFormData = {
        agreement: '',
        number: '',
        startDate: null,
        amount: '',
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
                // await api.updateAdditional(id, data);
            } else {
                // await api.createAdditional(data);
            }
        }
    });

    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                // const response = await api.getAdditionalById(id);
                // setFormData(response.data);
            };
            fetchData();
        }
    }, [id]);

    return (
        <Box sx={styles.form}>
            <AdditionalFields
                formData={formData}
                onFieldChange={handleChange}
                onDateChange={handleDateChange}
            />
            <ButtonCluster
                onSaveClick={() => handleSubmit(id)}
                onCancelClick={handleCancel}
            />
        </Box>

    );
};

export default AdditionalForm; 