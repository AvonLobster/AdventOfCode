function init4() {
    document.getElementById("adventContent").innerHTML = getHTMLForAdventDayAndYear(4, 2021, "Giant Squid");
}

class BingoGrid {
    constructor(numbers) {
        this.hasBingo = false;
        this.grid = [5];
        for (let i = 0; i < 5; i++) {
            this.grid[i] = [5];
            
            for (let j = 0; j < 5; j++) {
                this.grid[i][j] = numbers[i][j];
            }
        }
    }

    placeChip(num) {
        for (let i = 0; i < 5; i++) {
            for(let j = 0; j < 5; j++) {
                if (this.grid[i][j] == num) {
                    this.grid[i][j] = "X";
                }
            }
        }
    }

    getBingo() {
        // check diagonals. Oh, actually don't
        // if (this.grid[0][0] == "X" && this.grid[1][1] == "X" && this.grid[2][2] == "X" && this.grid[3][3] == "X" && this.grid[4][4] == "X") {
        //     return true;
        // } else if (this.grid[0][4] == "X" && this.grid[1][3] == "X" && this.grid[2][2] == "X" && this.grid[3][1] == "X" && this.grid[4][0] == "X") {
        //     return true;
        // }

        // check rows
        for (let i = 0; i < 5; i++) {
            if (this.grid[i][0] == "X" && this.grid[i][1] == "X" && this.grid[i][2] == "X" && this.grid[i][3] == "X" && this.grid[i][4] == "X") {
                this.hasBingo = true;
                return true;
            }
        }

        // check columns
        for (let i = 0; i < 5; i++) {
            if (this.grid[0][i] == "X" && this.grid[1][i] == "X" && this.grid[2][i] == "X" && this.grid[3][i] == "X" && this.grid[4][i] == "X") {
                this.hasBingo = true;
                return true;
            }
        }

        return false;
    }

    getSum() {
        let sum = 0;
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (this.grid[i][j] != "X") {
                    sum += parseInt(this.grid[i][j]);
                }
            }
        }

        return sum;
    }

    hasBongo() {
        return this.hasBingo;
    }
}

function day4part1() {
    let input = document.getElementById("input4").value;
    let lines = input.split("\n\n");
    let bingoNums = lines[0].split(",");
    lines = lines.slice(1);
    grids = [];

    for (let i = 0; i < lines.length; i++) {
        let rows = lines[i].split("\n");
        let numbersGrid = [5];
        for (let j = 0; j < 5; j++) {
            rows[j] = rows[j].replace(/ +/g, " ");
            rows[j] = rows[j].trim();
            let numbers = rows[j].split(" ");
            numbersGrid[j] = [5];
            for (let k = 0; k < 5; k++) {
                numbersGrid[j][k] = numbers[k];
            }
        }

        grids.push(new BingoGrid(numbersGrid));
    }

    let done = false;
    let winningBoard = -1;
    let winningNum = -1;

    for (let i = 0; i < bingoNums.length && !done; i++) {
        for (let j = 0; j < grids.length; j++) {
            grids[j].placeChip(bingoNums[i]);
        }

        for (let j = 0; j < grids.length; j++) {
            if (grids[j].getBingo()) {
                done = true;
                winningBoard = j;
                winningNum = bingoNums[i];
                break;
            }
        }
    }

    let sum = grids[winningBoard].getSum();

    document.getElementById("output4").innerHTML = sum * winningNum;
}

function day4part2() {
    let input = document.getElementById("input4").value;
    let lines = input.split("\n\n");
    let bingoNums = lines[0].split(",");
    lines = lines.slice(1);
    grids = [];

    for (let i = 0; i < lines.length; i++) {
        let rows = lines[i].split("\n");
        let numbersGrid = [5];
        for (let j = 0; j < 5; j++) {
            rows[j] = rows[j].replace(/ +/g, " ");
            rows[j] = rows[j].trim();
            let numbers = rows[j].split(" ");
            numbersGrid[j] = [5];
            for (let k = 0; k < 5; k++) {
                numbersGrid[j][k] = numbers[k];
            }
        }

        grids.push(new BingoGrid(numbersGrid));
    }

    let done = false;
    let winningBoard = -1;
    let winningNum = -1;
    let bingoCount = 0;

    for (let i = 0; i < bingoNums.length && !done; i++) {
        for (let j = 0; j < grids.length; j++) {
            if (grids[j].hasBongo()) {
                continue;
            }
            grids[j].placeChip(bingoNums[i]);
        }

        for (let j = 0; j < grids.length; j++) {
            if (grids[j].hasBongo()) {
                continue;
            }
            if (grids[j].getBingo()) {
                bingoCount++;
                
                if (bingoCount == grids.length) {
                    done = true;
                    winningBoard = j;
                    winningNum = bingoNums[i];
                }
            }
        }
    }

    let sum = grids[winningBoard].getSum();

    document.getElementById("output4").innerHTML = sum * winningNum;
}
