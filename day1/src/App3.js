import React from 'react';
import PropTypes from 'prop-types';
import {names} from './file2';

const testPropTypesReq = {firstName: "hello", lastName: "lastName"};

function App3() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      <WelcomePerson person={names[0]}/>
      <WelcomePerson person={testPropTypesReq}/>
      {names.map((name, index) => <WelcomePerson key={index} person={name}/>)}
    </div>
  );
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
}
Welcome.defaultProps = {
  isMember: false
}
function Welcome({ name }) {
  return <p>{name} </p>
}

WelcomePerson.propTypes = {
  person: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  })
}

function WelcomePerson({person}){
  const {firstName, lastName, email} = person;
  return <p>{firstName} {lastName}, email: {email}</p>
}

export default App3;