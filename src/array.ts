// array
let array: number[]; //spesifik tipe data array index ya harus number
// array = ["error"];

let array2: string[]; //spesifik tipe data array index ya harus string
array2 = ["kucing", "capybara"];

let randomArray: any[]; //any bisa menampung berbeda tipe data dan bebas
randomArray = [20, "kopi", true, ["ini array", 50], { objek: 50 }];

//tuples //array yang disi hanya mengikuti awalan dari isi index ya
let biodata: [string, number];
biodata = ["jakarta", 26]; // ini benar karna isi index sesuai
// biodata = [20, "number"]; // ini bakan error karna index [0] = string , dan bakal error jika isi index lebih dari yang di buatkan schemanya
