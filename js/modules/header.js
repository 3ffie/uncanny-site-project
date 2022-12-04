export default function Header() {
	/**
	 * @todo make a funtion for the 'about us' button
	 * add alot of comments to everything
	 * 
	 */
	
	/*This boolean variabel is used to find out if the navigation is visible or not.
	*/
	let navigationVisible = false;
	
	/*query selectors 
	*/
	// const headerAboutUsButton = document.querySelector('.header__button-two');
	// here are 2 
	const headerMenuButton = document.querySelector('.header__button-one');
	const headerNavigation = document.querySelector('.navigation');

	/* event listners*/
	headerMenuButton.addEventListener('click', handleMenuButtonClick);

	/* event handlers*/
	function handleMenuButtonClick(event) {
		toggleNavigation();
		renderHTML();
	}

	/* methodes */
	/** */
	function toggleNavigation() {
		navigationVisible = !navigationVisible;
	}

	/*render*/
	function renderHTML() {
		if (navigationVisible === true) {
			headerNavigation.classList.add('navigation__visible'),
			headerMenuButton.innerHTML = 'X';
		} else {
			headerNavigation.classList.remove('navigation__visible'),
			headerMenuButton.innerHTML = 'MENU';
		}
	}
}