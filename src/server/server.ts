import express from 'express'
import os from "os"

import configData from './config'
console.log(configData);

import apiRouter from './api-router'

const server = express()

// Adding a middleware layer
server.use(express.static("dist"))

server.set("view engine", "ejs")

server.use("/api", apiRouter)

server.use('/', (req, res) => {
    res.render("index", {
        initialContent: "<h2>Loading ... </h2>",
    })
})


server.listen(configData.PORT, configData.HOST, () => {
    console.info(`Express server is Listening at ${configData.SERVER_URL}`, `Free Memory: ${os.freemem() / 1024 / 1024}`)
})

