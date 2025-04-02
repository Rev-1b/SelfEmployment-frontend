import { useEffect, useState } from 'react';


interface UseTableDataProps<T> {
    fetchData?: () => Promise<T[]>;
    mockData?: T[];
};

export function useTableData<T>({ fetchData, mockData = [] }: UseTableDataProps<T>) {
    const [data, setData] = useState<T[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const handleFetch = async () => {
        try {
            setIsLoading(true);
            // Временно используем мок данные
            setData(mockData);
            // const response = await fetchData();
            // setData(response);
        } finally {
            setIsLoading(false);
        }
    };
    
    useEffect(() => {
        handleFetch();
    }, []);

    return { data, isLoading, refetch: handleFetch };
};