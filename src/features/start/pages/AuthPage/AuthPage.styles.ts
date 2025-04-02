import { SxProps, Theme } from "@mui/material";
import { commonStyles } from "../../common/mui/LeftSideCommon.ts";

export const styles: Record<string, SxProps<Theme>> = {
    ...commonStyles,

    authRegLink: {
        ...commonStyles.commonLink,
        fontSize: '24px',
    },

    forgotPasswordLink: {
        ...commonStyles.commonLink,
        fontSize: '16px',
        fontWeight: 700,
    },
};