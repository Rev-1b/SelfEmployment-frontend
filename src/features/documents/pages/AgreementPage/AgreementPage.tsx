import { FC, useState } from "react";
import { Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ru } from "date-fns/locale";
import { styles } from "./AgreementPage.styles";
import AgreementFields from "./components/AgreementFields";
import CustomerFields from "./components/CustomerFields";
import { AgreementFormData } from "./types.ts";
import ButtonCluster from "../../../common/components/ButtonCluster/ButtonCluster.tsx";
import DocumentRedactor from "../../../common/components/DocumentRedactor/DocumentRedactor.tsx";

const AgreementPage: FC = () => {
    const [formData, setFormData] = useState<AgreementFormData>({
        title: '',
        number: '',
        startDate: null,
        endDate: null,
        template: '',
        requisites: '',
        amount: '',
        customer: '',
        customerRequisites: '',
    });

    const handleChange = (field: keyof AgreementFormData) => (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [field]: event.target.value,
        }));
    };

    const handleDateChange = (field: 'startDate' | 'endDate') => (
        date: Date | null
    ) => {
        setFormData((prev) => ({
            ...prev,
            [field]: date,
        }));
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
            <Box sx={styles.form}>
                <AgreementFields
                    formData={formData}
                    onFieldChange={handleChange}
                    onDateChange={handleDateChange}
                />
                <CustomerFields
                    formData={formData}
                    onFieldChange={handleChange}
                />
                <DocumentRedactor />
                <ButtonCluster />
            </Box>
        </LocalizationProvider>
    );
};

export default AgreementPage;