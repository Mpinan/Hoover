var fs = require('fs');

const text = fs.readFileSync("input.txt").toString().split("/n");

console.log(text)


class Hoover {
    constructor() {
        this.x = 1
        this.y = 2
    }
}
module.exports = Hoover;