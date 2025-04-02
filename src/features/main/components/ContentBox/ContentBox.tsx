import { FC, ReactNode } from "react";
import { Box } from "@mui/material"
import { styles } from './ContentBox.styles.ts'

interface ContentBoxProps {
    children: ReactNode;
};

const ContentBox: FC<ContentBoxProps> = ({children}) => {
    return (
        <Box sx={styles.contentBox}>
            {children}
        </Box>
    );
};

export default ContentBox;