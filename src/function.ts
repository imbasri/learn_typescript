// tipe data balikan pada function

function getName(): string {
   return "hello World";
   //    return 20; jika hasil return string maka harus output return string
}

const getAge = (): number => {
   return 26;
   //    return "26"; error
};

const printName = (): void => {
   // dengan menggunakan void kita tidak mereturn apa2 , wajib menggunakan type void
   console.log("ini Void");
};
console.log(getAge());
console.log(getName());
printName();

////// argument types
function multiPly(val1: number, val2: number): number {
   return val1 * val2;
}
const result = multiPly(2, 2);
console.log(result);
