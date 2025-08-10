// 3. Get Current Date in Various Formats

// Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy


function getCurrentDate() {
    const today = new Date();

    let day = today.getDate();
    let month = today.getMonth() + 1;
    const year = today.getFullYear();
    
    day = day.toString().padStart(2, '0')
    month = month.toString().padStart(2, '0')

    return {
        "mm-dd-yyyy": `${month}-${day}-${year}`,
        "mm/dd/yyyy": `${month}/${day}/${year}`,
        "dd-mm-yyyy": `${day}-${month}-${year}`,
        "dd/mm/yyyy": `${day}/${month}/${year}`,
    }
}

function showDates() {
    const formats = getCurrentDate()
    document.getElementById('output').innerHTML = `
        mm-dd-yyyy: ${formats["mm-dd-yyyy"]} <br>
        mm/dd/yyyy: ${formats["mm/dd/yyyy"]} <br>
        dd-mm-yyyy: ${formats["dd-mm-yyyy"]} <br>
        dd/mm/yyyy: ${formats["dd/mm/yyyy"]} 
    `;
}

// Wait until the whole HTML is loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", function() {
    // get buttom element
    const button = document.getElementById('showButton')

    button.addEventListener('click', showDates)
})