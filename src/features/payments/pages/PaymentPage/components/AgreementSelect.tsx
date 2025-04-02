import { FC } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Agreement } from '../types';
import { styles } from '../PaymentPage.styles';

interface AgreementSelectProps {
    agreementId: number | null;
    agreements: Agreement[];
    onChange: (event: any) => void;
    disabled: boolean;
}

const AgreementSelect: FC<AgreementSelectProps> = ({
    agreementId,
    agreements,
    onChange,
    disabled,
}) => {
    return (
        <FormControl sx={styles.borderField} variant="standard">
            <InputLabel>Договор</InputLabel>
            <Select
                value={agreementId || ''}
                onChange={onChange}
                disabled={disabled}
            >
                <MenuItem value="">
                    <em>Отменить выбор</em>
                </MenuItem>
                {agreements.length === 0 ? (
                    <MenuItem disabled>
                        <em>Нет доступных договоров</em>
                    </MenuItem>
                ) : (
                    agreements.map(agreement => (
                        <MenuItem key={agreement.id} value={agreement.id}>
                            {agreement.number}
                        </MenuItem>
                    ))
                )}
            </Select>
        </FormControl>
    );
};

export default AgreementSelect;