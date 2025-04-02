import { FC } from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField, Box } from '@mui/material';
import { Customer } from '../types.ts';
import { styles } from '../PaymentPage.styles.ts';

interface CustomerSelectProps {
    customerId: number | null;
    customers: Customer[];
    onChange: (event: any) => void;
}

const CustomerSelect: FC<CustomerSelectProps> = ({
    customerId,
    customers,
    onChange,
}) => {
    const selectedCustomer = customers.find(c => c.id === customerId);

    return (
        <Box sx={styles.customerBox}>
            <FormControl sx={{ width: '506px' }} variant="standard">
                <InputLabel>Заказчик</InputLabel>
                <Select
                    value={customerId || ''}
                    onChange={onChange}
                >
                    <MenuItem value="">
                        <em>Отменить выбор</em>
                    </MenuItem>
                    {customers.map(customer => (
                        <MenuItem key={customer.id} value={customer.id}>
                            {customer.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <TextField
                label="Субъект"
                value={selectedCustomer?.subject || ''}
                disabled
                sx={styles.subject}
            />
        </Box>
    );
};

export default CustomerSelect;