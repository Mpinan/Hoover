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
        this.dirt = dirt.map(patchOfDirt => {
            let eachPatchOfDirt = patchOfDirt.split(' ')
            this.patchOfDirtX = Number(eachPatchOfDirt[0])
            this.patchOfDirtY = Number(eachPatchOfDirt[1])
            this.patchOfDirt = new Dirt(this.patchOfDirtX, this.patchOfDirtY)
            console.log(this.patchOfDirt)
        })

        this.hoover = new Hoover
        // this.patchOfDirt = new dirt(patchOfDirt[0], patchOfDirt[1])
        // console.log(this.patchOfDirtX)
        // console.log(this.patchOfDirtY)
    }

    // this.dirtPatch = new Dirt()
}



module.exports = Room