import { FC } from "react";
import { Box } from '@mui/material'
import { styles } from './CustomerNavPage.styles.ts'


import ContentBox from "../../../common/components/ContentBox/ContentBox.tsx"
import HeadNavButton from "../../../common/components/HeadNavButton/HeadNavButton.tsx";
import { useNavigate, useLocation, Outlet } from "react-router-dom";


const CustomerNavPage: FC = () => {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <ContentBox>
            <Box sx={styles.navSection}>
                <HeadNavButton
                    label="Заказчики"
                    state={location.pathname.startsWith('/customers') ? 'active' : 'default'}
                    onClick={() => { navigate('/customers') }}
                />
            </Box>
            <Box sx={{ marginTop: '40px' }}>
                <Outlet />
            </Box>
        </ContentBox>
    );
};

export default CustomerNavPage;