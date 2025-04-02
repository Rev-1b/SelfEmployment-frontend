import { FC, useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';

interface ActionsMenuProps {
    recordId: number | string;
}

const ActionsMenu: FC<ActionsMenuProps> = ({ recordId }) => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleEdit = () => {
        navigate(`${recordId}`);
        handleClose();
    };

    const handleDownload = () => {
        // логика скачивания
        handleClose();
    };

    // и т.д. для других действий

    return (
        <>
            <IconButton onClick={handleClick}>
                <MoreVertIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleEdit}>Редактировать</MenuItem>
                <MenuItem onClick={handleDownload}>Скачать</MenuItem>
                <MenuItem>Отправить</MenuItem>
                <MenuItem>Создать платеж</MenuItem>
                <MenuItem>Удалить</MenuItem>
            </Menu>
        </>
    );
};

export default ActionsMenu;