let tipoPao = "3 queijos";
let nomeCliente = "Jurema";
let valor = 1000;

torrarPao(tipoPao, nomeCliente, valor);

function torrarPao(pao, nome = "Cliente", valor) {
  console.log("torrar pão de " + pao);
  console.log("Pedido feito por " + nome);
  console.log("O valor total é " + valor);
}

let databaseName = "workDB";
let user = "Joaozinho";
let pass = "123";

createStringConnection(databaseName, user, pass);

function createStringConnection(databaseName, user, pass) {
  console.log(
    `connect:DBCONNECT;user=${user};pass=${pass};initial_database=${databaseName}`
  );
}
