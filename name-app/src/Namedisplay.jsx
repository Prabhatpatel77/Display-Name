import React,{useState} from 'react';

export default function Namedisplay(){
    const [firstName, setFirstName]=useState("");
    const [lastName, setLastName]=useState("")
    const [fullName,setFullName]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (!firstName.trim() || !lastName.trim()) {
      setFullName("");
      return;
    }
           // setFullName(`${firstName} ${lastName}`);
        setFullName(`${firstName} ${lastName}`);
    }
    return (
        <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
    <input 
      id='firstName'
      name='firstName'
      type='text'
    onChange={(e)=>setFirstName(e.target.value)}
    required />   
     <br />
    <label htmlFor='lastName' >Last Name:</label>
    <input 
    id='lastName'
    name='lastName'
    type='text'
    onChange={(e)=>setLastName(e.target.value)}
    required />
    <br />
    <button type='submit' >Submit</button>
    </form>
    {fullName && (
        <div>
          <p>Full Name: {fullName}</p>
        </div>
      )}
        </div>
    )

}