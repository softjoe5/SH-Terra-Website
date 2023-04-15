      const burger = document.querySelector('.burger');
      const navLinks = document.querySelector('.nav-links');

      burger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        burger.classList.toggle('change');
      });

function toggleDisclosure(btnID) {
  // Get the button and icon elements
  var theButton = document.getElementById(btnID);
  var theIcon = theButton.querySelector('i');
  
  // If the button is not expanded...
  if (theButton.getAttribute("aria-expanded") == "false") {
    // Set the button to expanded
    theButton.setAttribute("aria-expanded", "true");
    // Animate the icon to "fa-angle-down"
    theIcon.classList.remove("fa-angle-right");
    theIcon.classList.add("fa-angle-down");
    
  // Otherwise, the button is expanded...
  } else {
    // Set the button to collapsed
    theButton.setAttribute("aria-expanded", "false");
    // Animate the icon to "fa-angle-right"
    theIcon.classList.remove("fa-angle-down");
    theIcon.classList.add("fa-angle-right");
  }
}
