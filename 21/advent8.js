function init8() {
    document.getElementById("adventContent").innerHTML = getHTMLForAdventDayAndYear(8, 2021, "Seven Segment Search");
}

function day8part1() {
    let input = document.getElementById("input8").value;
    let lines = input.split("\n");
    let easyDigitsCount = 0;
    
    for (let i = 0; i < lines.length; i++) {
        let outputs = lines[i].split(" | ")[1].split(" ");

        for (let j = 0; j < outputs.length; j++) {
            if (outputs[j].length == 2 || // 1
                outputs[j].length == 4 || // 4
                outputs[j].length == 3 || // 7
                outputs[j].length == 7) { // 8
                easyDigitsCount++;
            }
        }
    }
    
    document.getElementById("output8").innerHTML = easyDigitsCount;
}

class SevenSegment {
    constructor(signals) {
        this.digits = new Array(10).fill(-1);

        this.signals = [];
        
        for (let i = 0; i < signals.length; i++) {
            this.signals.push(signals[i].split("").sort().join(""));
        }

        // find easy digitis
        for (let i = 0; i < this.signals.length; i++) {
            if (this.signals[i].length == 2) {
                this.digits[1] = this.signals[i];
            } else if (signals[i].length == 4) {
                this.digits[4] = this.signals[i];
            } else if (signals[i].length == 3) {
                this.digits[7] = this.signals[i];
            } else if (signals[i].length == 7) {
                this.digits[8] = this.signals[i];
            }
        }

        // find 6 segment digits
        for (let i = 0; i < this.signals.length; i++) {
            if (this.signals[i].length == 6) {
                // 9 has 1, 4, and 7
                if (this.stringContainString(this.signals[i], this.digits[1])
                    && this.stringContainString(this.signals[i], this.digits[4])
                    && this.stringContainString(this.signals[i], this.digits[7])) {
                    this.digits[9] = this.signals[i];
                // 0 has 1 and 7
                } else if (this.stringContainString(this.signals[i], this.digits[1]) &&
                    this.stringContainString(this.signals[i], this.digits[7])) {
                    this.digits[0] = this.signals[i];
                // 6 has none of the easy digits
                } else {
                    this.digits[6] = this.signals[i];
                }
            }
        }

        // find 5 segment digits
        for (let i = 0; i < this.signals.length; i++) {
            if (this.signals[i].length == 5) {
                // 3 has 1 and 7
                if (this.stringContainString(this.signals[i], this.digits[1]) &&
                    this.stringContainString(this.signals[i], this.digits[7])) {
                    this.digits[3] = this.signals[i];
                // 5 has 1 difference from 9
                } else if (this.isFive(this.signals[i], this.digits[9])) {
                    this.digits[5] = this.signals[i];
                // else 2  
                } else {
                    this.digits[2] = this.signals[i];
                }
            }
        }
    }

    stringContainString(newDigit, knownDigit) {
        return knownDigit.split('')
            .every(function(letter) {
                return newDigit.indexOf(letter) != -1;
        });
    }

    isFive(newDigit, aNine) {
        for (let i = 0; i < aNine.length; i++) {
            let testStr = aNine.slice(0, i) + aNine.slice(i + 1);

            if (this.stringContainString(newDigit, testStr)) {
                return true;
            }
        }
    }

    getNumber(outputs) {
        this.number = 0;
        this.outputs = [];
        
        for (let i = 0; i < outputs.length; i++) {
            this.outputs.push(outputs[i].split("").sort().join(""));
        };

        
        for (let j = 0; j < this.digits.length; j++) {
            if (this.outputs[0] == this.digits[j]) {
                this.number +=  j * 1000;
            }
            if (this.outputs[1] == this.digits[j]) {
                this.number += j * 100;
            }
            if (this.outputs[2] == this.digits[j]) {
                this.number += j * 10;
            }
            if (this.outputs[3] == this.digits[j]) {
                this.number += j;
            }
        }

        return this.number;
    }
}

function day8part2() {
    let input = document.getElementById("input8").value;
    let lines = input.split("\n");
    let sum = 0;
    
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].split(" | ");
        let signals = line[0].split(" ");
        let outputs = line[1].split(" ");

        let sevenSegment = new SevenSegment(signals);
        sum += sevenSegment.getNumber(outputs);
    }

    document.getElementById("output8").innerHTML = sum;
}
