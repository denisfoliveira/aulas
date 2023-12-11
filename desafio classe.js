
class heroi {
  constructor (name, poderDeAtaque, poderDeDefesa) {
    this.name = name
    this.poderDeAtaque = poderDeAtaque
    this.poderDeDefesa = poderDeDefesa
  }
  ataque () {
    console.log(`O heroi ${this.name} tem ${this.poderDeAtaque} poder de ataque`)
  }
  defesa () {
    console.log(`O heroi ${this.name} tem ${this.poderDeDefesa} poder de defesa`)
  }
}

let lutar = new heroi("Jurisprudencio", 100, 50)

lutar.ataque()
lutar.defesa()