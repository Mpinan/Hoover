const fs = require('fs');
let data = fs.readFileSync("input.txt").toString().split("\n")

let coordenates = data.indexOf(data[data.length - 1])

let dirt = data.slice(2, coordenates).toString().split(",")

console.log(dirt)

class Dirt {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

module.exports = Dirt