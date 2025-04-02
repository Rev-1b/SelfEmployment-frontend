import { FC } from "react";
import { DialogTitle, DialogContent, Button, DialogActions, Dialog } from "@mui/material"

interface ItemDeleteDialogProps {
    deleteDialogOpen: boolean;
    handleConfirmDelete: () => Promise<void>;
    handleCancelDelete: () => void;
};

const ItemDeleteDialog: FC<ItemDeleteDialogProps> = ({
    deleteDialogOpen,
    handleConfirmDelete,
    handleCancelDelete,
}) => {
    return (
        <Dialog open={deleteDialogOpen} onClose={handleCancelDelete}>
            <DialogTitle>Подтверждение удаления</DialogTitle>
            <DialogContent>
                Вы действительно хотите удалить эту запись?
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCancelDelete}>Отмена</Button>
                <Button onClick={handleConfirmDelete} color="error">
                    Удалить
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ItemDeleteDialog;