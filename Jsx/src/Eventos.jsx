import React from 'react'

const Eventos = () => {
  function handleClick(e){
    alert('Comprou ' + e.target.innerText)
  }
  function handleScroll(e) {
    console.log(e)
  }
  window.addEventListener('scroll', handleScroll)
  return (
    <div>
      <button onClick={handleClick}>Camisa</button>
      <button onClick={handleClick}>Bermuda</button>
      {/* Função anônima */}
      <button onClick={({ target }) => target.classList.toggle('ativa')}>
        Ativar
      </button>
      <div style={{ height: '200vw' }}>Div</div>
    </div>
  )
}

export default Eventos