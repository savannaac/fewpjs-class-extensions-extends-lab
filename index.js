class Polygon {
    constructor(array) {
        this.array = array
    }

    get countSides() {
        return this.array.length
    }

    get perimeter() {
        return this.array.reduce((a, b) => a + b)
    }
}

class Triangle extends Polygon {
    get isValid() {
        let a = this.array[0]
        let b = this.array[1]
        let c = this.array[2]
        
        if (a + b <= c || a + c <= b || b + c <= a) {
            return false;
        } else {
            return true;
        }
    }
}

class Square extends Polygon {
    get isValid() {
        let a = this.array[0]
        let b = this.array[1]
        let c = this.array[2]
        let d = this.array[3]
        
        if (a === b && b === c && c === d) {
            return true;
        } else {
            return false;
        }
    }

    get area() {
        return this.array[0] * this.array[0]
    }
}