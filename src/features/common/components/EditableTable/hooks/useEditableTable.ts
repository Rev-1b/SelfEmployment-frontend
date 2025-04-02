import { useState } from 'react';
import { TableRecord } from '../types.ts';

export interface UseEditableTableProps<T extends TableRecord> {
    initialRecords: T[];
    emptyRecord: Omit<T, 'id'>;
    onAdd: (record: Omit<T, 'id'>) => Promise<void>;
    onEdit: (record: T) => Promise<void>;
    onDelete: (id: number) => Promise<void>;
}

export const useEditableTable = <T extends TableRecord>({
    initialRecords,
    emptyRecord,
    onAdd,
    onEdit,
    onDelete
}: UseEditableTableProps<T>) => {
    const [records, setRecords] = useState<T[]>(initialRecords);
    const [isAdding, setIsAdding] = useState(false);
    const [newRecord, setNewRecord] = useState<Omit<T, 'id'>>(emptyRecord);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editingRecord, setEditingRecord] = useState<T | null>(null);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [recordToDelete, setRecordToDelete] = useState<number | null>(null);

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

    const handleEdit = (id: number) => {
        const recordToEdit = records.find(record => record.id === id);
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

    const handleDeleteClick = (id: number) => {
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
        handleCancelAdd: () => {
            setIsAdding(false);
        },
        handleCancelEdit: () => {
            setEditingId(null);
            setEditingRecord(null);
        },
        handleCancelDelete: () => {
            setDeleteDialogOpen(false);
            setRecordToDelete(null);
        }
    };
}; 