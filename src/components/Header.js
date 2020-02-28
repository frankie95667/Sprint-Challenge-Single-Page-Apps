import React from "react";
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
  return (
    <header className="ui centered">
      <NavLink exact to='/'><h1 className="ui center">Rick &amp; Morty Fan Page</h1></NavLink>
      <Nav>
        <NavLink exact to='/'>Home</NavLink>
        <NavLink to='/characters'>Characters</NavLink>
      </Nav>
    </header>
  );
}

const Nav = styled.nav`
  height: 80px;
  display: flex;
  align-items: center;
  
  a{
    text-decoration: none;
    color: #9ac0d3;
    padding: 10px 30px;

    &:hover {
      color:darkblue;
    }
  }

  a.active {
    background-color: #9ac0d3;
    color: white;
  }
`;