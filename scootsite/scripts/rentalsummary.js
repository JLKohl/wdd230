const baseURL = 'https://jlkohl.github.io/wdd230/scootsite/';
const Url = "https://jlkohl.github.io/wdd230/scootsite/data/rentaltypes.json";

async function fetchRentals() {
    try{
        const response = await fetch(Url);
        if (response.ok) {
            const data = await response.json();
            displayRentals(data.rentals); 
        } else {
            console.log('Error:' + response.statusText);
        }
        } catch (error) {
        console.log('Fetch Error:', error);
    }

}

function displayRentals(rentals) {
   
        let rentalElement = document.querySelector('.rentals');
        
        rentals.forEach((rental) => {
            const card = document.createElement('div');
            card.className = 'rental-card';
            
            const img = document.createElement("img");
            img.src = rental.image;
            img.alt = rental.name;
            img.loading = "lazy"
            card.appendChild(img);
            
            const name = document.createElement("p");
            name.textContent = "Rental Type: " + rental.name;
            card.appendChild(name);
            
            const maxPersons = document.createElement('p');
            maxPersons.textContent = "Max People: " + rental.maxpersons;
            card.appendChild(maxPersons);
            
            rentalElement.appendChild(card)

            
        });
}


fetchRentals();