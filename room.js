const fs = require('fs');

let data = fs.readFileSync("input.txt").toString().split("\n")
let room = data.slice(0, 1).toString().split(" ");

class Room {
    constructor() {
        this.roomSide = {
            x: Number(room[0]), 
            y: Number(room[1]) 
        }
    }
}

console.log(new Room)
module.exports = Room