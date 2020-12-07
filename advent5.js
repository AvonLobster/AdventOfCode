function init5() {
    document.getElementById("adventContent").innerHTML = getHTMLForAdventDay(5, "Binary Boarding");
}

function day5part1() {
    let input = document.getElementById("input5").value;
    let lines = input.split("\n");
    let maxSeatID = 0;

    for (let i = 0; i < lines.length; i++) {
        let min = 0;
        let max = 127;
        let halfL = 64;
        let row = 0;
        let col = 0;

        if (lines[i].charAt(0) == "F") max -= halfL;
        else min += halfL;
        halfL /= 2;

        if (lines[i].charAt(1) == "F") max -= halfL;
        else min += halfL;
        halfL /= 2;

        if (lines[i].charAt(2) == "F") max -= halfL;
        else min += halfL;
        halfL /= 2;

        if (lines[i].charAt(3) == "F") max -= halfL;
        else min += halfL;
        halfL /= 2;

        if (lines[i].charAt(4) == "F") max -= halfL;
        else min += halfL;
        halfL /= 2;

        if (lines[i].charAt(5) == "F") max -= halfL;
        else min += halfL;
        halfL /= 2;

        if (lines[i].charAt(6) == "F") row = min;
        else row = max;

        min = 0;
        max = 7;
        halfL = 4;

        if (lines[i].charAt(7) == "L") max -= halfL;
        else min += halfL;
        halfL /= 2;

        if (lines[i].charAt(8) == "L") max -= halfL;
        else min += halfL;
        halfL /= 2;

        if (lines[i].charAt(9) == "L") col = min;
        else col = max;

        let seatID = row * 8 + col;
        if (seatID > maxSeatID) maxSeatID = seatID;
    }

    document.getElementById("output5").innerHTML = maxSeatID;
}

function day5part2() {
    let input = document.getElementById("input5").value;
    let lines = input.split("\n");
    let seats = Array();

    for (let i = 0; i < lines.length; i++) {
        let min = 0;
        let max = 127;
        let halfL = 64;
        let row = 0;
        let col = 0;

        if (lines[i].charAt(0) == "F") max -= halfL;
        else min += halfL;
        halfL /= 2;

        if (lines[i].charAt(1) == "F") max -= halfL;
        else min += halfL;
        halfL /= 2;

        if (lines[i].charAt(2) == "F") max -= halfL;
        else min += halfL;
        halfL /= 2;

        if (lines[i].charAt(3) == "F") max -= halfL;
        else min += halfL;
        halfL /= 2;

        if (lines[i].charAt(4) == "F") max -= halfL;
        else min += halfL;
        halfL /= 2;

        if (lines[i].charAt(5) == "F") max -= halfL;
        else min += halfL;
        halfL /= 2;

        if (lines[i].charAt(6) == "F") row = min;
        else row = max;

        min = 0;
        max = 7;
        halfL = 4;

        if (lines[i].charAt(7) == "L") max -= halfL;
        else min += halfL;
        halfL /= 2;

        if (lines[i].charAt(8) == "L") max -= halfL;
        else min += halfL;
        halfL /= 2;

        if (lines[i].charAt(9) == "L") col = min;
        else col = max;

        let seatID = row * 8 + col;
        seats.push(seatID);
    }

    seats = seats.sort(function(a, b) {
        return a - b;
    });

    let seatMin = seats[0];
    for (let j = 1; j < seats.length; j++) {
        if (seats[j] != ++seatMin) {
            break;
        }
    }

    document.getElementById("output5").innerHTML = seatMin;
}
