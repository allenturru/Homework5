const studentList = [
        {
            firstName: "Allan",
            lastName: "Able",
            scores: [95, 85, 92, 98]
        },
        {
            firstName: "Amy",
            lastName: "Alexander",
            scores: [80, 88, 100]
        },
        {
            firstName: "Betty",
            lastName: "Barns",
            scores: [70, 80, 90, 100]
        },
        {
            firstName: "Bob",
            lastName: "Bones",
            scores: [75, 85, 95, 85]
        },
        {
            firstName: "Cindy",
            lastName: "Chase",
            scores: [95, 90, 92, 98]
        },
        {
            firstName: "Charles",
            lastName: "Chips",
            scores: [88, 99, 90]
        },
    ];
    

const cLastNameResults = studentList.filter(student => student.lastName.startsWith("C")).map(student => {
    return {
        firstName: student.firstname,
        lastName: student.lastname,
        minScore: Math.min.apply(null, student.scores),
        maxScore: Math.max.apply(null, student.scores),
        avgGrade: (student.scores.reduce((acc, grade) => acc + grade, 0) / student.scores.length)
    };
  });

console.log(cLastNameResults);
