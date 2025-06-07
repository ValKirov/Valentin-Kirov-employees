import { useEffect, useState } from 'react';
import { parseDate } from '../utils/utils';
import type { CsvRow, Result } from '../types/globals';

export const useEmployeeCollaboration = (data: CsvRow[]) => {
    const [results, setResults] = useState<Result[]>([]);
    const [mostHardworkingCombo, setMostHardworkingCombo] = useState<Result | null>(null);

    useEffect(() => {
        if (!data.length) return;

        const pairMap: Map<string, number> = new Map();

        for (let i = 0; i < data.length; i++) {
            const emp1 = data[i];
            const dateFrom1 = parseDate(emp1.DateFrom);
            const dateTo1 = parseDate(emp1.DateTo);

            for (let j = i + 1; j < data.length; j++) {
                const emp2 = data[j];

                if (emp1.ProjectID === emp2.ProjectID && emp1.EmpID !== emp2.EmpID) {
                    const dateFrom2 = parseDate(emp2.DateFrom);
                    const dateTo2 = parseDate(emp2.DateTo);

                    const overlapStart = new Date(Math.max(dateFrom1.getTime(), dateFrom2.getTime()));
                    const overlapEnd = new Date(Math.min(dateTo1.getTime(), dateTo2.getTime()));
                    const overlapTime = overlapEnd.getTime() - overlapStart.getTime();

                    if (overlapTime > 0) {
                        const daysTogether = Math.ceil(overlapTime / (1000 * 60 * 60 * 24));
                        const [id1, id2] = [emp1.EmpID, emp2.EmpID].sort();
                        const key = `${id1}-${id2}`;

                        pairMap.set(key, (pairMap.get(key) || 0) + daysTogether);
                    }
                }
            }
        }

        const convertedResults: Result[] = Array.from(pairMap.entries()).map(([key, totalDays]) => {
            const [FirstEmpId, SecondEmpId] = key.split("-");
            return {
                FirstEmpId,
                SecondEmpId,
                days: totalDays.toString()
            };
        });

        setResults(convertedResults);
    }, [data]);

    useEffect(() => {
        if (!results.length) return;

        const topResult = results.reduce((max, current) =>
            parseInt(current.days, 10) > parseInt(max.days, 10) ? current : max,
            results[0]);

        setMostHardworkingCombo(topResult);
    }, [results]);

    return { results, mostHardworkingCombo };
};
