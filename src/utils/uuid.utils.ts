import { v4 as uuidv4 } from 'uuid';

export const UuidUtils = () => {
  /**
   * возвращает уникальный id
   */
  const getUuid = () => {
    return uuidv4();
  };

  return {
    getUuid,
  };
};
