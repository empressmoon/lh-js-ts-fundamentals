import { errorMessage, MAX_STARS, starValue } from "../common/index"

// Have the function starRating(str) take the str parameter being passed which will be an average
// rating between 0.00 and 5.00, and convert this rating into list of 5 image names to be displayed
// in a user interface to represent the rating as a list of stars and half stars. Ratings should be
// rounded to the nearest half. There are 3 image file names available: "full.jpg", "half.jpg", "empty.jpg".
// The output will be the name of the 5 images (without the extension), from left to right, separated
// by spaces. For example: if str is "2.36" then this should return the string: "full full half empty empty".

export function starRating1(value: string): string {
    const number = Number(value)

    if (isNaN(number)) {
        throw Error(errorMessage)
    }

    const starsArray: string[] = Array(MAX_STARS).fill(starValue.FULL)

    const roundedNumber = Math.round(number * 2) / 2

    if (roundedNumber >= MAX_STARS) {
        return starsArray.join(" ")
    }

    const fullStars = Math.trunc(roundedNumber)
    const emptyStars = Math.trunc(MAX_STARS - roundedNumber)
    const halfStars = fullStars + emptyStars === MAX_STARS ? 0 : 1


    if (fullStars) {
        starsArray.fill(starValue.FULL, 0, fullStars - 1)
    }

    if (halfStars) {
        starsArray.fill(starValue.HALF, fullStars, fullStars + 1)
    }

    if (emptyStars) {
        starsArray.fill(starValue.EMPTY, - emptyStars)
    }

    return starsArray.join(" ")
}

export function starRating2(value: string): string {
    const number = Number(value)

    if (isNaN(number)) {
        throw Error(errorMessage)
    }

    let stars: string

    const roundedNumber = Math.round(number * 2) / 2

    if (roundedNumber >= MAX_STARS) {
        stars = `${starValue.FULL} `.repeat(MAX_STARS).trim()

        return stars
    }

    const fullStars = Math.trunc(roundedNumber)
    const emptyStars = Math.trunc(MAX_STARS - roundedNumber)
    const halfStars = fullStars + emptyStars === MAX_STARS ? 0 : 1

    stars = `${`${starValue.FULL} `.repeat(fullStars)}${`${starValue.HALF} `.repeat(halfStars)}${`${starValue.EMPTY} `.repeat(emptyStars)}`.trim()

    return stars
}
