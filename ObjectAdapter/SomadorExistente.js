class SomadorExistente { 
  somaNumeros(lista = []) { 
    let resultado = 0; 

    lista.forEach(element => { 
      resultado += element
    });

    return resultado; 
  } 
} 

module.exports = SomadorExistente;