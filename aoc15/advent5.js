function init5() {
    var ac = document.getElementById("adventContent");
    var content = "<h2>--- Day 5: Doeesn't He Have Intern-Elves For This? ---</h2>";
    content += '<textarea id="input5"></textarea><br>';
    content += '<button type="button" onclick="day5part1()">Part 1</button>';
    content += '<button type="button" onclick="day5part2()">Part 2</button>';
    content += '<div id="output5"></div>';
    ac.innerHTML = content;
}

function day5part1() {
    let input = document.getElementById("input5").value;
    let lines = input.split('\n');
    let nice = 0;

    for (let i = 0; i < lines.length; i++) {
        if (hasAtLeast3Vowels(lines[i]) &&
            hasDupLetters(lines[i]) &&
            !lines[i].includes("ab") &&
            !lines[i].includes("cd") &&
            !lines[i].includes("pq") &&
            !lines[i].includes("xy")) {
            nice++;
        }
    }

    document.getElementById("output5").innerHTML = nice;
}

function hasAtLeast3Vowels(line) {
    return line.match(/[aeiou].*[aeiou].*[aeiou]/) != null;
}

function hasDupLetters(line) {
    return line.match(/(.)\1/) != null;
}

function day5part2() {
    let input = document.getElementById("input5").value;
    let lines = input.split('\n');
    let nice = 0;

    for (let i = 0; i < lines.length; i++) {
        if (hasAPairOfCharacters(lines[i]) && hasRepeatingCharWith1LetterBtwn(lines[i])) {
            nice++;
        }
    }

    document.getElementById("output5").innerHTML = nice;
}

function hasAPairOfCharacters(line) {
    for (let i = 0; i < line.length - 1; i++) {
        let pair = line.substring(i, i+2);
        for (let j = i+2; j < line.length - 1; j++) {
            if (pair == line.substring(j, j+2)) {
                return true;
            }
        }
    }
    return false;
}

function hasRepeatingCharWith1LetterBtwn(line) {
    for (let i = 0; i < line.length - 2; i++) {
        if (line.charAt(i) == line.charAt(i+2)) {
            return true;
        }
    }
    return false;
}