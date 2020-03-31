import React from 'react';
import person, {males, females} from './file2'


const {firstName, email} = person;
// 6)
const  malesAndFemales = [...males, ...females];
const malesAndFemalesAndMore = [...males, "Kurt", "Helle", ...females, "Tina"];
console.log(malesAndFemales);
console.log(malesAndFemalesAndMore);

// 7)
const personV2 = {...person, friends:[...malesAndFemales], phone: 123456};
console.log(personV2);


export default function App2(){
  return (
    <div>
      <p>{firstName}</p>
      <p>{email}</p>
    </div>
  )
}