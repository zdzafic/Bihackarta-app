// === Bihackarta – script.js ===

// Lijst van locaties (later te laden vanuit data/locations.json)
const locations = [
  {
    id: 1,
    name: "Una-Sans kanton",
    description: "Administrativni centar regije Bihaća.",
    category: "Institucija",
    lat: 44.8167,
    lng: 15.8708
  },
  {
    id: 2,
    name: "Gradski park",
    description: "Lijep park u centru Bihaća uz rijeku Unu.",
    category: "Park",
    lat: 44.8150,
    lng: 15.8720
  },
  {
    id: 3,
    name: "Fethija džamija",
    description: "Historijska džamija iz osmanskog perioda u srcu grada.",
    category: "Historija",
    lat: 44.8172,
    lng: 15.8695
  }
];

// === Toon locaties op de pagina ===
function renderLocations(data) {
  const container = document.getElementById('locations-list');
  container.innerHTML = '';

  data.forEach(location => {
    const card = document.createElement('div');
    card.classList.add('location-card');
    card.innerHTML = `
      <h3>📍 ${location.name}</h3>
      <p>${location.description}</p>
      <span class="tag">${location.category}</span>
    `;
    container.appendChild(card);
  });
}

// === Start de app ===
document.addEventListener('DOMContentLoaded', () => {
  renderLocations(locations);
});
