function init8() {
    document.getElementById("adventContent").innerHTML = getHTMLForAdventDay(8, "");
}

function day8part1() {
    let input = document.getElementById("input8").value;
    let lines = input.split("\n");
    let accumulator = 0;
    let instructionCounter = 0;
    let instructionsExecuted = [];

    while (!instructionsExecuted.includes(instructionCounter)) {
        instructionsExecuted.push(instructionCounter);
        let instruction = lines[instructionCounter].substring(0, 3);
        let arg = parseInt(lines[instructionCounter].substring(4));

        if (instruction == "acc") {
            accumulator += arg;
            instructionCounter++;
        } else if (instruction == "jmp") {
            instructionCounter += arg;
        } else {
            instructionCounter++;
        }
    }

    document.getElementById("output8").innerHTML = accumulator;
}

function day8part2() {
    let input = document.getElementById("input8").value;
    let lines = input.split("\n");
    let globalAccumulator = {};
    globalAccumulator.value = 0;
    let changeCounter = 0;
    let doneTesting = false;
    
    while (!doneTesting) {
        let newLines = lines.slice();

        for (let i = changeCounter; i < newLines.length; i++) {
            let instruction = newLines[i].substring(0, 3);
            
            if (instruction == "jmp") {
                newLines[i] = newLines[i].replace("jmp", "nop");
                changeCounter = i+1;
                break;
            } else if (instruction == "nop") {
                newLines[i] = newLines[i].replace("nop", "jmp");
                changeCounter = i+1;
                break;
            }
        }

        doneTesting = runProgram(newLines, globalAccumulator);
    }

    document.getElementById("output8").innerHTML = globalAccumulator.value;
}

function runProgram(lines, globalAccumulator) {
    let accumulator = 0;
    let instructionCounter = 0;
    let instructionsExecuted = [];
    let infiniteLoop = false;
    let done = false;

    while (!done) {
        if (instructionsExecuted.includes(instructionCounter)) {
            infiniteLoop = true;
            break;
        }
        instructionsExecuted.push(instructionCounter);
        let instruction = lines[instructionCounter].substring(0, 3);
        let arg = parseInt(lines[instructionCounter].substring(4));

        if (instruction == "acc") {
            accumulator += arg;
            instructionCounter++;
        } else if (instruction == "jmp") {
            instructionCounter += arg;
        } else {
            instructionCounter++;
        }

        if (instructionCounter >= lines.length) {
            done = true;
        }
    }

    globalAccumulator.value = accumulator;
    if (infiniteLoop) console.log("Infinite Loop. Accumulator == " + accumulator);
    else console.log("Finished program. Accumulator == " + accumulator);
    return done;
}
