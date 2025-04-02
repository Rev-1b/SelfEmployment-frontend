import { Paper, Typography, Box } from "@mui/material";
import { FC, useState, useEffect } from "react";
import { styles } from './SummaryChart.styles.ts';

const statistics = {
    contracts: 5,
    acts: 16,
    invoices: 46,
    checks: 43,
};

const SummaryChart: FC = () => {
    const [animated, setAnimated] = useState(false);
    const maxValue = Math.max(statistics.contracts, statistics.acts, statistics.invoices, statistics.checks);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimated(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Paper sx={styles.statisticsSection}>
            <Box sx={styles.statsContainer}>
                <Box sx={styles.statRow}>
                    <Typography>Договоров</Typography>
                    <Box sx={styles.barContainer}>
                        <Box sx={styles.bar('#CCCCFF', animated ? (statistics.contracts / maxValue * 100) : 0)} />
                    </Box>
                    <Typography sx={styles.value}>{statistics.contracts}</Typography>
                </Box>

                <Box sx={styles.statRow}>
                    <Typography>Актов</Typography>
                    <Box sx={styles.barContainer}>
                        <Box sx={styles.bar('#DAB3E8', animated ? (statistics.acts / maxValue * 100) : 0)} />
                    </Box>
                    <Typography sx={styles.value}>{statistics.acts}</Typography>
                </Box>

                <Box sx={styles.statRow}>
                    <Typography>Счетов</Typography>
                    <Box sx={styles.barContainer}>
                        <Box sx={styles.bar('#B3D5E8', animated ? (statistics.invoices / maxValue * 100) : 0)} />
                    </Box>
                    <Typography sx={styles.value}>{statistics.invoices}</Typography>
                </Box>

                <Box sx={styles.statRow}>
                    <Typography>Чеков</Typography>
                    <Box sx={styles.barContainer}>
                        <Box sx={styles.bar('#B3E5E8', animated ? (statistics.checks / maxValue * 100) : 0)} />
                    </Box>
                    <Typography sx={styles.value}>{statistics.checks}</Typography>
                </Box>
            </Box>
        </Paper>
    );
};

export default SummaryChart;