// Nav toggle
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navBarLinks = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click', () => {
  const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true'
  toggleButton.setAttribute('aria-expanded', String(!isExpanded))
  navBarLinks.classList.toggle('active')
})

// Render recipe cards from recipes.json
const cardList = document.getElementById('recipe-list')

if (cardList) {
  fetch('recipes.json')
    .then(res => res.json())
    .then(recipes => {
      cardList.innerHTML = recipes.map((r, i) => `
        <li class="cards_item">
          <div class="card">
            <div class="card_image">
              <img
                src="${r.image.src}"
                alt="${r.image.alt}"
                width="${r.image.width}"
                height="${r.image.height}"
                decoding="async"
                ${i === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}
              >
            </div>
            <div class="card_content">
              <h2 class="card_title">${r.title} &bull; $${r.price}</h2>
              <div class="card_text">
                ${r.note ? `<p><span class="note">${r.note}</span></p>` : ''}
                ${r.description.map(p => `<p>${p}</p>`).join('')}
              </div>
            </div>
          </div>
        </li>
      `).join('')
    })
}
