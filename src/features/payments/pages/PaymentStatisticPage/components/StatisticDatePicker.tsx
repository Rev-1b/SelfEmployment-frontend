import { FC } from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';
import { styles } from '../PaymentStatisticPage.styles';
import { PERIODS, PeriodType } from '../types';

interface StatisticDatePickerProps {
    selectedPeriod: PeriodType;
    onPeriodChange: (period: PeriodType) => void;
}

export const StatisticDatePicker: FC<StatisticDatePickerProps> = ({
    selectedPeriod,
    onPeriodChange,
}) => {
    const handlePeriodChange = (event: any) => {
        onPeriodChange(event.target.value as PeriodType);
    };

    return (
        <Box sx={styles.datePickerContainer}>
            <FormControl sx={styles.periodSelect} variant="standard">
                <InputLabel>Выбрать период</InputLabel>
                <Select
                    value={selectedPeriod}
                    onChange={handlePeriodChange}
                    label="Выбрать период"
                >
                    {Object.values(PERIODS).map(({ value, label }) => (
                        <MenuItem key={value} value={value}>
                            {label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <TextField
                label="Дата начала"
                type="date"
                disabled
                sx={styles.dateField}
                InputLabelProps={{
                    shrink: true,
                }}
            />

            <TextField
                label="Дата окончания"
                type="date"
                disabled
                sx={styles.dateField}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </Box>
    );
};

export default StatisticDatePicker;