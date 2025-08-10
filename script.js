const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let marks = [];
let subjects = ["Subject 1", "Subject 2", "Subject 3", "Subject 4", "Subject 5"];
let index = 0;

function askMarks() {
    rl.question(`Enter marks for ${subjects[index]}: `, (input) => {
        let mark = parseFloat(input);

        if (isNaN(mark)) {
            console.log("❌ Please enter a valid number.");
            askMarks(); // retry same subject
            return;
        }

        marks.push(mark);
        index++;

        if (index < subjects.length) {
            askMarks();
        } else {
            calculateGrade();
        }
    });
}

function calculateGrade() {
    let total = marks.reduce((sum, m) => sum + m, 0);
    let average = total / marks.length;

    let grade;
    if (average >= 90) grade = "A+";
    else if (average >= 80) grade = "A";
    else if (average >= 70) grade = "B";
    else if (average >= 60) grade = "C";
    else if (average >= 50) grade = "D";
    else grade = "F";

    console.log("\n📊 Results:");
    console.log("Total Marks:", total);
    console.log("Average Marks:", average.toFixed(2));
    console.log("Grade:", grade);

    rl.close();
}

askMarks();
