class formaDeBolo {
  constructor(saborMassa, saborRecheio){
    this.saborMassa = saborMassa
    this.saborRecheio = saborRecheio
  }
  escrever(){
    console.log(`Um delicioso bolo de ${this.saborMassa} com recheio de ${this.saborRecheio}`)
  }
  assar(){
    console.log(`Assando bolo de ${this.saborMassa}`)
  }
}

let boloFesta = new formaDeBolo("Massa Chocolate", "Nutella")
let boloBeijinho = new formaDeBolo("Massa Branca", "Morango")

boloFesta.saborMassa = "Cocô"

boloFesta.assar()
boloBeijinho.assar()
boloFesta.escrever()
boloBeijinho.escrever()