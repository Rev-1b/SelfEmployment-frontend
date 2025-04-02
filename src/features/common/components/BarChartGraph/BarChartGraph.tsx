import { FC, useMemo } from "react";
import { Paper } from "@mui/material";
import { XAxis, CartesianGrid, YAxis, Bar, BarChart, Tooltip } from "recharts";
import { styles } from './BarChartGraph.styles.ts'
import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';

const rawData = [
    { date: '2024-04-25', amount: 0, id: 1 },
    { date: '2024-05-11', amount: 8000, id: 2 },
    { date: '2024-05-11', amount: 2000, id: 3 },
    { date: '2024-05-11', amount: 9000, id: 4 },
    { date: '2024-05-15', amount: 5000, id: 5 },
    { date: '2024-05-20', amount: 12000, id: 6 },
    { date: '2024-05-26', amount: 25000, id: 7 },
    { date: '2024-05-01', amount: 25000, id: 8 },
    { date: '2024-05-12', amount: 65000, id: 9 },
    { date: '2024-05-14', amount: 15000, id: 10 },
    { date: '2024-05-23', amount: 35000, id: 11},
];

const BarChartGraph: FC = () => {
    // Преобразуем данные для отображения отдельных платежей в один день
    const processedData = useMemo(() => {
        const groupedByDate = rawData.reduce((acc, curr) => {
            if (!acc[curr.date]) {
                acc[curr.date] = {
                    date: curr.date,
                    total: 0,
                    payments: []
                };
            }
            acc[curr.date].payments.push({
                amount: curr.amount,
                id: curr.id
            });
            acc[curr.date].total += curr.amount;
            return acc;
        }, {} as Record<string, { date: string; total: number; payments: Array<{ amount: number; id: number }> }>);

        // Преобразуем в формат для графика
        return Object.entries(groupedByDate).map(([date, data]) => {
            const result: any = { date };
            data.payments.forEach((payment, index) => {
                result[`payment${payment.id}`] = payment.amount;
            });
            return result;
        });
    }, []);

    const formatXAxis = (dateStr: string) => {
        const date = parseISO(dateStr);
        return format(date, 'd MMM', { locale: ru });
    };

    const formatTooltipDate = (dateStr: string) => {
        const date = parseISO(dateStr);
        return format(date, 'd MMMM yyyy', { locale: ru });
    };

    // Генерируем цвета для каждого платежа
    const paymentColors = ['#4A3AFF', '#6F5AFF', '#937AFF', '#B79AFF', '#DBBAFF'];

    // Получаем все уникальные ID платежей
    const paymentIds = useMemo(() => {
        return rawData.map(item => item.id);
    }, []);

    return (
        <>
            <Paper sx={styles.chartSection}>
                <BarChart
                    width={700}
                    height={430}
                    data={processedData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#9DB5C6" />
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
                    {paymentIds.map((id, index) => (
                        <Bar
                            key={id}
                            dataKey={`payment${id}`}
                            stackId="a"
                            fill={paymentColors[index % paymentColors.length]}
                            name={`Платёж ${index + 1}`}
                        />
                    ))}
                </BarChart>
            </Paper>
        </>
    );
};

export default BarChartGraph;