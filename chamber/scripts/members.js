const baseURL = "https://jlkohl.github.io/wdd230/chamber";
const linksURL = "https://jlkohl.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayMembers(data.members);
}
const displayMembers = (members) => {

    const gridElement = document.querySelector(".grid");

    members.forEach((member) => {
        const card = document.createElement("div");
        card.className ="card";
        
        const img = document.createElement("img");
        console.log("Image source: " + member.icon);
        img.src = member.icon;
        card.appendChild(img);
        
        const h1 = document.createElement("h1");
        h1.textContent = member.companyName;
        card.appendChild(h1);
        
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
        card.appendChild(description);
        
        const membershipLevel = document.createElement("p");
        membershipLevel.textContent =`Membership Level: ${member.membershipLevel}`;
        card.appendChild(membershipLevel);
        
        gridElement.appendChild(card)
    });

}

getMembers();