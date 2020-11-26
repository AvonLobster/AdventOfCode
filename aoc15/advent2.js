function init2() {
    var ac = document.getElementById("adventContent");
    var content = "<h2>--- Day 2: I Was Told There Would Be No Math ---</h2>";
    content += '<textarea id="input2"></textarea><br>';
    content += '<button type="button" onclick="day2part1()">Part 1</button>';
    content += '<button type="button" onclick="day2part2()">Part 2</button>';
    content += '<div id="output2"></div>';
    ac.innerHTML = content;
}

function day2part1() {
    var input = document.getElementById("input2").value;
    var lines = input.split('\n');
    var totalPaper = 0;
    
    for (var i = 0; i < lines.length; i++) {
        var dimensions = lines[i].split('x');
        var l = parseInt(dimensions[0]);
        var w = parseInt(dimensions[1]);
        var h = parseInt(dimensions[2]);
        
        var a1 = l * w;
        var a2 = w * h;
        var a3 = h * l;

        var minA = Math.min(a1, a2, a3);
        var sa = (2 * a1) + (2 * a2) + (2 * a3);
        var paper = sa + minA;

        totalPaper += paper;
    }

    document.getElementById("output2").innerHTML = totalPaper;
}

function day2part2() {
    var input = document.getElementById("input2").value;
    var lines = input.split('\n');
    var totalRibbon = 0;

    for (var i = 0; i < lines.length; i++) {
        var dimensions = lines[i].split('x');
        dimensions.sort(function(a, b){return a - b});
        var l = parseInt(dimensions[0]);
        var w = parseInt(dimensions[1]);
        var h = parseInt(dimensions[2]);

        var ribbon = l + l + w + w;
        ribbon += l * w * h;

        totalRibbon += ribbon;
    }

    document.getElementById("output2").innerHTML = totalRibbon;
}