(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const sections = document.querySelectorAll('section')
    const headerImage = document.getElementById('headerImage');
    let mode = 'dark';
    let currentImage = ''; 
    const lightImageUrl = 'images/lightImage.jpg';  
    const darkImageUrl = 'images/darkImage.jpg'; 
    button.addEventListener('click', function() {
        if (mode === 'dark') {
            body.className = 'switch';

            button.className = 'switch';
            for (const section of sections) {
                section.className = 'switch';
            }
            mode = 'light';
            currentImage = lightImageUrl;
        } else {
            body.removeAttribute('class');
            button.removeAttribute('class');
            for (const section of sections) {
                section.removeAttribute('class');
            }
            mode = 'dark'
            currentImage = darkImageUrl;
        }
        headerImage.src = currentImage;
    })
})()