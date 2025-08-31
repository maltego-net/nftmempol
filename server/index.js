const express = require('express')
const nftRoute = require('./routes/nft')
const app = express()

app.use('/api/nft', nftRoute)

app.listen(5000, () => console.log('Server on http://localhost:5000'))
