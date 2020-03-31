import React, { useState } from "react";
 
function App7() {
  const initialValue = {
    payByCreditCard: true,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    country: ""
  };
  const [reservation, setReservation] = useState(initialValue);
 
  const handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setReservation({ ...reservation, [name]: value });
  };
  function handleSubmit(event) {
    event.preventDefault();
    window.alert(JSON.stringify(reservation));
  };
 
  return (
    <div>
      <form onChange={handleChange}>
        <label>Pay by Credit Card: </label>
          <input
            name="payByCreditCard"
            type="checkbox"
            checked={reservation.payByCreditCard}
          />
        <br />
        <input
          name="firstName"
          value={reservation.firstName}
          placeholder="First Name"
        />
        <br />
        <input
          name="lastName"
          value={reservation.lastName}
          placeholder="Last Name"
        />
        <br />
        <input
          name="email"
          value={reservation.email}
          placeholder="Email"
        />
        <br />
        <input
          name="phone"
          value={reservation.phone}
          placeholder="Phone"
        />
        <br />
        <input
          name="street"
          value={reservation.street}
          placeholder="Street"
        />
        <br />
        <input
          name="city"
          value={reservation.city}
          placeholder="City"
        />
        <br />
        <input
          name="zip"
          value={reservation.zip}
          placeholder="Zipcode"
        />
        <br />
        <input
          name="country"
          value={reservation.country}
          placeholder="Country"
        />
        <br />
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
      <p>{JSON.stringify(reservation)}</p>
    </div>
  );
}
export default App7;