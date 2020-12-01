function init1() {
    var ac = document.getElementById("adventContent");
    var content = '<h2>--- Day 1:  ---</h2>';
    content += '<textarea id="input1"></textarea><br>';
    content += '<button type="button" onclick="day1part1()">Part 1</button>';
    content += '<button type="button" onclick="day1part2()">Part 2</button>';
    content += '<div id="output1"></div>';
    ac.innerHTML = content;
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