require("dotenv").config()

const dbConnect = require("./db/dbConnect")
const breweriesRouter = require("./routes/breweries")
const cors = require("cors")
const express = require("express")
const app = express() 
const port = process.env.PORT || 3000

app.use(cors({
  origin: "https://rsm.aidanjrauscher.com"
}
))

app.use("/api/breweries", breweriesRouter)

const startServer = async ()=>{
  try{
    await dbConnect(process.env.MONGODB_URL)
    app.listen(port, ()=>{
      console.log(`Server is listening on port ${port}`)
    })
  }
  catch(error){
    console.log(error)
  }
}

startServer()