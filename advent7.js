function init7() {
    document.getElementById("adventContent").innerHTML = getHTMLForAdventDay(7, "Handy Haversacks");
}

class Bag {
    constructor(name) {
        this.name = name;
        this.qty = 0;
        this.children = [];
        this.parents = [];

        this.setParentBag = function (bag) {
            this.parents[this.parents.length] = bag;
        };

        this.getParentBags = function () {
            return this.parents;
        };

        this.addChild = function (bag) {
            bag.setParentBag(this);
            this.children[this.children.length] = bag;
        };

        this.getChildren = function () {
            return this.children;
        };
    }
}

function day7part1() {
    let input = document.getElementById("input7").value;
    let lines = input.split("\n");
    let bags = new Map();
    
    for (let i = 0; i < lines.length; i++) {
        let instructions = lines[i].split(" bags contain ");
        let contents = instructions[1].split(", ");
        let outerBag = null;

        if (bags.has(instructions[0])) {
            outerBag = bags.get(instructions[0]);
        } else {
            outerBag = new Bag(instructions[0]);
            bags.set(instructions[0], outerBag);
        }

        for (let i = 0; i < contents.length; i++) {
            contents[i] = contents[i].replace(" bags.", "");
            contents[i] = contents[i].replace(" bag.", "");
            contents[i] = contents[i].replace(" bags", "");
            contents[i] = contents[i].replace(" bag", "");

            if (contents[i] != "no other") {
                let qty = parseInt(contents[i].match(/^\d+/)[0]); //not sure what this is for yet
                let name = contents[i].substring(contents[i].indexOf(" ") + 1);
                let subBag = null;

                if (bags.has(name)) {
                    subBag = bags.get(name);
                } else {
                    subBag = new Bag(name);
                    bags.set(name, subBag);
                }

                outerBag.addChild(subBag);
                outerBag.qty += qty;
            }
        }
    }

    let shinyGold = bags.get("shiny gold");
    let queue = shinyGold.getParentBags();
    let visited = [];
    visited.push("shiny gold");
    let containsCount = 0;

    while (queue.length > 0) {
        let parentBag = queue.pop();
        visited.push(parentBag.name);
        containsCount++;

        for (let i = 0; i < parentBag.parents.length; i++) {
            if (!visited.includes(parentBag.parents[i].name) && 
                !queue.includes(parentBag.parents[i])) {
                queue.push(parentBag.parents[i]);
            }
        }
    }

    document.getElementById("output7").innerHTML = containsCount;
}

function day7part2() {
    let input = document.getElementById("input7").value;
    let lines = input.split("\n");
    let bags = new Map();
    
    for (let i = 0; i < lines.length; i++) {
        let instructions = lines[i].split(" bags contain ");
        let contents = instructions[1].split(", ");
        let outerBag = null;

        if (bags.has(instructions[0])) {
            outerBag = bags.get(instructions[0]);
        } else {
            outerBag = new Bag(instructions[0]);
            bags.set(instructions[0], outerBag);
        }

        for (let i = 0; i < contents.length; i++) {
            contents[i] = contents[i].replace(" bags.", "");
            contents[i] = contents[i].replace(" bag.", "");
            contents[i] = contents[i].replace(" bags", "");
            contents[i] = contents[i].replace(" bag", "");

            if (contents[i] != "no other") {
                let qty = parseInt(contents[i].match(/^\d+/)[0]); //not sure what this is for yet
                let name = contents[i].substring(contents[i].indexOf(" ") + 1);
                let subBag = null;

                if (bags.has(name)) {
                    subBag = bags.get(name);
                } else {
                    subBag = new Bag(name);
                    bags.set(name, subBag);
                }

                for (let k = 0; k < qty; k++) outerBag.addChild(subBag);
            }
        }
    }

    let shinyGold = bags.get("shiny gold");
    let queue = shinyGold.children;
    let totalBags = shinyGold.children.length;
    
    while (queue.length > 0) {
        let child = queue.pop();
        totalBags += child.children.length;
        queue.push(...child.children);
    }

    document.getElementById("output7").innerHTML = totalBags;
}
