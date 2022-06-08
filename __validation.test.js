/**
 * @jest-environment jsdom
 */
import {validateInput} from "./__validation.js"

test("check whether SPZ is valid", () => {
    expect(validateInput("5AN 7981")).toEqual(true);
    expect(validateInput("4E0 5015")).toEqual(true);
    expect(validateInput("2K5 8591")).toEqual(true);
    expect(validateInput("5AN7981")).toEqual(false);
    expect(validateInput("5DN 7981")).toEqual(false);
    expect(validateInput("5AN 798")).toEqual(false);
})