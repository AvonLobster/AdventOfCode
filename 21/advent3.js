function init3() {
    document.getElementById("adventContent").innerHTML = getHTMLForAdventDayAndYear(3, 2021, "Binary Diagnostic");
}

function day3part1() {
    let input = document.getElementById("input3").value;
    let lines = input.split("\n");
    let binCount = new Array(lines[0].length).fill(0);
    let gamma = "";
    let episilon = "";

    for (let i = 0; i < lines.length; i++) {
        for (let j = 0; j < lines[i].length; j++) {
            if (lines[i][j] == "1") {
                binCount[j]++;
            }
        }
    }

    for (let i = 0; i < binCount.length; i++) {
        if (binCount[i] > lines.length / 2) {
            gamma += "1";
            episilon += "0";
        } else {
            gamma += "0";
            episilon += "1";
        }
    }

    let gammaDec = binToDec(gamma);
    let episilonDec = binToDec(episilon);

    document.getElementById("output3").innerHTML = gammaDec * episilonDec;
}

function day3part2() {
    let input = document.getElementById("input3").value;
    let lines = input.split("\n");

    // Oxygen
    let j = 0;
    let binCount = 0;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i][j] == "1") {
            binCount++;
        }

        if (i + 1 == lines.length) {
            if (binCount >= lines.length / 2) {
                lines = lines.filter(line => line[j] == "1");
            } else {
                lines = lines.filter(line => line[j] == "0");
            }

            if (lines.length <= 1 || j == lines[0].length - 1) {
                break;
            }

            j++;
            i = -1;
            binCount = 0;
        }
    }
    let oxygen = lines[0];

    // CO2
    lines = input.split("\n");
    j = 0;
    binCount = 0;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i][j] == "0") {
            binCount++;
        }

        if (i + 1 == lines.length) {
            if (binCount <= lines.length / 2) {
                lines = lines.filter(line => line[j] == "0");
            } else {
                lines = lines.filter(line => line[j] == "1");
            }

            if (lines.length <= 1 || j == lines[0].length - 1) {
                break;
            }

            j++;
            i = -1;
            binCount = 0;
        }
    }
    let co2 = lines[0];

    let oxygenDec = binToDec(oxygen);
    let co2Dec = binToDec(co2);

    document.getElementById("output3").innerHTML = oxygenDec * co2Dec;
}

// Function converts binary string to decimal
function binToDec(bin) {
    let dec = 0;
    for (let i = 0; i < bin.length; i++) {
        if (bin[i] == "1") {
            dec += Math.pow(2, bin.length - i - 1);
        }
    }
    return dec;
}
