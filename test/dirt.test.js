const Dirt = require('../src/dirt');

describe("Room", () => {
    let dirt;

    beforeEach(() => {
        dirt = new Dirt(2, 4);
    });

    test('has coordinates', () => {
        expect(dirt.x).toEqual(2);
        expect(dirt.y).toEqual(4);
    });

});
