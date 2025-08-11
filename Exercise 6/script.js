// 6. Check Leap Year (Gregorian Calendar)

// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. 


function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
}

function checkLeapYear() {
    const yearInput = document.getElementById("year").value.trim()
    const year = parseInt(yearInput, 10)
    const output = document.getElementById('output')

    if(isNaN(year) || year <= 0) {
        output.innerHTML = "❌ Please enter a valid positive year.";
        return;
    }

    if(isLeapYear(year)) {
        output.innerHTML = `✅  year ${year} is a leap year`;
    }
    else {
        output.innerHTML = `❌ year ${year} is not a leap year`;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('checkButton').addEventListener('click', checkLeapYear)
})

