import { useState } from "react";
const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};
const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};
const Display_Message = ({ message }) => {
  return <div>{message}</div>;
};
const Display_Title = ({ title }) => {
  return <h2>{title}</h2>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  });
  const setToSelect = (newValue) => {
    console.log(` ${selected} value now`, newValue);
    setSelected(newValue);
  };
  const setToPoints = (selected) => {
    const newPoints = { ...points };
    newPoints[selected] += 1;
    console.log(`${JSON.stringify(newPoints)} value now`);
    setPoints(newPoints);
  };
  const max_key = Object.keys(points).reduce((a, b) =>
    points[a] >= points[b] ? a : b
  );

  return (
    <div>
      <Display_Title title={"Anecdote of the day"} />
      <Display_Message message={anecdotes[selected]} />
      <Display_Message message={`has ${points[selected]} votes`} />
      <Button handleClick={() => setToPoints(selected)} text="vote" />
      <Button
        handleClick={() => setToSelect(getRandomInt(8))}
        text="next anecdote"
      />
      <Display_Title title={"Anecdote with most votes"} />
      <Display_Message message={anecdotes[max_key]} />
      <Display_Message message={`has ${points[max_key]} votes`} />
    </div>
  );
};

export default App;
