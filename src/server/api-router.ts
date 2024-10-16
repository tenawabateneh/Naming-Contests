import express from "express"
import cors from "cors"

import testData from '../local.contests.json'

const router = express.Router()
router.use(cors())

// Create mock API endpoint
router.get("/contests", (req, res) => {
    res.send({ contests: testData })
})

export default router