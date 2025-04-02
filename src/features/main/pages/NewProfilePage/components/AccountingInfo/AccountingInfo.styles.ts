export const styles = {
    additionalSection: {
        mt: 8,
        mb: 16
    },

    collapsibleHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '16px 0',
        backgroundColor: '#FEFEFF',
        borderRadius: '4px',
        cursor: 'pointer',
        marginBottom: '16px',
        transition: 'background-color 0.2s ease',
        '&:hover': {
            backgroundColor: '#F7F7F8'
        }
    },

    collapsibleContent: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '24px',
        padding: 0,
        overflow: 'hidden',
        maxHeight: 0,
        opacity: 0,
        transition: 'all 0.3s ease-out',
        '&.expanded': {
            padding: '24px 0',
            maxHeight: '2000px',
            opacity: 1
        }
    },

    expandIcon: {
        color: '#666',
        fontSize: '12px',
        transition: 'transform 0.3s ease'
    },

    formDescription: {
        fontSize: '20px',
        fontWeight: '600',
        color: '#333',
    }
}