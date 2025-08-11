// 5. Rotate String 'w3resource' Periodically

// Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front. 


function rotateStringRight(word) {
    rotation = [word]
    let current = word

    for(i=0; i<word.length-1; i++) {
        current = current.charAt(current.length-1) + current.substring(0, current.length-1)
        rotation.push(current)
    }
    return rotation
}

function showRotation() {
    const userInput = document.getElementById('userInput').value
    const output = document.getElementById('output')

    if(!userInput) {
        output.innerHTML = "❌ Please enter a string.";
        return; 
    }

    const rotation = rotateStringRight(userInput)
    output.innerHTML = rotation.join("<br>")
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('rotateButton').addEventListener('click', showRotation)
})

