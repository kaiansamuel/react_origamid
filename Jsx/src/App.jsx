import React from "react";

const App = () => {
  function meuNome(){
    return 'André'
  }
  function quadrado(x){
    return x * x
  }
  const carro = {
    rodas: 4,
    marca: 'Ford'
  }
  const ativo = true
  const desconto = 50
  const preco = 250
  return (
    <div>
      <p>{'MINHA EMPRESA'.toLowerCase()}</p>
      <p>{30 * 2}</p>
      <p>{true}</p>
      <p>{undefined}</p>
      <p>{(() => 'Função executada')()}</p>
      <p>{meuNome()}</p>
      <p>{quadrado(2)}</p>
      <p>{quadrado(2) === 4 ? 'Formula correta' : 'Formula incorreta'}</p>
      <p>{quadrado(2) === 4 && 'Formula correta'}</p>
      <p>{Date.now()}</p>
      <p>{new Date().getFullYear()}</p>
      <p>
        Marca: {carro.marca}, Rodas: {carro.rodas}
      </p>
      <p className={ativo ? 'ativo' : 'inativo'}>Estoque</p>
      <p>{preco - desconto}</p>
     <a href="https://www.origamid.com" title="Site Origamid">Origamid</a>
    </div>
  )
}

export default App
