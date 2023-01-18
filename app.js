const http = require('http');
const axios = require('axios');
const cors = require('cors');

const app = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/webhook') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            axios.post('https://flooty-coins.com/api/api-v2.php', JSON.parse(body))
                .then(response => {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(response.data));
                })
                .catch(error => {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(error));
                });
        });
    }
});
app.use(cors());
server.listen(8443);
console.log('Server running on port 8443');
