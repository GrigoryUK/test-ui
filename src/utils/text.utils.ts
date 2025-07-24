let canvasInstants: HTMLElement;

const memorizedContainer: any = {};

export class TextUtils {
  /**
   * Метод возвращает ширину строки
   * @param text - строка
   * @param font - шрифт
   * @param roundUp
   */
  public static getWidth(text: string, font = '16px Manrope', roundUp = true): number {
    let canvas: any;

    if (memorizedContainer[`${text}-${font}`]) {
      return memorizedContainer[`${text}-${font}`];
    }

    if (canvasInstants) {
      canvas = canvasInstants;
    } else {
      canvas = document.createElement('canvas');
      canvasInstants = canvas;
    }

    const context = canvas.getContext('2d');
    context.font = font;

    const metrics = context.measureText(text);
    memorizedContainer[`${text}-${font}`] = roundUp ? Math.round(metrics.width) : metrics.width;

    return memorizedContainer[`${text}-${font}`];
  }
}
