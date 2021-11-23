import { starRating1 , starRating2 } from "../../task/index"
import { errorTestCases, testCases } from "../index"

describe("starRating - solution 1",() => {
    describe("valid value passed", () => {
        test.each(testCases)("returns correct string", (input, output) => {
            const result = starRating1(input)

            expect(result).toEqual(output)
        })
    })

    describe("not valid value passed", () => {
        test.each(errorTestCases)("throws an error when passed value is not a valid number", (input, output) => {
            const result = () => starRating1(input)

            expect(result).toThrowError(output)
        })
    })
})

describe("starRating - solution 2",() => {
    describe("valid value passed", () => {
        test.each(testCases)("returns correct string", (input, output) => {
            const result = starRating2(input)

            expect(result).toEqual(output)
        })
    })

    describe("not valid value passed", () => {
        test.each(errorTestCases)("throws an error when passed value is not a valid number", (input, output) => {
            const result = () => starRating2(input)

            expect(result).toThrowError(output)
        })
    })
})