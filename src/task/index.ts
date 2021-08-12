import { v4 as uuidv4 } from "uuid"
import * as faker from "faker"

export interface Human {
    id: string
    name: string
    surname: string
    email: string
    age: number
    phoneNumber: number
    country: string
}

export const getRandomNumberBetween = (min: number, max: number): number => Math.floor(Math.random() * (max - min) + min)

export const getPhoneNumber = (): number => Math.floor(Math.random() * 1000000000)

export const generateHuman = (): Human => {
    const id = uuidv4()
    const name = faker.name.firstName()
    const surname = faker.name.lastName()
    const email = `${name.toLowerCase()}.${surname.toLowerCase()}@test.com`
    const age = getRandomNumberBetween(18, 85)
    const phoneNumber = getPhoneNumber()
    const country = faker.address.countryCode()

    const human = {
        id,
        name,
        surname,
        email,
        age,
        phoneNumber,
        country,
    }

    return(human)
}
