import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from '../CartWidget/Index'
import styled from 'styled-components'

export const NavBar= () => {
  return(
    <>
    
    <NavContainer className="navbar navbar-expand-lg navbar-light bg-light">
   
    <NavLink className= "navbar-brand" to='/'><h2>Institute<span>VAG</span></h2></NavLink>
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to='/'>Inicio<span class="sr-only">(current)</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/categoria/guias'>Guías de autocuidado</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to= '/categoria/cursos'>Cursos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/categoria/dermo-cosmeticos'>Dermo-cosméticos</NavLink>
        </li>
      </ul>
    </div>
        
        <div className='carrito'>
        <NavLink  to='/Cart'>
            <CartWidget/>
            </NavLink>
        </div>
  </NavContainer>
  </>
  );
}
export default NavBar;

const NavContainer = styled.nav`
h2{
  color: grey;
  font-weight: 200;
  span{
    font-weight: bold;
  }
}
.navbar-nav{
font-weight: bold;
padding: .8rem;
display: flex;
align-items: center;
justify-content: space-between;
text-align: center;

}

}
li.nav-item{
 
  color: black;
  text-decoration: none;
  margin-right: 1rem;
  
}`