import { Triangle } from './Triangle'

let isocelesTriangle = new Triangle(1,2,2);
let scaleneTriangle = new Triangle(4,2,3);
let equilateralTriangle = new Triangle(1,1,1);
let invalidTriangle = new Triangle(0,1,1);

console.log(isocelesTriangle.checkTriangle());
console.log(scaleneTriangle.checkTriangle());
console.log(equilateralTriangle.checkTriangle());
console.log(invalidTriangle.checkTriangle());
