function race(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) throw new Error("Аргумент должен быть массивом промисов");

    promises.forEach((promise) => {
      if (promise && typeof promise.then === "function") {
        promise.then(resolve).catch(reject);
      } else {
        resolve(promise);
      }
    });
  });
}
