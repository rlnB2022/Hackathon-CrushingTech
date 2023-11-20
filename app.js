/* Setup guide */
const setupGuideToggle = document.getElementById("setup-guide-toggle");

/**
 * Toggle Guide selector
 */
const toggleGuide = () => {
	if (setupGuideToggle.classList.contains("active")) {
		setupGuideToggle.classList.remove("active");
	} else {
		setupGuideToggle.classList.add("active");
	}
};

setupGuideToggle.addEventListener("click", toggleGuide);
