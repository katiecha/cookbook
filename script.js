const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navBarLinks = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click', () => {
  const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true'
  toggleButton.setAttribute('aria-expanded', String(!isExpanded))
  navBarLinks.classList.toggle('active')
})
