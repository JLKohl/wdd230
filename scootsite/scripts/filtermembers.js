const baseURL = "https://jlkohl.github.io/wdd230/chamber";
const linksURL = "https://jlkohl.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayMembers(data.members);
}
const displayMembers = (members) => {
    
    const highlightSectionElement = document.querySelector(".highlights-section");
    
    const relevantMembers = members.filter(member => member.membershipLevel === "Gold" || member.membershipLevel === "Silver");

    const shuffledMembers = relevantMembers.sort(() => 0.5 - Math.random());
    
    const selectedMembers = shuffledMembers.slice(0,4);
    
    selectedMembers.forEach((member, index) => {
        
        
        const card = document.createElement("div");
        card.className ="card";

        const img = document.createElement("img");
        img.src = member.icon;
        img.alt = member.displayName;
        card.appendChild(img);

        const address = document.createElement("p");
        address.textContent = member.address;
        card.appendChild(address);

        const phoneNumber = document.createElement("p");
        phoneNumber.textContent = member.phoneNumber;
        card.appendChild(phoneNumber);

        const website = document.createElement("a");
        website.textContent = member.website;
        website.href = member.website;
        card.appendChild(website);

        const description = document.createElement("p");
        description.textContent = member.description;
        description.classList.add("description");
        card.appendChild(description);
        
        highlightSectionElement.appendChild(card);
    });

}

getMembers();