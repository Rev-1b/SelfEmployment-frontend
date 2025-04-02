import { FC } from "react";
import { Box } from '@mui/material'
import { Outlet } from "react-router-dom";
import AgreementNavigation from "../../components/AgreementNavigation/AgreementNavigation";

const AgreementSectionPage: FC = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <AgreementNavigation />
            <Outlet />
        </Box>
    );
};

export default AgreementSectionPage;