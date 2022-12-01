export default function Header() {
	/**
	 * @todo make a funtion for the 'about us' button
	 * add alot of comments to everything
	 * 
	 */
	
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

	/*render*/
	function renderHTML() {
		if (navigationVisible === true) {
			headerNavigation.classList.add('header__navigation--visible'),
			headerMenuButton.innerHTML = 'X';
		} else {
			headerNavigation.classList.remove('header__navigation--visible'),
			headerMenuButton.innerHTML = 'MENU';
		}
	}
}