"use strict";
// tipe data balikan pada function
function getName() {
    return "hello World";
    //    return 20; jika hasil return string maka harus output return string
}
const getAge = () => {
    return 26;
    //    return "26"; error
};
const printName = () => {
    // dengan menggunakan void kita tidak mereturn apa2 , wajib menggunakan type void
    console.log("ini Void");
};
console.log(getAge());
console.log(getName());
printName();
////// argument types
function multiPly(val1, val2) {
    return val1 * val2;
}
const result = multiPly(2, 2);
console.log(result);
let age = 26;
const Add = (val1, val2) => {
    return val1 + val2;
};
console.log(Add(2, 10));
// default parameters
const fullName = (first, last = "Bujank") => {
    return first + " " + last;
};
console.log(fullName("Andra"));
console.log(fullName("Andra", "the BackBone"));
// optional parameter ?= jika tidak ada argument maka dia akan undifined , tidak bisa digunakan saat hasil return itu type number
const getAddress = (val1, val2) => {
    return val1 + " " + val2;
};
console.log(getAddress("jakarta", "bekasi")); // jakarta bekasi
console.log(getAddress("jakarta")); // ini akan jakarta undifined
