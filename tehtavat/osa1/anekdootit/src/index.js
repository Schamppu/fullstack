import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(0)
  const [mostVotes, setMostVotes] = useState(0)

  const randomize = () => {
    const random = Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
    setVotes(props.anecdotes[random].votes)
  }
  const vote = () => {
    props.anecdotes[selected].votes += 1
    setVotes(props.anecdotes[selected].votes)
    let mostVotes = 0
    for (let i = 0; i < anecdotes.length; i++) {
      if (anecdotes[i].votes > mostVotes) {
        mostVotes = anecdotes[i].votes
        setMostVotes(i)
      }
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>
        {props.anecdotes[selected].text}
      </div>
      <div>
          has {votes} votes
      </div>
      <div>
        <Button text={"vote"} handleClick={vote}/>
        <Button text={"next anecdote"} handleClick={randomize}/>
      </div>
      <h1>Anecdote with most votes</h1>
      <div>
        <div>
          {props.anecdotes[mostVotes].text}
        </div>
        <div>
          has {props.anecdotes[mostVotes].votes} votes
        </div>
      </div>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const anecdotes = [
  { text: 'If it hurts, do it more often', votes: 0 },
  { text: 'Adding manpower to a late software project makes it later!', votes: 0 },
  { text: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', votes: 0 },
  { text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes: 0 },
  { text: 'Premature optimization is the root of all evil.', votes: 0 },
  { text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', votes: 0 }
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)