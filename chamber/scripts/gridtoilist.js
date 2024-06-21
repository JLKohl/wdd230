const listButton = document.getElementById("list");
const gridButton = document.getElementById("grid");

listButton.addEventListener("click", function() {
    gridElement.classList.remove("grid-view");
    gridElement.classList.add("list-view");
});

gridButton.addEventListener("click", function() {
    gridElement.classList.remove("list-view");
    gridElement.classList.add("grid-view");
});