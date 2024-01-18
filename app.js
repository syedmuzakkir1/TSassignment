// Generic
// 1
// Reverse an array 
var Arr = [12, 324, 23, 4, 23];
Arr.reverse();
console.log(Arr);
// Generic type reversing array 
// function ReverseArray<G>(value:any):G{
//     return value.reverse();
// }
// let ReversedValue =   ReverseArray([1,2,3,4,5])
// console.log(ReversedValue)
// console.log(typeof(ReverseArray))
// console.log(typeof(ReversedValue))
function ReArray(value) {
    return value.reverse();
}
var reversed = ReArray([2, 5, 8, 4, 9]);
var reverseStr = ReArray(['noor', 'ahmed', 'dev', 'power']);
console.log(reversed);
console.log(reverseStr);
function Unionfunction(value) {
    if (typeof value === 'number') {
        return value * value;
    }
    return "\n       ".concat(value.length, "\n      ");
}
var result = Unionfunction('Hello');
var num = Unionfunction(2);
console.log(result, num);
// 3
// Sum of array 
function ArrayNumb(value) {
    if (Array.isArray(value) && typeof value[0] === 'number') {
        return value.reduce(function (a, b) { return a + b; }, 0);
    }
    if (Array.isArray(value) && typeof value[0] === 'string') {
        return (value.join(''));
    }
}
console.log(ArrayNumb([1, 2, 3, 4]));
console.log(ArrayNumb(['hello', 'guys', 'learning']));
// interface PersonAndWorker extends person, Worker{
// }
var users = {
    name: 'john',
    age: 31,
    jobTitle: 'Developer',
    salary: 23000,
};
console.log(users);
var worker = {
    name: 'bob',
    age: 21,
    jobTitle: 'Software Developer',
    salary: 2300,
};
console.log(worker);
// 5
console.log('printing the user and worker : ');
function TwoObject(userone, usertwo) {
    var users = [userone, usertwo];
    return users;
}
var twouser = TwoObject(users, worker);
console.log(twouser);
// 6
function TypeGuard(variable) {
    if (typeof variable === 'string') {
        var upper = variable.toUpperCase();
        // console.log(upper)
        return upper;
    }
    var clgtype = console.log('your variable type is :', typeof (variable));
    return clgtype;
}
console.log(TypeGuard('the string is capitalize'));
console.log(TypeGuard(23));
// 7
function handlestringAndNumber(value) {
    if (typeof value === 'string') {
        return value.length;
    }
    if (typeof value === 'number') {
        return Math.pow(value, value);
    }
}
var strAndNum = handlestringAndNumber(3);
var strAndNum1 = handlestringAndNumber('This is string length');
console.log(strAndNum);
console.log(strAndNum1);
