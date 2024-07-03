export const throttle = (callback: Function, delay = 100) => {
  let wait = false;

  return function (this: any) {
    const args = arguments;
    if (wait) {
      return;
    }

    callback.apply(this, args);
    wait = true;

    setTimeout(() => {
      wait = false;
    }, delay);
  };
};
