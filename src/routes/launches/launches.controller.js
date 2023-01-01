const { getAllLaunches, addNewLaunch, existsLaunchWithId, abortLaunchById } = require('../../models/launches.model');

function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
    const launch = req.body;

    if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.destination) {
        return res.status(400).json({error: 'All fields are required'});
    }

    launch.launchDate = new Date(launch.launchDate);

    if (isNaN(launch.launchDate)){
        return res.status(400).json({error: 'Not valid date'});
    }

    addNewLaunch(launch);
    return res.status(201).json(launch);
}

function httpAbortLaunch(req, res) {
    const launchId = Number(req.params.id);

    if (!existsLaunchWithId(launchId)) {
        return res.status(400).json({error: 'launch does not exists'})
    }

    const aborted = abortLaunchById(launchId);
    
    return res.status(400).json(aborted);
} 

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch
}