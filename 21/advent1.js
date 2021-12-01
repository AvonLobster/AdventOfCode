function init1() {
    document.getElementById("adventContent").innerHTML = getHTMLForAdventDay(1, "Sonar Sweep");
}

function day1part1() {
    var input = document.getElementById("input1").value;
    var lines = input.split('\n');
    var nums = lines.map(function(line) {
        return parseInt(line);
    });
    var prev = nums[0]
    var increased = 0;

    for (var i = 1; i < nums.length; i++) {
        if (nums[i] > prev) {
            increased++;
        }
        prev = nums[i];
    }

    document.getElementById("output1").innerHTML = increased;
}

function day1part2() {
    var input = document.getElementById("input1").value;
    var lines = input.split('\n');
    var nums = lines.map(function(line) {
        return parseInt(line);
    });
    var prevSum = nums[0] + nums[1] + nums[2];
    var increased = 0;

    for (var i = 1; i < nums.length - 2; i++) {
        var sum = nums[i] + nums[i + 1] + nums[i + 2];

        if (sum > prevSum) {
            increased++;
        }

        prevSum = sum;
    }

    document.getElementById("output1").innerHTML = increased;
}
