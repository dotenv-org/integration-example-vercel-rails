require('dotenv-vault-core').config()
console.log(process.env) // for debugging purposes. remove when ready

const PORT = process.env.PORT || 5000
const http = require('http')
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello ${process.env.TEST}`)
});

server.listen(PORT, () => {
  console.log(`Server running on port:${PORT}/`);
});
  
