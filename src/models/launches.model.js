const launches = new Map();

const launch = {
    flightNumber: 100,
    mission: "XYZ",
    rocket: "xyz",
    launchDate: new Date("Jaunuary 28, 2034"),
    destination: 'xyz',
    customer: ['nasa', 'self'],
    upcoming: true,
    success: true,
};

launches.set(launch.flightNumber, launch);

module.exports = {
    launches,
}