export const debounce = (fn, delay) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    setTimeout(() => fn.call(this, ...args), delay)
  }
}