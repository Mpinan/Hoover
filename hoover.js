const fs = require('fs');

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
    }

    moveHoover(position = coordenates) {

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
        });
    };
};


module.exports = Hoover;