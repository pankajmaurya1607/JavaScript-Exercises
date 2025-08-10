// 4. Calculate Area of Triangle (Sides: 5, 6, 7)

// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  


function calculateTriangleArea(a, b, c) {
    const s = (a+b+c)/2
    const area = Math.sqrt(s*(s-a)*(s-b)*(s-c))
    return area;
}

function showTriangleArea()  {
    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);
    const sideC = parseFloat(document.getElementById('sideC').value);

    // validate input
    if(isNaN(sideA) || isNaN(sideB) || isNaN(sideC) || sideA <= 0 || sideB <= 0 || sideC <= 0) {
        document.getElementById('output').innerHTML = "❌ please enter valis positive number for all sides";
        return
    }
    
    // check for triangle inequality
    if(sideA+sideB <= sideC || sideA+sideC <= sideB || sideB+sideC <= sideA) {
        document.getElementById('output').innerHTML = "❌ The entered sides do not form a valid triangle.";
        return
    }

    const area = calculateTriangleArea(sideA, sideB, sideC);
    document.getElementById('output').innerHTML = `✅ The Area of the Triangle is <strong>${area.toFixed(2)}</strong> square unit.`
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calcButton").addEventListener('click', showTriangleArea)
});
