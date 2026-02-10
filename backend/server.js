const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 5000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello from the backend!')
})

app.get('/api/data', (req, res) => {
    res.json({ message: 'Data from the API endpoint!' })
})

app.listen(PORT,  () => {
    console.log(`Backend server running on http://localhost:${PORT}`)
})
