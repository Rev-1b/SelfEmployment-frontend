export const PERIODS = {
    month: {
        value: 'month',
        label: 'За месяц',
    },
    threeMonths: {
        value: '3months',
        label: 'За 3 месяца',
    },
    year: {
        value: 'year',
        label: 'За год',
    },
} as const;

export type PeriodType = typeof PERIODS[keyof typeof PERIODS]['value'];
