const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
app.get('/post', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Emil',
      body: 'body no1',
    },
    {
      id: 2,
      name: 'Maria',
      body: 'body no2',
    },
    {
      id: 3,
      name: 'Andrei',
      body: 'body no3',
    },
    {
      id: 4,
      name: 'Marius',
      body: 'body no4',
    },
  ])
})

app.listen(8000, () => {
  console.log('server started at port 8000')
})
