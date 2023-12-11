let userName = getFirstName("João-Marcelo", "-");
console.log("Bem vindo " + userName);

userName = getFirstName("Sebozinho Silva", " ");
console.log("Bem vindo " + userName);

function getFirstName(name, splitChar) {
  let firstName = name.split("splitChar")[0];
  return firstName;
}
