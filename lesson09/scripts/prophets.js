const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData (){
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    const cards = document.getElementById('cards');
    
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let birthdate = document.createElement('p');
        let birthplace = document.createElement('p');
        let portrait = document.createElement('img');
   
        
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthdate.textContent = `Date of brith: ${prophet.birthdate}`;
        birthplace.textContent = `Birth place: ${prophet.birthplace}`;
        
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `${prophet.name} (${prophet.lastname})`);
        portrait.setAttribute("loading","lazy");
        portrait.setAttribute('width','340');
        portrait.setAttribute('height','440');
        
        card.appendChild(fullName);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(portrait);
  
        
        cards.appendChild(card);
    });
}

getProphetData();