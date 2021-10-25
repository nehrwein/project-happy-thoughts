import React, { useState, useEffect } from "react"
import moment from "moment"
import { API_URL } from "./../utils/urls"


const Main = () => {
  const [thoughts, setThoughts] = useState([])   /* is created to get the existing list of thoughts. the state is an empty array to start with */
  const [newThought, setNewThought] = useState('')  /* is created to hold the happy thought, that we want to post to the API */

  useEffect(() => {                              /* After the .thoughts-container is mounted, the data gets fetched from the API and updates the thoughts[] */
    fetch(API_URL)
      .then(response => response.json())
      .then((data) => setThoughts(data))
  }, [])


  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message:newThought })      /* The message we want to post needs to be converted to JSON-format */
    }

    fetch(API_URL, options)
      .then(response => response.json())
      .then((data) => setThoughts([data,...thoughts]))  /* the new thought is added with spread (...) to the existing thoughts */
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label>Type your happy thought
          <input 
            type="text"
            value={newThought}
            onChange={event => setNewThought(event.target.value)}
          />
        </label>
        <button type="submit">Send</button>
      </form>

      {thoughts.map(thought => (                                          /* thoughts get injected from the fetched data */
        <div key={thought._id} className="thoughts-container">
          <p>{thought.message}</p>    
          <button>&hearts;</button>
          <span> x{thought.hearts} </span>
          <span> {moment(thought.createdAt).fromNow()}</span>
        </div>
      ))}
    </div>
  )  
}

export default Main