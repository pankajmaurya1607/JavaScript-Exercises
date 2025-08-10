// 1. Display Current Day and Time

// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38


function getCurrentTime() {
    // darte object
    const currentTime = new Date();

    console.log(currentTime);

    // get day
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    const currentDay = days[currentTime.getDay()];

    // get time component
    let hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const second = currentTime.getSeconds();

    // AM PM
    const ampm = hours > 12 ? 'PM' : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;

    // display
    console.log(`Today is : ${currentDay}.`);
    console.log(`Current Time is : ${hours} ${ampm} : ${minutes} : ${second}.`);
}

getCurrentTime()