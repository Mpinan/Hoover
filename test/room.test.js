const Room = require('../src/room');
const Dirt = require('../src/dirt');

describe("Room", () => {
    let room;
    let dirt;

    beforeEach(() => {
        room = new Room();
        dirt = new Dirt(5, 5);
    });

    test('has coordinates', () => {
        expect(room.roomSide.x).toEqual(5);
        expect(room.roomSide.y).toEqual(5);
    });

    test('has dirt with coordenates', () => {
        expect(dirt.x).toEqual(5)
        expect(dirt.y).toEqual(5)
    })



});