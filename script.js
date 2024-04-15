document.getElementById('roll-button').addEventListener('click', function() {
    var dice = document.getElementById('dice');
    var faces = document.querySelectorAll('.face');
    var randomNum = Math.floor(Math.random() * 6);
    var angles = [
        {x: 0, y: 0, face: 'front'},
        {x: 0, y: 180, face: 'back'},
        {x: 0, y: 90, face: 'right'},
        {x: 0, y: -90, face: 'left'},
        {x: 90, y: 0, face: 'top'},
        {x: -90, y: 0, face: 'bottom'}
    ];

    var extraSpinX = Math.floor(Math.random() * 360);
    var extraSpinY = Math.floor(Math.random() * 360);

    dice.style.transform = 'rotateX(' + (angles[randomNum].x + extraSpinX) + 'deg) rotateY(' + (angles[randomNum].y + extraSpinY) + 'deg)';

    // Remove the active class from all faces
    faces.forEach(face => face.classList.remove('active'));

    // Add active class to the randomly selected face after transition
    setTimeout(() => {
        var activeFace = document.querySelector(`.${angles[randomNum].face}`);
        activeFace.classList.add('active');
    }, 1000);

    // Disable the button after clicking
    this.setAttribute('disabled', true);
});