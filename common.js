function getHTMLForAdventDay(day, name) {
    getHTMLForAdventDay(day, "2020", name);
}

function getHTMLForAdventDay(day, year, name) {
    let content = '<h2>--- Day <a href="https://adventofcode.com/' + year + '/day/' + day + '" target="_blank">' + day + '</a>: ' + name + ' ---</h2>';
    content += '<button type="button" onclick="insertMyInput(' + day +')">[My Input]</button><br>';
    content += '<textarea id="input' + day + '" rows="15" cols="80"></textarea><br>';
    content += '<button type="button" onclick="day' + day + 'part1()">[Part 1]</button>';
    content += '<button type="button" onclick="day' + day + 'part2()">[Part 2]</button>';
    content += '<div id="output' + day + '"></div><br>';
    return content;
}

function insertMyInput(day) {
    let inputBox = document.getElementById("input" + day);
    let inputName = "day" + day + "Input";
    inputBox.value = eval(inputName);
}
