import React from "react"
import "./PopUp.css"

/* The PopUp (animated amount of unique likes & heart)  gets shown everytime a unique thought is liked.  */
const PopUp = ( props ) => {
  /* working on starting the animation on mouse position instead of fixed values */
  let x = 13
  let y = 500

  return(
    <div className={props.className}>
      <p
      top = {y + 'px'}
      left = {x + 'px'}
      >{props.noOfLikes}
        <span 
          role="img"
          aria-label="jsx-a11y/accessible-emoji">❤️</span>
      </p>
    </div>
  )
}

export default PopUp