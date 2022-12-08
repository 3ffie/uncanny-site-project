export default function MagicButton() {
	
	const genres = [
		'a Splatter',
		'Paranormal Movie or Series',
		'Monster Movie',
		'a Slasher',
		'Zombie Serie or Movie',
		'Witchcraft Series',
		'Vampire Movie (not Twilight)',
		'Psychological Thriller',
		'Dark Comedey',
		'Body Horror Movie',
		'Gothic Horror',
		'Dark Fantasy Series',
		'Post-Apocalyptic',
		'Serial Killer Documentary',
		'Sci-Fi Horror',
		'Supernatural Movie or Series',
		'Found Footage Movie',
	];

	/*query selector*/
	const magicButton = document.querySelector('.magic-button__button');

	/*event listener*/
	magicButton.addEventListener('click', handleMagicButtonClick);

	/*event handler*/
	function handleMagicButtonClick(event) {
		getRandomGenre();
	}

	/*methodes*/
	// the math random generates the value between index 0 to 1 and used with math floor it gets a random vaule from my array list lenght
	// further so will the the document get the value inside the paragraph and change the inner text to display the string and the random genre:
	function getRandomGenre() {
		const randomGenre = genres[Math.floor(Math.random() * genres.length)];

		document.getElementById('magic-button__output--response').innerHTML='You should watch ' + [randomGenre];
	}
}

