import { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
    container: {
        width: '100%',
        backgroundColor: '#fff',
    },
    addButton: {
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        color: '#1976d2',
        cursor: 'pointer',
        mb: 2,
        '&:hover': {
            opacity: 0.8
        }
    },
    tableContainer: {
        boxShadow: 'none',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        overflow: 'hidden',
    },
    tableHead: {
        backgroundColor: '#424242',
        '& th': {
            color: 'white',
            fontWeight: 500,
            padding: '10px 16px',
        }
    },
    tableRow: {
        '&:nth-of-type(odd)': {
            backgroundColor: '#fafafa',
        },
        '& td': {
            padding: '12px 16px',
            fontSize: '0.875rem',
        }
    },
    textCell: {
        borderRight: '1px solid rgba(255, 255, 255, 0.1)',
        '&:last-child': {
            borderRight: 'none'
        }
    },
    editingForm: {
        alignItems: 'center',
        padding: '12px 16px',
        '& .MuiTextField-root': {
            width: '100%',
        }
    },
    actionButtons: {
        display: 'flex',
        justifyContent: 'center',
        gap: 1
    }
};
