import { useState } from 'react'



function App() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")

  return (
    <div className="App">
        <input onChange={(e) => {setFirstName(e.target.value)}} className='border-2 border-black mx-2 mt-4' placeholder='firstName' type="text" name="firstName" id="firstName" />
        <input onChange={(e) => {setLastName(e.target.value)}} className='border-2 border-black mx-2 mt-4' placeholder='lastName' type="text" name="lastName" id="lastName" />
        <input onChange={(e) => {setEmail(e.target.value)}} className='border-2 border-black mx-2 mt-4' placeholder='email' type="email" name="email" id="email" />
        <p>First Name : {firstName}</p>
        <p>Last Name : {lastName}</p>
        <p>Email : {email}</p>
    </div>
  )
}

export default App
