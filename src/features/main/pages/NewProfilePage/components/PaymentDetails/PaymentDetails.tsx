import { FC } from 'react';
import EditableTable from '../../../../../common/components/EditableTable/EditableTable.tsx';
import { PaymentRecord } from './types.ts';
import { mockRecords } from './constants.ts';
import { usePaymentDetails } from '../../hooks/usePaymentDetails.ts';

const columns = [
    { field: 'accountName', headerName: 'Название счета', width: '15%' },
    { field: 'bank', headerName: 'Банк', width: '15%' },
    { field: 'card', headerName: 'Номер карты', width: '20%' },
    { field: 'accountNumber', headerName: 'Номер счета', width: '20%' },
    { field: 'bik', headerName: 'БИК', width: '15%' },
    { field: 'correspondentAccount', headerName: 'Корр. счет', width: '15%' }
];
const PaymentDetails: FC = () => {
    const { records, handleAdd, handleEdit, handleDelete } = usePaymentDetails({ initialData: mockRecords });

    return (
        <EditableTable<PaymentRecord>
            columns={columns}
            records={records}
            onAdd={handleAdd}
            onEdit={handleEdit}
            onDelete={handleDelete}
        />
    );
};

export default PaymentDetails;