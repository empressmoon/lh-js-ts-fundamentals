import { phraseNotFoundInfo } from "../common/index"
import { FindPhraseInArrayResult } from "./types"

export const findPhraseInArray = (array: string[], phrase: string): FindPhraseInArrayResult => {
    const result = array.reduce<[number, string][]>((acc, element, index) => {
        if (element.toLowerCase().includes(phrase.toLowerCase())) {
            acc.push([index, element])
        }

        return acc
    }, [])

    if (result.length > 0) {
        return result
    }

    return phraseNotFoundInfo
}