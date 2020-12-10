function init10() {
    document.getElementById("adventContent").innerHTML = getHTMLForAdventDay(10, "");
}

function day10part1() {
    let input = document.getElementById("input10").value;
    let lines = input.split("\n");
    let adapters = [];
    adapters.push(0);
    let oneCount = 0;
    let threeCount = 0;

    for (let i = 0; i < lines.length; i++) {
        adapters.push(parseInt(lines[i]));
    }

    adapters.sort(function(a, b) {
        return a - b;
    });
    adapters.push(adapters[adapters.length - 1] + 3);

    for (let i = 1; i < adapters.length; i++) {
        if (adapters[i] - adapters[i-1] == 1) {
            oneCount++;
        } else if (adapters[i] - adapters[i-1] == 3) {
            threeCount++;
        }
    }

    let ans = oneCount * threeCount;
    let content = '<p>' + oneCount + ' differences of 1</p>';
    content += '<p>' + threeCount + ' differences of 3</p>';
    content += '<p>' + ans;

    document.getElementById("output10").innerHTML = content;
}

function day10part2() {
    let input = document.getElementById("input10").value;
    let lines = input.split("\n");
    let adapters = [];
    adapters.push(0);

    for (let i = 0; i < lines.length; i++) {
        adapters.push(parseInt(lines[i]));
    }

    adapters.sort(function(a, b) {
        return a - b;
    });

    let options = new Array(adapters.length).fill(0);
    options[0] = 1;

    for (let i = 0; i < options.length; i++) {
        for (let j = i-3; j < i; j++) {
            if (adapters[i] <= adapters[j] + 3) {
                options[i] += options[j];
            }
        }
    }

    document.getElementById("output10").innerHTML = options[options.length - 1];
}
