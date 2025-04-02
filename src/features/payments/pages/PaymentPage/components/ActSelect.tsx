import { FC } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Act } from '../types';
import { styles } from '../PaymentPage.styles';

interface ActSelectProps {
    actId: number | null;
    acts: Act[];
    onChange: (event: any) => void;
    disabled: boolean;
}

const ActSelect: FC<ActSelectProps> = ({
    actId,
    acts,
    onChange,
    disabled,
}) => {
    return (
        <FormControl sx={styles.borderField} variant="standard">
            <InputLabel>Акт</InputLabel>
            <Select
                sx={{ width: '100%' }}
                value={actId || ''}
                onChange={onChange}
                disabled={disabled}
            >
                <MenuItem value="">
                    <em>Отменить выбор</em>
                </MenuItem>
                {acts.length === 0 ? (
                    <MenuItem disabled>
                        <em>Нет доступных актов</em>
                    </MenuItem>
                ) : (
                    acts.map(act => (
                        <MenuItem key={act.id} value={act.id}>
                            {act.number}
                        </MenuItem>
                    ))
                )}
            </Select>
        </FormControl>
    );
};

export default ActSelect;