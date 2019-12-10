const Hoover = require('../src/hoover');
const Room = require('../src/room');

describe("Hoover", () => {
    let hoover;

    beforeEach(() => {
        hoover = new Hoover();
        room = new Room();
    });

    test('has coordinates', () => {
        expect(hoover.position.x).toEqual(1);
        expect(hoover.position.y).toEqual(2);
    });

    test('can move N, S, W and E', () => {
        hoover.moveHoover('N')
        expect(hoover.position.x).toEqual(1);
        expect(hoover.position.y).toEqual(3);

    });

    test('can move NN', () => {
        hoover.moveHoover('NN')
        expect(hoover.position.x).toEqual(1);
        expect(hoover.position.y).toEqual(4);
    });

    test('can move SS', () => {
        hoover.moveHoover('SS')
        expect(hoover.position.x).toEqual(1);
        expect(hoover.position.y).toEqual(0);
    });

    test('has a default value and can move all around the room', () => {
        hoover.moveHoover()
        expect(hoover.position.x).toEqual(1);
        expect(hoover.position.y).toEqual(3);
    });

    test("moves WW and can\'t move because it has a wall", () => {
        hoover.moveHoover('WW')
        expect(hoover.position.x).toEqual(0);
        expect(hoover.position.y).toEqual(2);
    });

    test('can remove dirt from the room', () => {
        hoover.moveHoover()
        expect(hoover.amountOfDirt).toEqual(1)
    })

});