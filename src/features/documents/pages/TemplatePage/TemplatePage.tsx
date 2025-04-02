import { FC } from 'react';
import { Box } from '@mui/material';

import TemplateForm from './components/TemplateForm';

const TemplatePage: FC = () => {
    const handleDataUpdate = async () => {
        // общая логика обновления
    };

    // if (isLoading) {
    //     return <LoadingSpinner />;
    // }

    return (
        <>
            <Box sx={{ display: 'flex', gap: '24px', flexDirection: 'column' }}>
                <TemplateForm onSuccess={handleDataUpdate}/>
            </Box>
        </>
    );
};

export default TemplatePage; 