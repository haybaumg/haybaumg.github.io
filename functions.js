// Trigger class name on load
window.onload = function() {
  document.body.className += ' loaded'
};

document.addEventListener("DOMContentLoaded", () => {
  const rows = document.querySelectorAll(".row1, .row2, .generalinformationp1, .generalinformation h1, .generalinformationp2, .commercialaudits h1, .cap1, .cap2, .cap3, .video, .industrialaudits h1, .iap1, .industrialauditsp2, .industrialauditsp3, .iap4");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const listItems = entry.target.querySelectorAll(".list-item-wrapper");

        if (entry.isIntersecting) { 
          entry.target.classList.add("visible");

          // Apply staggered effect for list items inside .row1
          if (entry.target.classList.contains("row1")) {
            listItems.forEach((wrapper, index) => {
              wrapper.style.opacity = "0"; // Reset opacity first
              wrapper.style.transform = "translateY(40px) translateX(-30px)"; // Reset transform
              wrapper.style.transition = "none"; // Temporarily remove transition

              // Force a repaint and apply transitions with a small delay
              setTimeout(() => {
                wrapper.style.transition = "opacity 0.6s ease, transform 0.6s ease";
                wrapper.style.transitionDelay = `${index * 0.3}s`; // Stagger effect
                wrapper.style.opacity = "1"; 
                wrapper.style.transform = "translateY(0) translateX(0)";
              }, 50); // Small delay to force repaint
            });
          }
        } else { 
          entry.target.classList.remove("visible");

          // Reset list items when scrolling away
          if (entry.target.classList.contains("row1")) {
            listItems.forEach((wrapper) => {
              wrapper.style.opacity = "0"; 
              wrapper.style.transform = "translateY(40px) translateX(-30px)";
              wrapper.style.transition = "opacity 0.6s ease, transform 0.6s ease";
              wrapper.style.transitionDelay = "0s"; // Reset delay
            });
          }
        }
      });
    },
    { threshold: 0.15 }
  );

  rows.forEach(row => observer.observe(row));
 
});

document.addEventListener("DOMContentLoaded", function () {
    const serviceSections = document.querySelectorAll(".service1, .service2, .service3, .service4, .service5, .service6, .service7, .service8, .service9, .service10, .service11, .service12");

    serviceSections.forEach(section => {
        const header = section.querySelector("h1"); // Get the header inside each section
        const list = section.querySelector("ul"); // Get the list inside each section

        // Set initial state (collapsed)
        list.style.maxHeight = "0px"; 
        list.style.overflow = "hidden"; 
        list.style.transition = "max-height 0.5s ease-out"; 

        header.addEventListener("click", function () {
            section.classList.toggle("active"); // Toggle 'active' class

            if (list.style.maxHeight === "0px") {
                list.style.maxHeight = list.scrollHeight + "px"; // Expand
            } else {
                list.style.maxHeight = "0px"; // Collapse
            }
        });
    });
});

function myFunction() {
    var buttonsContainer = document.querySelector('.buttons'); // Select the container
    
	if (buttonsContainer.style.display === "block") {
		buttonsContainer.style.display = "none";
	}
	else {
		buttonsContainer.style.display = "block";
	}

}



















