// let can't be Redeclared
// let is block scoped

{
  var x = 4;
  let y = 5;
  console.log(x);
  console.log(y);
}

console.log(x);
// console.log(y); // this will give an error