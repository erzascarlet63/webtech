document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slide-viewer');
    const slides = document.querySelectorAll('.slide');
    const buttonsContainer = document.querySelector('.slide-buttons');
    let currentIndex = 0;
  
    // Create buttons for each slide
    slides.forEach((slide, index) => {
      const button = document.createElement('button');
      button.addEventListener('click', () => showSlide(index));
      buttonsContainer.appendChild(button);
    });
  
    // Initial setup
    showSlide(currentIndex);
  
    function showSlide(index) {
      currentIndex = index;
      const translateValue = -index * 100 + '%';
      slider.style.transform = 'translateX(' + translateValue + ')';
      
      // Highlight the active button
      const buttons = buttonsContainer.querySelectorAll('button');
      buttons.forEach((button, buttonIndex) => {
        button.classList.toggle('active', buttonIndex === currentIndex);
      });
    }
  });

  let calcScrollValue = () => 
  {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#383b43 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;
