function init6() {
    let content = document.getElementById("adventContent").innerHTML = getHTMLForAdventDayAndYear(6, 2021, "Lanternfish");
    content += 'Days: <input id="arg1" type="number" min="0" max="256" value="80" />';
    document.getElementById("adventContent").innerHTML = content;
}

function day6part1() {
    let input = document.getElementById("input6").value;
    let iterations = document.getElementById("arg1").value;
    let lines = input.split(",");
    let fish = {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0
    };

    for (let i = 0; i < lines.length; i++) {
        fish[lines[i]]++;
    }

    for (let i = 0; i < iterations; i++) {
        let newFish  = fish["0"];
        let resetFish = fish["0"];
        fish["0"] = fish["1"];
        fish["1"] = fish["2"];
        fish["2"] = fish["3"];
        fish["3"] = fish["4"];
        fish["4"] = fish["5"];
        fish["5"] = fish["6"];
        fish["6"] = fish["7"];
        fish["7"] = fish["8"];
        fish["8"] = newFish;
        fish["6"] += resetFish;
    }

    document.getElementById("output6").innerHTML = fish["0"] + fish["1"] + fish["2"] + fish["3"] + fish["4"] + fish["5"] + fish["6"] + fish["7"] + fish["8"];
}

function day6part2() {
    day6part1();
}
