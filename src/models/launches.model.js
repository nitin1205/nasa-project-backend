const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: "XYZ",
    rocket: "xyz",
    launchDate: new Date("January 28 2034"),
    destination: 'xyz',
    customer: ['nasa', 'self'],
    upcoming: true,
    success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
    return Array.from(launches.values());
}

function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(
        latestFlightNumber,
        Object.assign(
            launch, {
            success: true,
            upcoming: true,
            customer: ['nasa', 'self'],
            flightNumber: latestFlightNumber,
        })
    );
}



module.exports = {
    getAllLaunches,
    addNewLaunch
};