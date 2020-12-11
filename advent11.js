function init11() {
    document.getElementById("adventContent").innerHTML = getHTMLForAdventDay(11, "");
}

function day11part1() {
    let input = document.getElementById("input11").value;
    let lines = input.split("\n");
    let grid = new Array();
    let done = false;
    let occCount = 0;

    for (let i = 0; i < lines.length; i++) {
        grid.push(new Array());
        for (let j = 0; j < lines[i].length; j++) {
            grid[i].push(lines[i].charAt(j));
        }
    }

    while (!done) {
        done = true;

        let newGrid = grid.map(function(x) {
            return x.slice();
        });

        for (let x = 0; x < grid.length; x++) {
            for (let y = 0; y < grid[x].length; y++) {
                if (grid[x][y] == "L") {
                    if (adjacentOccupation(x, y, grid) == 0) {
                        newGrid[x][y] = "#";
                        done = false;
                    }
                } else if (grid[x][y] == "#") {
                    if (adjacentOccupation(x, y, grid) >= 4) {
                        newGrid[x][y] = "L";
                        done = false;
                    }
                }
            }
        }

        grid = newGrid;
    }

    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[x].length; y++) {
            if (grid[x][y] == "#") occCount++;
        }
    }

    document.getElementById("output11").innerHTML = occCount;
}

function adjacentOccupation(x, y, grid) {
    let adjCount = 0;

    if (x-1 >= 0 && grid[x-1][y] == "#") adjCount++;
    if (x-1 >= 0 && y-1 >= 0 && grid[x-1][y-1] == "#") adjCount++;
    if (x-1 >= 0 && y+1 < grid[x].length && grid[x-1][y+1] == "#") adjCount++;
    if (y-1 >= 0 && grid[x][y-1] == "#") adjCount++;
    if (y+1 < grid[x].length && grid[x][y+1] == "#") adjCount++;
    if (x+1 < grid.length && grid[x+1][y] == "#") adjCount++;
    if (x+1 < grid.length && y-1 >= 0 && grid[x+1][y-1] == "#") adjCount++;
    if (x+1 < grid.length && y+1 < grid[x].length && grid[x+1][y+1] == "#") adjCount++;

    return adjCount;
}

function day11part2() {
    let input = document.getElementById("input11").value;
    let lines = input.split("\n");
    let grid = new Array();
    let done = false;
    let occCount = 0;

    for (let i = 0; i < lines.length; i++) {
        grid.push(new Array());
        for (let j = 0; j < lines[i].length; j++) {
            grid[i].push(lines[i].charAt(j));
        }
    }

    while (!done) {
        done = true;

        let newGrid = grid.map(function(x) {
            return x.slice();
        });

        for (let x = 0; x < grid.length; x++) {
            for (let y = 0; y < grid[x].length; y++) {
                if (grid[x][y] == "L") {
                    if (lineOfSightOccupation(x, y, grid) == 0) {
                        newGrid[x][y] = "#";
                        done = false;
                    }
                } else if (grid[x][y] == "#") {
                    if (lineOfSightOccupation(x, y, grid) >= 5) {
                        newGrid[x][y] = "L";
                        done = false;
                    }
                }
            }
        }

        grid = newGrid;
    }

    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[x].length; y++) {
            if (grid[x][y] == "#") occCount++;
        }
    }

    document.getElementById("output11").innerHTML = occCount;
}

function lineOfSightOccupation(x, y, grid) {
    let losCount = 0;
    
    let north = x-1;
    while (north >= 0) {
        if (grid[north][y] == "#") {
            losCount++;
            break;
        } else if (grid[north][y] == ".") north--;
        else break;
    }

    let northEast1 = x-1;
    let northEast2 = y+1;
    while (northEast1 >= 0 && northEast2 < grid[x].length) {
        if (grid[northEast1][northEast2] == "#") {
            losCount++;
            break;
        } else if (grid[northEast1][northEast2] == ".") {
            northEast1--;
            northEast2++;
        } else break;
    }

    let east = y+1;
    while (east < grid[x].length) {
        if (grid[x][east] == "#") {
            losCount++;
            break;
        } else if (grid[x][east] == ".") east++;
        else break;
    }
    
    let southEast1 = x+1;
    let southEast2 = y+1;
    while (southEast1 < grid.length && southEast2 < grid[x].length) {
        if (grid[southEast1][southEast2] == "#") {
            losCount++;
            break;
        } else if (grid[southEast1][southEast2] == ".") {
            southEast1++;
            southEast2++;
        } else break;
    }

    let south = x+1;
    while (south < grid.length) {
        if (grid[south][y] == "#") {
            losCount++;
            break;
        } else if (grid[south][y] == ".") south++;
        else break;
    }

    let southWest1 = x+1;
    let southWest2 = y-1;
    while (southWest1 < grid.length && southWest2 >= 0) {
        if (grid[southWest1][southWest2] == "#") {
            losCount++;
            break;
        } else if (grid[southWest1][southWest2] == ".") {
            southWest1++;
            southWest2--;
        } else break;
    }

    let west = y-1;
    while (west >= 0) {
        if (grid[x][west] == "#") {
            losCount++;
            break;
        } else if (grid[x][west] == ".") west--;
        else break;
    }

    let northWest1 = x-1;
    let northWest2 = y-1;
    while (northWest1 >= 0 && northWest2 >=0) {
        if (grid[northWest1][northWest2] == "#") {
            losCount++;
            break;
        } else if (grid[northWest1][northWest2] == ".") {
            northWest1--;
            northWest2--;
        } else break;
    }

    return losCount;
}
