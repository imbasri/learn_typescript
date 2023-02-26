// class
export class User {
   public name: string;
   // jika menambahkan public dalam constructor maka tidak buat lagi initial di awal public
   constructor(name: string, public age: number) {
      this.name = name;
   }

   getName = (): string => {
      return this.name;
   };
}
let user = new User("dodi", 26);

console.log(user);
console.log(user.name);
console.log(user.age);

// public = bisa di akses di semua class / dari luar class
//  protected = hanya bisa di akses dari class tersebut , dan class turunan / pewaris
// private = hanya bisa di akses kelas itu sendiri

// inheritance
class Admin extends User {
   read: boolean = true;
   write: boolean = true;
   phone: string;
   constructor(phone: string, name: string, age: number) {
      super(name, age);
      this.phone = phone;
   }
   getRule(): { read: boolean; write: boolean } {
      return {
         read: this.read,
         write: this.write,
      };
   }
}

let admin = new Admin("08123123123", "tony", 25);
admin.getRule();
user.name = "danang";
console.log(user.name);
admin.getName();
