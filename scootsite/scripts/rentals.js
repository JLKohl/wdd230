const baseURL = 'https://jlkohl.github.io/wdd230/scootsite/';
const Url = "https://jlkohl.github.io/wdd230/scootsite/data/rentaltypes.json";

async function fetchRentals() {
    try{
        const response = await fetch(Url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayRentals(data.rentals); 
        } else {
            console.log('Error:' + response.statusText);
        }
        } catch (error) {
        console.log('Fetch Error:', error);
    }

}

function displayRentals(rentals) {
   
        let tableBody = document.querySelector('.rental-table tbody');
        
        rentals.forEach((rental) => {
            let row =  document.createElement("tr");
            
            let productCell = document.createElement('td');
            
            let img = document.createElement("img");
           
           if (rental.image){
               img.src = rental.image;
               img.alt = rental.name; 
           } else {
               console.log('image not found for rental', rental.name);
           }
            productCell.textContent = rental.name;
            productCell.appendChild(img);
            row.appendChild(productCell);
            
            let priceCell = document.createElement('td');
            priceCell.textContent = rental.maxpersons;
            row.appendChild(priceCell);
            
            let reservationHalfCell = document.createElement('td');
            reservationHalfCell.textContent = rental.res.half;
            row.appendChild(reservationHalfCell);
            
            
            
            
            
            tableBody.appendChild(row);
            
        });
}


fetchRentals();