import { defineRule } from "svelte-reactive-form"
import { REGEX_EMAIL } from "./constant"

defineRule("required", (val: any) => {
    return val.length > 0 || "Required"
})
defineRule("minString", (val: any) => {
    return val.length >= 6 || "Min String"
})
defineRule("maxString", (val: any) => {
    return val.length <= 255 || "Max String"
})
defineRule("numeric", (val: any) => {
    return /[0-9]+/.test(val) || "Invalid numeric format"
})
defineRule("email", (val: any) => {
    const regex = new RegExp(REGEX_EMAIL)
    return regex.test(val) || "Invalid Email"
})
