function animateelements(elements) {
	window.addEventListener('scroll', function () {
		elements.forEach((element) => {
			let position = element.getBoundingClientRect().top
			let screenres = window.innerHeight / 1.3
			let nameAnimation = element.getAttribute('name-style')

			
			if (position < screenres) {
				element.style.animation = `${nameAnimation} 2s linear forwards`
			} else {
				element.style.animation = ''
			}
		})
	})
}

const elements = document.querySelectorAll('.animate')

animateelements(elements)
