function init9() {
    let content = getHTMLForAdventDay(9, "Encoding Error");
    content += 'Preamble Length: <input id="arg1" type="number" min="5" max="25" value="25" />';
    document.getElementById("adventContent").innerHTML = content;
}

function day9part1() {
    let input = document.getElementById("input9").value;
    let lines = input.split("\n");
    let preambleLength = parseInt(document.getElementById("arg1").value);
    let preamble = [];
    let validList = new Set();
    let valid = true;
    let i = 0;
    let candidate = 0;

    for (; i < preambleLength; i++) {
        preamble.push(parseInt(lines[i]));
    }

    validList = makeValidList(preamble);

    while (valid) {
        candidate = parseInt(lines[i++]);

        if (validList.has(candidate)) {
            preamble.shift();
            preamble.push(candidate);
            validList = makeValidList(preamble);
        } else {
            valid = false;
        }
    }

    document.getElementById("output9").innerHTML = candidate;
    return candidate;
}

function day9part2() {
    let input = document.getElementById("input9").value;
    let lines = input.split("\n");
    let candidate = day9part1();
    let contiguousSet = [];
    let done = false;

    for (let i = 0; i < lines.length && !done; i++) {
        contiguousSet.push(parseInt(lines[i]));
        let sum = contiguousSet.reduce(add, 0);

        if (sum == candidate) done = true; // If this happens, we missed the window
        else if (sum > candidate) {
            while (sum > candidate) {
                contiguousSet.shift();
                sum = contiguousSet.reduce(add, 0);
            }

            if (sum == candidate) done = true;
        }
    }

    contiguousSet.sort(function(a, b) {
        return a - b;
    });
    let min = contiguousSet[0];
    let max = contiguousSet[contiguousSet.length - 1];
    let weakness = min + max;

    document.getElementById("output9").innerHTML = weakness;
}

function makeValidList(preamble) {
    let validList = new Set();

    for (let j = 0; j < preamble.length; j++) {
        for (let k = j+1; k < preamble.length; k++) {
            validList.add(preamble[j] + preamble[k]);
        }
    }

    return validList;
}

function add(accumulator, a) {
    return accumulator + a;
}