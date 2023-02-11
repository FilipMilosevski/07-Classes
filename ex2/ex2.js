// class personprivate {
//   #firstname;
//   #lastname;
//   constructor (fname,lname) {
//     this.#firstname = fname;
//     this.#lastname = lname;
//   }
//   showname(){
//     console.log(this.#firstname, this.#lastname);
//   }
// }


// let filip = new personprivate ("FILIP","MILOSEVSKI")


// filip.showname()




////////////////////////////////getter and setter
// class persongetset {
//   #firstname;
//   #lastname;
//   constructor (fname,lname) {
//     this.#firstname = fname;
//     this.#lastname = lname;
//   }
//   get fname(){
//     console.log("CALLED THE GETTER FOR FIRST NAME");
//     return this.#firstname;
//   }
//   set fname(fname){
//     console.log("CALLED THE SETTER FOR FIRST NAME");
//     this.#firstname = fname;
//   }
// }

// let p = new persongetset("FILIP","MILOSEVSKI")
// p.fname

// p.fname = "filip"  
// console.log("////");
// console.log(p.fname);


// class getset {
//   #firstname;
//   #lastname;
//   constructor (fname,lname) {
//     this.#firstname;
//     this.#lastname;
//   }
//   get fname(){
//     console.log("CALL GETTER FIRST");
//     return this.#firstname;
//   }
//   set fname(fname){
//     console.log("CALL SETTER FIRST");
//     this.#firstname = fname;
//   }
//   get lname(){
//     console.log("CALL GETTER SECOND");
//     return this.#lastname;
//   }
//   set lname(lname){
//     console.log("CALL SETTER SECOND");
//     this.#lastname = lname;
//   }
// }
// let primer = new getset("filip","milosevski")
// primer.fname
// primer.fname = "vezba"

// primer.lname
// primer.lname = "test"

////////////////////////inheritance

// class animal {
//     constructor(age){
//       this.age = age;
//     }
//     eat(){
//       console.log("eating");
//     }
// }

// class child extends animal {
//   constructor (name){
//     super(age);
//     ///povikuvanje konstruktor na parent
//     this.name = name;W
//   }
//   fly (){
//     console.log("FLY");
//   }
// }


// let my = new child("ccc",111)
// my.eat()



/////////////////////////////////////prototype
// class person {
  
//   constructor (fname,lname) {
//     this.firstname = fname;
//     this.lastname = lname;
//   }

// }

// person.prototype.introduce = function () { console.log("HI MY NAME IS ",this.firstname)}

// person.prototype.color = "green"
// let filip = new person("filip","milosevski")
// filip.introduce()



// console.log(filip.color);


















