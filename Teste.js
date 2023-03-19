//Ex - 1

let initZero = 0
let initOne = 1
let sum = 1
let num = 8

while (sum < num) {
    sum = initZero + initOne
    initZero = initOne
    initOne = sum
};

if (sum == num) {
    console.log(`${num} - é um numero Fibonacci`)
} else {
    console.log(`${num} - não é um numero Fibonacci`)
}
//




//Ex 2 -

const faturamento = [{
        "dia": 1,
        "valor": 22174.1664
    },
    {
        "dia": 2,
        "valor": 24537.6698
    },
    {
        "dia": 3,
        "valor": 26139.6134
    },
    {
        "dia": 4,
        "valor": 0.0
    },
    {
        "dia": 5,
        "valor": 0.0
    },
    {
        "dia": 6,
        "valor": 26742.6612
    },
    {
        "dia": 7,
        "valor": 0.0
    },
    {
        "dia": 8,
        "valor": 42889.2258
    },
    {
        "dia": 9,
        "valor": 46251.174
    },
    {
        "dia": 10,
        "valor": 11191.4722
    },
    {
        "dia": 11,
        "valor": 0.0
    },
    {
        "dia": 12,
        "valor": 0.0
    },
    {
        "dia": 13,
        "valor": 3847.4823
    },
    {
        "dia": 14,
        "valor": 373.7838
    },
    {
        "dia": 15,
        "valor": 2659.7563
    },
    {
        "dia": 16,
        "valor": 48924.2448
    },
    {
        "dia": 17,
        "valor": 18419.2614
    },
    {
        "dia": 18,
        "valor": 0.0
    },
    {
        "dia": 19,
        "valor": 0.0
    },
    {
        "dia": 20,
        "valor": 35240.1826
    },
    {
        "dia": 21,
        "valor": 43829.1667
    },
    {
        "dia": 22,
        "valor": 18235.6852
    },
    {
        "dia": 23,
        "valor": 4355.0662
    },
    {
        "dia": 24,
        "valor": 13327.1025
    },
    {
        "dia": 25,
        "valor": 0.0
    },
    {
        "dia": 26,
        "valor": 0.0
    },
    {
        "dia": 27,
        "valor": 25681.8318
    },
    {
        "dia": 28,
        "valor": 1718.1221
    },
    {
        "dia": 29,
        "valor": 13220.495
    },
    {
        "dia": 30,
        "valor": 8414.61
    }
]

const exibirFaturamento = () => {
    let soma = 0
    let contDias = 0
    let menorValor = faturamento[0].valor
    let maiorValor = 0
    let acimaDaMedia = 0
    faturamento.map((dia) => {
        if (dia.valor != 0) {
            soma = soma + dia.valor
            contDias++
            if (dia.valor < menorValor) {
                menorValor = dia.valor;
            }
            if (dia.valor > maiorValor) {
                maiorValor = dia.valor;
            }
        }
    })
    faturamento.forEach((dia) => {
        if (dia.valor > soma / contDias) {
            acimaDaMedia++
        }
    })
    console.log(`Menor faturamento do mês : ${menorValor}`)
    console.log(`Maior faturamento do mês : ${maiorValor}`)
    console.log(`Dias com faturamento acima da media : ${acimaDaMedia}`)
}
exibirFaturamento()

//


//Ex 3

const estados = [{
        'estado': 'SP',
        'valor': 67836.43
    },
    {
        'estado': 'RJ',
        'valor': 36678.66
    },
    {
        'estado': 'MG',
        'valor': 29229.88
    },
    {
        'estado': 'ES',
        'valor': 27165.48
    },
    {
        'estado': 'Outros',
        'valor': 19849.53
    },
]

const calcularFaturamento = () => {
    let rendimento = 0
    estados.forEach((estado) => {
        rendimento = rendimento + estado.valor
    })
    estados.map((estados) => {
        let porcentagem = 0
        porcentagem = (estados.valor / rendimento) * 100
        console.log(`O ${estados.estado} corresponde a : ${porcentagem.toFixed(2)}% da carteira`)
    })

}

calcularFaturamento()


//Ex 4

let palavra = "Bom dia";
let palavraInv = "";

for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInv += palavra[i];
}

console.log(palavraInv);

//