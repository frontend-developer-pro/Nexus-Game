// Character data
const characters = [
    {
        id: 1,
        name: "",
        title: "ANDROMEDA <br/> NEXUS:",
        description: "A warrior with a strict code of honor, defending the Coalition at all costs.",
        // mainImage: "../assests/img/nightmare.png",
        thumbnail: "../assests/img/scifi.png",
        combat: {
            type: "INTENSE",
            level: "COMBAT"
        }
    },
    {
        id: 2,
        name: "Shadow Operative",
        title: "SHADOW OPERATIVE:",
        description: "Elite infiltrator specializing in stealth technology and tactical espionage.",
        mainImage: "../assests/img/Sniper.png",
        thumbnail: "../assests/img/Sniper-thum.png",
        combat: {
            type: "STEALTH",
            level: "TACTICS"
        }
    },
    {
        id: 3,
        name: "Rogue Hunter",
        title: "ROGUE HUNTER:",
        description: "Master tracker with enhanced sensory abilities and lethal precision.",
        mainImage: "../assests/img/futuristic.png",
        thumbnail: "../assests/img/futuristic-thum.png",
        combat: {
            type: "PRECISION",
            level: "HUNTER"
        }
    }
];

document.addEventListener('DOMContentLoaded', function () {
    let activeCharacter = characters[0];

    // Set up mobile menu toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileToggle.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
    });

    // Initialize character carousel
    const carouselContainer = document.querySelector('.character-carousel');
    const thumbnailContainer = document.querySelector('.thumbnail-container');
    const characterInfoContainer = document.querySelector('.character-info');

    // Function to update the displayed character
    function updateActiveCharacter(character) {
        activeCharacter = character;

        // Update character images in carousel
        document.querySelectorAll('.character-image').forEach(img => {
            if (parseInt(img.dataset.id) === character.id) {
                img.classList.add('active');
            } else {
                img.classList.remove('active');
            }
        });

        // Update thumbnails
        document.querySelectorAll('.thumbnail').forEach(thumb => {
            if (parseInt(thumb.dataset.id) === character.id) {
                thumb.classList.add('active');
            } else {
                thumb.classList.remove('active');
            }
        });

        // Update character info
        renderCharacterInfo(character);
    }

    // Function to render character images in carousel
    function renderCarousel() {
        characters.forEach(character => {
            const img = document.createElement('img');
            img.src = character.mainImage;
            img.alt = `${character.name} `;
            img.classList.add('character-image');
            img.dataset.id = character.id;

            if (character.id === activeCharacter.id) {
                img.classList.add('active');
            }

            carouselContainer.appendChild(img);
        });
    }

    // Function to render character thumbnails
    function renderThumbnails() {
        characters.forEach(character => {
            const thumbnail = document.createElement('div');
            thumbnail.classList.add('thumbnail');
            thumbnail.dataset.id = character.id;

            if (character.id === activeCharacter.id) {
                thumbnail.classList.add('active');
            }

            const img = document.createElement('img');
            img.src = character.thumbnail;
            img.alt = `${character.name} thumbnail`;

            thumbnail.appendChild(img);
            thumbnail.addEventListener('click', () => {
                updateActiveCharacter(character);
            });

            thumbnailContainer.appendChild(thumbnail);
        });
    }

    // Function to render character info
    function renderCharacterInfo(character) {
        characterInfoContainer.innerHTML = `
      <div class="mb-6">
        <h2 class="character-title">${character.title}</h2>
        <p class="character-description">${character.description}</p>
      </div>


${character.id === 1 ? `
     <div class="iframe-container">
    <iframe title="Sci-Fi Soldier Version2.1" frameborder="0" allowfullscreen mozallowfullscreen="true"
      webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking
      execution-while-out-of-viewport execution-while-not-rendered web-share
      src="https://sketchfab.com/models/2ac250796d224fdcadb0391358001773/embed?autospin=1&autostart=1&transparent=1"
      >
    </iframe> 
  </div>
` : ''}

    

      <div class="character-content">
      <div class="character-stats">
        <div class="stat-row">
          <span class="stat-label">${character.combat.type}</span> <br/>
          <span class="stat-value">${character.combat.level}</span>
        </div>
      </div>
      
      <div class="combat-btn">
        <button class="nexus-button action-button nexus-btn">Combat Skills</button>
      </div>
      </div>
    `;
    }

    // Initialize the page
    renderCarousel();
    renderThumbnails();
    renderCharacterInfo(activeCharacter);
});