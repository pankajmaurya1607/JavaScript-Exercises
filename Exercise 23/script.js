// Conditional Imports:

// 8. Write a JavaScript program that imports a specific module conditionally based on a runtime value.


async function run(language) {
    const user = "Pankaj"
    try {
        let module;

        if(language == 'en') {
            module = await import('./greetingsEnglish.js')
        }
        else if(language == 'es') {
            module = await import('./greetingsSpanish.js')
        }
        else {
            throw new Error('Unsupported Language')
        }

        console.log(module.greet(user));
    }
    catch(error) {
        throw new Error('Error in loading module:', error)
    }
}

run("en")
run("es")