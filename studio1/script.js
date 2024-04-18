(function() {
    'use strict';
    console.log('reading');

    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const line3 = document.querySelector('#line3');
    const line4 = document.querySelector('#line4');

    const poem = {
        start: [0, 5, 8,11], // Start times in seconds
        stop: [4, 7, 10,15], // Stop times in seconds
        line: [line1, line2, line3,line4]
    };
    const startTime = performance.now(); // Get the start time in milliseconds
    const intervalID = setInterval(checkTime, 1000);


    const videoLeft = document.getElementById('myVideo2');
    const videoRight = document.getElementById('myVideo');
    let isLeftVisible = true; // Initial state

    document.addEventListener("mousemove", toggleVideos);

    function toggleVideos(event) {
        const screenWidth = window.innerWidth;
        const mouseX = event.clientX;
        const threshold = screenWidth / 2;

        // If mouse is on the left side, show videoLeft
        if (mouseX < threshold && !isLeftVisible) {
            isLeftVisible = true;
            videoLeft.style.display = 'block';
            videoRight.style.display = 'none';
        }
        // If mouse is on the right side, show videoRight
        else if (mouseX >= threshold && isLeftVisible) {
            isLeftVisible = false;
            videoLeft.style.display = 'none';
            videoRight.style.display = 'block';
        }
    }
    function checkTime() {  
        const elapsedTime = (performance.now() - startTime) / 1000; // Calculate elapsed time in seconds

        for (let i = 0; i < poem.start.length; i++) {
            if (poem.start[i] < elapsedTime && elapsedTime < poem.stop[i]) {
                poem.line[i].classList.add("showing");
            } else {
                poem.line[i].classList.remove("showing");
            }
        }
    }
})();
