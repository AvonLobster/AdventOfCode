function init11() {
    let content = getHTMLForAdventDayAndYear(11, 2021, "Dumbo Octopus");
    content += 'Steps: <input id="arg1" type="number" min="0" max="999" value="100" /><br><br>';
    content += "<div id=\"print11\"></div>";
    document.getElementById("adventContent").innerHTML = content;
}

class OctopusGrid {
    constructor(input) {
        let lines = input.split("\n");
        this.grid = [];
        this.flashCount = 0;
        this.stepCount = 0;
        
        for (let i = 0; i < lines.length; i++) {
            this.grid[i] = [];

            for (let j = 0; j < lines[i].length; j++) {
                this.grid[i][j] = parseInt(lines[i][j]);
            }
        }
    }

    step(numSteps) {
        for (let i = 0; i < numSteps; i++) {
            for (let j = 0; j < this.grid.length; j++) {
                for (let k = 0; k < this.grid[j].length; k++) {
                    this.stepOctopus(j, k);
                }
            }

            for (let j = 0; j < this.grid.length; j++) {
                for (let k = 0; k < this.grid[j].length; k++) {
                    if (this.grid[j][k] == -1) {
                        this.grid[j][k] = 0;
                    }
                }
            }
        }

        this.printGrid();
    }

    stepUntilBigFlash() {
        while (!this.thisIsIt()) {
            this.stepCount++;

            for (let j = 0; j < this.grid.length; j++) {
                for (let k = 0; k < this.grid[j].length; k++) {
                    this.stepOctopus(j, k);
                }
            }

            for (let j = 0; j < this.grid.length; j++) {
                for (let k = 0; k < this.grid[j].length; k++) {
                    if (this.grid[j][k] == -1) {
                        this.grid[j][k] = 0;
                    }
                }
            }
        }

        this.printGrid();
    }

    thisIsIt() {
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                if (this.grid[i][j] != 0) {
                    return false;
                }
            }
        }

        return true;
    }

    stepOctopus(x, y) {
        let octopus = this.grid[x][y];
        
        if (octopus >= 0) {
            octopus++;

            if (octopus > 9) {
                this.grid[x][y] = -1;
                this.flash(x, y);
            } else {
                this.grid[x][y] = octopus;
            }
        }
    }

    flash(x, y) {
        this.flashCount++;
        if (this.getN(x, y) >= 0) this.stepOctopus(x - 1, y);
        if (this.getS(x, y) >= 0) this.stepOctopus(x + 1, y);
        if (this.getW(x, y) >= 0) this.stepOctopus(x, y - 1);
        if (this.getE(x, y) >= 0) this.stepOctopus(x, y + 1);
        if (this.getNW(x, y) >= 0) this.stepOctopus(x - 1, y - 1);
        if (this.getNE(x, y) >= 0) this.stepOctopus(x - 1, y + 1);
        if (this.getSW(x, y) >= 0) this.stepOctopus(x + 1, y - 1);
        if (this.getSE(x, y) >= 0) this.stepOctopus(x + 1, y + 1);
    }

    getFlashCount() {
        return this.flashCount;
    }

    getStepCount() {
        return this.stepCount;
    }

    getN(x, y) {
        if (x > 0) {
            return this.grid[x - 1][y];
        }
        return -1;
    }

    getS(x, y) {
        if (x < this.grid.length - 1) {
            return this.grid[x + 1][y];
        }
        return -1;
    }

    getW(x, y) {
        if (y > 0) {
            return this.grid[x][y - 1];
        }
        return -1;
    }

    getE(x, y) {
        if (y < this.grid[x].length - 1) {
            return this.grid[x][y + 1];
        }
        return -1;
    }

    getNW(x, y) {
        if (x > 0 && y > 0) {
            return this.grid[x - 1][y - 1];
        }
        return -1;
    }

    getNE(x, y) {
        if (x > 0 && y < this.grid[x].length - 1) {
            return this.grid[x - 1][y + 1];
        }
        return -1;
    }

    getSW(x, y) {
        if (x < this.grid.length - 1 && y > 0) {
            return this.grid[x + 1][y - 1];
        }
        return -1;
    }

    getSE(x, y) {
        if (x < this.grid.length - 1 && y < this.grid[x].length - 1) {
            return this.grid[x + 1][y + 1];
        }
        return -1;
    }

    printGrid() {
        let content = "";

        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                content += this.grid[i][j];
            }

            content += "<br>";
        }

        document.getElementById("print11").innerHTML = content;
    }
}

function day11part1() {
    let input = document.getElementById("input11").value;
    let grid = new OctopusGrid(input);
    grid.step(document.getElementById("arg1").value);
    document.getElementById("output11").innerHTML = grid.getFlashCount();
}

function day11part2() {
    let input = document.getElementById("input11").value;
    let grid = new OctopusGrid(input);
    grid.stepUntilBigFlash();
    document.getElementById("output11").innerHTML = grid.getStepCount();
}
