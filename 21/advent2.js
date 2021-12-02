function init2() {
    document.getElementById("adventContent").innerHTML = getHTMLForAdventDayAndYear(2, 2021, "Dive!");
}

function day2part1() {
    let input = document.getElementById("input2").value;
    let lines = input.split("\n");
    let horizontal = 0;
    let depth = 0;
    
    for (let i = 0; i < lines.length; i++) {
        let commands = lines[i].split(" ");

        if (commands[0] == "forward") {
            horizontal += parseInt(commands[1]);
        } else if (commands[0] == "up") {
            depth -= parseInt(commands[1]);
        } else if (commands[0] == "down") {
            depth += parseInt(commands[1]);
        }
    }

    document.getElementById("output2").innerHTML = horizontal * depth;
}

function day2part2() {
    let input = document.getElementById("input2").value;
    let lines = input.split("\n");
    let horizontal = 0;
    let depth = 0;
    let aim = 0;

    for (let i = 0; i < lines.length; i++) {
        let commands = lines[i].split(" ");

        if (commands[0] == "forward") {
            horizontal += parseInt(commands[1]);
            depth += aim * parseInt(commands[1]);
        } else if (commands[0] == "up") {
            aim -= parseInt(commands[1]);
        } else if (commands[0] == "down") {
            aim += parseInt(commands[1]);
        }
    }

    document.getElementById("output2").innerHTML = horizontal * depth;
}
