function init14() {
    document.getElementById("adventContent").innerHTML = getHTMLForAdventDay(14, "Docking Data");
}

function day14part1() {
    let input = document.getElementById("input14").value;
    let lines = input.split("\n");
    let mem = new Map();
    let mask = "";

    for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith("mask")) {
            mask = lines[i].substring(lines[i].indexOf("=") + 2);
        } else {
            let address = parseInt(lines[i].substring(lines[i].indexOf("[") + 1, 
                lines[i].indexOf("]")));
            let number = parseInt(lines[i].substring(lines[i].indexOf("=") + 2), 10).toString(2);

            while (number.length < 36) number = "0" + number;
            
            let answer = "";

            for (let j = 0; j < 36; j++) {
                if (mask[j] == "X") answer += number[j];
                else answer += mask[j];
            }

            mem.set(address, parseInt(answer, 2));
        }
    }

    let sum = 0;
    mem.forEach(function(v) {
        sum += v;
    });

    document.getElementById("output14").innerHTML = sum;
}

function day14part2() {
    let input = document.getElementById("input14").value;
    let lines = input.split("\n");
    let mem = new Map();
    let mask = "";

    for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith("mask")) {
            mask = lines[i].substring(lines[i].indexOf("=") + 2);
        } else {
            let address = parseInt(lines[i].substring(lines[i].indexOf("[") + 1, 
                lines[i].indexOf("]")), 10).toString(2);
            let number = parseInt(lines[i].substring(lines[i].indexOf("=") + 2));

            while (address.length < 36) address = "0" + address;
            
            let result = "";

            for (let j = 0; j < 36; j++) {
                if (mask[j] == "0") result += address[j];
                else if (mask[j] == "1" || address[j] == "1") result += "1";
                else result += "X";
            }

            mem.set(address, parseInt(result, 2));
        }
    }

    let sum = 0;
    mem.forEach(function(v) {
        sum += v;
    });

    document.getElementById("output14").innerHTML = sum;
}
