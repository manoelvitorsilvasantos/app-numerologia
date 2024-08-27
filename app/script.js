document.getElementById('numerologyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;

    const nameNumber = calculateNameNumerology(name);
    const birthNumber = calculateBirthdateNumerology(birthdate);

    document.getElementById('result').innerHTML = 
        `<p>Número do Nome: ${nameNumber}</p>
         <p>Número da Data de Nascimento: ${birthNumber}</p>`;

    const missionText = getMissionText(nameNumber);
    document.getElementById('missionCard').innerHTML = missionText;
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
    while (num > 9 && num !== 11 && num !== 22) {
        num = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    return num;
}

function getMissionText(number) {
    const missions = {
        1: {
            title: "MISSÃO DE VIDA 1 – Pioneirismo",
            text: "INDIVIDUALIDADE é a palavra-chave deste caminho..."
        },
        2: {
            title: "MISSÃO DE VIDA 2 – UNIÃO",
            text: "COOPERAÇÃO é a palavra-chave para quem tem essa missão..."
        },
        3: {
            title: "MISSÃO DE VIDA 3 – OTIMISMO",
            text: "CRIATIVIDADE é a palavra-chave deste caminho..."
        },
        4: {
            title: "MISSÃO DE VIDA 4 – ESTABILIDADE",
            text: "PRATICIDADE é a palavra-chave para quem tem essa missão..."
        },
        5: {
            title: "MISSÃO DE VIDA 5 – DINAMISMO",
            text: "LIBERDADE é a palavra-chave deste caminho..."
        },
        6: {
            title: "MISSÃO DE VIDA 6 – AFETIVIDADE",
            text: "AMOROSIDADE é a palavra-chave para quem tem essa missão..."
        },
        7: {
            title: "MISSÃO DE VIDA 7 – PERFEIÇÃO",
            text: "VERDADE é a palavra-chave deste caminho..."
        },
        8: {
            title: "MISSÃO DE VIDA 8 – REALIZAÇÃO",
            text: "CONQUISTA é a palavra-chave para quem tem essa missão..."
        },
        9: {
            title: "MISSÃO DE VIDA 9 – SABEDORIA",
            text: "COMPAIXÃO é a palavra-chave deste caminho..."
        },
        11: {
            title: "MISSÃO DE VIDA 11 – INTUIÇÃO",
            text: "INSPIRAÇÃO é a palavra-chave para quem tem essa missão..."
        },
        22: {
            title: "MISSÃO DE VIDA 22 – GENIALIDADE",
            text: "VISIONÁRIO é a palavra-chave deste caminho..."
        }
    };

    return missions[number] ? `<h2>${missions[number].title}</h2><p>${missions[number].text}</p>` : '';
}
