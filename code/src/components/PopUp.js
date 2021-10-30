import React from "react"
import "./PopUp.css"

/* The PopUp (animated amount of unique likes & heart)  gets shown everytime a unique thought is liked.  */
const PopUp = ( props ) => {
  return(
    <div className={props.className}>
      <p>{props.noOfLikes}
        <span 
          role="img"
          aria-label="jsx-a11y/accessible-emoji">❤️</span>
      </p>
    </div>
  )
}

export default PopUp