// Tabela de valores das letras, associando grupos de letras ao mesmo valor
const tabelaNumerologia = {
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

// Função para calcular o valor numerológico
function calcularNumerologia() {
    const nome = document.getElementById('nome').value.toUpperCase().replace(/[^A-Z]/g, '');
    let soma = 0;

    for (let i = 0; i < nome.length; i++) {
        soma += obterValorLetra(nome[i]);
    }

    // Função para reduzir a soma
    function reduzirSoma(num) {
        if (num === 11 || num === 22) {
            return num;
        }
        let somaReduzida = 0;
        while (num > 9) {
            somaReduzida += num % 10;
            num = Math.floor(num / 10);
        }
        somaReduzida += num;
        return somaReduzida > 9 ? reduzirSoma(somaReduzida) : somaReduzida;
    }

    const resultadoFinal = reduzirSoma(soma);
    mostrarResultado(resultadoFinal);
}

// Função para obter o valor de uma letra
function obterValorLetra(letra) {
    for (let valor in tabelaNumerologia) {
        if (tabelaNumerologia[valor].includes(letra)) {
            return parseInt(valor);
        }
    }
    return 0; // Caso não encontre a letra (não deveria acontecer)
}

// Função para exibir o resultado e a mensagem correspondente
function mostrarResultado(numero) {
    const mensagens = {
        1: "Ambiciosa, audaciosa, original, inventiva, vigorosa e independente.",
        2: "Diplomática, cooperativa, gentil, paciente, atenciosa e educada.",
        3: "Estimada, bondosa, artística, afortunada, criativa e sociável.",
        4: "Digna de confiança, trabalhadora, prática, honesta e determinada.",
        5: "Esperta, adaptável, versátil, audaciosa, culta, expressiva e otimista.",
        6: "Carinhosa, leal, responsável, magnética, amante da arte e caseira.",
        7: "Intuitiva, psíquica, pensadora, espiritualista, esotérica e reservada.",
        8: "Eficiente, determinada, ambiciosa, leal, forte e com espírito de líder.",
        9: "Universal, humanitária, generosa, liberal, inspirada, prestativa e intuitiva.",
        11: "Idealistas e inspiradoras, capazes de deixar sua marca por onde quer que passem.",
        22: "Raciocínio e realidade, lutando sempre pelo que é mais digno e justo."
    };

    document.getElementById('resultado').innerHTML = `Número: ${numero}<br>${mensagens[numero]}`;
}
