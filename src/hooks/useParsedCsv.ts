import { useState } from 'react';
import type { CsvRow } from '../types/globals';

export const useParsedCsv = () => {
    const [data, setData] = useState<CsvRow[]>([]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = (event: ProgressEvent<FileReader>) => {
            const text = event.target?.result as string;
            const rows = text.replace('\r', '').trim().split('\n');
            const headers = ['EmpID', 'ProjectID', 'DateFrom', 'DateTo'];

            const parsedData: CsvRow[] = rows.map((row) => {
                const values = row.split(',').map((v) => v.trim());

                const rowObj: Partial<CsvRow> = {};
                headers.forEach((header, index) => {
                    rowObj[header as keyof CsvRow] = values[index];
                });

                return rowObj as CsvRow;
            });

            setData(parsedData);
        };

        reader.readAsText(file);
    };

    return { data, handleFileChange };
};
