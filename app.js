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
