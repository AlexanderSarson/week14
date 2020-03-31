import React, {useState} from "react";
import "./Person.css";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid/v1";
import PersonList from "./PersonList";
import NewPerson from "./NewPerson";

function App9() {
  const initialData = [
    { id: uuid(), name: "Donald Duck" },
    { id: uuid(), name: "Oscar Laurberg" },
    { id: uuid(), name: "Mads merge" }
  ]
  const [persons, setPersons] = useState(initialData);
  const [newPerson, setNewPerson] = useState({ id: "", name: "" });
  console.log(persons)

  const addPerson = person => {
    if(person.id == ""){
      person.id = uuid();
      persons.push(person);
    } else {
      let personToEdit = persons.find(findPerson => findPerson.id === person.id);
      personToEdit.name = person.name;
    }
    setPersons([...persons]);
    setNewPerson({ id: "", name: "" });
  };
  const deletePerson = (index) => {
    setPersons([...persons.filter(person => person.id !== index)]);
  }
  const editPerson = (index) => {
    setNewPerson({...persons.find(person => person.id === index)});
  }

  
  return (
    <div className="container outer">
      <h2 style={{ textAlign: "center", marginBottom:25 }}>
        State Lift Demo
      </h2>
      Total Persons: {persons.length}
      <div className="row">
        <div className="col-6 allPersons">
          <PersonList 
          persons={persons}
          deletePerson={deletePerson}
          editPerson={editPerson}
          />
        </div>
        <div className="col-5 new-person">
        <NewPerson
            addPerson={addPerson}
            nextPerson={newPerson}            
          />
        </div>
      </div>
    </div>
  );
}
export default App9;
