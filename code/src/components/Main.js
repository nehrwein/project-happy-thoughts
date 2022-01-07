import React, { useState, useEffect } from "react"
import { API_URL } from "./../utils/urls"
import NewThought from "./NewThought"
import ThoughtCard from "./ThoughtCard"
import Spinner from "./Spinner"


const Main = () => {
  const [thoughts, setThoughts] = useState([])   /* is created to get the existing list of thoughts with all entries from the database */
  const [newThought, setNewThought] = useState('')  /* is created to hold the happy thought, that we want to post to the API */
  const [name, setName] = useState('')           /* sets the name of the thought's author */ 
  const [category, setCategory] = useState('')      /* sets the chosen category for thoughts */
  const [loading, setLoading] = useState(false)   /* is created for the loading spinner */
  const [error, setError] = useState('')        /* holds the value in case there is an error message coming from the API */


  useEffect(() => {                              /* After the .thoughts-container is mounted, the data gets fetched from the API and updates the thoughts[] */
    fetchAllThoughts()
  }, [])

  const fetchAllThoughts = () => {
    setLoading(true)
    fetch(API_URL)
      .then(response => response.json())
      .then((data) => setThoughts(data))
      .finally(() => setLoading(false))
  }

  const showErrors = (error) => {
    setError(error)
    setTimeout(() => setError(''), 1000)
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message:newThought, author:name, category })      /* The message,name and category we want to post on the API need to be converted to JSON-format */
    }

    fetch(API_URL, options)
      .then(response => response.json())
      /* .then((data) => setThoughts([data,...thoughts])) */  /* the new thought is added with spread (...) to the existing thoughts. This method would be a good alternative to (data) => fetchAllThoughts() for bigger data-transfers, because it's more specific and thereby causes less data-traffic */
      .then((data) => {
        if (data.response.errors) {
          showErrors(data.response.errors.message.kind)
        } else fetchAllThoughts()
      })
      .finally(() => {
        setNewThought('')
        setCategory('')
        setName('')
      })
    }


  return (
    <>
      {loading && <Spinner />}

      <NewThought 
        handleFormSubmit={onFormSubmit}
        newThought={newThought}
        setNewThought={setNewThought}
        name={name}
        setName={setName}
        category={category}
        setCategory={setCategory}
        error={error}
      />

      {thoughts.length > 0 && (
        <ThoughtCard
          thoughts={thoughts}
          fetchAllThoughts={fetchAllThoughts}
        />)
      }
    </>
  )  
}

export default Main