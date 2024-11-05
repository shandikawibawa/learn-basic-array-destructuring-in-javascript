// Destrukturisasi memungkinkan kita untuk "membongkar" nilai dari struktur data (Array, objek) ke dalam variabel berbeda yang terpisah
const foo = ['one','two','three']

//const one =  foo[0];
//console.log(one);

const [one, two, three] = foo;
console.log(one);
console.log(two);
console.log(three);

const [red, yellow, green, blue] = foo;
console.log(red);

//==============================================//

// let a, b

//[a = 5, b = 8] = ["one"];
//console.log(b);

//=============================================//

//distinct variables.
//function f() {
//    return [1, 2, 3]
//}

//const [a, , b] = f();
//console.log(a);
//console.log(b);

//==============================================//

// Assigning the rest of an array to a variable
const [a, ...b] = ["one", "two", "three", true, 12, ["one"]];
console.log(b);

//============================================//

const colors = ["red", "green", "blue", "yellow", "orange"]
const [color1, color2, color3] = colors;
console.log(color1, color2, color3);
