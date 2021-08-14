import {
    errorMessages,
    falsyRectangularTriangleValues,
    inifiniteValues,
    negativeValues,
    truthyRectangularTriangleValues,
} from "../../common/index"
import isRectangularTriangle from "../../task/index"

describe("isRectangularTriangle",() => {
    test.each(truthyRectangularTriangleValues)("return true if passed numbers can create a rectangular triangle", (values) => {
        const result = isRectangularTriangle(values.x1, values.x2, values.x3)

        expect(result).toBeTruthy()
    })

    test.each(falsyRectangularTriangleValues)("return false if passed numbers can not create a rectangular triangle", (values) => {
        const result = isRectangularTriangle(values.x1, values.x2, values.x3)

        expect(result).toBeFalsy()
    })

    test("throws an error if any of the number is negative", () => {
        const result = () => isRectangularTriangle(inifiniteValues.x1, inifiniteValues.x2, inifiniteValues.x3)

        expect(result).toThrowError(errorMessages.infiniteNumber)
    })

    test.each(negativeValues)("throws an error if any of the number is negative", (values) => {
        const result = () => isRectangularTriangle(values.x1, values.x2, values.x3)

        expect(result).toThrowError(errorMessages.negativeNumbers)
    })
})