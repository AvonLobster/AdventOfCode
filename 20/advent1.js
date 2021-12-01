function init1() {
    document.getElementById("adventContent").innerHTML = getHTMLForAdventDay(1, "Report Repair");
}

function day1part1() {
    var input = document.getElementById("input1").value;
    var lines = input.split('\n');
    var done = false;
    var nums = lines.map(function(line) {
        return parseInt(line);
    });

    for (var i = 0; i < nums.length && !done; i++) {
        for (var j = i + 1; j < nums.length && !done; j++) {
            if (nums[i] + nums[j] == 2020) {
                document.getElementById("output1").innerHTML = nums[i] * nums[j];
                done = true;
            }
        }
    }
}

function day1part2() {
    var input = document.getElementById("input1").value;
    var lines = input.split('\n');
    var done = false;
    var nums = lines.map(function(line) {
        return parseInt(line);
    });

    for (var i = 0; i < nums.length && !done; i++) {
        for (var j = i + 1; j < nums.length && !done; j++) {
            for (var k = j + 1; k < nums.length && !done; k++) {
                if (nums[i] + nums[j] + nums[k] == 2020) {
                    document.getElementById("output1").innerHTML = nums[i] * nums[j] * nums[k];
                    done = true;
                }
            }
        }
    }
}
