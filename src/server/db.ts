import { MongoClient } from "mongodb"
import { MONGODB_URI, DATABASE_NAME } from "./config"

let connectedUser;

// should be an async
export const connectClient = async () => {
    // First check if there is a connected client user exist or not
    if (connectedUser)
        return connectedUser.db(DATABASE_NAME)

    const client = new MongoClient(MONGODB_URI)
    await client.connect()
    await client.db(DATABASE_NAME).command({ ping: 1 })
    console.log("MongoDB Connected Successfully")

    connectedUser = client;

    return connectedUser.db(DATABASE_NAME)
}
export const stopClient = async () => {
    await connectedUser?.close()
}       
