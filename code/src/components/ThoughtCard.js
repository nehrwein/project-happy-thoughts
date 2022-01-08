import React, { useEffect, useState } from "react"
import moment from "moment"
import Button from "./Button"
import Emoji from "./Emoji"
import { LIKES_API_URL } from "./../utils/urls"
import PopUp from "./PopUp"

const ThoughtCard = (props) => {

  const [postsILike, setPostsILike] = useState([])
  const [newLike, setNewLike] = useState(false)

  const uniquePostsILike = new Set(postsILike)  /* getting rid of repeating IDs with creating a Set */

  useEffect(() => {                             /* using useEffect in combination with setThimeout to show the PopUp for 3sek every time a new value gets added to the set.  */
    setNewLike(true)
    setTimeout(() => setNewLike(false), 3000)
  }, [uniquePostsILike.size])
  

  /* While executing POST request for likes amount, there's no need to implement the body/header - property inside the options object. The information for the API is provided by the unique ID that comes with the URL. */
  const handleSendLike = (id) => {
    const options = {
      method: 'POST',
    }

    fetch(LIKES_API_URL(id), options)
      .then(res => res.json())
      .then((data) => props.fetchAllThoughts()) 
  }   
  
  const emojiPicker = (category) => {

    if (category === 'Animals') {
      return <Emoji symbol="🐶" label="dog" role="img"/>;
    } else if (category === 'Just Happy') {
      return <Emoji symbol="🌈" label="rainbow" role="img"/>;
    } else if (category === 'Food') {
      return <Emoji symbol="🍕" label="pizza slice" role="img"/>;
    } else if (category === 'Home') {
      return <Emoji symbol="🏠" label="house" role="img"/>;
    } else if (category === 'Project') {
      return <Emoji symbol="🔨" label="hammer" role="img"/>;
    } else {
      return;
    }  
  };

  return(
    <div className="">
      {newLike && <PopUp 
        className={"pop-up"}
        noOfLikes={uniquePostsILike.size}
      />}
      <div>
        {props.thoughts.map((thought) => (                              /* thoughts get injected from the fetched data */
          <div key={thought._id} className="thought-container">
            <span>{thought.message} </span>
            <span>{emojiPicker(thought.category)}</span>
            <span style={{fontStyle: 'italic', float: "right"}}>{thought.author ? `by ${thought.author}` : ""}</span>
            <div className="button-span-container">    
              <Button
                onClick={() => {
                  handleSendLike(thought._id)
                  setPostsILike([thought._id,...postsILike])
                }}
                className={thought.hearts > 0 ? "thought-button" : "thought-button grey"}
                text={<Emoji symbol="❤️" label="heart" role="img"/>}
              />
              <div className="span-container">
                <span> x{thought.hearts} </span>
                <span> {moment(thought.createdAt).fromNow()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ThoughtCard