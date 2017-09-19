// Create an array.
var numbers = [10, 11, 12];

// Call the addNumber callback function for each array element.
var sum = 0;
numbers.forEach(
    function addNumber(value) { sum += value; }
);

document.write(sum);
// Output: 33
