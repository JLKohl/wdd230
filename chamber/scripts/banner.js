let today = new Date();
let day = today.getDay();

if (day === 1 || day === 3 || day === 5) {
    document.getElementById('special-banner').style.display = 'block';
} else {
    document.getElementById('special-banner').style.display = 'none';
}


document.getElementById('close-banner').addEventListener('click',
function() {
    document.getElementById('special-banner').display = `none`;
});
