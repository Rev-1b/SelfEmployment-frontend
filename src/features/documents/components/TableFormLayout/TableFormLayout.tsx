import { FC } from "react";
import { Box } from '@mui/material';
import { Outlet } from "react-router-dom";

interface DocumentPageLayoutProps {
    TableComponent: FC<{ data: any[] }>;
    FormComponent: FC<{ onSuccess?: () => Promise<void> }>;
    tableData: any[];
    isLoading?: boolean;
}

const TableFormLayout: FC<DocumentPageLayoutProps> = ({
    TableComponent,
    FormComponent,
    tableData,
    isLoading
}) => {
    const handleDataUpdate = async () => {
        // общая логика обновления
    };

    // if (isLoading) {
    //     return <LoadingSpinner />;
    // }

    if (tableData.length === 0) {
        return <FormComponent onSuccess={handleDataUpdate} />;
    }

    return (
        <Box sx={{ display: 'flex', gap: '24px', flexDirection: 'column' }}>
            <TableComponent data={tableData} />
            <Outlet context={{ onSuccess: handleDataUpdate }} />
        </Box>
    );
};

export default TableFormLayout;