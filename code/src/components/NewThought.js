import React from "react"
import Button from "./Button"

const NewThought = (props) => {
  return (
    <div className="thought-container new">
      <form 
        className="new-thought-form"
        onSubmit={props.onFormSubmit}>
          <label>What's making you happy right now?
            <input 
              type="text"
              value={props.newThought}
              onChange={event => props.setNewThought(event.target.value)}
            />
          </label>
          <Button
            className={"thought-button"} 
            type={"submit"}
            text={<>❤️ Send Happy Thought ❤️</>}
            disabled={props.newThought.length < 6 || props.newThought.length > 140}
          />
        </form>
      </div>
  )
}

export default NewThought