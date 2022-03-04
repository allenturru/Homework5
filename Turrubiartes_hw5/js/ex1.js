class square {
    constructor(side) {
        this.side = side;
    }

    perimeter(side) {
        return this.side * 4;
    }

    area(side) {
       return this.side**2;
    }

    diagonal(side) {
       return Math.sqrt(2 * this.side**2);
    }
    
    describe() {
        return "Square with side "+this.side+" has a perimeter of "+this.perimeter()+", an area of "+this.area()+", and a diagonal of "+this.diagonal();
    }
}
square1 = new square(2);
square2 = new square(5);
square3 = new square(10);

console.log(square1.describe());
console.log(square2.describe());
console.log(square3.describe());
