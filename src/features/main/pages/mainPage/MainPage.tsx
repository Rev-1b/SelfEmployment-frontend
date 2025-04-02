import { Box, Typography, Link } from '@mui/material';
import { FC } from 'react';
import { styles } from './MainPage.styles.ts';

import ContentBox from '../../components/ContentBox/ContentBox.tsx';
import CommonTable from '../../components/CommonTable/CommonTable.tsx';
import HeadSection from './components/HeadSection/HeadSection.tsx';
import Graph from './components/Graph/Graph.tsx';
import BarChartGraph from '../../../common/components/BarChartGraph/BarChartGraph.tsx';
import HistoryTable from './components/HistoryTable/HistoryTable.tsx';
import SummaryChart from '../../../common/components/SummaryChart/SummaryChart.tsx';


const MainPage: FC = () => {

    const userName = 'Oleg Petrovitch'
    const profit = 233300

    return (
        <ContentBox>
            <HeadSection userName={userName} profit={profit} />

            <Box sx={styles.mainGrid}>
                <Box sx={styles.contentSection}>
                    <Typography variant='h6' sx={styles.midTitle}>Доходы за текущий месяц</Typography>
                    <BarChartGraph />
                    {/* <Graph /> */}
                    <Link sx={styles.extendLink}>Смотреть подробнее...</Link>
                </Box>

                <Box sx={styles.contentSection}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h6" sx={styles.midTitle}>
                            Последние измененные документы
                        </Typography>

                        <HistoryTable />

                        <Link sx={styles.extendLink}>Смотреть подробнее...</Link>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h6" sx={styles.midTitle}>
                            Общее количество
                        </Typography>
                        <SummaryChart />
                        <Link sx={styles.extendLink}>Смотреть подробнее...</Link>
                    </Box>
                </Box>
            </Box>
        </ContentBox>
    );
};

export default MainPage;