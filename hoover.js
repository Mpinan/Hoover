const fs = require('fs');
const Room = require('./room');

let data = fs.readFileSync("input.txt").toString().split("\n");
let hooverPosition = data.slice(1, 2).toString().split(" ");


class Hoover {
    constructor() {
        this.position = {
            x: Number(hooverPosition[0]),
            y: Number(hooverPosition[1])
        }
    }

    moveHoover(coordenates) {

        let direction = coordenates.split('')

        direction.forEach(move => {

            if (move == "N") {
                this.position.y++
            }
            if (move == "S") {
                this.position.y--
            }
            if (move == "W") {
                this.position.x--
            }
            if (move == "E") {
                this.position.x++
            }
        });
    };
};


module.exports = Hoover;