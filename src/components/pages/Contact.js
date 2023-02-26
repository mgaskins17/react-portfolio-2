import React, { useState } from 'react';


export default function Contact() {
  const [nameInput, setName] = useState("");
  const [emailInput, setEmail] = useState("");
  const [msgInput, setMsg] = useState("");
  const [reqName, setReqName] = useState("none");
  const [reqMess, setReqMess] = useState("none");
  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    // return name === "firstName" ? setFirstName(value) : setLastName(value);
    if (name === "nameInput") {
        setReqName("none");
        return setName(value);
    };
    if (name === "emailInput") {
        return setEmail(value);
    }
    if (name === "msgInput") {
        setReqMess("none");
        return setMsg(value);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    if (!validEmail.test(emailInput)) {
        return alert(`Please enter a valid email address.`);
    }
    if (!nameInput && !msgInput) {
        setReqName("");
        setReqMess("");
        return console.log('Please fill this field out.')
    }
    if (!nameInput) {
        setReqName("");
        return console.log('Please fill this field out.')
    }
    if (!msgInput) {
        setReqMess("");
        return console.log('Please fill this field out.')
    }

    // Alert the user their first and last name, clear the inputs
    alert(`${nameInput}, your message has been sent to Matthew!`);
    setName("");
    setEmail("");
    setMsg("");
  };

  // I can include the action in the form tag to send the actual email, but this is purely a mock up at this point *****
  return (
    <section>
      <form className="contactForm border border-light w-25 mx-auto mt-5 p-3 rounded">
        <h2 className="text-center">Send me a message!</h2>
        <div className="d-flex flex-column">
          <label htmlFor="name">Name:</label> <p style={{display: `${reqName}`, color: 'red'}}>*This Field is Required</p>
          <input id="nameInput" type="text" value={nameInput} name="nameInput" onChange={handleInputChange} placeholder="Name"></input>
        </div>
        <div className="d-flex flex-column">
          <label htmlFor="email">Email:</label>
          <input id="emailInput" type="text" value={emailInput} name="emailInput" onChange={handleInputChange} placeholder="example@email.com"></input>
        </div>
        <div className="d-flex flex-column">
          <label htmlFor="message">Message:</label> <p style={{display: `${reqMess}`, color: 'red'}}>*This Field is Required</p>
          <textarea id="msgInput" type="text" value={msgInput} name="msgInput" onChange={handleInputChange} placeholder="Type your message here."></textarea>
        </div>
        <div>
          <button className="mt-2 btn btn-danger" onClick={handleFormSubmit}>Submit</button>
        </div>
      </form>
    </section>
  );
}