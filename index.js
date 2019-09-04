const server = require('./api/server')


const port = 8000
server.listen(8000, () => console.log(`Server listening on port ${port}`))