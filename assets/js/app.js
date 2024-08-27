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
            text: "INDIVIDUALIDADE é a palavra-chave deste caminho. É ser pioneira, original e ambiciosa, destacando-se em tudo o que faz. Sua missão é promover a importância da autossuficiência, sem cair no egoísmo. Seus talentos estão em empreender, ter o próprio negócio ou ser líder/gestor em empresas, aplicando ideias inovadoras. Aja com honestidade, respeitando o melhor dos outros."
        },
        2: {
            title: "MISSÃO DE VIDA 2 – UNIÃO",
            text: "COOPERAÇÃO é a palavra-chave para quem tem essa missão. É uma pessoa confiável, amiga e gentil, com consideração pelos outros. É uma conciliadora e diplomata de sucesso, trazendo soluções, paz e harmonia nos relacionamentos e no trabalho. É discreta, equilibrada e atenta aos detalhes. Seus talentos estão em ouvir e lidar habilmente com desafios. Busca companhias significativas, desde relacionamentos afetivos até amigos próximos e bons parceiros de trabalho. Cuidado para não se tornar dependente ou submissa. Evite timidez e assumir responsabilidades que não são suas. Sua missão é mostrar a importância de unir, resolver e se adaptar a qualquer situação."
        },
        3: {
            title: "MISSÃO DE VIDA 3 – OTIMISMO",
            text: "CRIATIVIDADE é a palavra-chave deste caminho. A pessoa desta missão é entusiasta, criativa e alegre por natureza. Tem habilidades versáteis e adora socializar com os amigos. Aprecia a beleza da natureza e das pessoas, e tem muitas ideias, expressando-se facilmente. Pode ser artista, músico, marqueteiro, comunicador, vendedor, professor e muito mais. Entende a importância da comunicação para o crescimento e gosta de estar em destaque. Sua missão é mostrar a luz no fim do túnel e encontrar o sorriso por trás do sofrimento. É uma pessoa acolhedora como uma ""mãezona"". Porém, pode transformar toda a beleza em ""inferno"" por meio de atitudes possessivas, impaciência e críticas excessivas, pensando que é a única inteligente ou bisbilhotando a vida dos outros."
        },
        4: {
            title: "MISSÃO DE VIDA 4 – ESTABILIDADE",
            text: "PRATICIDADE é a palavra-chave para quem tem essa missão. É uma pessoa que destaca a importância da praticidade, organização e disciplina. É honesta, trabalhadora, detalhista, paciente e responsável. Valores tradicionais são fundamentais em sua vida, sendo o ""pilar forte"" da família. Ensinando a dedicação e persistência, busca uma vida estruturada e doméstica, evitando agitação e muitos desafios. Porém, é preciso cuidado para não ser excessivamente cautelosa e perder oportunidades por medo do novo ou por ser teimosa ou autoritária. Tem sucesso em profissões administrativas, rotineiras (escritórios), liderança e áreas técnicas. Busca construir uma carreira, subindo de posição até alcançar o topo."
        },
        5: {
            title: "MISSÃO DE VIDA 5 – DINAMISMO",
            text: "LIBERDADE é a palavra-chave deste caminho. A pessoa desta missão é ativa, inquieta e busca autonomia em seu caminho. É capaz de realizar várias tarefas ao mesmo tempo, sendo conhecida por isso. Destaca-se ao estar à frente do público devido à sua energia expansiva. Gosta de explorar coisas novas, conhecer pessoas e criar uma rede de contatos, além de adorar festas! Sua missão é mostrar a importância da transformação positiva, de não ter medo de arriscar, ser independente e ousada. Profissões como vendas, publicidade, turismo, fotografia, relações públicas e tecnologia se adequam bem a essa pessoa, permitindo a autonomia desejada. No entanto, é importante não fugir das responsabilidades e evitar atitudes impulsivas."
        },
        6: {
            title: "MISSÃO DE VIDA 6 – AFETIVIDADE",
            text: "AMOROSIDADE é a palavra-chave para quem tem essa missão. O lar, a família e os amigos têm grande importância para essa pessoa, que assume a responsabilidade de acolher, aconselhar e servir. Sua missão é fazer o bem sem se preocupar com seus próprios interesses, amando aqueles ao seu redor, cuidando do casamento, da família e buscando embelezar a vida. Valoriza ambientes belos e confortáveis. É idealista, sincera e promove a paz e a harmonia, mas em excesso pode se tornar melindrosa e controladora. Sua missão é mostrar a importância de viver em paz e harmonia nos relacionamentos. No âmbito profissional, se destaca em serviços como atendimento, design, saúde, beleza, veterinária e agricultura."
        },
        7: {
            title: "MISSÃO DE VIDA 7 – PERFEIÇÃO",
            text: "VERDADE é a palavra-chave deste caminho. A pessoa desta missão está sempre em busca do desconhecido, explorando os mistérios da vida além do físico. Seu objetivo é encontrar verdades pessoais e universais, aprofundando-se em conhecimentos. É observadora, analítica e muitas vezes solitária, compreendendo que o caminho do conhecimento e do despertar espiritual é pessoal. Deve aproveitar sua solitude com boas companhias, leituras, estudos e meditação. Com uma mente ativa, encontra sucesso em profissões como professor, escritor, filósofo, investigador, metafísico, esotérico, cientista e até mesmo cirurgião."
        },
        8: {
            title: "MISSÃO DE VIDA 8 – REALIZAÇÃO",
            text: "CONQUISTA é a palavra-chave para quem tem essa missão. A pessoa deve aprender a trabalhar pelo bem de todos, buscando recompensas materiais como dinheiro, status e sucesso. É uma líder em sua vida e carreira, ambicionando cargos elevados em empresas e administração, seja empreendendo, trabalhando em grandes corporações ou gerenciando o lar e a família. Deve mostrar que o sucesso é alcançado através do mérito, exigindo conhecimento, esforço e determinação. Possui um forte senso de justiça e lealdade, características essenciais para conquistar tanto objetivos materiais quanto espirituais, já que o número 8 representa equilíbrio e razão. No entanto, é importante lembrar que quanto maior a ambição, maiores serão os desafios para manter os valores e princípios. É possível desfrutar dos prazeres da vida, do luxo e do status, mas é preciso tomar cuidado com o abuso de poder, a corrupção e a desonestidade."
        },
        9: {
            title: "MISSÃO DE VIDA 9 – SABEDORIA",
            text: "COMPAIXÃO é a palavra-chave deste caminho. A pessoa com essa missão possui a tolerância e a compreensão necessárias para uma vida de serviço à humanidade. É procurada por pessoas de todos os tipos em busca de conselhos, ajuda, atenção e até mesmo carinho. É aquela pessoa a quem perguntam: "Onde fica tal endereço?" no meio de uma multidão. As recompensas e o sucesso surgem quando compreende que servir é seu dever de alma. É inteligente, generosa e realizadora, trazendo a energia dos ciclos, que mostram que tudo tem um começo, meio e fim para renascer em um novo ciclo. Portanto, sua missão é ensinar a aproveitar o que é bom, belo, saudável e amoroso, ajudando, inspirando e aconselhando sem esperar nada em troca e respeitando as diferenças, livres de preconceitos. Terá sucesso em profissões que envolvem contato com o público, como atendimentos, terapias, assistencialismo, ensino, saúde, gestão e liderança."
        },
        11: {
            title: "MISSÃO DE VIDA 11 – INTUIÇÃO",
            text: "INSPIRAÇÃO é a palavra-chave para quem tem essa missão. O lugar da pessoa desta missão é estar diante do público, seja na vida pessoal ou profissional, pois carrega em si um ideal de vida a ser transmitido para outros – é líder nata por servir de exemplo. É inteligente, intuitiva, tem dons que trazem alguma forma de cura que pode ser por meio da sua sensibilidade, da sua comunicação, da escrita ou de seus dons artísticos. É uma pessoa recicladora de energias. Por onde passa transmite paz e tranquilidade. Seu ideal e exemplo inspiram outros e seu sucesso virá no compartilhamento do seu conhecimento em prol de um bem maior. Profissões do meio artístico, ciência, área do ensino, psicologia e até diplomacia política combinam com a pessoa dessa missão."
        },
        22: {
            title: "MISSÃO DE VIDA 22 – GENIALIDADE",
            text: "VISIONÁRIO é a palavra-chave deste caminho. A pessoa com essa missão deve servir em grande escala. Seu interesse está voltado para assuntos globais. Ela realiza tudo com grandiosidade, o que lhe traz fama, sucesso material e uma posição sólida na vida. Essa pessoa é visionária, idealista e espiritualista. Ela compreende que a fé sem obras é vazia! Seus sonhos são grandes e seu desejo é fazer o bem para todos. Ela veio para ser líder, não apenas um servidor. Profissões como construtor, arquiteto, engenheiro, administrador, político, conferencista, professor e terapeuta holístico são adequadas para a pessoa com essa missão de vida. Ela veio para mostrar a importância de ser um sonhador, realizar esses sonhos e cumprir a missão de vida que lhe foi atribuída."
        }
    };

    return missions[number] ? `<h2>${missions[number].title}</h2><p>${missions[number].text}</p>` : '';
}
