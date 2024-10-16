const env = process.env;

export const PORT = env.PORT ?? "3030";
export const HOST = env.HOST ?? "127.0.0.1";
export const SERVER_URL = `http://${HOST}:${PORT}`;

export const MONGODB_URI = env.MONGODB_URI ?? "mongodb://localhost:27017"
export const DATABASE_NAME = env.DATABASE_NAME ?? "local"

// Connecting to the mongoDB


export default {
    name: "Aberham",
    PORT,
    HOST,
    SERVER_URL

}