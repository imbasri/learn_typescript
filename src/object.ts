// Object
type Animal = {
   name: string;
   age: number;
};

let animal: Animal = {
   name: "Capybara",
   age: 2,
};

animal = {
   name: "Cat",
   age: 4,
   //    address: "Jakarta" // ini akan error karna type ya bersifat imutable sesuai Type Animal
};
