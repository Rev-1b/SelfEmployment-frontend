import { FC, useMemo } from "react";
import { Paper } from "@mui/material";
import { XAxis, CartesianGrid, YAxis, Line, LineChart, Tooltip } from "recharts";
import { styles } from './Graph.styles.ts'
import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';

// Преобразуем моковые данные в формат с реальными датами
const rawData = [
    { date: '2024-04-25', amount: 0 },
    { date: '2024-05-11', amount: 8000 },
    { date: '2024-05-11', amount: 2000 },
    { date: '2024-05-11', amount: 9000 },
    { date: '2024-05-15', amount: 5000 },
    { date: '2024-05-20', amount: 12000 },
    { date: '2024-05-26', amount: 25000 },
];

const Graph: FC = () => {
    // Группируем данные по дням и суммируем amount
    const processedData = useMemo(() => {
        const groupedData = rawData.reduce((acc, curr) => {
            const date = curr.date;
            if (!acc[date]) {
                acc[date] = { date, amount: 0 };
            }
            acc[date].amount += curr.amount;
            return acc;
        }, {} as Record<string, { date: string; amount: number }>);

        return Object.values(groupedData);
    }, []);

    const formatXAxis = (dateStr: string) => {
        const date = parseISO(dateStr);
        return format(date, 'd MMM', { locale: ru });
    };

    const formatTooltipDate = (dateStr: string) => {
        const date = parseISO(dateStr);
        return format(date, 'd MMMM yyyy', { locale: ru });
    };

    return (
        <>
            <Paper sx={styles.chartSection}>
                <LineChart
                    width={700}
                    height={500}
                    data={processedData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#E8E8F7" />
                    <XAxis
                        dataKey="date"
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={formatXAxis}
                        interval="preserveStartEnd"
                        style={{
                            fontSize: '12px',
                            fontFamily: 'Arial'
                        }}
                    />
                    <YAxis
                        tickFormatter={(value) => `${value.toLocaleString('ru-RU')}₽`}
                        tickLine={false}
                        axisLine={false}
                        style={{
                            fontSize: '12px',
                            fontFamily: 'Arial'
                        }}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#333',
                            border: 'none',
                            borderRadius: '4px',
                            color: '#fff',
                            padding: '8px 12px'
                        }}
                        formatter={(value: number) => [
                            `${value.toLocaleString('ru-RU')}₽`,
                            'Сумма'
                        ]}
                        labelFormatter={(dateStr) => formatTooltipDate(dateStr)}
                    />
                    <Line
                        type="monotone"
                        dataKey="amount"
                        stroke="#4A3AFF"
                        strokeWidth={2}
                        dot={{ r: 4, fill: '#4A3AFF' }}
                        activeDot={{ r: 6, fill: '#4A3AFF' }}
                    />
                </LineChart>
            </Paper>
        </>
    );
};

export default Graph;