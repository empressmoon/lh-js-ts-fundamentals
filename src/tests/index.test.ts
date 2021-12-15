import { phraseFoundTestCases, phraseNotFoundTestCases } from "../common/index"
import  { findPhraseInArray } from "../task/index"

describe("findPhraseInArray", () => {
    describe("array contains the phrase", () => {
        test.each(phraseFoundTestCases)("returns element and its index", (array, phrase, foundElements) => {
            const result = findPhraseInArray(array, phrase)

            expect(result).toEqual(foundElements)
        })
    })

    describe("array does not contain the phrase", () => {
        test.each(phraseNotFoundTestCases)("returns correct information", (array, phrase, notFoundInfo) => {
            const result = findPhraseInArray(array, phrase)

            expect(result).toEqual(notFoundInfo)
        })
    })
})
