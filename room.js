const fs = require('fs');
const Hoover = require('./hoover');
const Dirt = require('./dirt')

let data = fs.readFileSync("input.txt").toString().split("\n")
let room = data.slice(0, 1).toString().split(" ");
let dirt = data.slice(2, 5).toString().split(",")

class Room {
    constructor() {
        this.roomSide = {
            x: Number(room[0]),
            y: Number(room[1])
        }
        this.numberOfDirts = 0
        this.dirt = dirt.map(patchOfDirt => {
            let eachPatchOfDirt = patchOfDirt.split(' ')
            let patchOfDirtX = Number(eachPatchOfDirt[0])
            let patchOfDirtY = Number(eachPatchOfDirt[1])
            this.patchOfDirt = new Dirt(patchOfDirtX, patchOfDirtY)
            this.numberOfDirts++
            console.log(this.patchOfDirt)
            console.log(this.numberOfDirts)
        })

        this.hoover = new Hoover
        // console.log(this.hoover.position.x)
    }
    removeDirt() {
        if(this.hoover.position.x && this.hoover.position.y == this.patchOfDirt.x && this.patchOfDirt.y ){
            this.numberOfDirts--
            
            // console.log(this.numberOfDirts)
        }
    }
}


module.exports = Room