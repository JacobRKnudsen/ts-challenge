# Reflection upon design decisions & implementation choices

I decided to implement this challenge using object-oriented principles because I think it makes the code more readable, reusable and easier to test. Therefore, I made a Triangle class that takes the lengths of the three sides as arguments to the constructor and then a method to check which of the three triangle types this particular triangle is (equilateral, isosceles or scalene). Finally, I thought about different input values (such as zero, negative and invalid side lengths) that would make the triangle invalid. To solve this problem I implemented a new method that would check if the three sides make up a valid triangle and if not throws an error.

To run: node ./js/ts-challenge.js