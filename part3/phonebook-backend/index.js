const express = require("express");
const morgan = require("morgan");
const cors = require('cors')

const app = express();

morgan.token('body', function (req, res) { 
  return req.method=='POST' ? JSON.stringify(req.body) : " "
  
})

app.use(express.json());

// app.use(morgan("tiny")); //:method :url :status :res[content-length] - :response-time ms
app.use(morgan(":method :url :status :res[content-length] - :response-time ms :body"));

app.use(cors());
app.use(express.static('dist'))
let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];
app.get("/info", (request, response) => {
  response.send(`<p>Phonebook has info for ${persons.length} people</p>
  <p>${new Date()}</p>
  `);
});
app.get("/api/persons", (request, response) => {
  response.json(persons);
});
app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);
  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);
  response.status(204).end();
});

app.post("/api/persons", (request, response) => {
  const body = request.body;
  if (!body.name) {
    return response.status(400).json({
      error: "name missing",
    });
  }
  if (!body.number) {
    return response.status(400).json({
      error: "number missing",
    });
  }
  if (persons.find((person) => person.name === body.name)) {
    return response.status(400).json({ error: "name must be unique" });
  }

  const id =
    persons.length > 0
      ? Math.floor(
          Math.random() * 1000000 + Math.max(...persons.map((p) => p.id))
        )
      : 1;

  newPerson = {
    id: id,
    name: body.name,
    number: body.number,
  };
  persons = persons.concat(newPerson);
  response.json(newPerson);
});

app.put("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const body = request.body;
  if (!body.name) {
    return response.status(400).json({
      error: "name missing",
    });
  }
  if (!body.number) {
    return response.status(400).json({
      error: "number missing",
    });
  }  

  updatedPerson = {
    id: id,
    name: body.name,
    number: body.number,
  };

  persons = persons.filter((person) => person.id !== id);
  persons = persons.concat(updatedPerson);
  response.json(updatedPerson);
});


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
