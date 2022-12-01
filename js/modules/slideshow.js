export default function Slideshow() {
	/**
	 * @TODO add  funtion previous button and next button
	 *  
	 * 
	 */

	const slideshowButtonNext = document.querySelector('.slideshow__button--next');
	const slideshowButtonPrevious = document.querySelector('.slideshow__button--previous');
	const slideshowSlides = document.querySelectorAll('.slideshow__track');

	// these variables are used to track which image should be visible a 
	let currentSlide = 0;
	let maxSlide = slideshowSlides.length - 1;

	/*event listener */
	slideshowButtonPrevious.addEventListener('click', handleslideshowButtonPrevious);
	slideshowButtonNext.addEventListener('click', handleslideshowButtonNext);

	/*event handler */
	function handleslideshowButtonNext(event) {
		increaseSlideshowIndex();
		updateSlideshowHTML();
	};
	
	function handleslideshowButtonPrevious(event) {
		decreaseSlideshowIndex();
		updateSlideshowHTML();
	};

	/*methodes*/
	function increaseSlideshowIndex() {
		if (currentSlide < maxSlide) {
			currentSlide += 1;
		} else {
			currentSlide = 0;
		}
	};

	function decreaseSlideshowIndex() {
		if (currentSlide > 0) {
			currentSlide -= 1;
		} else {
			currentSlide = maxSlide;
		}
	};

	function updateSlideshowHTML() {
		for (const slide of slideshowSlides) {
			slide.classList.remove('slideshow__track--active');
		}

		slideshowSlides[currentSlide].classList.add('slideshow__track--active');
	};
}