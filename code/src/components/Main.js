import React, { useState, useEffect } from "react"
import { API_URL } from "./../utils/urls"
import NewThought from "./NewThought"
import ThoughtCard from "./ThoughtCard"


const Main = () => {
  const [thoughts, setThoughts] = useState([])   /* is created to get the existing list of thoughts. the state is an empty array in the beginning */
  const [newThought, setNewThought] = useState('')  /* is created to hold the happy thought, that we want to post to the API */

  useEffect(() => {                              /* After the .thoughts-container is mounted, the data gets fetched from the API and updates the thoughts[] */
    fetchAllThoughts()
  }, [])

  const fetchAllThoughts = () => {
    fetch(API_URL)
      .then(response => response.json())
      .then((data) => setThoughts(data))
  }

  console.log('Data: ', thoughts)  

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
      /* .then((data) => setThoughts([data,...thoughts])) */  /* the new thought is added with spread (...) to the existing thoughts */
      .then((data) => fetchAllThoughts())
    }


  return (
    <div>
      <NewThought 
        onFormSubmit={onFormSubmit}
        newThought={newThought}
        setNewThought={setNewThought}
      />

      {thoughts.length > 0 && (
        <ThoughtCard
          thoughts={thoughts}
          fetchAllThoughts={fetchAllThoughts}
        />)
      }
    </div>
  )  
}

export default Main