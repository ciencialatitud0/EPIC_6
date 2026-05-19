document.addEventListener('DOMContentLoaded', function() {
    // Set the application deadline date
    const deadlineDate = new Date('April 30, 2025 23:59:59').getTime();
    
    // Update the countdown every second
    const countdownElement = document.getElementById('countdown-timer');
    
    if (countdownElement) {
      const countdown = setInterval(function() {
        // Get today's date and time
        const now = new Date().getTime();
        
        // Find the distance between now and the deadline date
        const distance = deadlineDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the result in the element
        countdownElement.innerHTML = `
          <div class="countdown-item">
            <span class="count-number">${days}</span>
            <span class="count-text">Days</span>
          </div>
          <div class="countdown-item">
            <span class="count-number">${hours}</span>
            <span class="count-text">Hours</span>
          </div>
          <div class="countdown-item">
            <span class="count-number">${minutes}</span>
            <span class="count-text">Minutes</span>
          </div>
          <div class="countdown-item">
            <span class="count-number">${seconds}</span>
            <span class="count-text">Seconds</span>
          </div>
        `;
        
        // If the countdown is over, display a message
        if (distance < 0) {
          clearInterval(countdown);
          countdownElement.innerHTML = "Application period has ended";
        }
      }, 1000);
    }
  });