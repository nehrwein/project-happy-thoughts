import React from "react"
import moment from "moment"
import Button from "./Button"

const ThoughtCard = (props) => {
  return(
    <div>
      {props.thoughts.map((thought) => (                              /* thoughts get injected from the fetched data */
        <div key={thought._id} className="thought-container">
          <p>{thought.message}</p>    
          <Button
            className={"thought-button"}  
            text={<>❤️</>}
          />
          <span> x{thought.hearts} </span>
          <span> {moment(thought.createdAt).fromNow()}</span>
        </div>
      ))}
    </div>
  )
}

export default ThoughtCard