function sortWealth(n, people) {
    // Sort the people array based on the specified rules
    people.sort((a, b) => {
        if (a[1] !== b[1]) {
            return b[1] - a[1]; // Sort by silver amount in descending order
        } else {
            return b[0] - a[0]; // If silver amounts are equal, sort by gold amount in descending order
        }
    });

    // Output the sorted wealth of each person
    people.forEach(person => console.log(person.join(' '));
}

function main(input) {
    const inputArray = input.trim().split('\n');
    const n = parseInt(inputArray[0]);
    const people = inputArray.slice(1).map(person => person.split(' ').map(Number));
    
    sortWealth(n, people); // Call sortWealth function with the number of people and their wealth information
}

process.stdin.resume();
process.stdin.setEncoding('utf8');
let input = '';
process.stdin.on('data', chunk => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input); // Call main function when input ends
});
