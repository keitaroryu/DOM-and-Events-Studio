// Write your JavaScript code here.
//Event handler to ensure JS runs after all elements load.
window.addEventListener("load", function() {

    //Initializing Variables and Initial Conditions
    let takeOffButton = document.getElementById("takeoff");
    let landingButton = document.getElementById("landing");
    let missionAbortButton = document.getElementById("missionAbort");

    let upBotton = document.getElementById("up");
    let downBotton = document.getElementById("down");
    let rightBotton = document.getElementById("right");
    let leftBotton = document.getElementById("left");

    let spaceShuttleHeightMiles = null;
    let flightStatus =  document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    let rocket = document.getElementById("rocket");

    rocket.style.position = 'relative';
    shuttleBackground.backgroundSize = 'cover';
    let rocketHorizontal = 0;
    let rocketVertical = 0;
    
    //Programming Buttons
    takeOffButton.addEventListener("click", function(){
        let isRocketReady = confirm("Confirm that the rocket is ready for take off.");

        if (isRocketReady) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeightMiles = 10000;
            spaceShuttleHeight.innerHTML = spaceShuttleHeightMiles;
        };
    });

    landingButton.addEventListener("click", function(){
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeightMiles = 0;
        spaceShuttleHeight.innerHTML = spaceShuttleHeightMiles;
        rocketHorizontal = 0;
        rocketVertical = 0;
        rocket.style.top = `${rocketVertical}px`;
        rocket.style.right = `${rocketHorizontal}px`;
    });

    missionAbortButton.addEventListener("click", function(){
        let abortMissionConfirm = confirm("Confirm that you want to abort the mission.");

        if (abortMissionConfirm) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeightMiles = 0;
            spaceShuttleHeight.innerHTML = spaceShuttleHeightMiles;
            rocketHorizontal = 0;
            rocketVertical = 0;
            rocket.style.top = `${rocketVertical}px`;
            rocket.style.right = `${rocketHorizontal}px`;
        };
    });

    upBotton.addEventListener("click", function(){
        if (rocketVertical > -10){
            rocketVertical -= 10;
            rocket.style.top = `${rocketVertical}px`;
        };
        spaceShuttleHeightMiles += 10000;
        spaceShuttleHeight.innerHTML = spaceShuttleHeightMiles;
    });

    downBotton.addEventListener("click", function(){
        if (rocketVertical < 250){
            rocketVertical += 10;
            rocket.style.top = `${rocketVertical}px`;
        };
        spaceShuttleHeightMiles -= 10000;
        spaceShuttleHeight.innerHTML = spaceShuttleHeightMiles;
    });

    leftBotton.addEventListener("click", function(){
        if (rocketHorizontal < 250){
            rocketHorizontal += 10;
            rocket.style.right = `${rocketHorizontal}px`;
        };
    });

    rightBotton.addEventListener("click", function(){
        if (rocketHorizontal > -250){
            rocketHorizontal -= 10;
            rocket.style.right = `${rocketHorizontal}px`;
        };
    });

});
// Remember to pay attention to page loading!