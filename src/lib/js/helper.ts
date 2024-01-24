import { REGEX_EMAIL } from "./constant";

export const greeting = (value: string) => {
    console.log('Hello ', value);
}

export const validateEmail = (mail_address: string) => {
    const regex = new RegExp(REGEX_EMAIL)

    return !regex.test(mail_address)
}
