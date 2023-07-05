import http from "http"
import express from "express"
import translate from "translate-google"

const PORT = process.env.PORT || 5000
const app = express()
const server = http.createServer(app)

app.use(express.static("public"))
app.use(express.json())

app.post("/translate", async (req, res) => {
    const { input } = req.body
    try {
        const result = await translate(input, { from: "fr", to: "ig"})
        res.status(200).send(result)

    } catch(e) {
        console.log(e)
        res.status(500).send("An error occurred")
    }
})


server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})