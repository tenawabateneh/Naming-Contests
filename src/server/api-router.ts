import express from "express"
import cors from "cors"

import { connectClient } from "./db"

const router = express.Router()
router.use(cors())

// Create mock API endpoint
router.get("/contests", async (req, res) => {
    const client = await connectClient();

    const contests = await client
        .collection("contests")
        .find()
        .project({
            id: 1,
            categoryName: 1,
            contestName: 1,
            description: 1,
            _id: 0,
        })
        .toArray();
    res.send({ contests })
})

// Getting a single contest by ID
router.get("/contest/:contestId", async (req, res) => {
    const client = await connectClient();

    const contest = await client
        .collection("contests")
        .findOne({ id: req.params.contestId })

    res.send({ contest })
})

export default router