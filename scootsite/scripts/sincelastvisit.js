

const visitDisplay = document.querySelector('.visits-since');

var lastVisit = localStorage.getItem('lastVisit');

if (lastVisit) {
    var differanceinmiliseconds = new Date() - new Date(lastVisit);
    var sincelastvisit = Math.floor(differanceinmiliseconds / (1000 * 60 * 60 * 24));
    visitDisplay.textContent = `It has been ${sincelastvisit} days since your last visit`;
}else {
   visitDisplay.textContent = 'welcome to our page for the first time!';
}

localStorage.setItem('lastVisit', new Date().toISOString());