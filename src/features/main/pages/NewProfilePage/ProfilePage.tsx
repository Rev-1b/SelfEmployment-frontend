import { FC } from "react";
import { Box } from "@mui/material";

import ContentBox from "../../../../features/common/components/ContentBox/ContentBox.tsx";
import HeadNavButton from "../../../../features/common/components/HeadNavButton/HeadNavButton.tsx";
import ButtonCluster from "../../../../features/common/components/ButtonCluster/ButtonCluster.tsx";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo.tsx";
import AccountingInfo from './components/AccountingInfo/AccountingInfo.tsx'


const ProfilePage: FC = () => {
    return (
        <ContentBox>
            <HeadNavButton
                label="Профиль"
                state="active"
            />
            <Box>
                <PersonalInfo />
                <AccountingInfo />
                <ButtonCluster />
            </Box>
        </ContentBox>
    );
};


export default ProfilePage;