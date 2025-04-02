import { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 3,
    },
    titleContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: 1,
    },
    periodSelect: {
        minWidth: 120,
    },
    chartWrapper: {
        flex: 1,
        display: 'flex',
        gap: 3,
    },
    chartContainer: {
        flex: '0 0 300px',
        height: 300,
    },
    legendContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 2,
    },
    legendItem: {
        display: 'flex',
        alignItems: 'center',
        gap: 1,
    },
    legendColor: {
        width: 16,
        height: 16,
        borderRadius: '50%',
    },
};
