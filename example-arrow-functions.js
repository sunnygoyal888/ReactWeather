// var names = ['Sunny', 'Gaurav', 'Yogesh'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Sunny'));

// var person = {
//   name: 'Sunny',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
// arrow functions does not update the this keyword
// person.greet();

var addStatement = (a, b) => {
  return a+b;
}
console.log(addStatement(1, 3));

var addExpression = (a, b) => a+b;
console.log(addExpression(9, 0));
