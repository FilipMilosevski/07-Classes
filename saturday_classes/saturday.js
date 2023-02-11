//3.	Create a class with name cars with 3 properties: name, year and
//manufacturer, use the class to create objects and print them in console log;

//  class cars {
//    constructor(name, year, manufacturer) {
//      this.name = name;
//      this.year = year;
//      this.manufacturer = manufacturer;
//    }
//    login() {
//      console.log(
//        `The brand of the car is ${this.name} the year of prucution is ${this.year} and the producer is ${this.manufacturer}`
//      );
//    }
//  }
//  let car1 = new cars("Audi", 2022, "Volkswagen");
//  let car2 = new cars("M6", 2021, "BMW");
// car1.login();
// car2.login();

////////////////////////////////////////// super extends 




// class car {
//   constructor (make,model,year,transmision,fuel){
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.transmision = transmision;
//     this.fuel = fuel;

//   }
//   com (p1,p2,p3,p4,p5) {
//     return  p1+` is produced in `+p2+" and is the car of the year "+p3+" with "+p4+ " is "+p5;
//   }
// }

// let car1 = new car ("Volkswagen","Golf","1994","Automatic","Diesel")
// let car2 = new car ("Seat","Ibiza","1991","Manual","Diesel")
// let car3 = new car ("Citroen","Espace","2001","Manual","Gas")



// // console.log(car1.make, car1.model, car1.year, car1.transmision, car1.fuel);


// function say(x) {
//   console.log(x.make,x.model,x.year,x.transmision,x.fuel);
// }
// say(car1)
// say(car2)
// say(car3)

// let com = car1.com(car1.make,car1.year,car1.transmision,car1.model,car1.fuel)
// console.log(com);





class car {
  constructor (make,model,type,fuel,gearbox) {
    this.make = make;
    this.model = model;
    this.type = type;
    this.fuel = fuel;
    this.gearbox = gearbox;

  }
  com(make,model,type,fuel,gearbox){
    return `${make} ${model} is produced with ${gearbox} gearbox`
  } 
  sales (make,model,type,fuel,gearbox){
    return `${make} ${model} is the best seller in USA during 90'`
  }
 
  greet() {
    console.log(`Hi there dear ${this.make} fans`);
  }
}

let c1 = new car ("Honda","Civic","Hatch","Gas","Manual")
let c2 = new car ("Seat","Ibiza","Hatch","Gas","Automatic")
let c3 = new car ("Toyota","Camry","Sedan","Diesel","Manual")
let c4 = new car ("Audi","TT","Cabrio","Gas","Automatic")
let c5 = new car ("Renault","Megane","Hatch","Diesel","Manual")

function say(x) {
  console.log(x.make,x.model,x.type,x.fuel,x.gearbox);
}
say(c1)
say(c2)
say(c3)
say(c4)
say(c5)

let com1 = c1.com(c1.make, c1.model, c1.type, c1.fuel, c1.gearbox)
console.log(com1);
let sales1 = c3.sales(c3.make,c3.model,c3.type,c3.fuel,c3.gearbox)
console.log(sales1);
c1.greet()
c2.greet()
c3.greet()
c4.greet()
c5.greet()



