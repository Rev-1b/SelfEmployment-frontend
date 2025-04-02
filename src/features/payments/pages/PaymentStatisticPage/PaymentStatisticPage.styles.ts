import { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
    container: {
        display: 'flex',
        gap: 3,
        minHeight: '100%',
    },
    leftSection: {
        flex: '4',
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        height: '100%',
    },
    rightSection: {
        flex: '3',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'space-between',
        gap: 3,
        height: '100%',
    },
    incomeCard: {
        backgroundColor: 'background.paper',
        borderRadius: 1,
        flex: '0 0 auto',
    },
    periodSelector: {
        backgroundColor: 'background.paper',
        borderRadius: 1,
        display: 'flex',
        gap: 2,
        flex: '0 0 auto',
    },
    chartContainer: {
        backgroundColor: 'background.paper',
        borderRadius: 1,
        flex: '0 0 400px',
    },
    pieChartCard: {
        backgroundColor: '#F9F9FF',
        borderRadius: 3,
        flex: '0 0 300px',
    },
    statsCard: {
        backgroundColor: 'background.paper',
        borderRadius: 1,
        flex: '0 0 auto',
    },
    datePickerContainer: {
        display: 'flex',
        gap: 2,
        width: '100%',
    },
    periodSelect: {
        flex: '1 1 0',
        minWidth: 0,
        '& .MuiInput-underline:before': {
            bottom: -6,
        },
        '& .MuiInput-underline:after': {
            bottom: -6,
        },
    },
    dateField: {
        flex: '1 1 0',
        minWidth: 0,
    },
};