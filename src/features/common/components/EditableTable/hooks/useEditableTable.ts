import { useState } from 'react';
import { TableRecord } from '../types.ts';

export interface UseEditableTableProps<T extends TableRecord> {
    records: T[];
    emptyRecord: Omit<T, 'id'>;
    onAdd: (record: Omit<T, 'id'>) => Promise<void>;
    onEdit: (record: T) => Promise<void>;
    onDelete: (id: string | number) => Promise<void>;
}

export const useEditableTable = <T extends TableRecord>({
    records,
    emptyRecord,
    onAdd,
    onEdit,
    onDelete
}: UseEditableTableProps<T>) => {
    const [isAdding, setIsAdding] = useState(false);
    const [newRecord, setNewRecord] = useState<Omit<T, 'id'>>(emptyRecord);
    const [editingId, setEditingId] = useState<string | number | null>(null);
    const [editingRecord, setEditingRecord] = useState<T | null>(null);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [recordToDelete, setRecordToDelete] = useState<string | number | null>(null);

    const handleAdd = async () => {
        try {
            await onAdd(newRecord);
            setIsAdding(false);
            setNewRecord(emptyRecord);
        } catch (error) {
            console.error('Error adding record:', error);
        }
    };

    const handleRecordChange = (field: keyof Omit<T, 'id'>, value: any) => {
        setNewRecord(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleEdit = (id: string | number) => {
        const idStr = id.toString();
        const recordToEdit = records.find(record => record.id.toString() === idStr);

        if (recordToEdit) {
            setEditingId(id);
            setEditingRecord(recordToEdit);
        }
    };

    const handleSaveEdit = async () => {
        if (editingRecord) {
            try {
                await onEdit(editingRecord);
                setEditingId(null);
                setEditingRecord(null);
            } catch (error) {
                console.error('Error editing record:', error);
            }
        }
    };

    const handleEditChange = (field: keyof T, value: any) => {
        setEditingRecord(prev => prev ? {
            ...prev,
            [field]: value
        } : prev);
    };

    const handleDeleteClick = (id: string | number) => {
        setRecordToDelete(id);
        setDeleteDialogOpen(true);
    };

    const handleConfirmDelete = async () => {
        if (recordToDelete !== null) {
            try {
                await onDelete(recordToDelete);
                setDeleteDialogOpen(false);
                setRecordToDelete(null);
            } catch (error) {
                console.error('Error deleting record:', error);
            }
        }
    };

    return {
        records,
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
        handleCancelDelete: () => {
            setDeleteDialogOpen(false);
            setRecordToDelete(null);
        },
        handleCancelAdd: () => {
            setIsAdding(false);
            setNewRecord(emptyRecord);
        },
        handleCancelEdit: () => {
            setEditingId(null);
            setEditingRecord(null);
        }
    };
}; 