export interface TableRecord {
    id: string | number;
    [key: string]: any;
}

export interface TableColumn {
    field: string;
    headerName: string;
    width?: number;
}

export interface EditableTableProps<T extends TableRecord> {
    columns: TableColumn[];
    records: T[];
    onAdd: (record: Omit<T, 'id'>) => Promise<void>;
    onEdit: (record: T) => Promise<void>;
    onDelete: (id: string | number) => Promise<void>;
}

export interface EditFormProps<T extends TableRecord> {
    columns: TableColumn[];
    editingRecord: T;
    onRecordChange: (field: keyof T, value: string) => void;
    onSave: () => void;
    onCancel: () => void;
} 