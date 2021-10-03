"use strict";
exports.__esModule = true;
exports.Triangle = void 0;
var TriangleType;
(function (TriangleType) {
    TriangleType["scalene"] = "scalene";
    TriangleType["equilateral"] = "equilateral";
    TriangleType["isosceles"] = "isoceles";
})(TriangleType || (TriangleType = {}));
var Triangle = /** @class */ (function () {
    function Triangle(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    //This method will check whether the triangle is scalene, quilateral or isosceles
    Triangle.prototype.checkTriangle = function () {
        if (this.checkTriangleValidity()) {
            if (this.x == this.y && this.y == this.z) { // All sides are unequal
                return TriangleType.equilateral;
            }
            if (this.x == this.y || this.y == this.z || this.z == this.x) { // Two sides are equal
                return TriangleType.isosceles;
            }
            else { // All sides are unequal
                return TriangleType.scalene;
            }
        }
        else { // Not a valid triangle
            throw new Error("Invalid triangle");
        }
    };
    // A triangle is valid if the sum of two sides is > the third side for all sides:
    // x + y > z
    // x + z > y
    // y + z > x
    Triangle.prototype.checkTriangleValidity = function () {
        if (this.x + this.y > this.z &&
            this.x + this.z > this.y &&
            this.y + this.z > this.x) {
            return true;
        }
        else {
            return false;
        }
    };
    return Triangle;
}());
exports.Triangle = Triangle;
