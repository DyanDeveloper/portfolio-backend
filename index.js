// Define
const express = require("express")
const cors = require("cors")

// App
const app = express()
const port = 3000

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json({
    type: "*/*"
}))

app.use(cors());

// Gets
app.get("/test", (req, res) => {
    res.send("Hello, I'm working like a good app")
})

app.listen(port, () => {
    console.log(`Working in port http://localhost:${port}`)
})