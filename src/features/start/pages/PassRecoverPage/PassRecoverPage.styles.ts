import { SxProps, Theme } from "@mui/material";
import { commonStyles } from "../../common/mui/LeftSideCommon";

export const styles: Record<string, SxProps<Theme>> = {
    ...commonStyles,
    notificationFont: {
        fontSize: '16px',
        fontWeight: 400,
    },

    returnLink: {
        ...commonStyles.commonLink,
        fontSize: '16px',
    }
}