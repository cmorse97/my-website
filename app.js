// Change navbar background color on scroll
window.addEventListener('scroll', function () {
	const navbar = document.getElementById('main-navbar')
	if (window.scrollY > 0) {
		navbar.classList.add('scrolled')
		navbar.classList.remove('bg-transparent')
	} else {
		navbar.classList.remove('scrolled')
		navbar.classList.add('bg-transparent')
	}
	return
})

// Make dropdown-icon smooth scroll to about section on click
const dropdownIcon = document.getElementById('dropdown-icon')
const targetSection = document.getElementById('scroll-target')

dropdownIcon.addEventListener('click', function () {
	targetSection.scrollIntoView({ behavior: 'smooth' })
})

// Make brand name appear only when screen size is less than 992px and when user scrolls past the hero section
const brandName = document.getElementById('brand-name')
const heroSection = document.getElementById('hero')

window.addEventListener('scroll', function () {
	if (window.innerWidth < 992 && window.scrollY >= heroSection.clientHeight) {
		brandName.classList.remove('d-none')
	} else {
		brandName.classList.add('d-none')
	}
})

const spanYear = document.getElementById('span-year')
spanYear.textContent = new Date().getFullYear()
