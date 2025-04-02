import { FC } from "react";
import { styles } from './ButtonCluster.styles.ts';
import { Box } from '@mui/material';
import { MidButton } from "../MidButton/MidButton.tsx";

interface ButtonClusterProps {
    onSaveClick?: () => void,
    onCancelClick?: () => void,
}

const ButtonCluster: FC<ButtonClusterProps> = ({
    onSaveClick = () => console.log('Сохранить'),
    onCancelClick = () => console.log('Отмена'),
}) => {
    return (
        <Box sx={styles.actionButtons}>
            <MidButton variant="primary" onClick={onSaveClick}>
                Сохранить
            </MidButton>
            <MidButton variant="secondary" onClick={onCancelClick}>
                Отмена
            </MidButton>
        </Box>
    );
};

export default ButtonCluster;