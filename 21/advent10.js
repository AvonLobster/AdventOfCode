function init10() {
    document.getElementById("adventContent").innerHTML = getHTMLForAdventDay(10, "Adapter Array");
}

function getExpectedSyntax(char) {
    switch (char) {
        case '(':
            return ')';
        case '[':
            return ']';
        case '{':
            return '}';
        case '<':
            return '>';
    }
}

function getScore(char) {
    switch (char) {
        case ')':
            return 3;
        case ']':
            return 57;
        case '}':
            return 1197;
        case '>':
            return 25137;
    }
}

function day10part1() {
    let input = document.getElementById("input10").value;
    let lines = input.split("\n");
    let syntaxStack = [];
    let score = 0;

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        syntaxStack = [];
        for (let j = 0; j < line.length; j++) {
            let char = line[j];
            if (char == '(' ||
                char == '[' ||
                char == '{' ||
                char == '<') {
                syntaxStack.push(char);
            } else {
                let popped = syntaxStack.pop();
                let expected = getExpectedSyntax(popped);

                if (char != expected) {
                    console.log("Expected " + expected + " but found " + char + " on line " + i + " instead.");
                    score += getScore(char);
                    continue;
                }
            }
        }
    }

    document.getElementById("output10").innerHTML = score;
}

function getScore2(char) {
    switch (char) {
        case ')':
            return 1;
        case ']':
            return 2;
        case '}':
            return 3;
        case '>':
            return 4;
    }
}

function day10part2() {
    let input = document.getElementById("input10").value;
    let lines = input.split("\n");
    let syntaxStack = [];
    let scores = [];
    let corrupted = false;
    let line = "";
    
    for (let i = 0; i < lines.length; i++) {
        corrupted = false;
        line = lines[i];
        syntaxStack = [];

        for (let j = 0; j < line.length; j++) {
            let char = line[j];
            if (char == '(' ||
                char == '[' ||
                char == '{' ||
                char == '<') {
                syntaxStack.push(char);
            } else {
                let popped = syntaxStack.pop();
                let expected = getExpectedSyntax(popped);

                if (char != expected) {
                    corrupted = true;
                    continue;
                }
            }
        }

        if (!corrupted) {
            let score = 0;

            while (syntaxStack.length > 0) {
                let popped = syntaxStack.pop();
                let expected = getExpectedSyntax(popped);
                score *= 5;
                score += getScore2(expected);
            }
            scores.push(score);
        }
    }

    scores = scores.sort((a, b) => b - a);

    document.getElementById("output10").innerHTML = scores[Math.floor(scores.length / 2)];
}
