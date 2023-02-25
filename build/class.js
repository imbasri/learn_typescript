"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
// class
class User {
    // jika menambahkan public dalam constructor maka tidak buat lagi initial di awal public
    constructor(name, age) {
        this.age = age;
        this.getName = () => {
            return this.name;
        };
        this.name = name;
    }
}
exports.User = User;
let user = new User("dodi", 26);
console.log(user);
console.log(user.name);
console.log(user.age);
// public = bisa di akses di semua class / dari luar class
//  protected = hanya bisa di akses dari class tersebut , dan class turunan / pewaris
// private = hanya bisa di akses kelas itu sendiri
// inheritance
class Admin extends User {
    constructor() {
        super(...arguments);
        this.read = true;
        this.write = true;
    }
    getRule() {
        return {
            read: this.read,
            write: this.write,
        };
    }
}
let admin = new Admin("tony", 25);
admin.getRule();
user.name = "danang";
console.log(user.name);
admin.getName();
