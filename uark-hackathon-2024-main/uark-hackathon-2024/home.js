// script.js
const cardContainer = document.getElementById('card-container');
const dislikeButton = document.getElementById('dislike-button');
const likeButton = document.getElementById('like-button');

// Sample data (can be replaced with actual data)
const profiles = [
    { name: 'John', age: 25, image: 'images/male1.jpg' },
    { name: 'Emily', age: 27, image: 'images/female2.jpg' },
    { name: 'Michael', age: 30, image: 'images/male3.jpg' },
];


// Function to create a card
function createCard(profile) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h2>${profile.name}, ${profile.age}</h2>
        <img src="${profile.image}" alt="${profile.name}">
        <div class="button-container">
            <button class="dislike-button">Dislike</button>
            <button class="like-button">Like</button>
        </div>
    `;
    cardContainer.appendChild(card);

    // Event listener for clicking on a card
    card.addEventListener('click', () => {
        console.log(`Clicked on ${profile.name}`);
    });

    // Event listener for dislike button
    const dislikeButton = card.querySelector('.dislike-button');
    dislikeButton.addEventListener('click', () => {
        console.log('Disliked');
        card.remove(); // Remove the card from the UI
        console.log(`Removed card for ${profile.name}`);
        const index = profiles.indexOf(profile);
        if (index !== -1) {
            profiles.splice(index, 1); // Remove the profile from the profiles array
        }
    });

    // Event listener for like button
    const likeButton = card.querySelector('.like-button');
    likeButton.addEventListener('click', () => {
        console.log('Liked');
        card.style.background = 'rgba(0, 255, 0, 0.5)';
        // Implement logic for like action
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

// // Event listener for dislike button
// const dislikeButton = card.querySelector('.dislike-button');
// dislikeButton.addEventListener('click', () => {
//     console.log('Disliked');
//     card.remove(); // Remove the card from the UI
//     console.log(`Removed card for ${profile.name}`);
//     const index = profiles.indexOf(profile);
//     if (index !== -1) {
//         profiles.splice(index, 1); // Remove the profile from the profiles array
//     }
// });



// if (likeButton) {
// likeButton.addEventListener('click', () => {
//     console.log('Liked');
//     // Implement logic for like action
// });
// }
