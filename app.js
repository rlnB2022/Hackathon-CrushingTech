/* Setup guide */
const setupGuideToggle = document.getElementById("setup-guide-toggle");
const guideImage = document.querySelector("#setup-guide-toggle img");

/**
 * Toggle Guide selector
 */
const toggleGuide = () => {
	const innerGuide = document.querySelector(".inner-guide");

	const imageArray = [
		"https://crushingit.tech/hackathon-assets/icon-arrow-down.svg",
		"https://crushingit.tech/hackathon-assets/icon-arrow-up.svg",
	];

	let currentImg = parseInt(guideImage.dataset.num);
	let nextImg = currentImg === 0 ? 1 : 0;
	guideImage.src = imageArray[nextImg];
	guideImage.dataset.num = nextImg;

	// set active class on .inner-guide so the accordion will display/hide
	innerGuide.classList.toggle("active");
};

setupGuideToggle.addEventListener("click", toggleGuide);
