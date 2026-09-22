// Shared number formatting helpers used across the "Notre Réseau" section.

export function formatStudents(num: number, decimalSeparator: string = "."): string {
  if (num >= 1000000) {
    const value = (num / 1000000).toFixed(num % 1000000 === 0 ? 0 : 1);
    return `${value.replace(".", decimalSeparator)}M`;
  }
  if (num >= 1000) {
    const value = `${Math.round(num / 100) / 10}`.replace(".0", "");
    return `${value.replace(".", decimalSeparator)}k`;
  }
  return num.toString();
}
