import { hellofromA } from "./moduleA.js"

export function hellofromB() {
    return "Hello from Module B"
}

export function callA() {
    return hellofromA()
}