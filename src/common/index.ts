export const testArray = ["mercury", "Venus", "earth", "Mars", "jupiter", "SATURN", "uranus", "neptun", "pluto", "MOON"]

export const phraseNotFoundInfo = "Array does not contain the phrase!"

export const phraseFoundTestCases: [string[], string, [number, string][]][] = [
    [testArray, "m", [
        [0, "mercury"],
        [3, "Mars"],
        [9, "MOON"]
    ]],
    [testArray, "earth", [
        [2, "earth"],
    ]],
    [testArray, "nu", [
        [1, "Venus"],
        [6, "uranus"],
    ]],

]

export const phraseNotFoundTestCases: [string[], string, string][] = [
    [testArray, "io", phraseNotFoundInfo],
    [testArray, "sun", phraseNotFoundInfo],
    [testArray, "hello", phraseNotFoundInfo],
]