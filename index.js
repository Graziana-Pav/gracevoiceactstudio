/* Javascript to show and hide cookie banner using localstorage */
/* Shows the Cookie banner */
function showCookieBanner(){
  let cookieBanner = document.getElementById("cb-cookie-banner");
  cookieBanner.style.display = "block";
 }
 
 /* Hides the Cookie banner and saves the value to localstorage */
 function hideCookieBanner(){
  localStorage.setItem("cb_isCookieAccepted", "yes");
  let cookieBanner = document.getElementById("cb-cookie-banner");
  cookieBanner.style.display = "none";
 }
 
 /* Checks the localstorage and shows Cookie banner based on it. */
 function initializeCookieBanner(){
  let isCookieAccepted = localStorage.getItem("cb_isCookieAccepted");
  if(isCookieAccepted === null)
  {
   localStorage.setItem("cb_isCookieAccepted", "no");
   showCookieBanner();
  }
  if(isCookieAccepted === "no"){
   showCookieBanner();
  }
 }
 
 // Assigning values to window object
 window.onload = initializeCookieBanner();
 window.cb_hideCookieBanner = hideCookieBanner;
 

document.addEventListener("DOMContentLoaded", function () {
    const navbarCollapse = document.getElementById("navbarSupportedContent");
    const navLinks = document.querySelectorAll(".nav-link");
  
    navLinks.forEach(link => {
      link.addEventListener("click", function () {
        // Close menu removing 'show' class
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: true
        });
      });
    });
});

document.getElementById("generateTxtButton").addEventListener("click", function () {
    // Get form values
    const name = document.getElementById("nameInput").value;
    const surname = document.getElementById("surnameInput").value;
    const email = document.getElementById("emailInput").value;
    const mobile = document.getElementById("mobileInput").value;
    const social = document.getElementById("socialInput").value;
  
    // Create file content
  
    //Use php to create a file txt with data
});