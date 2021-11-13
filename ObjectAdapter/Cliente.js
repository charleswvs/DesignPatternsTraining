class Cliente { 
  somador; 
  constructor ({ somador }) { 
    this.somador = somador; 
  } 

  executar() { 
    const vetor = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']; 
    const soma = this.somador.somaTexto(vetor); 
    console.log("Resultado: " + soma); 
  }   
} 

module.exports = Cliente;