// script.js
const cardContainer = document.getElementById('card-container');
const dislikeButton = document.getElementById('dislike-button');
const likeButton = document.getElementById('like-button');

// Sample data (can be replaced with actual data)
const profiles = [
    { name: 'John', age: 25, image: 'profile1.jpg' },
    { name: 'Emily', age: 27, image: 'profile2.jpg' },
    { name: 'Michael', age: 30, image: 'profile3.jpg' },
];

// Function to create a card
function createCard(profile) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h2>${profile.name}, ${profile.age}</h2>
        <img src="${profile.image}" alt="${profile.name}">
    `;
    cardContainer.appendChild(card);

    // Event listener for clicking on a card
    card.addEventListener('click', () => {
        console.log(`Clicked on ${profile.name}`);
    });
}

// Function to load cards
function loadCards() {
    // Clear existing cards
    cardContainer.innerHTML = '';
    // Create cards for each profile
    profiles.forEach(profile => {
        createCard(profile);
    });
}

// Initial load
loadCards();

// Event listeners for like and dislike buttons
dislikeButton.addEventListener('click', () => {
    console.log('Disliked');
    // Implement logic for dislike action
});

likeButton.addEventListener('click', () => {
    console.log('Liked');
    // Implement logic for like action
});
