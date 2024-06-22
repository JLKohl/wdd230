const gridElement = document.querySelector(".grid");
const listButton = document.getElementById("list");
const gridButton = document.getElementById("grid");

listButton.addEventListener("click", function() {
    gridElement.classList.remove("grid");
    gridElement.classList.add("list");
});

gridButton.addEventListener("click", function() {
    gridElement.classList.remove("list");
    gridElement.classList.add("grid");
});