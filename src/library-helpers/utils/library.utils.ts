export class LibraryUtils {
  public static getLoremEn(lengthSymbol: number = 100) {
    const lorem =
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, dignissimos distinctio dolore ducimus fuga impedit inventore praesentium. Culpa, cum, earum eos et eum fuga fugiat magnam nemo, pariatur quaerat vitae!';

    return lorem.substring(0, lengthSymbol);
  }

  public static getLoremRu(lengthSymbol: number = 100) {
    const lorem =
      'Не следует, однако, забывать, что дальнейшее развитие различных форм деятельности не даёт нам иного выбора, кроме определения переосмысления внешнеэкономических политик.';

    return lorem.substring(0, lengthSymbol);
  }

  public static getCurrency(type: 'rub' | 'usd' = 'rub') {
    const typeToMap: Record<string, string> = {
      rub: '₽',
      usd: '$',
    };

    return typeToMap[type];
  }

  public static getRandomNumber(numberLength: number = 3) {
    if (numberLength <= 0) {
      return 0;
    }

    const min = Math.pow(10, numberLength - 1);

    const max = Math.pow(10, numberLength) - 1;

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public static createArray(lengthMassive: number = 3) {
    return Array.from({ length: lengthMassive }, (_, index) => index);
  }
}
