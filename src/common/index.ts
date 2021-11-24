export const MAX_STARS = 5

export enum StarVariant {
    EMPTY = "empty",
    FULL = "full",
    HALF = "half",
}

export const errorMessage = "Value is not a valid rating number"

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
    [
        `${MAX_STARS + 0.1}`,
        errorMessage,
    ],
]

