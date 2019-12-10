const fs = require('fs');
const Dirt = require('./dirt')

let data = fs.readFileSync("input.txt").toString().split("\n")

let coordenates = data.indexOf(data[data.length - 1])
let room = data.slice(0, 1).toString().split(" ");
let dirt = data.slice(2, coordenates).toString().split(",")

class Room {
    constructor() {
        this.roomSide = {
            x: Number(room[0]),
            y: Number(room[1])
        }
        this.dirtAmount = []

        dirt.map(patchOfDirt => {
            let eachPatchOfDirt = patchOfDirt.split(' ')
            let patchOfDirtX = Number(eachPatchOfDirt[0])
            let patchOfDirtY = Number(eachPatchOfDirt[1])
            patchOfDirt = new Dirt(patchOfDirtX, patchOfDirtY)
            this.dirtAmount.push(patchOfDirt)
            return patchOfDirt
        })


    }

}


module.exports = Room