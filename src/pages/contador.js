import { useState ,React} from 'react'
import './conta.scss'

function Contador() {
  const value = document.querySelector('#value');
  const [contador, setContador] = useState('0');
  const aumentar=()=>{
    setContador(contador+1)
  }
  const disminuir=()=> setContador(contador-1)
  const reset=()=> setContador(0)
  if(contador<0){
    value.style.color='red';
  }else if(contador>0){
    value.style.color='green';
  }else{value.style.color='black'}
  return (
    <div className='contador'>
        <h1 className='title'>Counter</h1>
        <span className='num' id='value'>{contador}</span>
        <div className='buttons'>
        <button className='d' onClick={disminuir}>Decrease</button>
        <button className='d'onClick={reset}>Reset</button>
        <button className='i'onClick={aumentar}>Increase</button>
        </div>
    </div>
  )
  
}

export default Contador