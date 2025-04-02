import { FC, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { styles } from './PaymentStatisticPage.styles';
import { StatisticDatePicker } from './components/StatisticDatePicker';
import BarChartGraph from '../../../common/components/BarChartGraph/BarChartGraph';
import SummaryChart from '../../../common/components/SummaryChart/SummaryChart';
import RoundDiagram from './components/RoundDiagram/RoundDiagram';
import { PeriodType } from '../../types.ts';


const data = [
    { name: 'Физ.лицо', value: 30, color: '#E6B8FF' },
    { name: 'ИП', value: 40, color: '#B8C4FF' },
    { name: 'ООО', value: 30, color: '#B8FFF9' },
];


export const PaymentStatisticPage: FC = () => {
    const [chartPeriod, setChartPeriod] = useState<PeriodType>('month');
    const [diagramPeriod, setDiagramPeriod] = useState<PeriodType>('month');
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const handlePrevCard = () => {
        setCurrentCardIndex(prev => prev > 0 ? prev - 1 : 2);
    };

    const handleNextCard = () => {
        setCurrentCardIndex(prev => prev < 2 ? prev + 1 : 0);
    };

    return (
        <Box sx={styles.container}>
            <Box sx={styles.leftSection}>
                <Box sx={styles.incomeCard}>
                    <Typography variant="h6">
                        Доходы за текущий месяц: 38 000 ₽
                    </Typography>
                </Box>

                <Box sx={styles.periodSelector}>
                    <StatisticDatePicker
                        selectedPeriod={chartPeriod}
                        onPeriodChange={setChartPeriod}
                    />
                </Box>

                <Box sx={styles.chartContainer}>
                    <BarChartGraph />
                </Box>
            </Box>

            <Box sx={styles.rightSection}>
                <Box sx={styles.pieChartCard}>
                    <RoundDiagram
                        title="Клиенты"
                        data={data}
                        selectedPeriod={diagramPeriod}
                        onPeriodChange={setDiagramPeriod}
                        onPrevCard={handlePrevCard}
                        onNextCard={handleNextCard}
                    />
                </Box>

                <Box sx={styles.statsCard}>
                    <SummaryChart />
                </Box>
            </Box>
        </Box>
    );
};

export default PaymentStatisticPage;