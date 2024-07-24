const baseURL = 'https://jlkohl.github.io/wdd230/scootsite/';
const Url = "https://jlkohl.github.io/wdd230/scootsite/data/rentaltypes.json";

async function fetchRentals() {
    const response = await fetch(Url);
    const data = await response.json();
    displayRentals(data.rentals);
}

function displayRentals(rentals) {
   
        let tableBody = document.querySelector('.rental-table tbody');
        
        rentals.forEach((rental) => {
            let row =  document.createElement("tr");
            
            let productCell = document.createElement('td');
            
            let img = new Image();
            img.src = rental.imageUrl;
            img.alt = rental.name;
            productCell.textContent = rental.name;
            row.appendChild(productCell);
            
            let priceCell = document.createElement('td');
            priceCell.textContent = rental.type;
            row.appendChild(priceCell);
            
            tableBody.appendChild(row);
            
        });
}


fetchRentals();