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

app.get("*", (req, res)=>{
  res.sendFile(path.join(__dirname, "../client/index.html"))
})

const startServer = async ()=>{
  try{
    await dbConnect(process.env.MONGODB_URL)
    app.listen(port, ()=>{
      console.log(`Server is listening on http://localhost:${port}`)
    })
  }
  catch(error){
    console.log(error)
  }
}

startServer()