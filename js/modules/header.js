export default function Header() {
	
	let navigationVisible = false;
	
	/*query selectors */
	// const headerAboutUsButton = document.querySelector('.header__button-two');
	const headerMenuButton = document.querySelector('.header__button-one');
	const headerNavigation = document.querySelector('.header__navigation');

	/* event listners*/
	headerMenuButton.addEventListener('click', handleMenuButtonClick);

	/* event handlers*/
	function handleMenuButtonClick(event) {
		toggleNavigation();
		renderHTML();
	}

	/* methodes */
	function toggleNavigation() {
		navigationVisible = !navigationVisible;
	}

	/*render */
	function renderHTML() {
		if (navigationVisible === true) {
			headerNavigation.classList.add('header__navigation--visible');
		} else {
			headerNavigation.classList.remove('header__navigation--visible');
		}
	}
}