//localStorage.setItem('darkMode', 'Disabled');
var darkMode = localStorage.getItem('darkMode');
//get darkMode value from local storage
function checkAndEnableDarkMode(){
  console.log("Inside onload function " +darkMode);
  var bodyElement = document.body;
  if(darkMode==="Enabled")
  {
    bodyElement.classList.toggle("darkMode");
    document.getElementById('modeToggle').innerHTML = "Light Mode";
  }

  bodyElement.style.visibility = "visible";
}
/*when the page loads first, it goes with the standard css regardless, so we check
if dark mode is enabled in local storage, and if so we toggle it on.*/

function toggleMode() {
   var bodyElement = document.body;

   if(darkMode === "Enabled")
   {
     bodyElement.classList.toggle("darkMode");
     localStorage.setItem('darkMode', 'Disabled');
     darkMode = localStorage.getItem('darkMode');
     document.getElementById('modeToggle').innerHTML = "Dark Mode";
     console.log(darkMode);
   }else{
     bodyElement.classList.toggle("darkMode");
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

 function gatherInput(id){
   var inputData = document.getElementById(id).value;
   var letters = /^[A-Za-z]+$/;
   if (inputData == "") {
     return [];
   }
   else if (inputData.match(letters)) {
     inputData = "";
     return inputData;
   }
   else if (inputData.includes(" ")) {
     inputData = "";
     return inputData;
   }
   var inputArr = inputData.split(',');
   inputArr = inputArr.map(Number);
   return inputArr;
 }

 function getDiff(){
   var input = gatherInput('diff');
   if(input == []||input ==""){
     alert("Incorrect data, please enter a numeric value, and make sure not to input any spaces.");
     return;
   }
   var smallest = input[0];
   var largest=input[0];
   var difference;

   for(var i =0; i<input.length;i++){
     if(smallest >= input[i])
     {
       smallest = input[i];
     }
     if(largest <= input[i])
     {
       largest = input[i];
     }
   }
   difference = largest - smallest;
   var answer ="The difference is " + difference;
   showAnswer("diffAnswer","p1",answer);

 }

 function getSmallest(){
   var input = gatherInput('smallestInArray');
   if(input == []||input ==""){
     alert("Incorrect data, please enter a numeric value, and make sure not to input any spaces.");
     return;
   }

   var smallest = input[0];

   for(var i =0; i<input.length;i++){
     if(smallest >= input[i])
     {
       smallest = input[i];
     }

   }
   var answer = "The smallest number in the array is "+smallest;
   showAnswer("smallestAnswer","p3",answer);
 }

 function getSum(){
   var sum = 0;
   var input = document.getElementById('sum').value;
   input = parseInt(input);
   var parameterSum = [];
   if(input == ""){
     alert("Incorrect data, please enter a numeric value, and make sure not to input any spaces.");
     return;
   }
   while(input > 0)
   {
     parameterSum.push(input);
     input = input -1;
   }
   for (var i = 0; i < parameterSum.length; i++) {
     sum = sum +parameterSum[i];
   }
   var answer = "The sum is "+sum;
   showAnswer("sumAnswer","p2",answer);
 }

 function getReverse(){
   var input = gatherInput('reverseInput');
   var reversedArr = [];
   if(input == []||input ==""){
     alert("Incorrect data, please enter a numeric value, and make sure not to input any spaces.");
     return;
   }
   var x = input.length-1;
   for (var j = 0; j < input.length; j++) {
     reversedArr[j] = input[x];
     x= x-1;
   }

   var answer ="The reversed array is "+ reversedArr;
   showAnswer("reversedAnswer","p4",answer);
 }

function isPalindrome(){
  var answer;
  var inputData = document.getElementById("palindromeInput").value;
  console.log(inputData);
  var regEx = /[^A-Za-z0-9]/g;
  inputData =inputData.toLowerCase().replace(regEx,'');
  var reverseInput = inputData.split('').reverse().join('');
  if(inputData == reverseInput){
    answer=inputData + " is a palindrome!";
  }else {
    answer=inputData + " is not a palindrome!";
  }
  showAnswer("palindromeAnswer","p5",answer);
}

function clearAnswer(divID){
  var div = document.getElementById(divID);
  div.style.visibility="hidden";
}
function showAnswer(divID, pID, answerPhrase){
  var divAns=document.getElementById(divID);
  document.getElementById(pID).innerHTML=answerPhrase;
  divAns.style.visibility="visible";
}
