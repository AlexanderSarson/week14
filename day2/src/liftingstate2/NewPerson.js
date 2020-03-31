import React,{useState, useEffect} from 'react';

const NewPerson = (props) => {
  const [person, setPerson] = useState(props.nextPerson);

  const savePerson = evt => {
    if (person.name === "") {
      return;
    }
    props.addPerson(person);
    evt.preventDefault();
  };

  useEffect(() => setPerson({ ...props.nextPerson }), [props.nextPerson]);

  const onChange = evt => {
    const val = evt.target.value;
    person.name = val;
    setPerson({ ...person });
  };
  const title = person.id === "" ? "Create new Person" : "Edit Person"
  return (
    <div>
      <h4>{title}</h4>
      {person.id !== "" && <p>Editing person with</p>}
      <form>
        <input value={person.name} onChange={onChange} />
        <button onClick={savePerson}>Save</button>
      </form>
      
    </div>
  );
}

export default NewPerson;