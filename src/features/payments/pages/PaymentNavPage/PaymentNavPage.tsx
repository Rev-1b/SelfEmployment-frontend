import { FC } from "react";
import { Box } from '@mui/material'
import { styles } from './PaymentNavPage.styles.ts'


import ContentBox from "../../../common/components/ContentBox/ContentBox.tsx"
import HeadNavButton from "../../../common/components/HeadNavButton/HeadNavButton.tsx";
import { useNavigate, useLocation, Outlet } from "react-router-dom";


const PaymentNavPage: FC = () => {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <ContentBox>
            <Box sx={styles.navSection}>
                <HeadNavButton
                    label="Платежи"
                    state={location.pathname.startsWith('/payments') &&
                        !location.pathname.startsWith('/payments/statistic')
                        ? 'active' : 'default'}
                    onClick={() => { navigate('/payments') }}
                />
                <HeadNavButton
                    label="Статистика"
                    state={location.pathname.startsWith('/payments/statistic') ? 'active' : 'default'}
                    onClick={() => { navigate('statistic') }}
                />
            </Box>
            <Box sx={{ marginTop: '40px' }}>
                <Outlet />
            </Box>
        </ContentBox>
    );
};

export default PaymentNavPage;