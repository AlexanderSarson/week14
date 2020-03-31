import React, { useState, useEffect } from 'react';
import './App.css';

function TableHead({property}){
  return <th> {property} </th>;
}

function TableValue({value}){
  return <td>{value}</td>;
}
function TableValues({value}){
  const propValues = Object.values(value).map((val,index) =>
    <TableValue key={index} value={val}/>
    )
  return <tr>{propValues}</tr>;
  }
function MemberTable({ members }) {
  const headList = Object.keys(members[0]).map(prop =>
    <TableHead key={prop} property={prop} />
  );
    const memberPropValues = members.map((member,index) => 
      <TableValues key={index} value={member}/>
      )
  return (
    <table>
      <thead>
        <tr>
          {headList}
        </tr>
      </thead>
      <tbody>
        {memberPropValues}
      </tbody>
    </table>
  );
}
 
function MemberDemo(props) {
  return (
    <div>
      <h4>All Members</h4>
      <MemberTable members={props.members}/>
    </div>
  );
}
 
function App5() {
  const initialMembers = [{name : "Peter", age: 18},
                          {name : "Jan", age: 35},
                          {name : "Janne", age: 25},
                          {name : "Martin", age: 22}];
  const [members,setMembers] = useState(initialMembers)
  
  return (<MemberDemo members={members} />);
}


export default App5;
