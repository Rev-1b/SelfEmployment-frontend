import { FC } from 'react';
import EditableTable from '../../../../../common/components/EditableTable/EditableTable.tsx';
import { FrontendRequisite } from '../../types';
import { usePaymentDetails } from '../../hooks/usePaymentDetails.ts';

const columns = [
    // { field: 'accountName', headerName: 'Название счета'},
    // { field: 'id', headerName: 'ID'},
    { field: 'bankName', headerName: 'Банк' },
    { field: 'cardNumber', headerName: 'Номер карты' },
    { field: 'userAccount', headerName: 'Номер счета' },
    { field: 'bic', headerName: 'БИК' },
    { field: 'bankAccount', headerName: 'Корр. счет' }
];

const PaymentDetails: FC = () => {
    const {
        records,
        isLoading,
        error,
        handleAdd,
        handleEdit,
        handleDelete,
    } = usePaymentDetails();

    return (
        <EditableTable<FrontendRequisite>
            columns={columns}
            records={records}
            onAdd={handleAdd}
            onEdit={handleEdit}
            onDelete={handleDelete}
        />
    );
};

export default PaymentDetails;