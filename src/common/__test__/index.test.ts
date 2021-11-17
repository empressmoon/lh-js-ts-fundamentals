import snakeCase from "../../task/index"
import { testCases } from "../index"

describe("snakeCase",() => {
    test.each(testCases)("returns snake cased string", (input, output) => {
        const result = snakeCase(input)

        expect(result).toEqual(output)
    })
})