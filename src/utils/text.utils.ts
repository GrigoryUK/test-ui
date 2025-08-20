export const TextUtils = () => {
  let canvasInstants: HTMLElement | null = null;

  const memorizedContainer: Record<string, number> = {};

  /**
   * Метод возвращает ширину строки
   * @param text - строка
   * @param font - шрифт
   * @param roundUp
   */
  const getWidth = (text: string, font = '16px Manrope', roundUp = true) => {
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
  };

  return {
    getWidth,
  };
};
