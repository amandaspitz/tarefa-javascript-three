// Calcula o perímetro e a área de um retângulo
function calcularRetangulo(retangulo) {
   
    const objRetangulo = {
        
        perimetro:
        2 * (retangulo.largura + retangulo.altura)
    ,
        area: 
        retangulo.largura * retangulo.altura
    
    }

    return objRetangulo;
    }

// Verifica se uma pessoa é maior de idade
function ehAdulto(pessoa) {
    
    if (pessoa.idade >= 18) {
        return true
    } else {
        return false
    }
    
    let primeiraPessoa = {
        nome: "John",
        idade: 25,
        cidade: "New York",
    }

    console.log(ehAdulto(primeiraPessoa));

   
}

// Concatena os valores de um objeto em uma string
function concatenaValores(obj) {
    return obj.nome + " " + obj.idade + " " + obj.cidade; 
    
    }


module.exports = { calcularRetangulo, ehAdulto, concatenaValores };
