const fs = require('fs');
let data = fs.readFileSync("input.txt").toString().split("\n")

let dirt = data.slice(2, 5).toString().split(",")

class Dirt {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

module.exports = Dirt