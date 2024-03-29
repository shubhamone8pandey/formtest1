import React from 'react'
import axios from 'axios'

const App = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    // Handle form submission here
    axios.post('https://formtest-server.vercel.app/api/users', {
      name,
      email
    })
      .then((response) => console.log(response))
      .catch((error) =>  console.log(error))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label htmlFor="email">
        Email:
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default App
