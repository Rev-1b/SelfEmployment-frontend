import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import { styles } from "./HeadSection.styles";

import CustomersIcon from '../../../../../../assets/mainImages/customers.svg'
import PaymentsIcon from '../../../../../../assets/mainImages/payments.svg'
import DocumentsIcon from '../../../../../../assets/mainImages/documents.svg'

interface HeadSectionProps {
    userName: string;
    profit: number;
}

const HeadSection: FC<HeadSectionProps> = ({ userName, profit }) => {
    return (
        <>
            <Typography variant="h4" sx={{ marginBottom: '24px', padding: '20px' }}>
                {userName}
            </Typography>

            <Box sx={styles.buttonGroup}>
                <Button
                    variant="contained"
                    startIcon={<img src={PaymentsIcon} alt="payments" />}
                    sx={styles.button}
                >
                    Добавить платеж
                </Button>
                <Button
                    variant="contained"
                    startIcon={<img src={DocumentsIcon} alt="documents" />}
                    sx={styles.button}
                >
                    Добавить документ
                </Button>
                <Button
                    variant="contained"
                    startIcon={<img src={CustomersIcon} alt="customers" />}
                    sx={styles.button}
                >
                    Добавить заказчика
                </Button>
            </Box>

            <Box sx={{ marginBottom: '32px'}}>
                <Typography variant="h5">
                    Прибыль за последний месяц: {profit.toLocaleString()} ₽
                </Typography>
            </Box>
        </>
    );
};

export default HeadSection;