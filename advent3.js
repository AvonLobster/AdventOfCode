function init3() {
    var ac = document.getElementById("adventContent");
    var content = "<h2>--- Day 3: Toboggan Trajectory ---</h2>";
    content += '<textarea id="input3"></textarea><br>';
    content += '<button type="button" onclick="day3part1()">Part 1</button>';
    content += '<button type="button" onclick="day3part2()">Part 2</button>';
    content += '<div id="output3"></div><br>';
    content += '<div id="visual3"></div>'
    ac.innerHTML = content;
}

function day3part1() {
    let input = document.getElementById("input3").value;
    let lines = input.split("\n");
    let treeCount = getTreeCount(lines, 3, 1);
    let vis = "";

    for (let i = 0; i < lines.length; i++) {
        vis += lines[i] + "<br>";
    }

    document.getElementById("output3").innerHTML = treeCount;
    document.getElementById("visual3").innerHTML = vis;
}

function day3part2() {
    let input = document.getElementById("input3").value;
    let lines = input.split("\n");
    let lines1 = lines.slice();
    let lines2 = lines.slice();
    let lines3 = lines.slice();
    let lines4 = lines.slice();
    let lines5 = lines.slice();
    let treeCount1 = getTreeCount(lines1, 1, 1);
    let treeCount2 = getTreeCount(lines2, 3, 1);
    let treeCount3 = getTreeCount(lines3, 5, 1);
    let treeCount4 = getTreeCount(lines4, 7, 1);
    let treeCount5 = getTreeCount(lines5, 1, 2);
    let prod = treeCount1 * treeCount2 * treeCount3 * treeCount4 * treeCount5;
    document.getElementById("output3").innerHTML = prod;
}

function getTreeCount(lines, movex, movey) {
    let x = 0;
    let y = 0;
    let treeCount = 0;

    for (y = movey; y < lines.length; y += movey) {
        x += movex;
        x %= lines[y].length;
        
        if (lines[y].charAt(x) == "#") {
            treeCount++;
            lines[y] = lines[y].substring(0, x) + "X" + lines[y].substring(x);
        } else {
            lines[y] = lines[y].substring(0, x) + "O" + lines[y].substring(x);
        }
    }

    return treeCount;
}