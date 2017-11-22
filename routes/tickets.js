const express = require('express')

const router = express.Router()

router.get('/tickets', (req, res) => {
  res.json({
    adults: 35,
    consession: 23,
    children: 15
  })
})

module.exports = router