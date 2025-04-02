import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { styles } from './CustomerPage.styles.ts';
import { CustomerType } from './types.ts'
import CustomerTypeSelect from './components/CustomerTypeSelect.tsx';
import { useFormSmallHandler } from '../../../common/hooks/useFormSmallHandler.ts';
import ButtonCluster from '../../../common/components/ButtonCluster/ButtonCluster.tsx';
import CommonCustomerFields from './components/CommonCustomerFields.tsx';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ru } from "date-fns/locale";
import IECustomerFields from './components/IECustomerFields.tsx';
import LLCCustomerFields from './components/LLCCustomerFields.tsx';

// Определяем типы заказчиков
// Обновляем интерфейс данных формы
interface CustomerFormData {
    customerType: CustomerType | null;
    // Общие поля для всех типов
    // Дополнительные поля будут добавлены в компонентах
}

const CustomerPage: FC = () => {
    const { id } = useParams();

    const initialData: CustomerFormData = {
        customerType: null,

    };

    const {
        formData,
        setFormData,
        handleChange,
        handleDateChange,
        handleSubmit,
        handleCancel
    } = useFormSmallHandler({
        initialData,
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

    // Функция для рендеринга полей в зависимости от типа заказчика
    const renderCustomerFields = () => {
        switch (formData.customerType) {
            case CustomerType.COMMON:
                return <CommonCustomerFields
                    formData={formData}
                    onFieldChange={handleChange}
                    onDateChange={handleDateChange}
                />;
            case CustomerType.LLC:
                return <LLCCustomerFields
                    formData={formData}
                    onFieldChange={handleChange}
                />;
            case CustomerType.IE:
                return <IECustomerFields
                    formData={formData}
                    onFieldChange={handleChange}
                />;
            default:
                return null;
        }
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
            <Box sx={styles.form}>
                <Typography sx={{ fontSize: '28px' }}>
                    Добавить заказчика
                </Typography>
                <CustomerTypeSelect
                    value={formData.customerType}
                    onChange={handleChange('customerType')}
                />
                {formData.customerType && (
                    <>
                        {renderCustomerFields()}
                        <ButtonCluster
                            onSaveClick={() => handleSubmit(id)}
                            onCancelClick={handleCancel}
                        />
                    </>
                )}
            </Box>
        </LocalizationProvider>
    );
};

export default CustomerPage; 