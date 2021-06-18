export function cancelablePromise(promise) {
  const defer = {};
  defer.promise = new Promise((resolve, reject) => {
    defer.resolve = resolve;
    defer.reject = reject;
  });

  const newPromise = Promise.race([promise, defer.promise]);
  newPromise.cancel = defer.reject;

  return newPromise;
}
