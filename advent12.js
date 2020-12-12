function init12() {
    document.getElementById("adventContent").innerHTML = getHTMLForAdventDay(12, "");
}

function day12part1() {
    let input = document.getElementById("input12").value;
    let lines = input.split("\n");
    let x = 0;
    let y = 0;
    let dirs = ["e", "s", "w", "n"];
    let currDir = 0;
    
    for (let i = 0; i < lines.length; i++) {
        let instruction = lines[i].charAt(0);
        let unit = parseInt(lines[i].substring(1));

        if (instruction == "N" || (instruction == "F" && dirs[currDir] == "n")) {
            y += unit;
        } else if (instruction == "E" || (instruction == "F" && dirs[currDir] == "e")) {
            x += unit;
        } else if (instruction == "S" || (instruction == "F" && dirs[currDir] == "s")) {
            y -= unit;
        } else if (instruction == "W" || (instruction == "F" && dirs[currDir] == "w")) {
            x -= unit;
        } else if (instruction == "L") {
            currDir -= (unit / 90);
            if (currDir < 0) currDir += 4;
        } else if (instruction == "R") {
            currDir += (unit / 90);
            if (currDir >= 4) currDir -= 4;
        } 
    }

    let distance = Math.abs(x) + Math.abs(y);
    document.getElementById("output12").innerHTML = distance;
}

function day12part2() {
    let input = document.getElementById("input12").value;
    let lines = input.split("\n");
    let shipx = 0;
    let shipy = 0;
    let x = 10;
    let y = 1;
    let tmp = 0;
    
    for (let i = 0; i < lines.length; i++) {
        let instruction = lines[i].charAt(0);
        let unit = parseInt(lines[i].substring(1));

        if (instruction == "N") {
            y += unit;
        } else if (instruction == "E") {
            x += unit;
        } else if (instruction == "S") {
            y -= unit;
        } else if (instruction == "W") {
            x -= unit;
        } else if (instruction == "L") {
            let rotations = unit / 90;
            for (let j = 0; j < rotations; j++) {
                tmp = y;
                y = x;
                x = tmp * -1;
            }
        } else if (instruction == "R") {
            let rotations = unit / 90;
            for (let j = 0; j < rotations; j++) {
                tmp = x;
                x = y;
                y = tmp * -1;
            }
        } else if (instruction == "F") {
            shipx += (x * unit);
            shipy += (y * unit);
        }
    }

    let distance = Math.abs(shipx) + Math.abs(shipy);
    document.getElementById("output12").innerHTML = distance;
}
