console.log("hello");
// static type

// string
let hewan: string; // cara 1
let makanan: string = "bakso"; // cara 2
hewan = "kambing";
// hewan = 20; Type 'number' is not assignable to type 'string'.
let nama = "kucing";
nama = "capybara";
// nama = 20; ini akan error karena nama seharus ya type string

// number
let umur: number;
umur = 26;
umur = 30;

// boolean
let isMarried: boolean;
isMarried = true;
isMarried = false;

// any type data bisa di reasign  yang value akhir ya bebas seperti menggunakan javascript biasa.
let heroes: any = "Batman";
heroes = 100;
