

//seleciona <tbody data-conteudo-tabela> </tbody>
const tbody = document.querySelector("[data-conteudo-tabela]")

//arrow function
const exibeCliente = (cpf, nome) => {

    //cria a linha <tr> </tr>
    const linha = document.createElement('tr')

    //conteudo do <tr>
    const conteudoLinha = `
        <td>${cpf}</td>
        <td>${nome}</td>
    `

    //coloca o conteudo da linha dentro da linha
    linha.innerHTML = conteudoLinha

    return linha

}
//coloca as linhas e o conteudo das linhas dentro do tbody
listarClientes().then( exibe => {
exibe.forEach (indice => {
    tbody.appendChild(exibeCliente( indice.cpf, indice.nome))
    console.log(indice)
})
})


