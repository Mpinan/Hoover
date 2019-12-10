const fs = require('fs');
const Room = require('./room');

let data = fs.readFileSync("input.txt").toString().split("\n");
let hooverPosition = data.slice(1, 2).toString().split(" ");
let coordenates = data[data.length - 1]

class Hoover {
    constructor() {

        this.position = {
            x: Number(hooverPosition[0]),
            y: Number(hooverPosition[1])
        }

        this.coordenates = coordenates
        this.room = new Room()
        this.amountOfDirt = 0
    }


    moveHoover(position = this.coordenates) {

        let direction = position.split('')

        direction.forEach(move => {

            if (move == "N") {
                this.position.y++
                if (this.position.y > 5) {
                    this.position.y--
                }
            }

            if (move == "S") {
                this.position.y--
                if (this.position.y < 0) {
                    this.position.y++
                }
            }

            if (move == "W") {
                this.position.x--
                if (this.position.x < 0) {
                    this.position.x++
                }
            }

            if (move == "E") {
                this.position.x++
                if (this.position.x > 5) {
                    this.position.x--
                }
            }

            this.removeDirt();

        });

        return `${this.position.x} ${this.position.y}`;

    };

    removeDirt() {

        this.room.dirtAmount.forEach(patch => {
            if (this.position.x === patch.x && this.position.y === patch.y && this.amountOfDirt === 0) {

                this.room.dirtAmount.splice(this.room.dirtAmount.indexOf(patch, 1))
                this.amountOfDirt += 1

            }
        })
        
        return `${this.amountOfDirt}`
    }

};

let hoover = new Hoover
console.log(hoover.moveHoover())
console.log(hoover.removeDirt())

module.exports = Hoover;