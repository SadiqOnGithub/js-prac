console.log("======================================");

function one() {
  // cb();
  console.log("one");
}
console.log("flow one")
function two(cb = one) {
  cb();
  console.log("two");
}

console.log("flow two")
function three(cb = two) {
  cb();
  console.log("three");
}

console.log("flow three")

three();
console.log("======================================");