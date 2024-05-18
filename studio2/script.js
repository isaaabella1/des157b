'use strict';

// Function to fetch JSON data
async function fetchData() {
    try {
        const response = await fetch('gameData.json');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const namesContainer = document.getElementById('namesContainer');

// Function to populate names
async function populateNames() {
    const jsonData = await fetchData();

    // Loop through the JSON data and create a div for each name
    jsonData.forEach(reasonData => {
        // Create a div element for the name
        const nameDiv = document.createElement('div');
        nameDiv.classList.add('name');

        // Set the text content to the "Name" part of the reason data
        nameDiv.textContent = reasonData.Name;

        // Add event listener for hover
        nameDiv.addEventListener('mouseenter', () => {
            showPopup(reasonData.Reason);
        });

        // Remove event listener when not hovered
        nameDiv.addEventListener('mouseleave', () => {
            hidePopup();
        });

        // Append the name div to the container
        namesContainer.appendChild(nameDiv);
    });
}

// Function to show popup with reason
function showPopup(reason) {
    const popupContent = document.getElementById('popup-content');
    popupContent.textContent = reason;
    const popup = document.getElementById('popup');
    popup.classList.remove('hidden');
}

// Function to hide popup
function hidePopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('hidden');
}

// Call function to populate names
populateNames();
