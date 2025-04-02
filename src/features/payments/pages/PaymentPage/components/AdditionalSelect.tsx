import { FC } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Additional } from '../types';
import { styles } from '../PaymentPage.styles';

interface AdditionalSelectProps {
    additionalId: number | null;
    additionals: Additional[];
    onChange: (event: any) => void;
    disabled: boolean;
}

const AdditionalSelect: FC<AdditionalSelectProps> = ({
    additionalId,
    additionals,
    onChange,
    disabled,
}) => {
    return (
        <FormControl sx={styles.borderField} variant="standard">
            <InputLabel>Приложение к договору</InputLabel>
            <Select
                sx={{ width: '100%' }}
                value={additionalId || ''}
                onChange={onChange}
                disabled={disabled}
            >
                <MenuItem value="">
                    <em>Отменить выбор</em>
                </MenuItem>
                {additionals.length === 0 ? (
                    <MenuItem disabled>
                        <em>Нет доступных приложений к договору</em>
                    </MenuItem>
                ) : (
                    additionals.map(additional => (
                        <MenuItem key={additional.id} value={additional.id}>
                            {additional.number}
                        </MenuItem>
                    ))
                )}
            </Select>
        </FormControl>
    );
};

export default AdditionalSelect;