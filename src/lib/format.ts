// Shared number formatting helpers used across the "Notre Réseau" section.

export function formatStudents(num: number): string {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(num % 1000000 === 0 ? 0 : 1)}M`;
  }
  if (num >= 1000) {
    return `${Math.round(num / 100) / 10}k`.replace(".0k", "k");
  }
  return num.toString();
}
