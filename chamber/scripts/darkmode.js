const modeButton = document.querySelector("#mode");
const body = document.body;
const logo = document.querySelector("#logo");
const nav = document.querySelector("#nav");
const nava =document.querySelector("#nav a");
const button = document.querySelector(".action");
const section = document.querySelectorAll("section");
const weather = document.querySelector(".weather");
const heading = document.querySelector("h1");
const heading2 = document.querySelectorAll("h2");
const footer = document.querySelector("footer");

modeButton.addEventListener("click", () => {
	console.log("mode button clicked");
	if (modeButton.textContent.trim() === "☽") {
		body.style.backgroundColor = "#000"
		body.style.color = "#fff";
		heading.style.background = "#484242";
		heading2.forEach(h => h.style.color = "#fff");
		section.forEach(s => s.style.backgroundcolor = "#484242");
		weather.style.background = "#484242";
		weather.style.color = "#fff";
		footer.style.background = "#484242";
		modeButton.textContent = "🔆";
	} else {
		body.style.backgroundColor = "#fff"
		body.style.color = "#000";
		heading.style.background = "#660000";
		heading2.forEach(h => h.style.color = "#660000");
		weather.style.background = "#f9efdd";
		weather.style.color = "#000";
		footer.style.background = "#660000";
		modeButton.textContent = "☽";
	}
});