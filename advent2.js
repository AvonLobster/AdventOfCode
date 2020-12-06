function init2() {
    document.getElementById("adventContent").innerHTML = getHTMLForAdventDay(2, "Password Philosophy");
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
    let lines = input.split("\n");
    let validCount = 0;

    for (let i = 0; i < lines.length; i++) {
        let pos1 = parseInt(lines[i].match(/(\d+)-/));
        let pos2 = parseInt(lines[i].match(/\d+(?!.*-)/));
        let ch = lines[i].charAt(lines[i].indexOf(":") - 1);
        let pw = lines[i].substring(lines[i].indexOf(":") + 2);

        if (pw.charAt(pos1-1) == ch && pw.charAt(pos2-1) != ch) validCount++;
        else if (pw.charAt(pos1-1) != ch && pw.charAt(pos2-1) == ch) validCount++;
    }

    document.getElementById("output2").innerHTML = validCount;
}
