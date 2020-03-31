import React from 'react';

function TableHeaders({ property }) {
  return <th> {property} </th>
}

function TableCell({ value }) {
  return <td>{value}</td>;
}

function TableRows({ person, editPerson, deletePerson }) {
  const propValues = Object.values(person).map((val, index) =>
    <TableCell key={index} value={val} />
  )
  return (
    <tr>
      {propValues}
      <a href="/#" onClick={(e) => { e.preventDefault(); deletePerson(person.id) }}> (delete, </a>
      <a href="/#" onClick={(e) => { e.preventDefault(); editPerson(person.id) }}> edit) </a>
    </tr>);
}

const PersonList = ({ persons, deletePerson, editPerson }) => {
  const tableHeaders = Object.keys(persons[0]).map((prop, index) =>
    <TableHeaders key={index} property={prop} />
  )

  const tableRows = persons.map((person, index) =>
    (<TableRows key={index} person={person} deletePerson={deletePerson} editPerson={editPerson}>
    </TableRows>)
  )
  return (
    <table>
      <thead>
        <tr>
          {tableHeaders}
        </tr>
      </thead>
      <tbody>
        {tableRows}
      </tbody>
    </table>
  )
}

export default PersonList;