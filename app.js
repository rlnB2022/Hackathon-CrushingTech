/* Setup guide elements */
const setupGuideToggle = document.querySelector("#setup-guide-toggle img");
const guideImage = document.querySelector("#setup-guide-toggle img");
const trialCalloutCloseButton = document.querySelector(".trial-callout-close");
const collectionDropdown = document.querySelector(".menu");

/**
 * Setup option event listeners
 */

const optionListItems = document.querySelectorAll(
	".setup-guide-container ul li"
);

Array.from(optionListItems).forEach((listItem) => {
	listItem.addEventListener("click", () => {
		if (!listItem.classList.contains("active-option")) {
			// get listItem that DOES have the active-option and remove it
			const activeOption = document.querySelector(".active-option");
			activeOption.classList.remove("active-option");

			// add active-option class to clicked on listItem
			listItem.classList.add("active-option");
		}
	});
});

/**
 * Toggle Guide selector
 */
const toggleGuide = () => {
	const innerGuide = document.querySelector(".inner-guide");
	const ul = document.getElementById("guide-list");

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

	// toggle the guide-list UL
	ul.classList.toggle("active");
};

/**
 * Hide Trial Callout Container
 */
trialCalloutCloseButton.addEventListener("click", () => {
	const trialCalloutContainer = document.querySelector(
		".trial-callout-container"
	);
	trialCalloutContainer.classList.add("hidden");
});

/**
 * Menu Container Toggle
 */

collectionDropdown.addEventListener("click", () => {
	const menuCollection = document.querySelector(".menu-collection");
	menuCollection.classList.toggle("menu-visible");
});

setupGuideToggle.addEventListener("click", toggleGuide);
