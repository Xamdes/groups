// Autogenerated using npm run gen Header
/*
* Copy to other files
* import Header from './Header';
* <Header/>
*/
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <Main>
      <Link to="/">Home</Link>
      <span> | </span>
      <Link to="/login">Login</Link>
      <span> | </span>
      <Link to="/contacts">Contacts</Link>
      <span> | </span>
      <Link to="/groups">Groups</Link>
    </Main>
  );
}

export default Header;

const Main = styled.div`
background-color: black;
font-family: sans-serif;
color: grey;
`;
