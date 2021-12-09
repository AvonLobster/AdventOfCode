function init9() {
    document.getElementById("adventContent").innerHTML = getHTMLForAdventDayAndYear(9, 2021, "Smoke Basin");
}

class HeightMap {
    constructor(input) {
        this.heightmap = [];
        let lines = input.split("\n");

        for (let i = 0; i < lines.length; i++) {
            this.heightmap[i] = [];
            for (let j = 0; j < lines[i].length; j++) {
                this.heightmap[i][j] = parseInt(lines[i].charAt(j));
            }
        }
    }

    getUp(x, y) {
        if (x > 0) {
            return this.heightmap[x - 1][y];
        }
        return 10;
    }

    getDown(x, y) {
        if (x < this.heightmap.length - 1) {
            return this.heightmap[x + 1][y];
        }
        return 10;
    }

    getLeft(x, y) {
        if (y > 0) {
            return this.heightmap[x][y - 1];
        }
        return 10;
    }

    getRight(x, y) {
        if (y < this.heightmap[x].length - 1) {
            return this.heightmap[x][y + 1];
        }
        return 10;
    }

    getBasinArea(x, y) {
        let visited = [];
        let queue = [];
        queue.push(x+","+y);

        while (queue.length > 0) {
            let current = queue.shift();

            if (visited.indexOf(current) > -1) {
                continue;
            }
            visited.push(current);
            let x = parseInt(current.split(",")[0]);
            let y = parseInt(current.split(",")[1]);

            let x2 = x-1;
            if (this.getUp(x, y) < 9 && visited.indexOf(x2+","+y) == -1) {
                queue.push(x2+","+y);
            }
            x2 = x+1;
            if (this.getDown(x, y) < 9 && visited.indexOf(x2+","+y) == -1) {
                queue.push(x2+","+y);
            }
            let y2 = y-1;
            if (this.getLeft(x, y) < 9 && visited.indexOf(x+","+y2) == -1) {
                queue.push(x+","+y2);
            }
            y2 = y+1;
            if (this.getRight(x, y) < 9 && visited.indexOf(x+","+y2) == -1) {
                queue.push(x+","+y2);
            }
        }

        return visited.length;
    }
}

function day9part1() {
    let input = document.getElementById("input9").value;
    let heightMap = new HeightMap(input);
    let riskLevel = 0;

    for (let i = 0; i < heightMap.heightmap.length; i++) {
        for (let j = 0; j < heightMap.heightmap[i].length; j++) {
            let point = heightMap.heightmap[i][j];

            if (point < heightMap.getUp(i, j) &&
                point < heightMap.getDown(i, j) && 
                point < heightMap.getLeft(i, j) &&
                point < heightMap.getRight(i, j)) {
                riskLevel += point + 1;
            }
        }
    }
    
    document.getElementById("output9").innerHTML = riskLevel;
}

function day9part2() {
    let input = document.getElementById("input9").value;
    let heightMap = new HeightMap(input);
    let largestBasins = new Array(3).fill(0);

    for (let i = 0; i < heightMap.heightmap.length; i++) {
        for (let j = 0; j < heightMap.heightmap[i].length; j++) {
            let point = heightMap.heightmap[i][j];

            if (point < heightMap.getUp(i, j) &&
                point < heightMap.getDown(i, j) && 
                point < heightMap.getLeft(i, j) &&
                point < heightMap.getRight(i, j)) {
                let area = heightMap.getBasinArea(i, j);
                let minArea = Math.min(largestBasins[0], largestBasins[1], largestBasins[2]);
                
                if (area > minArea) {
                    largestBasins[largestBasins.indexOf(minArea)] = area;
                }
            }
        }
    }
    
    document.getElementById("output9").innerHTML = largestBasins[0] * largestBasins[1] * largestBasins[2];
}
