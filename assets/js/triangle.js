document.getElementById('numerologyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Pegar o nome e a data de nascimento
    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;

    // Calcular a numerologia do nome
    const nameNumber = calculateNameNumerology(name);

    // Calcular a numerologia da data de nascimento
    const birthNumber = calculateBirthdateNumerology(birthdate);

    // Exibir o resultado
    document.getElementById('result').innerHTML = 
        `<p>Número do Nome: ${nameNumber}</p>
         <p>Número da Data de Nascimento: ${birthNumber}</p>`;
});

function calculateNameNumerology(name) {
    const numerologyTable = {
        1: ['A', 'J', 'S'],
        2: ['B', 'K', 'T'],
        3: ['C', 'L', 'U'],
        4: ['D', 'M', 'V'],
        5: ['E', 'N', 'W'],
        6: ['F', 'O', 'X'],
        7: ['G', 'P', 'Y'],
        8: ['H', 'Q', 'Z'],
        9: ['I', 'R']
    };

    let sum = 0;
    name.toUpperCase().replace(/\s+/g, '').split('').forEach(char => {
        for (let [key, value] of Object.entries(numerologyTable)) {
            if (value.includes(char)) {
                sum += parseInt(key);
            }
        }
    });

    return reduceToSingleDigit(sum);
}

function calculateBirthdateNumerology(birthdate) {
    const [year, month, day] = birthdate.split('-').map(Number);
    const daySum = reduceToSingleDigit(day);
    const monthSum = reduceToSingleDigit(month);
    const yearSum = reduceToSingleDigit(year);
    return reduceToSingleDigit(daySum + monthSum + yearSum);
}

function reduceToSingleDigit(num) {
    while (num > 9) {
        num = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    return num;
}
