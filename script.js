document.getElementById('roll-button').addEventListener('click', function() {
    var dice = document.getElementById('dice');
    var faces = document.querySelectorAll('.face');
    var randomNum = Math.floor(Math.random() * 6);

    // Angles for each face, carefully calibrated
    var rotations = [
        'rotateX(360deg) rotateY(360deg)',  // Front face
        'rotateX(-180deg) rotateY(360deg)', // Back face
        'rotateX(360deg) rotateY(450deg)',  // Right face
        'rotateX(360deg) rotateY(-90deg)',  // Left face
        'rotateX(-270deg) rotateY(360deg)', // Top face
        'rotateX(90deg) rotateY(360deg)'    // Bottom face
    ];

    // Reset active class on all faces
    faces.forEach(face => face.classList.remove('active'));

    // Add some spins to make it look random
    var fullSpins = 'rotateX(' + (360 * 4) + 'deg) rotateY(' + (360 * 4) + 'deg) ';

    // Apply rotation
    dice.style.transform = fullSpins + rotations[randomNum];

    // After the dice stops rolling, highlight the active face
    setTimeout(() => {
        var activeFaceClass = ['front', 'back', 'right', 'left', 'top', 'bottom'][randomNum];
        var activeFace = document.querySelector(`.${activeFaceClass}`);
        activeFace.classList.add('active');
    }, 1050);  // Match this timeout with the duration of the CSS transition

    // Disable the button to prevent re-rolls
    this.disabled = true;
});