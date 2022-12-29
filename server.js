const http = require('http');

const app = require('./src/app');

const { loadPlanetsData } = require('./src/models/planets.model');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
    await loadPlanetsData();

    server.listen(PORT, () => {
        console.log(`Listening to port ${PORT}`);
    });
}

startServer();
