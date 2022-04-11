import { deck } from "../src/deck";

describe('deck', () => {
  it("with a signingSecret + token are set", () => {
    expect(deck()).toEqual(["spades", "diamonds", "clubs", "hearts"]);
  });
});
