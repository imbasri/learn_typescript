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
