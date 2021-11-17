import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = 4000
const dbURI = 'mongodb://localhost/art-galleries-api'

app.use((req, _res, next) => {
  console.log(`🚨 Incoming request: ${req.method} - ${req.url}`)
  next()
})

app.listen(port, () => console.log(`🚀 Express is up and running on port ${port}`))

const startServer = async() => {
  try {
    await mongoose.connect(dbURI, { useNewUrlParser: true, 	useCreateIndex: true, useUnifiedTopology: true })
    console.log('🚀  Database has connected successfully')
  } catch (err) {
    console.log('something went wrong starting the app')
    console.log(err)
  }
}
startServer()
// blah blah