"use strict";
// enum = menyimpan data di aplikasi
//numeric enum
var Month;
(function (Month) {
    Month[Month["JAN"] = 1] = "JAN";
    Month[Month["FEB"] = 2] = "FEB";
    Month[Month["MAR"] = 3] = "MAR";
    Month[Month["APR"] = 4] = "APR";
    Month[Month["MAY"] = 5] = "MAY";
})(Month || (Month = {}));
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
var Bulan;
(function (Bulan) {
    Bulan["JAN"] = "Januari";
    Bulan["FEB"] = "Febuari";
    Bulan["MAR"] = "Maret";
    Bulan["APR"] = "April";
    Bulan["MAY"] = "Maret";
})(Bulan || (Bulan = {}));
console.log(Bulan.MAR);
