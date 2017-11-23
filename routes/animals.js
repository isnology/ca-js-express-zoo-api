const express = require('express')
const Animal = require('../src/models/animal')

const router = express.Router()

router.get('/animals', (req, res) => {
  const animals = Animal.all()
    res.json(animals)
})

router.get('/animals/:id', (req, res) => {
  const id = req.params['id']     // or req.params.id
  const animal = Animal.find(id)
  if (animal) {
    res.json(animal)
  }
  else {
    res.status(404).json({ error: `The animal with id '${id}' was not found` })
  }
})

router.post('/animals', (req, res) => {
  const attributes = req.body
  const newAnimal = Animal.create(attributes)
  res.status(201).json(newAnimal)
})

router.put('/animals/:id', (req, res) => {
  const id = req.params.id
  const attributes = req.body
  const animal = Animal.update(id, attributes)
  if (animal)
    res.json(animal)
  else
    res.status(404).json({ error: `The animal with id '${id}' was not found` })
})

router.patch('/animals/:id', (req, res) => {
  const id = req.params.id
  const attributes = req.body
  const animal = Animal.update(id, attributes)
  if (animal)
    res.json(animal)
  else
    res.status(404).json({ error: `The animal with id '${id}' was not found` })
})

router.delete('/animals/:id', (req, res) => {
  const id = req.params.id
  const animal = Animal.destroy(id)
  if (animal)
    res.json(animal)
  else
    res.status(404).json({ error: `The animal with id '${id}' was not found` })
})

module.exports = router