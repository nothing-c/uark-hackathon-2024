    // home.js
    const cardContainer = document.getElementById('card-container');
    const dislikeButton = document.getElementById('dislike-button');
    const likeButton = document.getElementById('like-button');

    // Sample data (can be replaced with actual data)
    const profiles = [
        { fname: 'Johnny', lname: 'Appleseed', age: 25, image: 'images/profpics/male1.jpg', sport: 'Basketball', skill: 'Intermediate', distance: '12' },
        { fname: 'Emily', lname: 'Simile', age: 27, image: 'images/profpics/female2.jpg', sport: 'Fishing', skill: 'Beginner', distance: '7' },
        { fname: 'Michael', lname: 'Jordan', age: 30, image: 'images/profpics/male3.jpg', sport: 'Soccer', skill: 'Professional', distance: '0' },
    ];

    // Function to create a card
    function createCard(profile) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${profile.image}" alt="${profile.name}">
            <h2><b>${profile.fname} ${profile.lname}, ${profile.age} </b></h2>
            <p>Skill level: ${profile.skill} ${profile.sport} player. </p>
            <p>  Miles away: ${profile.distance} miles. </p>
            <br>
            <div class="button-container">
                <button class="dislike-button" style="background-color: #e74c3c; color: white; padding: 0.5rem 1rem; border-radius: 0.375rem;">Disike</button>
                <button class="like-button" style="background-color: #34D399; color: white; padding: 0.5rem 1rem; border-radius: 0.375rem;">Play Ball!</button>
            </div>
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


    document.addEventListener('DOMContentLoaded', function () {
        const dislikeButtons = document.querySelectorAll('.dislike-button');
        const likeButtons = document.querySelectorAll('.like-button');
    
        // Event listeners for dislike buttons
        dislikeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const card = button.closest('.card');
                card.style.background = 'rgba(255, 0, 0, 0.5)';
                setTimeout(() => {
                    card.remove(); // Remove the card from the UI
                }, 500);
                // Additional logic if needed
            });
        });
    
        // Event listeners for like buttons
        likeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const card = button.closest('.card');
                card.style.background = 'rgba(0, 255, 0, 0.5)';
    
                // Additional logic if needed
            });
        });
        
    });
