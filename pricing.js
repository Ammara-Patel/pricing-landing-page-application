// script.js
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".pricing-card");
  
    cards.forEach(card => {
      card.addEventListener("mouseenter", function() {
        this.classList.add("active");
      });
  
      card.addEventListener("mouseleave", function() {
        const activeCard = document.querySelector(".pricing-card.active");
        if (this !== activeCard) {
          this.classList.remove("active");
        }
      });
  
      card.addEventListener("click", function() {
        cards.forEach(c => c.classList.remove("active"));
        this.classList.add("active");
      });
  
      const features = card.querySelectorAll(".features li");
      features.forEach(feature => {
        feature.addEventListener("mouseenter", function() {
          this.style.backgroundColor = "#f0f0f0";
        });
        feature.addEventListener("mouseleave", function() {
          this.style.backgroundColor = "transparent";
        });
      });
    });
  });
  
