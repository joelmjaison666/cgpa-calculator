document.getElementById('addTerm').addEventListener('click', function() {
    const termsContainer = document.getElementById('termsContainer');
    const termCount = termsContainer.getElementsByClassName('term').length + 1;

    const termDiv = document.createElement('div');
    termDiv.className = 'term';
    termDiv.innerHTML = `
        <h2>Term ${termCount}</h2>
        <label for="credits${termCount}">Credits:</label>
        <input type="number" id="credits${termCount}" class="credits" required>
        <label for="gradePoints${termCount}">Grade Points:</label>
        <input type="number" id="gradePoints${termCount}" class="gradePoints" required>
    `;
    termsContainer.appendChild(termDiv);
});

document.getElementById('cgpaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const credits = document.getElementsByClassName('credits');
    const gradePoints = document.getElementsByClassName('gradePoints');

    let totalCredits = 0;
    let totalGradePoints = 0;
    let termSgpas = [];

    for (let i = 0; i < credits.length; i++) {
        const termCredits = parseFloat(credits[i].value);
        const termGradePoints = parseFloat(gradePoints[i].value);

        totalCredits += termCredits;
        totalGradePoints += termGradePoints;

        const termSgpa = termGradePoints / termCredits;
        termSgpas.push(termSgpa.toFixed(2));
    }

    const cgpa = totalGradePoints / totalCredits;
    const percentage = (cgpa - 0.75) * 10;

    document.getElementById('sgpa').innerText = `SGPA for each term: ${termSgpas.join(', ')}`;
    document.getElementById('cgpa').innerText = `CGPA: ${cgpa.toFixed(2)}`;
    document.getElementById('percentage').innerText = `Percentage: ${percentage.toFixed(2)}%`;
});