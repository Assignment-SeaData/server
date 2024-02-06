import express from 'express'

const port = process.env.SERVER_PORT || 4000
const app = express();
const server = app.listen(port);
server.on('listening', () => console.log(`server listening on port ${port}`))