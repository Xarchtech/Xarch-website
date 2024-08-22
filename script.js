document.addEventListener('DOMContentLoaded', function () {
    // Set the date we're counting down to (replace with your desired launch date)
    const launchDate = new Date('December 30, 2024 00:00:00').getTime();

    // Update the countdown every 1 second
    const countdownInterval = setInterval(function () {
        const now = new Date().getTime();
        const distance = launchDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown
        document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // If the countdown is over, clear the interval
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = 'Website is live!';
        }
    }, 1000);
});
