const fs = require('fs');
const Hoover = require('./hoover');

let data = fs.readFileSync("input.txt").toString().split("\n")
let room = data.slice(0, 1).toString().split(" ");
let dirt = data.slice(2, 5).toString().split(",")
// console.log(dirt)

class Room {
    constructor() {
        this.roomSide = {
            x: Number(room[0]), 
            y: Number(room[1]) 
        }
        // this.dirt = {

        // }
    }
}


module.exports = Room