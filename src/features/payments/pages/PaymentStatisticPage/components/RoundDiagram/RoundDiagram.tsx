import { FC, useState } from 'react';
import { Box, Typography, IconButton, FormControl, Select, MenuItem } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from 'recharts';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { styles } from './RoundDiagram.styles';
import { PERIODS, PeriodType } from '../../types';

interface DiagramData {
    name: string;
    value: number;
    color: string;
}

interface RoundDiagramProps {
    title: string;
    data: DiagramData[];
    selectedPeriod: PeriodType;
    onPeriodChange: (period: PeriodType) => void;
    onPrevCard: () => void;
    onNextCard: () => void;
}

const COLORS = {
    individual: '#D16FFF',  // Более насыщенный фиолетовый
    ip: '#6F8FFF',         // Более насыщенный синий
    company: '#6FF7FF',    // Более насыщенный голубой
};

// Компонент для активного сектора при наведении
const renderActiveShape = (props: any) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;

    return (
        <g>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius + 10} // Увеличиваем размер при наведении
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
        </g>
    );
};

export const RoundDiagram: FC<RoundDiagramProps> = ({
    title,
    data,
    selectedPeriod,
    onPeriodChange,
    onPrevCard,
    onNextCard,
}) => {
    const [activeIndex, setActiveIndex] = useState<number | undefined>();

    const onPieEnter = (_: any, index: number) => {
        setActiveIndex(index);
    };

    const onPieLeave = () => {
        setActiveIndex(undefined);
    };

    return (
        <Box sx={styles.container}>
            <Box sx={styles.header}>
                <Box sx={styles.titleContainer}>
                    <IconButton onClick={onPrevCard}>
                        <ChevronLeft />
                    </IconButton>
                    <Typography variant="h6">{title}</Typography>
                    <IconButton onClick={onNextCard}>
                        <ChevronRight />
                    </IconButton>
                </Box>
                <FormControl variant="standard" sx={styles.periodSelect}>
                    <Select
                        value={selectedPeriod}
                        onChange={(e) => onPeriodChange(e.target.value as PeriodType)}
                    >
                        {Object.values(PERIODS).map(({ value, label }) => (
                            <MenuItem key={value} value={value}>
                                {label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>

            <Box sx={styles.chartWrapper}>
                <Box sx={styles.chartContainer}>
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={70}
                                outerRadius={100}
                                paddingAngle={0} // Убираем отступы между секторами
                                dataKey="value"
                                onMouseEnter={onPieEnter}
                                onMouseLeave={onPieLeave}
                                activeIndex={activeIndex}
                                activeShape={renderActiveShape}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            {/* Добавляем текст в центр при наведении */}
                            {activeIndex !== undefined && (
                                <text
                                    x="50%"
                                    y="50%"
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    style={{ fontSize: '16px', fontWeight: 'bold' }}
                                >
                                    {data[activeIndex].value}
                                </text>
                            )}
                        </PieChart>
                    </ResponsiveContainer>
                </Box>
                <Box sx={styles.legendContainer}>
                    {data.map((entry, index) => (
                        <Box
                            key={index}
                            sx={styles.legendItem}
                            onMouseEnter={() => setActiveIndex(index)}
                            onMouseLeave={() => setActiveIndex(undefined)}
                        >
                            <Box sx={{
                                ...styles.legendColor,
                                backgroundColor: entry.color,
                                transform: activeIndex === index ? 'scale(1.2)' : 'scale(1)',
                                transition: 'transform 0.2s ease-in-out'
                            }} />
                            <Typography>{entry.name}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default RoundDiagram;