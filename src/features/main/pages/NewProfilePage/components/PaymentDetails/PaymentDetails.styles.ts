export const styles = {
    formDescription: {
        margin: '40px auto 20px auto',
        fontSize: '20px',
        fontWeight: '600',
        color: '#333',
    },
    container: {
        backgroundColor: '#FEFEFF',
        borderRadius: '4px',
        mb: 3,
    },
    addButton: {
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        mb: 2,
        color: '#1D1D93',
        fontSize: '18px',
        cursor: 'pointer',
        justifyContent: 'flex-start',
        '&:hover': {
            opacity: 0.7
        }
    },
    tableHeader: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr) 1.1fr 0.7fr 1.5fr 40px 40px',
        gap: '8px',
        padding: '2px 8px',
        alignItems: 'center',
        backgroundColor: '#333',
        borderRadius: '4px',
        color: 'white',
        fontSize: '14px',
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
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr) 1.1fr 0.7fr 1.5fr 40px 40px',
        gap: '8px',
        padding: '8px',
        alignItems: 'center',
        fontSize: '14px',
        borderBottom: '1px solid #ddd',
        '& > *': {
            padding: '0 8px',
            whiteSpace: 'normal',
            wordBreak: 'break-word',
            borderRight: '1px solid rgba(0, 0, 0, 0.05)',
            '&:last-child': {
                borderRight: 'none'
            }
        },
        '&.adding-row': {
            backgroundColor: '#e8e8e8',
            '& .MuiTextField-root': {
                width: '100%',
                '& .MuiOutlinedInput-root': {
                    backgroundColor: '#fff',
                    height: '32px',
                    '& input': {
                        padding: '4px 8px',
                        height: '100%'
                    }
                }
            }
        }
    },
    actionButtons: {
        display: 'flex',
        gap: 1,
        justifyContent: 'flex-end'
    }
}