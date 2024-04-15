document.getElementById('roll-button').addEventListener('click', function() {
    var dice = document.getElementById('dice');
    var faces = document.querySelectorAll('.face');
    var randomNum = Math.floor(Math.random() * 6);
    var angleX = [360, 180, 360, 360, 270, 90];  // X rotations for each face
    var angleY = [0, 0, 90, -90, 360, 360];      // Y rotations for each face

    // Clearing the active class from all faces to reset the state
    faces.forEach(face => face.classList.remove('active'));

    // Generate a random rotation degree to add variability
    var extraSpinX = Math.floor(Math.random() * 4) * 360;  // Multiples of 360 to ensure a reset to original position
    var extraSpinY = Math.floor(Math.random() * 4) * 360;

    // Set the dice transformation
    dice.style.transform = `rotateX(${angleX[randomNum] + extraSpinX}deg) rotateY(${angleY[randomNum] + extraSpinY}deg)`;

    // After animation ends, highlight the active face
    setTimeout(() => {
        // Determining the correct face to activate based on randomNum
        var activeFaceClass = ['front', 'back', 'right', 'left', 'top', 'bottom'][randomNum];
        var activeFace = document.querySelector(`.${activeFaceClass}`);
        activeFace.classList.add('active');
    }, 1050);  // slightly after the CSS transition ends to ensure it catches the right face

    // Disable the button after the roll
    this.disabled = true;
});