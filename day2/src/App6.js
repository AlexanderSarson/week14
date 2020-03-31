import React, {useState} from "react";
 
const NameForm = () => {
  const [name,setName] = useState("");
  function handleChange(event) {
    setName(event.target.value)
  }
  function handleSubmit(event) {
    event.preventDefault();
    window.alert(name);
  }
 
  return (
    <div>
      <form onChange={handleChange}>
        <label>
          Name:
          <input type="text" />
        </label>
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
      {name}
    </div>
  );
};
 
export default function App6() {
  return (
    <div style={{marginTop:25}}>
      <NameForm />
    </div>
  );
}
