# Happy Thoughts

In this project I created my own positive Twitter-version, called "Happy thoughts". It's connected to an API that I was building in another project.

## The problem

With "Happy thoughts" I got to practice more how to work with an API, this time not only fetching, but also posting data. Regarding React, I got to play around with the useEffect for the first time.

So here are my learnings:
- What component lifecycle means.
- How to use the `useEffect` hook in React to perform actions when components mount, unmount, or when state changes.
- How to call APIs from React and put the data into state.
- What it's like to work with an API which I both send and receive data from.
- I was using animations for the first time. If I would have had more time for this project, I would like to dive deeper into that subject.

List of implementations for "Happy thoughts"
October 21
- A list of the most recent thoughts at the top and older thoughts at the bottom (sorted)
- The thoughts show the content of the message and how many likes they've received
- There's a form to post new thoughts and a heart button to send likes on a thought
- A count below the form input updates as the user types and shows how many characters are remaining. It goes red when the user has typed over 140 characters
- When POSTing a new thought, if the message was empty, too long, or too short, the API sends an error message. I use this to set an `error` state to show a friendly message to the user. 
- There's a loading spinner that shows, while the data gets loaded during API calls       
- A count of how many different posts the user likes is showing as a fly-in animation (different from how many times a post has been liked). 
- I followed a given design. For the font I used JetBrains Mono, https://fonts.google.com/specimen/JetBrains+Mono

Jan 22
- option to send the author's name with every Happy thought
- option to add a category to the Happy thought, that will be displayed as an emoji
- added a component for emojis


## View it live

Send some Happy thoughts <3 : https://nehrwein-happy-thoughts.netlify.app/

Visit my deployed API here https://nehrwein-happy-thoughts-api.herokuapp.com

Documentation: https://documenter.getpostman.com/view/18068162/UVXdNe6K
