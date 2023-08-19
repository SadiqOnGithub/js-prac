console.log("index.js===============================");

// try {
//   console.dir(aavarX);
//   console.dir(aaFuncX);
//   console.dir(letX);
//   console.dir(constX);
// } catch (error) {
//   console.log(error);
// }

// var aavarX = 10;
// let letX = 10;
// const constX = 10;
// function aaFuncX() {
//   console.log("inside")
// }

window.aaaa = "var-scoped a";
let aaaa = "lexically-scoped a";
console.log(aaaa);         // "lexically-scoped a"
console.log(window.aaaa);  // "var-scoped a"

let aaab = "lexically-scoped b";
window.aaab = "var-scoped b";
console.log(aaab);         // "lexically-scoped b"
console.log(window.aaab);  // "var-scoped b"

console.log(aaaa);
console.log(aaab);

// understand more about script and global scope?. in context of callstack?. of v8?
// : https://stackoverflow.com/a/70786086/14075519

console.log("index.js===============================");