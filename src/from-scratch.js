class Quadrilateral {
  constructor(side1, side2, side3, side4) {
    this.side1 = side1
    this.side2 = side2
    this.side3 = side3
    this.side4 = side4
  }

  getPerimeter(){
    return this.side1 + this.side2 + this.side3 + this.side4
  }
}

class Rectangle extends Quadrilateral {
constructor(side1, side2) {
  super(side1, side2, side1, side2)
}

getArea(){
  return this.side1*this.side2
}
}

class Square extends Rectangle{
 constructor(side){
  super(side, side)
 }

getDiagonal() {
  return Math.sqrt(2) * this.side1;
}
}


/* Be creative with this one! */
class Person {
  #hobbies
constructor(firstName, lastName, occupation) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.occupation = occupation;
  this.#hobbies = []
}

getHobbies(){
  return this.#hobbies
}

addHobby(hobby) {
  this.#hobbies.push(hobby); // Add a new hobby to the hobbies array
}

getFullName() {
  return `Name: ${this.firstName} ${this.lastName}`
}
}

class Teacher extends Person{
constructor(firstName, lastName, subject) {
  super(firstName, lastName, this.occupation);
  this.subject = subject
}

getSubject() {
  return this.subject
}
}

// ExmLES 
const teacher = new Teacher("Gonzalo", "R", "Teacher", "JavaScript");
teacher.addHobby("collecting shoes");
teacher.addHobby("building legos");

console.log(teacher.getFullName()); // Output: Name: Gonzalo R.
console.log(teacher.getHobbies());  // Output: ["collecting shoes", "building legos"]
console.log(teacher.getSubject());  // Output: JavaScript

module.exports = {
  Quadrilateral,
  Rectangle,
  Square,
  Person,
};
