import React, {useState} from 'react';
import './navbar.scss';
import {Form} from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SideBarData} from './sideBarData';
import {IconContext} from 'react-icons';



function Navbarmain() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar =()=>setSidebar(!sidebar);
  return(
    
    <div className='Nav'>
      <IconContext.Provider value={{color:'#000'}}>
      <div className='navbar'>
      <Link to="#" className="menu-bars"><FaIcons.FaBars  onClick={showSidebar}/></Link>
      <nav className={sidebar? 'nav-menu active': 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <AiIcons.AiFillCloseCircle/>
            </Link>
          </li>
          {SideBarData.map((item, index)=>{
            return(
            <li key={index} className={item.cName}>
            <Link to={item.path}>
              <span>{item.title}</span>
              {item.icon}
            </Link>
            </li>
          );
          })}
        </ul>
       </nav>
       </div>
       </IconContext.Provider>
      <img className='logo' src='https://cdn-icons-png.flaticon.com/512/3027/3027212.png' alt='rappiicon' width={45} height={45}></img>
      <button className='location'><img src='https://cdn-icons-png.flaticon.com/512/854/854853.png' alt='locationimg' className='locImg' width={5} height={5}></img>Ingresar mi ubicacion <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="sc-fbkhIv gCCILV"><path fill="#ff7d00" d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path></svg></button>
      
      <Form className="d-flex">
        <input
          type="search"
          placeholder="Busca en rappi..."
          className="me-2"
        />
        <button className='buscar'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="sc-laRPJI ksFFop"><path fill="#f7f8f9" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 001.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 00-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 005.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></button>
      </Form>
      
      
      
      <div className='right'>
      <button className='btncarrito'><img className='imgCarrito'src='https://cdn-icons-png.flaticon.com/512/833/833314.png'  alt='carrito' width={30} height={20}/>0</button>
      <button  class='ingresar'>Ingreso</button>
      </div>
    </div> 
  )
  
}

export default Navbarmain