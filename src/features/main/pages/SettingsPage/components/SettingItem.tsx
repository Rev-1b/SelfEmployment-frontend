import { FC, useState } from "react";
import { Box, Typography, Collapse, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import { styles } from '../SettingsPage.styles.ts'

interface SettingItemProps {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
}

const SettingItem: FC<SettingItemProps> = ({ icon, title, children }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Box sx={styles.settingItem}>
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                style={styles.settingButton as React.CSSProperties}
            >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={styles.settingIcon}>
                        {icon}
                    </Box>
                    <Typography variant="body1">{title}</Typography>
                </Box>
                <IconButton size="small">
                    {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
            </button>
            <Collapse in={isExpanded}>
                <Box sx={styles.settingContent}>
                    {children}
                </Box>
            </Collapse>
        </Box>
    );
};

export default SettingItem;