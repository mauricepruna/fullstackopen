### Exercises 1.1.-1.2.

The exercises are submitted via GitHub, and by marking the exercises as done in the "my submissions" tab of the [submission application](https://studies.cs.helsinki.fi/stats/courses/fullstackopen).

The exercises are submitted **one part at a time** . When you have submitted the exercises for a part of the course you can no longer submit undone exercises for the same part.

Note that in this part, there are [more exercises](https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps#exercises-1-6-1-14) besides those found below. _Do not submit your work_ until you have completed all of the exercises you want to submit for the part.

You may submit all the exercises of this course into the same repository, or use multiple repositories. If you submit exercises of different parts into the same repository, please use a sensible naming scheme for the directories.

One very functional file structure for the submission repository is as follows:

```text
part0
part1
  courseinfo
  unicafe
  anecdotes
part2
  phonebook
  countriescopy
```

See this [example submission repository](https://github.com/fullstack-hy2020/example-submission-repository)!

For each part of the course, there is a directory, which further branches into directories containing a series of exercises, like "unicafe" for part 1.

Most of the exercises of the course build a larger application, eg. courseinfo, unicafe and anecdotes in this part, bit by bit. It is enough to submit the completed application. You can make a commit after each exercise, but that is not compulsory. For example the course info app is built in exercises 1.1.-1.5. It is just the end result after 1.5 that you need to submit!

For each web application for a series of exercises, it is recommended to submit all files relating to that application, except for the directory _node_modules_ .

#### 1.1: course information, step1

_The application that we will start working on in this exercise will be further developed in a few of the following exercises. In this and other upcoming exercise sets in this course, it is enough to only submit the final state of the application. If desired, you may also create a commit for each exercise of the series, but this is entirely optional._

Use Vite to initialize a new application. Modify _main.jsx_ to match the following

```js
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)copy
```

and _App.jsx_ to match the following

```js
const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  );
};

export default Appcopy;
```

and remove extra files App.css and index.css, and the directory assets.

Unfortunately, the entire application is in the same component. Refactor the code so that it consists of three new components: _Header_ , _Content_ , and _Total_ . All data still resides in the _App_ component, which passes the necessary data to each component using _props_ . _Header_ takes care of rendering the name of the course, _Content_ renders the parts and their number of exercises and _Total_ renders the total number of exercises.

Define the new components in the file _App.jsx_ .

The _App_ component's body will approximately be as follows:

```js
const App = () => {
  // const-definitions

  return (
    <div>
      <Header course={course} />
      <Content ... />
      <Total ... />
    </div>
  )
}copy
```

**WARNING** Don't try to program all the components concurrently, because that will almost certainly break down the whole app. Proceed in small steps, first make e.g. the component _Header_ and only when it works for sure, you could proceed to the next component.

Careful, small-step progress may seem slow, but it is actually _by far the fastest_ way to progress. Famous software developer Robert "Uncle Bob" Martin has stated

> _"The only way to go fast, is to go well"_

that is, according to Martin, careful progress with small steps is even the only way to be fast.

#### 1.2: course information, step2

Refactor the _Content_ component so that it does not render any names of parts or their number of exercises by itself. Instead, it only renders three _Part_ components of which each renders the name and number of exercises of one part.

```js
const Content = ... {
  return (
    <div>
      <Part .../>
      <Part .../>
      <Part .../>
    </div>
  )
}copy
```

Our application passes on information in quite a primitive way at the moment, since it is based on individual variables. We shall fix that in [part 2](https://fullstackopen.com/en/part2), but before that, let's go to part1b to learn about JavaScript

### Exercises 1.3.-1.5.

_We continue building the application that we started working on in the previous exercises. You can write the code into the same project since we are only interested in the final state of the submitted application._

**Pro-tip:** you may run into issues when it comes to the structure of the _props_ that components receive. A good way to make things more clear is by printing the props to the console, e.g. as follows:

```js
const Header = (props) => {
  console.log(props)  return <h1>{props.course}</h1>
}copy
```

If and _when_ you encounter an error message

> _Objects are not valid as a React child_

keep in mind the things told [here](https://fullstackopen.com/en/part1/introduction_to_react#do-not-render-objects).

#### 1.3: course information step3

Let's move forward to using objects in our application. Modify the variable definitions of the _App_ component as follows and also refactor the application so that it still works:

```js
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      ...
    </div>
  )
}copy
```

#### 1.4: course information step4

And then place the objects into an array. Modify the variable definitions of _App_ into the following form and modify the other parts of the application accordingly:

```js
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      ...
    </div>
  )
}copy
```

**NB** at this point _you can assume that there are always three items_ , so there is no need to go through the arrays using loops. We will come back to the topic of rendering components based on items in arrays with a more thorough exploration in the [next part of the course](https://fullstackopen.com/en/part2).

However, do not pass different objects as separate props from the _App_ component to the components _Content_ and _Total_ . Instead, pass them directly as an array:

```js
const App = () => {
  // const definitions

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}copy
```

#### 1.5: course information step5

Let's take the changes one step further. Change the course and its parts into a single JavaScript object. Fix everything that breaks.

```js
const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return <div>...</div>;
};
```

### Exercises 1.6.-1.14.

Submit your solutions to the exercises by first pushing your code to GitHub and then marking the completed exercises into the "my submissions" tab of the [submission application](https://studies.cs.helsinki.fi/stats/courses/fullstackopen).

Remember, submit **all** the exercises of one part **in a single submission** . Once you have submitted your solutions for one part, **you cannot submit more exercises to that part anymore** .

_Some of the exercises work on the same application. In these cases, it is sufficient to submit just the final version of the application. If you wish, you can make a commit after every finished exercise, but it is not mandatory._

In some situations you may also have to run the command below from the root of the project:

```bash
rm -rf node_modules/ && npm icopy
```

If and _when_ you encounter an error message

> _Objects are not valid as a React child_

keep in mind the things told [here](https://fullstackopen.com/en/part1/introduction_to_react#do-not-render-objects).

#### 1.6: unicafe step1

Like most companies, the student restaurant of the University of Helsinki [Unicafe](https://www.unicafe.fi/) collects feedback from its customers. Your task is to implement a web application for collecting customer feedback. There are only three options for feedback: _good_ , _neutral_ , and _bad_ .

The application must display the total number of collected feedback for each category. Your final application could look like this:

![screenshot of feedback options](https://fullstackopen.com/static/d4fe767d6d8eb46f1dd21334f5f9e46e/5a190/13e.png)

Note that your application needs to work only during a single browser session. Once you refresh the page, the collected feedback is allowed to disappear.

It is advisable to use the same structure that is used in the material and previous exercise. File _main.jsx_ is as follows:

```js
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)copy
```

You can use the code below as a starting point for the _App.jsx_ file:

```js
import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return <div>code here</div>;
};

export default Appcopy;
```

#### 1.7: unicafe step2

Expand your application so that it shows more statistics about the gathered feedback: the total number of collected feedback, the average score (good: 1, neutral: 0, bad: -1) and the percentage of positive feedback.

![average and percentage positive screenshot feedback](https://fullstackopen.com/static/0a5d15ae9f055a15cb469b9c9223df41/5a190/14e.png)

#### 1.8: unicafe step3

Refactor your application so that displaying the statistics is extracted into its own _Statistics_ component. The state of the application should remain in the _App_ root component.

Remember that components should not be defined inside other components:

```js
// a proper place to define a component
const Statistics = (props) => {
  // ...
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // do not define a component within another component
  const Statistics = (props) => {
    // ...
  }

  return (
    // ...
  )
}copy
```

#### 1.9: unicafe step4

Change your application to display statistics only once feedback has been gathered.

![no feedback given text screenshot](https://fullstackopen.com/static/b453d7533ae85dcaf3eccf342a353c58/5a190/15e.png)

#### 1.10: unicafe step5

Let's continue refactoring the application. Extract the following two components:

- _Button_ Handles the functionality of each feedback submission button.
- _StatisticLine_ for displaying a single statistic, e.g. the average score.

To be clear: the _StatisticLine_ component always displays a single statistic, meaning that the application uses multiple components for rendering all of the statistics:

```js
const Statistics = (props) => {
  /// ...
  return(
    <div>
      <StatisticLine text="good" value ={...} />
      <StatisticLine text="neutral" value ={...} />
      <StatisticLine text="bad" value ={...} />
      // ...
    </div>
  )
}copy
```

The application's state should still be kept in the root _App_ component.

#### 1.11\*: unicafe step6

Display the statistics in an HTML [table](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics), so that your application looks roughly like this:

![screenshot of statistics table](https://fullstackopen.com/static/a74acccc17aafb02b3801ffa1fcc0fdc/5a190/16e.png)

Remember to keep your console open at all times. If you see this warning in your console:

![console warning](https://fullstackopen.com/static/d6f948307449c2673f28f1077ef4d789/5a190/17a.png)

Then perform the necessary actions to make the warning disappear. Try pasting the error message into a search engine if you get stuck.

*Typical source of an error *Unchecked runtime.lastError: Could not establish connection. Receiving end does not exist.* is Chrome extension. Try going to *chrome://extensions/_ and try disabling them one by one and refreshing React app page; the error should eventually disappear._

**Make sure that from now on you don't see any warnings in your console!**

#### 1.12\*: anecdotes step1

The world of software engineering is filled with [anecdotes](http://www.comp.nus.edu.sg/~damithch/pages/SE-quotes.htm) that distill timeless truths from our field into short one-liners.

Expand the following application by adding a button that can be clicked to display a _random_ anecdote from the field of software engineering:

```js
import { useState } from "react";

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

  return <div>{anecdotes[selected]}</div>;
};

export default Appcopy;
```

Content of the file _main.jsx_ is the same as in previous exercises.

Find out how to generate random numbers in JavaScript, eg. via a search engine or on [Mozilla Developer Network](https://developer.mozilla.org/). Remember that you can test generating random numbers e.g. straight in the console of your browser.

Your finished application could look something like this:

![random anecdote with next button](https://fullstackopen.com/static/8577fa00fc4d946e2322de9b2707c89c/5a190/18a.png)

#### 1.13\*: anecdotes step2

Expand your application so that you can vote for the displayed anecdote.

![anecdote app with votes button added](https://fullstackopen.com/static/06f95cb43a18bd6429174200a8d17cff/5a190/19a.png)

**NB** store the votes of each anecdote into an array or object in the component's state. Remember that the correct way of updating state stored in complex data structures like objects and arrays is to make a copy of the state.

You can create a copy of an object like this:

```js
const points = { 0: 1, 1: 3, 2: 4, 3: 2 }

const copy = { ...points }
// increment the property 2 value by one
copy[2] += 1     copy
```

OR a copy of an array like this:

```js
const points = [1, 4, 6, 3]

const copy = [...points]
// increment the value in position 2 by one
copy[2] += 1     copy
```

Using an array might be the simpler choice in this case. Searching the Internet will provide you with lots of hints on how to [create a zero-filled array of the desired length](https://stackoverflow.com/questions/20222501/how-to-create-a-zero-filled-javascript-array-of-arbitrary-length/22209781).

#### 1.14\*: anecdotes step3

Now implement the final version of the application that displays the anecdote with the largest number of votes:

![anecdote with largest number of votes](https://fullstackopen.com/static/3e8638efbbbbcabac7bb79466ab3a5f6/5a190/20a.png)

If multiple anecdotes are tied for first place it is sufficient to just show one of them.

This was the last exercise for this part of the course and it's time to push your code to GitHub and mark all of your finished exercises to the "my submissions" tab of the [submission application](https://studies.cs.helsinki.fi/stats/courses/fullstackopen).
