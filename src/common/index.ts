export const MAX_STARS = 5

export enum starValue {
    EMPTY = "empty",
    FULL = "full",
    HALF = "half",
}

export const errorMessage = "Value is not a valid number"

export const testCases: [string, string][] = [
    [
        "0.38",
        "half empty empty empty empty",
    ],
    [
        "2.8",
        "full full full empty empty",
    ],
    [
        "4.5",
        "full full full full half",
    ],
    [
        "0.38",
        "half empty empty empty empty",
    ],
    [
        "1.00",
        "full empty empty empty empty",
    ],
    [
        "6.25",
        "full full full full full",
    ],
    [
        "0",
        "empty empty empty empty empty",
    ],
]

export const errorTestCases: [string, string][] = [
    [
        "0.38stars",
        errorMessage,
    ],
    [
        "hello",
        errorMessage,
    ],
]

