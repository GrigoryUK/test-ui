import { DebouncedFunc } from '../types';

export class ToolboxUtils {
  public static debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number = 0,
    options: {
      leading?: boolean;
      trailing?: boolean;
      maxWait?: number;
    } = {},
  ): DebouncedFunc<T> {
    let lastArgs: any;

    let lastThis: any;

    let result: any;

    let timerId: NodeJS.Timeout | null = null;

    let lastCallTime: number | null = null;

    let lastInvokeTime = 0;

    const { leading = false, trailing = true, maxWait } = options;

    const shouldInvoke = (time: number) => {
      const timeSinceLastCall = time - (lastCallTime || 0);

      const timeSinceLastInvoke = time - lastInvokeTime;

      return !lastCallTime || timeSinceLastCall >= wait || (maxWait !== undefined && timeSinceLastInvoke >= maxWait);
    };

    const invokeFunc = (time: number) => {
      const args = lastArgs;

      const thisArg = lastThis;

      lastArgs = lastThis = null;
      lastInvokeTime = time;

      if (args) {
        result = func.apply(thisArg, args);
      }

      return result;
    };

    const trailingEdge = (time: number) => {
      timerId = null;

      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = null;

      return result;
    };

    const timerExpired = () => {
      const time = Date.now();

      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      timerId = setTimeout(
        timerExpired,
        Math.min(
          wait - (time - (lastCallTime || 0)),
          maxWait ? maxWait - (time - lastInvokeTime) : Number.POSITIVE_INFINITY,
        ),
      );
    };

    const debounced = function (this: any, ...args: any[]) {
      const time = Date.now();

      const isInvoking = shouldInvoke(time);

      lastArgs = args;
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      lastThis = this;
      lastCallTime = time;

      if (isInvoking) {
        if (timerId === null && leading) {
          lastInvokeTime = time;
          timerId = setTimeout(timerExpired, wait);

          return invokeFunc(time);
        }

        if (maxWait !== undefined) {
          timerId = setTimeout(timerExpired, wait);

          return invokeFunc(time);
        }
      }

      if (timerId === null) {
        timerId = setTimeout(timerExpired, wait);
      }

      return result;
    } as DebouncedFunc<T>;

    debounced.cancel = () => {
      if (timerId !== null) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = null;
    };

    debounced.flush = () => {
      return timerId === null ? result : trailingEdge(Date.now());
    };

    return debounced;
  }
}
