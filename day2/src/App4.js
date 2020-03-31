import React, { useState, useEffect } from 'react';
import './App.css';

function ListItem({value}){
  return <li>{value}</li>
}

function ListRow({value}){
  return <tr><td>{value}</td></tr>
}

function NumberList({ numbers }) {
  console.log("--NUMBERS -->",numbers)
  const listItems = numbers.map((n,index) => 
  <ListItem key={index} value={n}/>
  );
  return (
    <ul>
      {listItems}
    </ul>
  )
}

function ComponentNumberTable({numbers}){
  const tableItems = numbers.map((n,index) => 
  <ListRow key={index} value={n}/>);
  return (
    <table>
    <thead>
      <tr>
        <th>Numbers</th>
      </tr>
    </thead>
      <tbody>
      {tableItems}
      </tbody>
    </table>
  )
}

function ListDemo(props) {
  console.log(props.numbers)
  return (
    <div>
      <h2>All numbers passed in via props</h2>
        <NumberList numbers={props.numbers} />
        <ComponentNumberTable numbers={props.numbers}/>
    </div>
  );
}


function App4(props) {
  const [numbers, setNumbers] = useState([1, 2, 3, 4]);

  useEffect(() =>{
    const interval = setInterval(() => {
      setNumbers([...numbers, numbers.length + 1])
    },5000);
    return () => {
      clearInterval(interval);
    }
  },[numbers])

  return <ListDemo numbers={numbers} />;
}

export default App4;
