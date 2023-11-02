console.log("index.js===============================");

function Person(name, age) {
  this.name = name || 'John';
  this.age = age || 24;
  this.displayName = function () {
    console.log(this.name);
  };
}

Person.name = 'John';
Person.displayName = function () {
  console.log(this.name);
};

var person = new Person('John');
person.displayName();
Person.displayName();
console.log("index.js===============================");