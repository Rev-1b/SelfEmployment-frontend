export const styles = {
    statisticsSection: {
        padding: '24px',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '1px 8px 12px rgba(0, 0, 0, 0.1)',
    },
    statsContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
    },
    statRow: {
        display: 'grid',
        gridTemplateColumns: '100px 1fr 40px',
        alignItems: 'center',
        gap: '16px',
    },
    barContainer: {
        height: '24px',
        backgroundColor: '#F8F8F8',
        borderRadius: '4px',
        overflow: 'hidden',
    },
    bar: (color: string, width: number) => ({
        height: '100%',
        width: `${width}%`,
        backgroundColor: color,
        transition: 'width 0.3s ease-in-out',
    }),
    value: {
        fontWeight: 500,
        textAlign: 'right',
    }
}