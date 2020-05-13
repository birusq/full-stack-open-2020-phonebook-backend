require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const Person = require('./models/person')

const app = express()

morgan.token('body', function (req, res) { return JSON.stringify(req.body) })
const logger = morgan(':method :url :status :res[content-length] - :response-time ms :body')

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(logger)

app.get('/api/persons', (req, res) => {
	Person.find({}).then(persons => {
		persons = persons.map(person => person.toJSON())
		res.json(persons)
	});
})

app.get('/api/persons/:id', (req, res, next) => {
	Person.findById(req.params.id)
		.then(person => {
			if (person) {
				res.json(person.toJSON())
			}
			else {
				res.status(404).end()
			}
		})
		.catch(err => next(err))
})

app.post('/api/persons', (req, res, next) => {
	const body = req.body

	const person = new Person({
		name: body.name,
		number: body.number
	})

	person.save().then(savedPerson => {
		res.json(savedPerson.toJSON())
	})
		.catch(err => next(err))
})

app.delete('/api/persons/:id', (req, res, next) => {
	Person.findByIdAndDelete(req.params.id)
		.then(deletedPerson => {
			res.status(204).end()
		})
		.catch(err => next(err))
})

app.put('/api/persons/:id', (req, res, next) => {
	const body = req.body

	const person = {
		name: body.name,
		number: body.number
	}

	Person.findByIdAndUpdate(req.params.id, person, { new: true })
		.then(updatedPerson => {
			res.json(updatedPerson.toJSON())
		})
		.catch(err => next(err))
})


app.get('/info', (req, res, next) => {
	Person.countDocuments({})
		.then(count => {
			let res_html = `<p>Phonebook has info for ${count} people</p>` +
				`<p>${new Date().toString()}</p>`
			res.send(res_html)
		})
		.catch(err => next(err))
})

const unknownEndpoint = (request, response) => {
	response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
	console.log(error.message)

	if (error.name === 'CastError') {
		return response.status(400).send({ error: 'malformatted id' })
	}
	else if (error.name === 'ValidationError') {
		return response.status(400).json({ error: error.message })
	}
}

app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})