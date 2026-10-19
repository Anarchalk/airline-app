import express from 'express'

const app = express()
const port = Number(process.env.PORT ?? 3101)

app.use(express.json())

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', service: 'airline-app-server' })
})

app.get('/api/flights', (_request, response) => {
  response.json([
    {
      id: 'flight-001',
      airline: 'Airline',
      origin: 'JFK-TEST',
      destination: 'LIS',
      departure: '09:20',
      arrival: '21:15',
      duration: '7h 55m',
      price: 489,
      currency: 'USD',
    },
    {
      id: 'flight-002',
      airline: 'Airline',
      origin: 'TEST',
      destination: 'LIS',
      departure: '18:40',
      arrival: '06:30',
      duration: '7h 50m',
      price: 532,
      currency: 'USD',
    },
  ])
})

app.listen(port, () => {
  console.log(`Airline API listening on http://localhost:${port}`)
})
