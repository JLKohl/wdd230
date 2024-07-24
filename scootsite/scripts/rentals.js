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
            img.src = rental.image;
            img.alt = rental.name;
            img.loading = "lazy"
            productCell.textContent = rental.name;
            productCell.appendChild(img);
            row.appendChild(productCell);
            
            let priceCell = document.createElement('td');
            priceCell.textContent = rental.maxpersons;
            row.appendChild(priceCell);
            
            let resHalfCell = document.createElement('td');
            resHalfCell.textContent = '$' + rental.res[0].half.toFixed(2);
            row.appendChild(resHalfCell);
            
            let resFullCell = document.createElement('td');
            resFullCell.textContent = '$' + rental.res[0].full.toFixed(2);
            row.appendChild(resFullCell);
            
            let walkHalfCell = document.createElement('td');
            walkHalfCell.textContent = '$' + rental.walk[0].half.toFixed(2);
            row.appendChild(walkHalfCell);
            
            let walkFullCell = document.createElement('td');
            walkFullCell.textContent = '$' + rental.walk[0].full.toFixed(2);
            row.appendChild(walkFullCell);
            
            
            
            tableBody.appendChild(row);
            
        });
}


fetchRentals();