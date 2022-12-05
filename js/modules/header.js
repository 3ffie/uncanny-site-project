export default function Header() {
	/**
	 * @todo make a function for the 'about us' button
	 */
	
	/*This boolean variabel is used to find out if the navigation is visible or not.
	*/
	let navigationVisible = false;
	
	/* query selectors */
	// these constant variables gets the navigation elements from the html document.
	// the first const gets the header menu-button and the second gets the navigation list and the video.
	const headerMenuButton = document.querySelector('.header__button-one');
	const headerNavigation = document.querySelector('.navigation');

	/* event listener */
	// this event listener as activated when the headerMenuButton, which is the menu-button, is clicked.
	// when clicked the function headerMenuButtonClick will work. 
	headerMenuButton.addEventListener('click', handleMenuButtonClick);

	/* event handlers */
	// this function handles the event listener and is therefore the event handler, which in turn is determined by 2 other functions.
	function handleMenuButtonClick(event) {
		toggleNavigation();
		renderHTML();
	}

	/* methodes */
	// ! takes a true or false value and turns it around to a true or false value.
	// here navigation false is turned to navigation true.
	// when we click the menu-butten the navigation variabel becomes true. 
	function toggleNavigation() {
		navigationVisible = !navigationVisible;
	}

	/* render */
	// the if statement runs the code only if the boolean is true. 
	// here the navigation equals too "true", and function will therefore add the navigation list.
	// it will also change the inner text of the menu-button to the letter X.
	// the else statement will run will if the current conditions are falsy,
	// here it is sett to remove the navigation list and keep the menu-buttons inner text to "menu"
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