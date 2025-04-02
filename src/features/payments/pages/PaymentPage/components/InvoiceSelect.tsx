import { FC } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Invoice } from '../types';
import { styles } from '../PaymentPage.styles';

interface InvoiceSelectProps {
    invoiceId: number | null;
    invoices: Invoice[];
    onChange: (event: any) => void;
    disabled: boolean;
}

const InvoiceSelect: FC<InvoiceSelectProps> = ({
    invoiceId,
    invoices,
    onChange,
    disabled,
}) => {
    return (
        <FormControl sx={styles.borderField} variant="standard">
            <InputLabel>Счет</InputLabel>
            <Select
                sx={{ width: '100%' }}
                value={invoiceId || ''}
                onChange={onChange}
                disabled={disabled}
            >
                <MenuItem value="">
                    <em>Отменить выбор</em>
                </MenuItem>
                {invoices.length === 0 ? (
                    <MenuItem disabled>
                        <em>Нет доступных счетов</em>
                    </MenuItem>
                ) : (
                    invoices.map(invoice => (
                        <MenuItem key={invoice.id} value={invoice.id}>
                            {invoice.number}
                        </MenuItem>
                    ))
                )}
            </Select>
        </FormControl>
    );
};

export default InvoiceSelect;