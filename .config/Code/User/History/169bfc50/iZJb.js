// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput) === false) {
        return "Is a Number";
    } else {
        return "Not a Number";
    }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus"); 
    let h2 = document.getElementById("launchStatus");

    if (cargoLevel > 10000 && fuelLevel < 10000) {
        list.style.visibility= "visible";
        h2.style.color = "rgb(199, 37, 78)"; /*RED*/
        h2.innerHTML = "Shuttle Not Ready for Launch";       
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML = "Fuel level too low for launch";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
     // Fuel level is too low for launch and Cargo level is low enough
    } else if (fuelLevel < 10000 && cargoLevel <= 10000) {
        list.style.visibility = "visible";
        h2.style.color = "rgb(199, 37, 78)"; /*RED*/
        h2.innerHTML = "Shuttle Not Ready for Launch";
        fuelStatus.innerHTML = "Fuel level too low for launch";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        cargoStatus.innerHTML = "Cargo mass low enough for launch";

    // Cargo is too heavy for launch and fuel is high enough
    } else if (cargoLevel > 10000 && fuelLevel >= 10000) {
        list.style.visibility = "visible";
        h2.style.color = "rgb(199, 37, 78)"; /*RED*/
        h2.innerHTML = "Shuttle Not Ready for Launch";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        
    // Shuttle ready for launch with enough fuel and cargo
    } else if (cargoLevel <= 10000 && fuelLevel >= 10000) {
        list.style.visibility = "visible";
        h2.style.color = "rgb(65, 159, 106)"; /*GREEN*/
        h2.innerHTML = "Shuttle is Ready for Launch";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
    } 
}
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
