import {
    Box,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography
} from '@mui/material';
import DeleteIcon from '../../../../assets/tableImages/deleteIcon.svg';
import AddIcon from '../../../../assets/tableImages/addIcon.svg';
import EditIcon from '../../../../assets/tableImages/updateIcon.svg';
import SpreadIcon from '../../../../assets/tableImages/spreadIcon.svg'

import { EditableTableProps, TableRecord } from './types.ts';
import { useEditableTable } from './hooks/useEditableTable';
import { styles } from './EditableTable.styles.ts';
import ItemDeleteDialog from './subComponents/ItemDeleteDialog.tsx';

const EditableTable = <T extends TableRecord>({
    columns,
    records,
    onAdd,
    onEdit,
    onDelete
}: EditableTableProps<T>) => {
    const {
        isAdding,
        newRecord,
        editingId,
        editingRecord,
        deleteDialogOpen,
        setIsAdding,
        handleAdd,
        handleRecordChange,
        handleEdit,
        handleSaveEdit,
        handleEditChange,
        handleDeleteClick,
        handleConfirmDelete,
        handleCancelDelete,
        handleCancelAdd,
        handleCancelEdit,
    } = useEditableTable({
        records,
        emptyRecord: {} as Omit<T, 'id'>,
        onAdd,
        onEdit,
        onDelete
    });

    return (
        <Box sx={styles.container}>
            <Box sx={styles.addButton} onClick={() => setIsAdding(true)}>
                +
                <Box sx={{ borderBottom: '1px solid currentColor' }}>
                    Создать
                </Box>
            </Box>

            <TableContainer sx={styles.tableContainer}>
                <Table>
                    <TableHead>
                        <TableRow sx={styles.tableHead}>
                            {columns.map((column) => (
                                <TableCell key={column.field}>
                                    <Typography sx={styles.textCell}>
                                        {column.headerName}
                                    </Typography>
                                </TableCell>
                            ))}
                            <TableCell sx={{ width: '80px' }}></TableCell>
                            <TableCell sx={{ width: '80px' }}>
                                <IconButton size="small">
                                    <img src={SpreadIcon} alt="spread" />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {isAdding && (
                            <TableRow sx={styles.editingRow}>
                                {columns.map((column) => (
                                    <TableCell key={column.field}>
                                        <TextField
                                            value={newRecord[column.field as keyof Omit<T, 'id'>] || ''}
                                            onChange={(e) => handleRecordChange(column.field as keyof Omit<T, 'id'>, e.target.value)}
                                            size="small"
                                        />
                                    </TableCell>
                                ))}
                                <TableCell>
                                    <IconButton size="small" onClick={handleAdd}>
                                        <img src={AddIcon} alt="add" />
                                    </IconButton>
                                </TableCell>
                                <TableCell>
                                    <IconButton size="small" onClick={handleCancelAdd}>
                                        <img src={DeleteIcon} alt="discard" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        )}
                        {records.map((record) => (
                            <TableRow key={record.id} sx={styles.tableRow}>
                                {editingId === record.id ? (
                                    <>
                                        {columns.map((column) => (
                                            <TableCell key={column.field}>
                                                <TextField
                                                    type='standart'
                                                    value={editingRecord[column.field] || ''}
                                                    onChange={(e) => handleEditChange(column.field, e.target.value)}
                                                    size="small"
                                                />
                                            </TableCell>
                                        ))}
                                        <TableCell>
                                            <IconButton size="small" onClick={handleSaveEdit}>
                                                <img src={AddIcon} alt="add" />
                                            </IconButton>
                                        </TableCell>
                                        <TableCell>
                                            <IconButton size="small" onClick={handleCancelEdit}>
                                                <img src={DeleteIcon} alt="discard" />
                                            </IconButton>
                                        </TableCell>
                                    </>
                                ) : (
                                    <>
                                        {columns.map((column) => (
                                            <TableCell key={column.field}>
                                                {record[column.field]}
                                            </TableCell>
                                        ))}
                                        <TableCell>
                                            <IconButton size="small" onClick={() => handleEdit(record.id)}>
                                                <img src={EditIcon} alt="edit" />
                                            </IconButton>
                                        </TableCell>
                                        <TableCell>
                                            <IconButton size="small" onClick={() => handleDeleteClick(record.id)}>
                                                <img src={DeleteIcon} alt="delete" />
                                            </IconButton>
                                        </TableCell>
                                    </>
                                )}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <ItemDeleteDialog
                deleteDialogOpen={deleteDialogOpen}
                handleConfirmDelete={handleConfirmDelete}
                handleCancelDelete={handleCancelDelete}
            />
        </Box>
    );
};

export default EditableTable;