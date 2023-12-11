let invoice = {
  name: "Denis",
  age: 34,
  products: {
    0: ["Pão", 5.00],
    1: ["Coxinha", 8.00],
    2: ["Coca", 10.00]
  }
}

generateInvoice(invoice)

function generateInvoice(invoice){
	console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    console.log("------------------")
    
    for (let index in invoice.products){
    	let [productName, productPrice] = invoice.products[index]
        console.log(` - ${productName}: R$ ${productPrice}`)
    }
}