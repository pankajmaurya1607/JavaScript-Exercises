// Default export (only one per file)
export default function greet(name) {
    return `Hello, ${name}! 👋`
}

// Named export (can be many)
export function getUserAge(yearOfBirth) {
    const currentYear = new Date().getFullYear()
    return currentYear - yearOfBirth
}

export function isAdult(age) {
    return age >= 18
}

export const APP_NAME = "User Management System"