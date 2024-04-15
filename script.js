document.getElementById('roll-button').addEventListener('click', function() {
    var dice = document.getElementById('dice');
    var randomNum = Math.floor(Math.random() * 6);
    var angles = [
        {x: 0, y: 0},      // Front face
        {x: 0, y: 180},    // Back face
        {x: 0, y: 90},     // Right face
        {x: 0, y: -90},    // Left face
        {x: 90, y: 0},     // Top face
        {x: -90, y: 0}     // Bottom face
    ];

    // Add some spin to each roll
    var extraSpin = Math.floor(Math.random() * 360);
    
    // Apply the rotation
    dice.style.transform = 'rotateX(' + (angles[randomNum].x + extraSpin) + 'deg) rotateY(' + (angles[randomNum].y + extraSpin) + 'deg)';
    
    // Disable the button after clicking
    this.setAttribute('disabled', true);
});