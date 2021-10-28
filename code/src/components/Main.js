import React, { useState, useEffect } from "react"
import { API_URL } from "./../utils/urls"
import NewThought from "./NewThought"
import ThoughtCard from "./ThoughtCard"
import Spinner from "./Spinner"


const Main = () => {
  const [thoughts, setThoughts] = useState([])   /* is created to get the existing list of thoughts. the state is an empty array in the beginning */
  const [newThought, setNewThought] = useState('')  /* is created to hold the happy thought, that we want to post to the API */
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')


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
    console.log('Fehler: ', error)
  }


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
      /* .then((data) => setThoughts([data,...thoughts])) */  /* the new thought is added with spread (...) to the existing thoughts. This method would a good alternative to (data) => fetchAllThoughts() for bigger data-transfers, because it's more specific and thereby causes less data-traffic */
      
      .then((data) => {
        showErrors(data.errors.message.kind)
        fetchAllThoughts()})
    }


  return (
    <>
      {loading && <Spinner />}

      <NewThought 
        handleFormSubmit={onFormSubmit}
        newThought={newThought}
        setNewThought={setNewThought}
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