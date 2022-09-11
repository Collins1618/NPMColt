const add = (x,y) => x + y;

const PI = 3.14159;

const square = x => x * x;

// const math = {
//     add: add,
//     PI: PI,
//     square: square
// }
// module.exports = math;


//a more succint way of exporting
exports.add = add;
exports.square = square;
exports.PI = PI;

//exporting modules
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;