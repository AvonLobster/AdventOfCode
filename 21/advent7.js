function init7() {
    document.getElementById("adventContent").innerHTML = getHTMLForAdventDayAndYear(7, 2021, "The Treachery of Whales");
}

function day7part1() {
    let input = document.getElementById("input7").value;
    let crabs = input.split(',').map(function(item) {
        return parseInt(item, 10);
    });

    let maxCrab = Math.max(...crabs);
    let positions = new Array(maxCrab).fill(0);

    for (let i = 0; i < maxCrab; i++) {
        let fuel = 0;

        for (let j = 0; j < crabs.length; j++) {
            fuel += Math.abs(crabs[j] - i);
        }

        positions[i] = fuel;
    }

    let leastFuel = Math.min(...positions);

    document.getElementById("output7").innerHTML = leastFuel;
}

function notQuiteFactorial(n) {
    let fuel = 0;
    for (let i = 1; i <= n; i++) {
        fuel += i;
    }

    return fuel;
}

function day7part2() {
    let input = document.getElementById("input7").value;
    let crabs = input.split(',').map(function(item) {
        return parseInt(item, 10);
    });

    let maxCrab = Math.max(...crabs);
    let positions = new Array(maxCrab).fill(0);

    for (let i = 0; i < maxCrab; i++) {
        let fuel = 0;

        for (let j = 0; j < crabs.length; j++) {
            fuel += notQuiteFactorial(Math.abs(crabs[j] - i));
        }

        positions[i] = fuel;
    }

    let leastFuel = Math.min(...positions);

    document.getElementById("output7").innerHTML = leastFuel;
}
