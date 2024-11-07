import express from 'express'
import os from "os"

import configData from './config'
console.log(configData);

import apiRouter from './api-router'
import ServerSideRendering from './render';

const server = express()

// Adding a middleware layer
server.use(express.static("dist"))

server.set("view engine", "ejs")

server.use("/api", apiRouter)

server.get(['/', "/contest/:contestId"], async (req, res) => {

    const { initionalMarkup, initionalData } = await ServerSideRendering(req)

    res.render("index", {
        initionalMarkup,
        initionalData,
    })
})


server.listen(configData.PORT, configData.HOST, () => {
    console.info(`Express server is Listening at ${configData.SERVER_URL}`, `Free Memory: ${os.freemem() / 1024 / 1024}`)
})

