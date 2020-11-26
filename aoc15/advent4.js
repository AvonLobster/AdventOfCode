function init4() {
    var ac = document.getElementById("adventContent");
    var content = "<h2>--- Day 4: The Ideal Stocking Stuffer ---</h2>";
    content += '<input type="text" id="input4"></input><br>';
    content += '<button type="button" onclick="day4part1()">Part 1</button>';
    content += '<button type="button" onclick="day4part2()">Part 2</button>';
    content += '<div id="output4"></div>';
    ac.innerHTML = content;
}

function day4part1() {
    let input = document.getElementById("input4").value;
    let c = 1;
    let done = false;

    while (!done) {
        let hash = md5(input + c).toString();

        if (hash.startsWith("00000")) {
            done = true;
        }

        c++;
    }

    document.getElementById("output4").innerHTML = --c;
}

function day4part2() {
    let input = document.getElementById("input4").value;
    let c = 1;
    let done = false;

    while (!done) {
        let hash = md5(input + c).toString();

        if (hash.startsWith("000000")) {
            done = true;
        }

        c++;
    }

    document.getElementById("output4").innerHTML = --c;
}