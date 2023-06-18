// Retorna o dia da semana correspondente a um número
function retornaDiaSemana(number) {
    let dia;
    switch (number) {
    
        case 1: 
            dia = 'Domingo';
            break;

        case 2: 
            dia = 'Segunda-feira';
            break;

        case 3: 
            dia = 'Terça-feira';
            break;

        case 4: 
            dia = 'Quarta-feira';
            break;

        case 5: 
            dia = 'Quinta-feira';
            break;

        case 6: 
            dia = 'Sexta-feira';
            break;

        case 7: 
            dia = 'Sábado';
            break;

        default:
            dia = "Número inválido";
    }

    return dia;

}

// Retorna o preço do produto com base no código de produto
function retornaPrecoProduto(code) {
    let preco;

    switch (code) {

        case "A": 
         preco = 10.99;
         break;

        case "B":
            preco = 5.99;
            break;

        case "C":
            preco = 7.50;
            break;

        default: 
            preco = "Código inválido";
           
    }
    return preco;
}

// Retorna a categoria do produto com base no tipo de produto

function retornaCategoriaProduto(type) {
    let produto;

    switch(type) {
        case "Eletrônicos":
            type = "Tecnologia";
            break;

        case "Roupas":
            type = "Moda";
            break;

        case "Alimentos":
            type = "Alimentação";
            break;

        default:
            type = "Categoria desconhecida";

        }

        return type;
}

module.exports = { retornaDiaSemana, retornaPrecoProduto, retornaCategoriaProduto };