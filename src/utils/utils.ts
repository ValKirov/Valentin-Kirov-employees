export const parseDate = (dateStr: string): Date => {
    if (dateStr === 'NULL') return new Date(); // treat NULL as today
    const parsed = new Date(dateStr);
    if (isNaN(parsed.getTime())) {
        throw new Error(`Invalid date format: ${dateStr}`);
    }
    return parsed;
};
