function init4() {
    var ac = document.getElementById("adventContent");
    var content = "<h2>--- Day 4: Passport Processing ---</h2>";
    content += '<textarea id="input4"></textarea><br>';
    content += '<button type="button" onclick="day4part1()">Part 1</button>';
    content += '<button type="button" onclick="day4part2()">Part 2</button>';
    content += '<div id="output4"></div><br>';
    ac.innerHTML = content;
}

function day4part1() {
    let input = document.getElementById("input4").value;
    let lines = input.split("\n");
    let byr = 0;
    let iyr = 0;
    let eyr = 0;
    let hgt = 0;
    let hcl = 0;
    let ecl = 0;
    let pid = 0;
    let cid = 0;
    let validCount = 0;

    for (let i = 0; i < lines.length; i++) {
        if (lines[i].match(/^\s*$/)) {
            if (byr + iyr + eyr + hgt + hcl + ecl + pid >= 7) validCount++;
            byr = 0;
            iyr = 0;
            eyr = 0;
            hgt = 0;
            hcl = 0;
            ecl = 0;
            pid = 0;
            cid = 0;
        } else {
            if (lines[i].match(/byr:/)) byr++;
            if (lines[i].match(/iyr:/)) iyr++;
            if (lines[i].match(/eyr:/)) eyr++;
            if (lines[i].match(/hgt:/)) hgt++;
            if (lines[i].match(/hcl:/)) hcl++;
            if (lines[i].match(/ecl:/)) ecl++;
            if (lines[i].match(/pid:/)) pid++;
            if (lines[i].match(/cid:/)) cid++;
        }
    }

    document.getElementById("output4").innerHTML = validCount;
}

function day4part2() {
    let input = document.getElementById("input4").value;
    let lines = input.split("\n");
    let byr = 0;
    let iyr = 0;
    let eyr = 0;
    let hgt = 0;
    let hcl = 0;
    let ecl = 0;
    let pid = 0;
    let cid = 0;
    let validCount = 0;

    for (let i = 0; i < lines.length; i++) {
        if (lines[i].match(/^\s*$/)) {
            if (byr + iyr + eyr + hgt + hcl + ecl + pid >= 7) validCount++;
            byr = 0;
            iyr = 0;
            eyr = 0;
            hgt = 0;
            hcl = 0;
            ecl = 0;
            pid = 0;
            cid = 0;
        } else {
            let fields = lines[i].split(" ");

            for (let j = 0; j < fields.length; j++) {
                let field = fields[j].split(":");

                if (field[0] == "byr") {
                    let birthYear = parseInt(field[1]);
                    if (birthYear >= 1920 && birthYear <= 2002) byr++;
                }
                if (field[0] == "iyr") {
                    let issueYear = parseInt(field[1]);
                    if (issueYear >= 2010 && issueYear <= 2020) iyr++;
                }
                if (field[0] == "eyr") {
                    let expirationYear = parseInt(field[1]);
                    if (expirationYear >= 2020 && expirationYear <= 2030) eyr++;
                }
                if (field[0] == "hgt") {
                    let height = parseInt(field[1]);
                    if (field[1].includes("cm")) {
                        if (height >= 150 && height <= 193) hgt++;
                    } else if (field[1].includes("in")) {
                        if (height >= 59 && height <= 76) hgt++;
                    }
                } 
                if (field[0] == "hcl") {
                    let hairColor = field[1];
                    if (hairColor.match(/^#([a-f0-9]{6})/)) hcl++;
                }
                if (field[0] == "ecl") {
                    let eyeColor = field[1];
                    if (eyeColor == "amb" || eyeColor == "blu" || eyeColor == "brn" || 
                        eyeColor == "gry" || eyeColor == "grn" || eyeColor == "hzl" || eyeColor == "oth") ecl++;
                }
                if (field[0] == "pid") {
                    let passportID = field[1];
                    if (passportID.match(/^\d{9}$/)) pid++;
                }
                if (field[0] == "cid") {
                    // that's nice
                    cid++;
                }
            }
        }
    }

    document.getElementById("output4").innerHTML = validCount;
}
