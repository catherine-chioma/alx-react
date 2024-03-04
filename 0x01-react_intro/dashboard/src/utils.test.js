import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

// Test for getFullYear function
test('getFullYear returns the correct year', () => {
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toBe(currentYear);
});

// Test for getFooterCopy function
test('correct footer copy', () => {
  expect(getFooterCopy(true)).toBe('Holberton School');
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

// Test for getLatestNotification function
test('returns right notification', () => {
  expect(getLatestNotification()).toBe(
    '<strong>Urgent requirement</strong> - complete by EOD'
  );
});
