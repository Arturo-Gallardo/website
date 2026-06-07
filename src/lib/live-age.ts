export const MS_IN_YEAR = 365.25 * 24 * 60 * 60 * 1000;
export const TICK_MS = 10;
export const DECIMAL_PLACES = 14;

export function formatLiveAge(birthDate: string, now = Date.now()) {
  const birthday = new Date(`${birthDate}T00:00:00.000Z`);
  const diffInMs = now - birthday.getTime();

  return (diffInMs / MS_IN_YEAR).toFixed(DECIMAL_PLACES);
}
