import { describe, it, expect } from 'vitest';
import { formatDateRange } from './formatDate';

describe('formatDateRange', () => {
  it('should format a valid date string into month and year', () => {
    const result = formatDateRange('2025-11-01', '2026-04-01');
    expect(result).toBe('Nov 2025 – Apr 2026');
  });

  it('should handle "Present" as the end date correctly', () => {
    const result = formatDateRange('2022-12-01', 'Present');
    expect(result).toBe('Dec 2022 – Present');
  });
});
