enum TriangleType {
  scalene = "scalene", // All sides are unequal
  equilateral = "equilateral", // All sides are equal
  isosceles = "isoceles", // Two sides are equal
}

export class Triangle {
  private x: number;
  private y: number;
  private z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  //This method will check whether the triangle is scalene, quilateral or isosceles
  public checkTriangle(): TriangleType {
    if (this.checkTriangleValidity()) {
      if (this.x == this.y && this.y == this.z) {                     // All sides are unequal
        return TriangleType.equilateral;
      }
      if (this.x == this.y || this.y == this.z || this.z == this.x) { // Two sides are equal
        return TriangleType.isosceles;
      } 
      else {                                                          // All sides are unequal
        return TriangleType.scalene;
      }
    } else {                                                          // Not a valid triangle
      throw new Error("Invalid triangle");
    }
  }

  // A triangle is valid if the sum of two sides is > the third side for all sides:
  // x + y > z
  // x + z > y
  // y + z > x
  private checkTriangleValidity(): boolean {
    if (
      this.x + this.y > this.z &&
      this.x + this.z > this.y &&
      this.y + this.z > this.x
    ) {
      return true;
    } else {
      return false;
    }
  }
}
