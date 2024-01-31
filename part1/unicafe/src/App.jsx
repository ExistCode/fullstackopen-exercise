import { useState } from "react";
const StatisticLine = (props) => {
  return (
    <p>
      {props.text} {props.value}
    </p>
  );
};
const Statistics = (props) => {
  const average = (props.good * 1 + props.bad * -1) / props.all;
  const positive = (props.good / props.all) * 100;
  console.log(average);
  console.log(positive);

  if (!isNaN(average) && !isNaN(positive)) {
    return (
      <div>
        <h1>statistics</h1>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={props.all} />
        <StatisticLine text="average" value={average} />

        <StatisticLine text="positive" value={positive} />
      </div>
    );
  }
  return <div>No feedback Given</div>;

  // return
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
    setAll(all + 1);
  };
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };
  const handleBadClick = () => {
    setBad(bad + 1);
    setAll(all + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  );
};

export default App;
