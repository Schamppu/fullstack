import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => setGood(good + 1)
  const addNeutral = () => setNeutral(neutral + 1)
  const addBad = () => setBad(bad + 1)

  return (
    <div>
      <div><h1>give feedback</h1></div>

      <Button text={"good"} handleClick={addGood}/>
      <Button text={"neutral"} handleClick={addNeutral}/>
      <Button text={"bad"} handleClick={addBad}/>

      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

const Statistics = (props) => {

  const total = props.good + props.neutral + props.bad
  const average = (props.good - props.bad) / total
  const positive = (props.good / total) * 100

  return (
    <>
      { total > 0 &&
      <>
        <div><h1>statistics</h1></div>
        <table>
          <tbody>
            <StatisticLine text={"good"} value={props.good} />
            <StatisticLine text={"neutral"} value={props.neutral} />
            <StatisticLine text={"bad"} value={props.bad} />
            <StatisticLine text={"all"} value={total} />
            <StatisticLine text={"average"} value={average} />
            <tr>
              <td>positive:</td>
              <td>{positive}%</td>
            </tr>
          </tbody>
        </table>
      </>
      }
      { total == 0 &&
      <>
        <div>No feedback given</div>
      </>
      }
    </>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}:</td>
      <td>{props.value}</td>
    </tr>

  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))