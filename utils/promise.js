function promisify(func) {
  function funcPromised(...args) {
    let func = this;
    return new Promise((res, rej) => {
      func(...args, (err, result) => {
        if (err) rej(err);
        res(result);
      });
    });
  }
  return funcPromised.bind(func);
}

const promise = Object.assign({ all: Promise.all.bind(Promise), promisify });

export default promise;
