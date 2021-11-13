class SomadorAdapter {
  constructor({
    somador
  }) {
    this.somador = somador;
  }

  somaTexto(numerosString = []) {
    const numeros = numerosString.map(Number);
    return this.somador.somaNumeros(numeros);
  } 
}

module.exports = SomadorAdapter;