import { hellofromB } from "./moduleB.js"

export function hellofromA() {
    return "Hello from Module A"
}

export function callB() {
    return hellofromB()
}