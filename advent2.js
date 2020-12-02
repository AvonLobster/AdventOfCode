function init2() {
    var ac = document.getElementById("adventContent");
    var content = "<h2>--- Day 2: Password Philosophy ---</h2>";
    content += '<textarea id="input2"></textarea><br>';
    content += '<button type="button" onclick="day2part1()">Part 1</button>';
    content += '<button type="button" onclick="day2part2()">Part 2</button>';
    content += '<div id="output2"></div><br>';
    ac.innerHTML = content;
}

function day2part1() {
    let input = document.getElementById("input2").value;
    let lines = input.split("\n");
    let validCount = 0;
    
    for (let i = 0; i < lines.length; i++) {
        let min = parseInt(lines[i].match(/(\d+)-/));
        let max = parseInt(lines[i].match(/\d+(?!.*-)/));
        let ch = lines[i].charAt(lines[i].indexOf(":") - 1);
        let pw = lines[i].substring(lines[i].indexOf(":") + 2);
        let count = pw.split(ch).length - 1;
        
        if (count >= min && count <= max) validCount++;
    }

    document.getElementById("output2").innerHTML = validCount;
}

function day2part2() {
    let input = document.getElementById("input2").value;



    document.getElementById("output2").innerHTML = ""
}