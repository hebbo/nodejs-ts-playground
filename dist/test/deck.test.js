"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deck_1 = require("../src/deck");
describe('deck', () => {
    it("with a signingSecret + token are set", () => {
        expect((0, deck_1.deck)()).toEqual(["spades", "diamonds", "clubs", "hearts"]);
    });
});
//# sourceMappingURL=deck.test.js.map