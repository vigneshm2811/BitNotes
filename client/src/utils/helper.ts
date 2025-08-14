export const getColorClasses = (color: string): string => {
  const colorMap: Record<string, string> = {
    yellow:
      'bg-yellow-100 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',
    amber:
      'bg-amber-100 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800',
    green:
      'bg-green-100 dark:bg-green-900/20 border-green-200 dark:border-green-800',
    blue: 'bg-blue-100 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
    teal: 'bg-teal-100 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800',
    red: 'bg-red-100 dark:bg-red-900/20 border-red-200 dark:border-red-800',
    gray: 'bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700',
  };
  return colorMap[color] || colorMap.yellow;
};
