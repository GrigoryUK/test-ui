import numeral from 'numeral';

export const NumeralUtils = () => {

 const formatter = new Intl.NumberFormat('ru-RU', {
    maximumFractionDigits: 0,
  });

  /**
   * Метод разделяющий сумму через пробел (например, "9 999 999")
   */
  const formatSumSpaceDelimeter = (value: number): string => {
    return formatter.format(value);
  }

  /**
   * Метод разделяющий сумму через точку (например, "9,999,999")
   */
  const formatSumCommaDelimeter = (value: number): string => {
    return numeral(value).format('0,0');
  }

 
  return {
    formatSumCommaDelimeter,
    formatSumSpaceDelimeter
  }
}
