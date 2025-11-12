//* Grouping and Aggregating Data

// Scenario: Count every survey and group by response

//? input
const surveyResponses = [
    "A",
    "C",
    "B",
    "A",
    "B",
    "B",
    "C",
    "A",
    "B",
    "D",
    "A",
    "C",
    "B",
    "A",
];

//? Output
// { A: 5, C: 3, B: 5, D: 1 }


const survey = surveyResponses.reduce((table, res) => {
    if (table[res]) {
        table[res] += 1
    }
    else {
        table[res] = 1
    }
    return table
}, {})
console.log(survey);