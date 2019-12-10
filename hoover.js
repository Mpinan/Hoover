const fs = require('fs');

let data = fs.readFileSync("input.txt").toString().split("\n")
let room = data.slice(0, 1).toString().split(" ");
let hooverPosition = data.slice(1, 2).toString().split(" ");


class Hoover {
    constructor() {
        this.position = {
            x: Number(hooverPosition[0]), 
            y: Number(hooverPosition[1]) 
        }
    }
}
console.log(new Hoover)
module.exports = Hoover;