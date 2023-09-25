export type DebouncedFunction<T> = (args: T) => void;

export function debounce<T>(fn: DebouncedFunction<T>, delay: number): DebouncedFunction<T> {
  let timerId: NodeJS.Timeout | null = null;
  return function (args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(args)
    }, delay)

  }
}