import { SxProps, Theme } from "@mui/material";


export const styles: Record<string, SxProps<Theme>> = {
    table: {
        borderRadius: '12px',
        boxShadow: '1px 8px 12px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
    },
    tableHeader: {
        backgroundColor: '#333333',
        color: '#FFFFFF',
        fontSize: '14px',
        fontWeight: 500,
        '& span': {
            padding: '0 8px',
            textAlign: 'left',
            whiteSpace: 'normal',
            wordBreak: 'break-word',
            borderRight: '1px solid rgba(255, 255, 255, 0.1)',
            '&:last-child': {
                borderRight: 'none'
            }
        }
    },
    tableRow: {
        fontSize: '14px',
        transition: 'background-color 0.2s ease',
        '& span': {
            padding: '0 8px',
            whiteSpace: 'normal',
            wordBreak: 'break-word',
            borderRight: '1px solid rgba(0, 0, 0, 0.1)',
            '&:last-child': {
                borderRight: 'none'
            }
        }
    }
};