console.log("index.js===============================");



button.addEventListener("click", () => {
  Promise.resolve().then(() => console.log('index.js Microtask 1'));
  console.log('index.js Listner 1');
})

button.addEventListener("click", () => {
  Promise.resolve().then(() => console.log('index.js Microtask 2'));
  console.log('index.js Listner 2');
})

// button.click()

console.log("index.js===============================");