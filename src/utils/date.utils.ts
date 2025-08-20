import { addDays as addDaysFns, format } from 'date-fns';
import { ru } from 'date-fns/locale';

export const DateUtils = () => {
  /**
   * Форматирует дату в строку формата "дд.мм.гггг"
   * @param {string | Date} date - Дата для форматирования (может быть строкой или объектом Date)
   * @returns {string} Отформатированная строка даты (например, "31.12.2023")
   */
  const formatDateToDdMmYyyy = (date: string | Date): string => {
    return format(date, getStringDdMmYyyy());
  };

  /**
   * Форматирует дату в строку формата "дд.мм.гг, ч:мм" (12-часовой формат без ведущего нуля)
   * @param {string | Date} date - Дата для форматирования
   * @returns {string | null} Отформатированная строка даты (например, "31.12.23, 9:30") или null, если дата не передана
   */
  const formatDateToDdMmYyHmm = (date: string | Date): string | null => {
    if (!date) {
      return null;
    }

    return format(date, 'dd.MM.yy, h:mm');
  };

  /**
   * Форматирует дату в строку формата "дд.мм.гг ЧЧ:мм" (24-часовой формат)
   * @param {string | Date} date - Дата для форматирования
   * @returns {string} Отформатированная строка даты (например, "31.12.23 21:30")
   */
  const formatDateToDdMmYyHhMm = (date: string | Date): string => {
    return format(date, 'dd.MM.yy HH:mm', { locale: ru });
  };

  /**
   * Возвращает текущую дату и время в формате "дд.мм.гг ЧЧ:мм:сс"
   * @returns {string} Текущая дата и время (например, "31.12.23 21:30:45")
   */
  const getDateDdMmYyHhMmSs = (): string => {
    return format(new Date(), 'dd.MM.yy HH:mm:ss');
  };

  /**
   * Возвращает новую дату с добавленными днями
   * @returns {Date} увеличенная на переданное число дней дата
   */
  const addDays = (date: Date | string, days: number): Date => {
    return addDaysFns(date, days);
  };

  /**
   * Возвращает формат строки даты "дд.мм.гггг"
   * @returns {string} формат строки даты (пример, "31.12.2023")
   */
  const getStringDdMmYyyy = (): string => {
    return 'dd.MM.yyyy';
  };

  return {
    formatDateToDdMmYyHhMm,
    getStringDdMmYyyy,
    addDays,
    getDateDdMmYyHhMmSs,
    formatDateToDdMmYyHmm,
    formatDateToDdMmYyyy,
  };
};
