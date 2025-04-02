import { FC } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { styles } from './PaymentPage.styles';
import { usePaymentForm } from './hooks/usePaymentForm';
import CustomerSelect from './components/CustomerSelect';
import AgreementSelect from './components/AgreementSelect';
import AdditionalSelect from './components/AdditionalSelect';
import ActSelect from './components/ActSelect';
import InvoiceSelect from './components/InvoiceSelect';
import CheckSelect from './components/CheckSelect';
import ButtonCluster from '../../../common/components/ButtonCluster/ButtonCluster';
import { useParams } from 'react-router-dom';

export const PaymentPage: FC = () => {
    const { id } = useParams();
    const {
        formData,
        options,
        handleChange,
        handleSubmit,
        handleCancel
    } = usePaymentForm({
        onSave: async (id, data) => {
            if (id) {
                // await api.updateAdditional(id, data);
            } else {
                // await api.createAdditional(data);
            }
        }
    });

    return (
        <Box sx={styles.form}>
            <Typography sx={{ fontSize: '28px' }}>
                Добавить Платеж
            </Typography>

            <Box sx={styles.row}>
                <CustomerSelect
                    customerId={formData.customerId}
                    customers={options.customers}
                    onChange={handleChange('customerId')}
                />
            </Box>

            <Box sx={styles.row}>
                <AgreementSelect
                    agreementId={formData.agreementId}
                    agreements={options.agreements}
                    onChange={handleChange('agreementId')}
                    disabled={!formData.customerId}
                />
                <AdditionalSelect
                    additionalId={formData.additionalId}
                    additionals={options.additionals}
                    onChange={handleChange('additionalId')}
                    disabled={!formData.agreementId}
                />
                <ActSelect
                    actId={formData.actId}
                    acts={options.acts}
                    onChange={handleChange('actId')}
                    disabled={!formData.agreementId}
                />
                <InvoiceSelect
                    invoiceId={formData.invoiceId}
                    invoices={options.invoices}
                    onChange={handleChange('invoiceId')}
                    disabled={!formData.agreementId}
                />
                <CheckSelect
                    checkId={formData.checkId}
                    checks={options.checks}
                    onChange={handleChange('checkId')}
                    disabled={!formData.agreementId}
                />
            </Box>

            <Box sx={styles.row}>
                <TextField
                    label="Сумма платежа"
                    sx={styles.borderField}
                    value={formData.amount || ''}
                    disabled={true}
                />
            </Box>

            <ButtonCluster
                onSaveClick={() => handleSubmit(id)}
                onCancelClick={handleCancel}
            />
        </Box>
    );
};

export default PaymentPage;