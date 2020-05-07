//localStorage.setItem('darkMode', 'Disabled');
var darkMode = localStorage.getItem('darkMode');
//get darkMode value from local storage
function checkAndEnableDarkMode(){
  console.log("Inside onload function " +darkMode);
  var bodyElement = document.body;
  if(darkMode==="Enabled")
  {
    bodyElement.classList.toggle("dark-mode");
    document.getElementById('modeToggle').innerHTML = "Light Mode";
  }
  bodyElement.style.display = "block";
}
/*hen the page loads first, it goes with the standard css regardless, so we check
if dark mode is enabled in local storage, and if so we toggle it on.*/

function toggleMode() {
   var bodyElement = document.body;

   if(darkMode === "Enabled")
   {
     bodyElement.classList.toggle("dark-mode");
     localStorage.setItem('darkMode', 'Disabled');
     darkMode = localStorage.getItem('darkMode');
     document.getElementById('modeToggle').innerHTML = "Dark Mode";
     console.log(darkMode);
   }else{
     bodyElement.classList.toggle("dark-mode");
     localStorage.setItem('darkMode', 'Enabled');
     darkMode = localStorage.getItem('darkMode');
     document.getElementById('modeToggle').innerHTML = "Light Mode";
     console.log(darkMode);
   }
   /*This function toggles the mode on a button click. If the mode
   is enabled when clicked, then the click disabls it, and vice versa.
   Every time we change the mode we need to save information indicating darkModes
   state in local storage, then update the darkMode variable with that value for
   us to check. */
 }
