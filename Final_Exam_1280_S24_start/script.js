// get the date from the input field
function getDate() {
   
}


function start() {
    const dateInput = document.getElementById('birthday').value;
    const countdownDate = new Date(dateInput).getTime();

    if (countdownDate < Date.now()) 
    {
        alert("Date is Expired");
        return;
    }

    const countdownInterval = setInterval(() => {
        var now = new Date().getTime();
        var timeDistance = countdownDate - now;

        const days = Math.floor(timeDistance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDistance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDistance % (1000 * 60)) / 1000);
        const deciseconds = Math.floor((timeDistance % 1000) / 100);

        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;
        document.getElementById('deciseconds').innerHTML = deciseconds;    
    }, 100);
}
