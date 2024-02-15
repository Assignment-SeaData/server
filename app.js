import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors'
import { usersRoute } from './routes/users.mjs';
import { errorHandler } from './middleware/errorHandler.mjs';

const port = process.env.SERVER_PORT || 4000
const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use('', usersRoute)

const server = app.listen(port);

server.on('listening', () => 'server listening on port ' + port)

app.use(errorHandler)