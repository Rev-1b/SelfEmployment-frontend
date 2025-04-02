import { FC } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Check } from '../types';
import { styles } from '../PaymentPage.styles';

interface CheckSelectProps {
    checkId: number | null;
    checks: Check[];
    onChange: (event: any) => void;
    disabled: boolean;
}

const CheckSelect: FC<CheckSelectProps> = ({
    checkId,
    checks,
    onChange,
    disabled,
}) => {
    return (
        <FormControl sx={styles.borderField} variant="standard">
            <InputLabel>Чек</InputLabel>
            <Select
                sx={{ width: '100%' }}
                value={checkId || ''}
                onChange={onChange}
                disabled={disabled}
            >
                <MenuItem value="">
                    <em>Отменить выбор</em>
                </MenuItem>
                {checks.length === 0 ? (
                    <MenuItem disabled>
                        <em>Нет доступных чеков</em>
                    </MenuItem>
                ) : (
                    checks.map(check => (
                        <MenuItem key={check.id} value={check.id}>
                            {check.number}
                        </MenuItem>
                    ))
                )}
            </Select>
        </FormControl>
    );
};

export default CheckSelect;