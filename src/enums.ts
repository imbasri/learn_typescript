// enum = menyimpan data di aplikasi

//numeric enum
enum Month {
   JAN = 1,
   FEB,
   MAR,
   APR,
   MAY,
}

console.log(Month); // hasil output ya berupa angka / index ya
console.log(Month.FEB);
/*
'0': 'JAN',
  '1': 'FEB',
  '2': 'MAR',
  '3': 'APR',
  '4': 'MAY',
  JAN: 0,
  FEB: 1,
  MAR: 2,
  APR: 3,
  MAY: 4
  jika kita isi kan insial JAN = 1 , maka hasil berikut menjadi +1
*/

// string enums
enum Bulan {
   JAN = "Januari",
   FEB = "Febuari",
   MAR = "Maret",
   APR = "April",
   MAY = "Maret",
}

console.log(Bulan.MAR);
