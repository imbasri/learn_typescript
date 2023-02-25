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

////// function as types
type Age = number;
let age: Age = 26;

type Tambah = (val1: number, val2: number) => number;

const Add: Tambah = (val1: number, val2: number): number => {
   return val1 + val2;
};

console.log(Add(2, 10));

// default parameters
const fullName = (first: string, last: string = "Bujank"): string => {
   return first + " " + last;
};
console.log(fullName("Andra"));
console.log(fullName("Andra", "the BackBone"));

// optional parameter ?= jika tidak ada argument maka dia akan undifined , tidak bisa digunakan saat hasil return itu type number
const getAddress = (val1: string, val2?: string): string => {
   return val1 + " " + val2;
};
console.log(getAddress("jakarta", "bekasi")); // jakarta bekasi
console.log(getAddress("jakarta")); // ini akan jakarta undifined
