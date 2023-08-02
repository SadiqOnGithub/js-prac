console.log("======================================");

let x = 0;

// const tenTimeouts = Array(10).fill(1).map(() => {
//   return setTimeout(() => {
//     console.log("inside real timeout");
//   }, 100*x++);
// })

// console.log(tenTimeouts)

const tenPromises = Array(10).fill(1).map(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("inside timeout", x)
      resolve("lalala");
    }, 1000 * ++x);
    console.log(x)
  });
});

// (() => {
//   tenPromises.forEach(async (arg) => {
//     console.log(await arg);
//   });
// })();


/*
  LEVEL 1;
  understanding promise execution with Promise.resolve()
*/

// Promise.resolve()
//   .then(() => {
//     console.log("1.1");
//     const ab = Promise.resolve()
//       .then(() => {
//         console.log("1.1.1");
//       })
//       .then(() => {
//         console.log("1.1.2");
//       });

//     return ab; // this return makes a huge difference
//   })
//   .then(() => console.log("1.2"))
//   .then(() => console.log("1.3"));

// const what = Promise.resolve()
//   .then(() => console.log("2.1"))
//   .then(() => console.log("2.2"))
//   .then(() => {
//     console.log("2.3");
//     return 1;
//   });

// (async () => console.log("what", await what))();

console.log("======================================");