import React from 'react'
import './Fondo.scss'
const Fondo = () => {
  return (
    <div className='main'>
      
          <p className='p'>Si tienes <b className='b'>Rappi,</b>tienes Todo.</p>
          <input className='input'  placeholder='¿Donde quieres recibir tu compra?'/>
       <div className='mainForm'>
          <button className='btnUsaU'>Usa tu ubicacion actual</button>
          <button className='iniciar'><u>Iniciar sesion</u> para ver tus direcciones recientes</button>
      </div>
    </div>
  )
}

export default Fondo