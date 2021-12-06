function init5() {
    document.getElementById("adventContent").innerHTML = getHTMLForAdventDayAndYear(5, 20121, "Hydrothermal Venture");
}

class Vent {
    constructor(coord) {
        this.x = parseInt(coord.split(",")[0]);
        this.y = parseInt(coord.split(",")[1]);
        this.id = coord;
    }
}


function day5part1() {
    let input = document.getElementById("input5").value;
    let lines = input.split("\n");
    let vents = {};

    for (let i = 0; i < lines.length; i++) {
        let coords = lines[i].split(" -> ");
        let coords1 = new Vent(coords[0]);
        let coords2 = new Vent(coords[1]);

        if (coords1.x == coords2.x) {
            if (vents.hasOwnProperty(coords1.id)) {
                vents[coords1.id]++;
            } else {
                vents[coords1.id] = 1;
            }

            if (vents.hasOwnProperty(coords2.id)) {
                vents[coords2.id]++;
            } else {
                vents[coords2.id] = 1;
            }

            let minY = Math.min(coords1.y, coords2.y);
            let maxY = Math.max(coords1.y, coords2.y);
            minY++;

            for (minY; minY < maxY; minY++) {
                let id = coords1.x + "," + minY;
                if (vents.hasOwnProperty(id)) {
                    vents[id]++;
                } else {
                    vents[id] = 1;
                }
            }
            
        } else if (coords1.y == coords2.y) {
            if (vents.hasOwnProperty(coords1.id)) {
                vents[coords1.id]++;
            } else {
                vents[coords1.id] = 1;
            }

            if (vents.hasOwnProperty(coords2.id)) {
                vents[coords2.id]++;
            } else {
                vents[coords2.id] = 1;
            }

            let minX = Math.min(coords1.x, coords2.x);
            let maxX = Math.max(coords1.x, coords2.x);
            minX++;

            for (minX; minX < maxX; minX++) {
                let id = minX + "," + coords1.y;
                if (vents.hasOwnProperty(id)) {
                    vents[id]++;
                } else {
                    vents[id] = 1;
                }
            }
        }
    }

    let sum = 0;

    for (const [key, value] of Object.entries(vents)) {
        if (value > 1) {
            sum++;
        }
    }

    document.getElementById("output5").innerHTML = sum;
}

function day5part2() {
    let input = document.getElementById("input5").value;
    let lines = input.split("\n");
    let vents = {};

    for (let i = 0; i < lines.length; i++) {
        let coords = lines[i].split(" -> ");
        let coords1 = new Vent(coords[0]);
        let coords2 = new Vent(coords[1]);
        let minX = Math.min(coords1.x, coords2.x);
        let maxX = Math.max(coords1.x, coords2.x);
        let minY = Math.min(coords1.y, coords2.y);
        let maxY = Math.max(coords1.y, coords2.y);

        if (vents.hasOwnProperty(coords1.id)) {
            vents[coords1.id]++;
        } else {
            vents[coords1.id] = 1;
        }

        if (vents.hasOwnProperty(coords2.id)) {
            vents[coords2.id]++;
        } else {
            vents[coords2.id] = 1;
        }

        // vertical
        if (coords1.x == coords2.x) {
            minY++;

            for (minY; minY < maxY; minY++) {
                let id = coords1.x + "," + minY;
                if (vents.hasOwnProperty(id)) {
                    vents[id]++;
                } else {
                    vents[id] = 1;
                }
            }
            
        // horizontal
        } else if (coords1.y == coords2.y) {
            minX++;

            for (minX; minX < maxX; minX++) {
                let id = minX + "," + coords1.y;
                if (vents.hasOwnProperty(id)) {
                    vents[id]++;
                } else {
                    vents[id] = 1;
                }
            }

        // diagonal down
        } else if ((coords1.x < coords2.x && coords1.y < coords2.y) ||
            coords1.x > coords2.x && coords1.y > coords2.y) {
            minX++;
            minY++;

            for (minX; minX < maxX; minX++, minY++) {
                let id = minX + "," + minY;
                if (vents.hasOwnProperty(id)) {
                    vents[id]++;
                } else {
                    vents[id] = 1;
                }
            }

        // diagonal up 0,2 2,0
        } else {
            minX++;
            maxY--;

            for (minX; minX < maxX; minX++, maxY--) {
                let id = minX + "," + maxY;
                if (vents.hasOwnProperty(id)) {
                    vents[id]++;
                } else {
                    vents[id] = 1;
                }
            }
        }
    }

    let sum = 0;

    for (const [key, value] of Object.entries(vents)) {
        if (value > 1) {
            sum++;
        }
    }

    document.getElementById("output5").innerHTML = sum;
}
