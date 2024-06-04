import { capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
 } from "./index";

it("Capitalize string", () => {
    expect(capitalize(
        "test"
    )).toBe("Test")
})

it("Reverse string", () => {
    expect(reverseString(
        "abc"
    )).toBe("cba")
})

it("Calculator addition", () => {
    const newCalculator = new calculator;
    expect(newCalculator.add(
        1, 2
    )).toBe(3)
})

it("Calculator subtraction", () => {
    const newCalculator = new calculator;
    expect(newCalculator.subtract(
        3, 2
    )).toBe(1)
})

it("Calculator multiplication", () => {
    const newCalculator = new calculator;
    expect(newCalculator.multiply(
        3, 2
    )).toBe(6)
})

it("Calculator divison", () => {
    const newCalculator = new calculator;
    expect(newCalculator.divide(
        3, 3
    )).toBe(1)
})

it("Basic cipher", () => {
    expect(caesarCipher(
        "abc", 1
    )).toBe("bcd")
})

it("wrap around Z", () => {
    expect(caesarCipher(
        "xyz", 3
    )).toBe("abc")
})

it("case preservation", () => {
    expect(caesarCipher(
        "aBc", 1
    )).toBe("bCd")
})

it("punctuation preservation", () => {
    expect(caesarCipher(
        "Hello, World!", 3
    )).toBe("Khoor, Zruog!")
})

it("array", () => {
    expect(analyzeArray(
        [1,8,3,4,2,6]
    )).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
     })
})
