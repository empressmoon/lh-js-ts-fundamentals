function includes<T>(array: T[], elementToFind: T, fromIndex: number = 0): boolean {
    if (!array.length) {
        return false
    }

    const index = Math.sign(fromIndex) === -1 ? array.length + fromIndex : fromIndex

    const result = array.some((element, elementIndex) => {
        if (elementIndex < index) {
            return false
        }

        return element === elementToFind
    })

    return result
}

export default includes
