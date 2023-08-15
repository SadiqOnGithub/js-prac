console.log("index1.js===============================");

// const button = document.getElementById("btn");

button.addEventListener("click", () => {
  Promise.resolve()
    .then(
      () => {
        console
          .log(
            'index1.js Microtask 1'
          );
      }
    );
  console.log('index1.js Listner 1');
});

button.addEventListener("click", () => {
  Promise.resolve()
    .then(
      () => {
        console
          .log(
            'index1.js Microtask 2'
          );
      }
    );
  console.log('index1.js Listner 2');
});


console.log("index1.js===============================");
button.click();
console.log("the end");