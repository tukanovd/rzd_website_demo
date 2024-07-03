const debounce = <T extends Function>(callback: T, delay: number = 50) => {
  let timer: ReturnType<typeof setTimeout> | undefined;

  return function (...args: any[]) {
    const lateFn = () => {
      timer = undefined;
      // @ts-ignore
      callback.apply(this, args);
    };

    clearTimeout(timer);
    timer = setTimeout(lateFn, delay);

    return timer;
  };
};

export { debounce };
