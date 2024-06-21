const baseURL = "https://jlkohl.github.io/wdd230/chamber";
const linksURL = "https://jlkohl.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayMembers(data.members);
}
const displayMembers = (members) => {

    const cardElement = document.querySelector(".card");

    members.forEach((member) => {
        const card = document.createElement("div");
        
        const img = document.createElement("img");
        console.log("Image source: " + member.icon);
        img.src = member.icon;
        card.appendChild(img);
        
        const h1 = document.createElement("h1");
        h1.textContent = member.companyName;
        card.appendChild(h1);

        cardElement.appendChild(card)
    });

}

getMembers();