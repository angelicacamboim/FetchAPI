const listarClientes = () => {
    return fetch("http://localhost:4000/clientes")
      .then( resposta => {
         return resposta.json()
      })
     .then( json => {  
        return json
      })
    }

const cadastrarClientes = (nome, cpf) => {
    //JSON.stringify() converte um valor para uma notação JSON que o representa:
    const json = JSON.stringify({
        nome: nome,
        cpf: cpf
    })
    return fetch("http://localhost:4000/clientes/cliente", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: json
    })
    .then( resp => {
        return resp.body
    })

    }