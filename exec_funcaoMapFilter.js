let textos = ["nome","cpf","idade","endereço","telefone"]

const maiusculo = textos.map(palavra => palavra.toLocaleUpperCase())
console.log(maiusculo)


const palavraCurta = textos.filter(palavra => palavra.length < 5)
console.log(palavraCurta)