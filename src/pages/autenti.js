import { Button } from 'react-bootstrap';
import React from 'react';
import './auten.scss'

function Autenti() {
  return (
    <div className='contenedor'>
        <div  className='circulo'><img src='https://img.icons8.com/office/2x/user.png' alt='user'/></div>
        <h2 className='h2'>BIENVENIDO</h2>
        <div className='ib'>
        <input id='co' type='email' placeholder='Correo'></input>
        <input id='pwd'type='password' placeholder='Contraseña'></input>
        <Button id='ing'>Ingresar</Button>
        </div>
    </div>
  )
}

export default Autenti