function init13() {
    document.getElementById("adventContent").innerHTML = getHTMLForAdventDay(13, "Shuttle Search");
}

function day13part1() {
    let input = document.getElementById("input13").value;
    let lines = input.split("\n");
    let arrival = parseInt(lines[0]);
    let buses = lines[1].split(",");
    buses = buses.filter(function(x) {
        return ['x'].indexOf(x) < 0;
    });
    let nextBus = [];
    let busMap = new Map();

    for (let i = 0; i < buses.length; i++) {
        let busInterval = parseInt(buses[i]);
        let busTime = busInterval;

        while (busTime < arrival) {
            busTime += busInterval;
        }

        busMap[busTime] = busInterval;
        nextBus.push(busTime);
    }

    nextBus.sort(function(a, b) {
        return a - b;
    });

    let waitTime = nextBus[0] - arrival;
    let answer = busMap[nextBus[0]] * waitTime;

    document.getElementById("output13").innerHTML = answer;
}

function day13part2() {
    let input = document.getElementById("input13").value;
    let lines = input.split("\n");
    let buses = lines[1].split(",");
    let bus1 = parseInt(buses[0]);
    let timeBtwn = 1;
    let t = bus1;

    for (let i = 1; i < buses.length; i++) {
        if (buses[i] == "x") timeBtwn++;
        else {
            let bus2 = parseInt(buses[i]);
            bus1 = combineBuses(bus1, bus2, timeBtwn);
            timeBtwn = 1;
        }
    }

    document.getElementById("output13").innerHTML = bus1;
}

// t = 7x + 0
// t = 13y - 1

// t + w = 7(x1) + 0
// t + w = 13(y1) - 1

// t     = 7x
// t + 1 = 13y
// t + w = 7(x1)
// t + 1 + w = 13(y1)

// t / 7 + (w/7) = x1
// [(t + 1) / 13] + (w / 13) = y1

function combineBuses(bus1, bus2, timeBtwn) {
    let t1 = bus1;
    let t2 = bus2;
    let occurence1 = 0;
    let occurence2 = 0;

    while (t1 + timeBtwn != t2) {
        t1 += bus1;
        while (t2 < t1) t2 += bus2;
    }

    occurence1 = t1;

    do {
        t1 += bus1; // start incrementing by the t1*t2
        while (t2 < t1) t2 += bus2;
    } while (t1 + timeBtwn != t2);

    occurence2 = t1;

    return t1;
}