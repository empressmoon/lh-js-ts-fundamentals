import { arrayNumbers, arrayObjects, arrayStrings } from "../index"
import includes from "../../task/index"

describe("includes function",() => {
    describe("works like original function", () => {
        test("with number array for existing element", () => {
            const element = 2

            const result = includes(arrayNumbers, element)

            expect(arrayNumbers.includes(element)).toEqual(result)
        })

        test("with number array for non existing element", () => {
            const element = 27

            const result = includes(arrayNumbers, element)

            expect(arrayNumbers.includes(element)).toEqual(result)
        })

        test("with string array for existing element", () => {
            const element = "apple"

            const result = includes(arrayStrings, element)

            expect(arrayStrings.includes(element)).toEqual(result)
        })

        test("with string array for non existing element", () => {
            const element = "grape"

            const result = includes(arrayStrings, element)

            expect(arrayStrings.includes(element)).toEqual(result)
        })

        test("with object array for existing element", () => {
            const element = { id: "333" }

            const result = includes(arrayObjects, element)

            expect(arrayObjects.includes(element)).toEqual(result)
        })

        test("with object array for non existing element", () => {
            const element = { id: "7" }

            const result = includes(arrayObjects, element)

            expect(arrayObjects.includes(element)).toEqual(result)
        })
    })

    describe("with given fromIndex param", () => {
        test("when positive number for fromIndex is passed", () => {
            const element = 2
            const fromIndex = 3

            const result = includes(arrayNumbers, element, fromIndex)

            expect(arrayNumbers.includes(element, fromIndex)).toEqual(result)
        })

        test("when negative number for fromIndex is passed", () => {
            const element = 5
            const fromIndex = -1

            const result = includes(arrayNumbers, element, fromIndex)

            expect(arrayNumbers.includes(element, fromIndex)).toEqual(result)
        })
    })
})