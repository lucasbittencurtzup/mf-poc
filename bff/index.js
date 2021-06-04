const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())

app.get('/modules', (req, res) => {
    const modules = [
        { id: 1, moduleName: 'mf-example', url: 'http://localhost:5001/assets/index.js' },
        { id: 2, moduleName: 'mf-example-2', url: 'http://localhost:5002/assets/index.js' }
    ]
    res.send(modules)
})

app.listen(4000, () => { 
    console.log('Listening on port 4000')
})