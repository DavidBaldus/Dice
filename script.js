document.getElementById('roll-button').addEventListener('click', function() {
    var dice = document.getElementById('dice');
    var faces = document.querySelectorAll('.face');
    var randomNum = Math.floor(Math.random() * 6);

    // Clearing the active class from all faces to reset the state
    faces.forEach(face => face.classList.remove('active'));

    // Explicit rotations for each face
    var rotations = [
        { transform: 'rotateX(0deg) rotateY(0deg)' },      // Front face
        { transform: 'rotateX(-180deg) rotateY(0deg)' },   // Back face
        { transform: 'rotateX(0deg) rotateY(90deg)' },     // Right face
        { transform: 'rotateX(0deg) rotateY(-90deg)' },    // Left face
        { transform: 'rotateX(-90deg) rotateY(0deg)' },    // Top face
        { transform: 'rotateX(90deg) rotateY(0deg)' }      // Bottom face
    ];

    // Apply rotation
    dice.style.transform = rotations[randomNum].transform;

    // After the animation ends, highlight the active face
    setTimeout(() => {
        var activeFaceClass = ['front', 'back', 'right', 'left', 'top', 'bottom'][randomNum];
        var activeFace = document.querySelector(`.${activeFaceClass}`);
        activeFace.classList.add('active');
    }, 1050); // Adjust according to your transition time in CSS

    // Disable the button after the roll
    this.disabled = true;
});