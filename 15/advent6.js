function init6() {
    var ac = document.getElementById("adventContent");
    var content = "<h2>--- Day 6: Probably a Fire Hazard---</h2>";
    content += '<textarea id="input6"></textarea><br>';
    content += '<button type="button" onclick="day6part1()">Part 1</button>';
    content += '<button type="button" onclick="day6part2()">Part 2</button>';
    content += '<div id="output6"></div><br>';
    content += '<div id="visual6"></div>';
    ac.innerHTML = content;
}

function day6part1() {
    let grid = buildGrid();
    let input = document.getElementById("input6").value;
    let instructions = input.split("\n");

    for (let i = 0; i < instructions.length; i++) {
        let xStart = 0;
        let yStart = 0;
        let xEnd = 0;
        let yEnd = 0;
    }

    printVisualAndAnswer(grid);
}

function buildGrid() {
    let grid = new Array(999).fill("0");

    for (let i = 0; i < grid.length; i++) {
        grid[i] = new Array(999).fill("0");
    }

    return grid;
}

function printVisualAndAnswer(grid) {
    let content = "";
    let onCount = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            content += grid[i][j];
            if (grid[i][j] == "1") onCount++;
        }
        content += "<br>";
    }

    document.getElementById("visual6").innerHTML = content;
    document.getElementById("output6").innerHTML = onCount;
}