const modeButton = document.querySelector("#mode");
const button = document.querySelector(".action");
const events = document.querySelector(".events");
const about = document.querySelector(".about");
const highlight1 = document.querySelector(".highlight1");
const highlight2 = document.querySelector(".highlight2");
const weather = document.querySelector(".weather");
const header = document.querySelector("h1");
const footer = document.querySelector("footer");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☽")) {
		header.style.background = "#000";
		button.style.background = "#000";
		button.style.color = "#fff";
		events.style.background = "#000";
		events.style.color = "#fff";
		about.style.background = "#000";
		about.style.color = "#fff";
		highlight1.style.background = "#000";
		highlight1.style.color = "#fff";
		highlight2.style.background = "#000";
		highlight2.style.color = "#fff";
		weather.style.background = "#000";
		weather.style.color = "#fff";
		footer.style.background = "#000";
		modeButton.textContent = "🔆";
	} else {
		header.style.background = "#660000";
		button.style.background = "#D8D8D8";
		button.style.color = "#000";
		events.style.background = "#f9efdd";
		events.style.color = "#000";
		about.style.background = "#f9efdd";
		about.style.color = "#000";
		highlight1.style.background = "#f9efdd";
		highlight1.style.color = "#000";
		highlight2.style.background = "#f9efdd";
		highlight2.style.color = "#000";
		weather.style.background = "#f9efdd";
		weather.style.color = "#000";
		footer.style.background = "#660000";
		modeButton.textContent = "☽";
	}
});