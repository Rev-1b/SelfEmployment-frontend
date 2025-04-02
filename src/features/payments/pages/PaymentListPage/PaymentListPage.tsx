import { FC } from 'react';

import { useTableData } from '../../../common/hooks/useTableData.ts';
import PaymentTable from './components/PaymentTable.tsx';
import { mockPayments } from './mockPayments.ts';


const PaymentListPage: FC = () => {
    const { data, isLoading, refetch } = useTableData({
        // fetchData: () => console.log('Aboba'),
        mockData: mockPayments
    });

    return (
        <PaymentTable data={data}/>
    );
};

export default PaymentListPage; 