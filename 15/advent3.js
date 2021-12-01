function init3() {
    var ac = document.getElementById("adventContent");
    var content = "<h2>--- Day 3: Perfectly Sphereical Houses in a Vacuum ---</h2>";
    content += '<input type="text" id="input3"></input><br>';
    content += '<button type="button" onclick="day3part1()">Part 1</button>';
    content += '<button type="button" onclick="day3part2()">Part 2</button>';
    content += '<div id="output3"></div>';
    ac.innerHTML = content;
}

function day3part1() {
    let input = document.getElementById("input3").value;
    let houses = new Set();
    let x = 0;
    let y = 0;
    houses.add(coordToStr(x,y));

    for (let i = 0; i < input.length; i++) {
        let inst = input.charAt(i);

        switch (inst) {
            case "^": 
                y++;    
                break;
            case "v": 
                y--;
                break;
            case ">": 
                x++;
                break;
            case "<": 
                x--;
                break;
        }

        houses.add(coordToStr(x,y));
    }

    document.getElementById("output3").innerHTML = houses.size;
}

function day3part2() {
    let input = document.getElementById("input3").value;
    let houses = new Set();
    let santasTurn = true;
    let x = 0;
    let y = 0;
    let rx = 0;
    let ry = 0;
    houses.add(coordToStr(x,y));

    for (let i = 0; i < input.length; i++) {
        let inst = input.charAt(i);

        if (santasTurn) {
            switch (inst) {
                case "^": 
                    y++;    
                    break;
                case "v": 
                    y--;
                    break;
                case ">": 
                    x++;
                    break;
                case "<": 
                    x--;
                    break;
            }

            houses.add(coordToStr(x,y));
        } else {
            switch (inst) {
                case "^": 
                    ry++;    
                    break;
                case "v": 
                    ry--;
                    break;
                case ">": 
                    rx++;
                    break;
                case "<": 
                    rx--;
                    break;
            }

            houses.add(coordToStr(rx, ry));
        }

        santasTurn = !santasTurn;
    }

    document.getElementById("output3").innerHTML = houses.size;
}

function coordToStr(x, y) {
    return x + "," + y;
}