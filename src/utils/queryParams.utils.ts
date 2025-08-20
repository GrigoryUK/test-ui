import qs, { BooleanOptional, IParseOptions, IStringifyOptions, ParsedQs } from 'qs';

export const QueryParamsUtils = () => {
  /**
   * Парсит строку запроса URL в объект
   * @public
   * @param {string} str - Строка запроса для парсинга (например, "name=John&age=30")
   * @param {IParseOptions<BooleanOptional>} [options] - Опциональные настройки парсинга
   * @param {never} [options.decoder] - Опциональный кастомный декодер значений
   * @returns {ParsedQs} Объект с распарсенными данными
   * @example
   * QsUtils.parse("name=John&age=30"); // { name: "John", age: "30" }
   */
  const parse = (str: string, options?: IParseOptions<BooleanOptional> & { decoder?: never | undefined }): ParsedQs => {
    return qs.parse(str, options);
  };

  /**
   * Преобразует объект в строку запроса URL
   * @public
   * @param {any} obj - Объект для сериализации
   * @param {IStringifyOptions<BooleanOptional>} [options] - Опциональные настройки сериализации
   * @returns {string} Строка запроса
   * @example
   * QsUtils.stringify({ name: "John", age: 30 }); // "name=John&age=30"
   */
  const stringify = (obj: any, options?: IStringifyOptions<BooleanOptional>): string => {
    return qs.stringify(obj, options);
  };

  /**
   * Парсит строку запроса URL в объект
   * @public
   * @template T - Тип возвращаемого объекта (по умолчанию any)
   * @param {string} search - Строка запроса (например: "?name=John&age=30")
   * @returns {T} Объект с распарсенными параметрами
   */
  const parseSearchString = <T = any>(search: string): T => {
    const defaultOptions: IParseOptions<BooleanOptional> & { decoder?: any } = {
      ignoreQueryPrefix: true,
      arrayLimit: 200,
      decoder: getDecoder(),
    };

    return parse(search, { ...defaultOptions }) as T;
  };

  /**
   * Преобразует объект параметров в строку запроса URL
   * @public
   * @param {Record<string, any>} params - Объект с параметрами
   * @param {string} [prefix] - Опциональный префикс для вложенных свойств (формирует точечную нотацию)
   * @returns {string} Строка параметров в формате key=value
   */
  const getParams = (params: Record<string, any>, prefix?: string): string => {
    const { regularParams, additionalParams } = Object.keys(params).reduce<{
      regularParams: Record<string, any>;
      additionalParams: string[];
    }>(
      (acc, key) => {
        if (!isNoEmptyParam(params)(key)) {
          return acc;
        }

        const value = params[key];

        const prefixedKey = getKey(key, prefix);

        if (Array.isArray(value)) {
          const arrayParams = value.map((item) => `${prefixedKey}=${item}`);
          acc.additionalParams.push(...arrayParams);
        } else if (typeof value === 'object' && value !== null && !(value instanceof Date)) {
          const nestedParams = getParams(value, prefixedKey);

          if (nestedParams) {
            acc.additionalParams.push(nestedParams);
          }
        } else {
          acc.regularParams[prefixedKey] = value;
        }

        return acc;
      },
      { regularParams: {}, additionalParams: [] },
    );

    const stringifiedQs = stringify(regularParams);

    return [stringifiedQs, ...additionalParams].filter(Boolean).join('&');
  };

  /**
   * Возвращает кастомный декодер значений для парсинга
   * @private
   * @returns {Function} Декодер, преобразующий:
   * - "true"/"false" в boolean
   * - числовые строки в number
   * - остальные случаи обрабатывает стандартным декодером
   */
  const getDecoder = (): ((str: string, defaultDecoder: (str: string) => unknown) => unknown) => {
    return (str, defaultDecoder) => {
      switch (str) {
        case 'true':
          return true;
        case 'false':
          return false;
        default:
          return isNumeric(str) ? Number(str) : defaultDecoder(str);
      }
    };
  };

  /**
   * @private
   */
  const isNumeric = (str: string): boolean => {
    if (!isFinite(+str)) {
      return false;
    }

    if (str[0] === '0') {
      return str.length === String(+str).length;
    }

    return true;
  };

  /**
   * @private
   */
  const getKey = (key: string, prefix?: string): string => {
    return `${prefix ? prefix + '.' : ''}${key}`;
  };

  /**
   * @private
   */
  const isNoEmptyParam = (params: any) => {
    return (key: string) => {
      const elem = params[key];

      return Array.isArray(elem) ? !!elem.length : elem === 0 || (elem !== null && elem !== undefined && elem !== '');
    };
  };

  return {
    parse,
    stringify,
    parseSearchString,
    getParams,
  };
};
