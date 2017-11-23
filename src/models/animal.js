let animals = [
  {
    id: 1,
    name: 'Meercat',
    count: 27,
  },
  {
    id: 2,
    name: 'Rhinoceros',
    count: 4
  },
  {
    id: 3,
    name: 'Giraffe',
    count: 8
  },
  {
    id: 4,
    name: 'Elephant',
    count: 5
  },
  {
    id: 5,
    name: 'Hippo',
    count: 12
  }
]

let nextID = 6

// read

function all() {
  return animals
}

function find(id) {
  // ensure 'id 'is an integer (in base 10)
  id = parseInt(id, 10)
  let foundAnimal = null
  animals.forEach((animal) => {
    if (animal.id === id) {
      foundAnimal = animal
    }
  })
  return foundAnimal
}

// create

function create(attributes) {
  // Create new animal record, copy attributes across
  const newAnimal = Object.assign({}, attributes, {
    id: nextID
  })
  nextID += 1

  animals.push(newAnimal)

  return newAnimal
}

// Update

function update(id, attributes) {

  let animal = find(id)
  if (!animal) {
    return null
  }

  const updatedAnimal = Object.assign({}, animal, attributes, {
    id: id
  })
  let x = animals.indexOf(animal)
  animals[x] = updatedAnimal
  return updatedAnimal
}

// Destroy

function destroy(id) {
  let animal = find(id)
  if (!animal)
    return null
  let x = animals.indexOf(animal)
  animals.splice(x, 1)
  return animal
}

module.exports = {
  all,
  find,
  create,
  destroy,
  update
}