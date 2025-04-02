import { FC, useState } from "react";
import { Box, TextField } from "@mui/material";
import { styles } from "./AccountingInfo.styles.ts";

import PassportData from "../PassportData/PassportData.tsx";
import PaymentDetails from "../PaymentDetails/PaymentDetails.tsx";

const AccountingInfo: FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Box sx={styles.additionalSection}>
            <Box
                sx={styles.collapsibleHeader}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <Box sx={styles.formDescription}>
                    Для ведения бухгалтерии в сервисе заполните следующие данные
                </Box>
                <Box
                    sx={{
                        ...styles.expandIcon,
                        transform: isExpanded ? 'rotate(180deg)' : 'none'
                    }}
                >
                    ▼
                </Box>
            </Box>

            <Box
                sx={{
                    ...styles.collapsibleContent,
                    ...(isExpanded && { '&.expanded': styles.collapsibleContent['&.expanded'] })
                }}
            >
                <TextField
                    label="ИНН"
                    variant="standard"
                    fullWidth
                />
                <TextField
                    label="Адрес регистрации"
                    variant="standard"
                    fullWidth
                />
            </Box>
            {isExpanded && (
                <>
                    <PassportData />
                    <PaymentDetails />
                </>
            )}
        </Box>
    );
};

export default AccountingInfo;