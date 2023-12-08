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
