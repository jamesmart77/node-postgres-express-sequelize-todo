// This will be our application entry. We'll setup our server here.
const http = require('http');

// The express app we just created
const app = require('../express');

const port = parseInt(process.env.PORT, 10) || 8000;
// app.set('port', port);

// start server
if (process.env.NODE_ENV === 'production') {
    app.listen(port, () => console.log(`Listening on port ${port}`));  
} else {
    const server = http.createServer(app);
    server.listen(port);
}
