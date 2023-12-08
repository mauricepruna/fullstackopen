import { useState } from "react";
const Display = ({ message }) => {
  return <h2>{message}</h2>;
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};
const Statistics = ({ goodValue, neutralValue, badValue }) => {
  const total = goodValue + neutralValue + badValue;
  if (total !== 0) {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={goodValue} />
          <StatisticLine text="neutral" value={neutralValue} />
          <StatisticLine text="bad" value={badValue} />
          <StatisticLine text="all" value={total} />
          <StatisticLine
            text="average"
            value={(goodValue - badValue) / total}
          />
          <StatisticLine
            text="positive"
            value={`${(goodValue / total) * 100} %`}
          />
        </tbody>
      </table>
    );
  } else {
    return (
      <table>
        <tbody>
          <StatisticLine text="No feedback given" value={""} />
        </tbody>
      </table>
    );
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const setToValue = (type, newValue) => {
    console.log(` ${type} value now`, newValue);
    if (type === "good") {
      console.log(` ${type} value now`, newValue);
      setGood(newValue);
    } else if (type === "neutral") {
      console.log(` ${type} value now`, newValue);
      setNeutral(newValue);
    } else if (type === "bad") {
      console.log(` ${type} value now`, newValue);
      setBad(newValue);
    } else {
      console.log("wrong type");
    }
  };
  return (
    <div>
      <Display message={"give feedback"} />
      <Button handleClick={() => setToValue("good", good + 1)} text="good" />
      <Button
        handleClick={() => setToValue("neutral", neutral + 1)}
        text="neutral"
      />
      <Button handleClick={() => setToValue("bad", bad + 1)} text="bad" />
      <Display message={"statistics"} />
      <Statistics goodValue={good} neutralValue={neutral} badValue={bad} />
    </div>
  );
};

export default App;
