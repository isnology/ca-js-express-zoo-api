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
  }
]

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

module.exports = {
  all,
  find
}