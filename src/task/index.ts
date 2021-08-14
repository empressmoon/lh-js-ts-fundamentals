import { errorMessages } from "../common/index"

function isRectangularTriangle(x1: number, x2: number, x3: number): boolean {
    if (!Number.isFinite(x1 * x2 * x3)) {
        throw Error(errorMessages.infiniteNumber)
    }

    if (x1 <=0 || x2 <= 0 || x3 <= 0) {
        throw Error(errorMessages.negativeNumbers)
    }

    const values = [x1, x2, x3].sort((a, b) => b - a)

    const isTheTriangleRectangular = Math.pow(values[0], 2) === (Math.pow(values[1], 2) + Math.pow(values[2], 2))

    return isTheTriangleRectangular
}

export default isRectangularTriangle