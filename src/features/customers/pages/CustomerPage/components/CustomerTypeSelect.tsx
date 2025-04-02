import { FC } from 'react';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { CustomerType } from '../types.ts';

interface CustomerTypeSelectProps {
    value: CustomerType | null;
    onChange: (event: { target: { value: any } }) => void;
}

const CustomerTypeSelect: FC<CustomerTypeSelectProps> = ({ value, onChange }) => {
    const customerTypeLabels = {
        [CustomerType.COMMON]: 'Физическое лицо',
        [CustomerType.LLC]: 'ООО',
        [CustomerType.IE]: 'ИП',
    };

    const handleSelectChange = (event: SelectChangeEvent) => {
        onChange({ target: { value: event.target.value } });
    };

    return (
        <FormControl sx={{ maxWidth: '375px' }} margin="normal">
            <InputLabel id="customer-type-label">Тип заказчика</InputLabel>
            <Select
                labelId="customer-type-label"
                id="customer-type"
                value={value || ''}
                label="Тип заказчика"
                onChange={handleSelectChange}
            >
                {Object.values(CustomerType).map((type) => (
                    <MenuItem key={type} value={type}>
                        {customerTypeLabels[type]}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default CustomerTypeSelect;