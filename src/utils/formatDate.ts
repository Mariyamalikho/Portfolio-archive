export function formatDateRange(startDate: string, endDate: string | 'Present'): string {
  const formatOptions: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' };
  
  const parseDate = (dateString: string) => {
    if (dateString === 'Present') return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', formatOptions);
  };

  return `${parseDate(startDate)} – ${parseDate(endDate)}`;
}
