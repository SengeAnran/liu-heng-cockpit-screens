export function throttle(fn, time, context) {
  let lock, args;
  function later() {
    lock = false;
    if (args) {
      wrapperFn.apply(context, args);
      args = false;
    }
  };

  const wrapperFn = function wrapperFn() {
    if (lock) {
      args = arguments;
    } else {
      // call and lock until later
      fn.apply(context, arguments);
      setTimeout(later, time);
      lock = true;
    }
  };
  return wrapperFn;
}
