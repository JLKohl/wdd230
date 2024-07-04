const modeButton = document.querySelector("#mode");
const logo = document.querySelector("#logo");
const button = document.querySelector(".action");
const section = document.querySelector("section");
const weather = document.querySelector(".weather");
const heading = document.querySelector("h1");
const footer = document.querySelector("footer");

modeButton.addEventListener("click", () => {
	console.log("mode button clicked");
	if (modeButton.textContent.trim() === "☽") {
		logo.src = "images/gccc-darkmode.png";
		heading.style.background = "#484242";
		button.style.background = "#484242";
		button.style.color = "#fff";
		section.style.background = "#484242";
		section.style.color = "#fff";
		weather.style.background = "#484242";
		weather.style.color = "#fff";
		footer.style.background = "#484242";
		modeButton.textContent = "🔆";
	} else {
		logo.src = "images/gccc-photo.png";
		heading.style.background = "#660000";
		button.style.background = "#D8D8D8";
		button.style.color = "#000";
		weather.style.background = "#f9efdd";
		weather.style.color = "#000";
		footer.style.background = "#660000";
		modeButton.textContent = "☽";
	}
});