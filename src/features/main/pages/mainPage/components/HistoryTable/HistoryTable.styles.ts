export const styles = {
    documentsSection: {
        borderRadius: '12px',
        boxShadow: '1px 8px 12px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
    },
    tableHeader: {
        display: 'grid',
        gridTemplateColumns: '1.1fr 1.1fr 0.8fr 0.8fr',
        gap: '8px',
        padding: '6px 12px',
        alignItems: 'center',
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
        display: 'grid',
        gridTemplateColumns: '1.1fr 1.1fr 0.8fr 0.8fr',
        gap: '8px',
        padding: '12px 16px',
        alignItems: 'center',
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
    },
}