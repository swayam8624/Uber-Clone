const http = require('http');
const app = require('./app');
const PORT = process.env.PORT || 3000

const server = http.createServer(app)

const aa = 2323

server.listen(PORT, () => console.log(`Server listening to port ${PORT}`));

