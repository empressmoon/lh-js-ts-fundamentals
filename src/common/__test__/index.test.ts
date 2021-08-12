import { generateHuman, getPhoneNumber, getRandomNumberBetween, Human } from "../../task/index"

const humanProperties = {
    id: "",
    name: "",
    surname: "",
    email: "",
    age: null,
    phoneNumber: null,
    country: "",
}

describe("getPhoneNumber", () => {
    test("returns phone number with 9 digits", () =>{
        const phoneNumber = getPhoneNumber()

        expect(phoneNumber.toString().length).toBe(9)
    })
})

describe("getRandomNumberBetween", () => {
    test("returns number between range defined in passed arguments - min and max", () => {
        const result = getRandomNumberBetween(5, 27)

        expect(result).toBeLessThanOrEqual(27)
        expect(result).toBeGreaterThanOrEqual(5)
    })
})

describe("generateHuman", () => {
    test.each(Object.keys(humanProperties))("returns an object with propery - %p",
        (property) => {
            const result = generateHuman()

            expect(result[property as keyof Human]).toBeTruthy()
    })
})
