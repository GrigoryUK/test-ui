import { differenceInMinutes, parseISO } from 'date-fns';

export const ApiUtils = () => {
  /**
   * Возвращает заголовок Content-Type для JSON-запросов
   * @returns {Object} Объект с заголовком {'Content-Type': 'application/json'}
   */
  const getContentType = (): object => {
    return { 'Content-Type': 'application/json' };
  };

  /**
   * Проверяет, истекло ли время действия access token
   * @param {string} expires - Строка с датой истечения токена в ISO формате (например: "2023-12-31T23:59:59Z")
   * @returns {boolean}
   *   - true: если токен просрочен или истекает в течение 5 минут
   *   - false: если токен валиден
   * @example
   * ApiUtils.timeAccessTokenIsExpired("2023-12-31T23:59:59Z"); // false (если текущая дата раньше)
   */
  const timeAccessTokenIsExpired = (expires: string): boolean => {
    if (!expires) return true;

    const date = parseISO(expires);

    const currentDate = new Date();

    const difference = differenceInMinutes(currentDate, date);

    if (currentDate > date) {
      return true;
    }

    if (difference >= 0 && difference < 5) {
      return true;
    }

    return false;
  };

  return {
    getContentType,
    timeAccessTokenIsExpired,
  };
};
