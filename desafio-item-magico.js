class itemMagico {
  //TODO: Crie adequadamente um construtor que receba todos os atributos referente ao item mágico:
    constructor(tipoItem, danoItem, resistenciaItem) {
      this.tipoItem = tipoItem
      this.danoItem = danoItem
      this.resistenciaItem = resistenciaItem
    }
  
    calcularDano() {
      return this.tipoItem === 'arma' ? this.danoItem * 2 : this.danoItem;
    }
  }
  
  // Solicita ao usuário para digitar o tipo do item mágico, o dano no item e a resistência do item
  const tipoItem = "Arma";
  const danoItem = 100;
  const resistenciaItem = 100;
  
  //TODO: Crie o de um objeto ItemMagico personalizado com base no tipo escolhido
  
  let itemPersonalizado = new itemMagico(tipoItem, danoItem, resistenciaItem)
  
  // TODO: Imprima os atributos do item personalizado
  console.log("Tipo: " + itemPersonalizado.tipoItem);
  console.log("Dano: " + itemPersonalizado.danoItem);
  console.log("Resistencia: " + itemPersonalizado.resistenciaItem);
  
  // Calcula e imprime o dano causado pelo item personalizado em um combate simulado
  const danoTotal = itemPersonalizado.calcularDano();
  console.log("Dano em combate: " + danoTotal);