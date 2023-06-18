// Soma dos números inteiros de 1 a n
function somaNumeros(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + somaNumeros(n - 1);
  }
}

// Verifica se um número é par
function ehPar(number) {
   if (number % 2 === 0) {
    return true;
  } else if (number === 1) {
    return false;
  } else 
  return ehPar(number - 2)
}

function fibonacci(number) {
  if (number === 0) {
    return 0;
  } else if (number === 1) {
    return 1;
  } else {
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
}


module.exports = { somaNumeros, ehPar, fibonacci };
