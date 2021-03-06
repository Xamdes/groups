// Autogenerated using npm run gen Contact
/*
* Copy to other files
* import Contact from './Contact';
* <Contact/>
*/
import styled from 'styled-components';

function Contact(props){
  return (
    <Main>
      <Name>{props.firstName} {props.lastName}</Name>
    </Main>
  );
}


Contact.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  id: PropTypes.string,
};


export default Contact;

const Main = styled.div`
background-color: black;
font-family: sans-serif;
color: white;
`;

const Name = styled.h4`
background-color: black;
&:hover ${Name} {
  background-color: blue;
}
`;
