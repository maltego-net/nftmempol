const express = require('express')
const router  = express.Router()
const data    = require('../data/nft.json') // массив объектов { id, name, image }

router.get('/:id', (req, res) => {
  const nft = data.find(item => item.id === req.params.id)
  if (!nft) return res.status(404).json({ error: 'NFT not found' })
  res.json(nft)
})

module.exports = router
