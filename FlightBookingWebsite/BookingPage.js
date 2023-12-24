const OneWayButton = document.querySelector(".FlightType1");
const RoundButton = document.querySelector(".FlightType");
var RoundGrey = document.getElementById("Grey1");
var StraightGrey = document.getElementById("Grey2");
var RoundWhite = document.getElementById("White1");
var StraightWhite = document.getElementById("White2");
const RefreshButton = document.querySelector(".RefreshButton");
var to_input = document.querySelector(".to-input");
var from_input = document.querySelector(".from-input");
var returnSection = document.querySelector(".ReturnDate");
const plusButton = document.getElementById("plusButton");
var male1= document.getElementById("male1");
var male2= document.getElementById("male2");
var male3= document.getElementById("male3");
var male4= document.getElementById("male4");
var female1= document.getElementById("female1");
var female2= document.getElementById("female2");
var female3= document.getElementById("female3");
var female4= document.getElementById("female4");
var female5= document.getElementById("female5");
var female6= document.getElementById("female6");
let activeButton = null;

OneWayButton.addEventListener("click", function () {
    if (activeButton) {
        activeButton.style.backgroundColor = "";
        activeButton.style.color = "";
    }

    OneWayButton.style.backgroundColor = "#276AFD";
    OneWayButton.style.color = "white";
    StraightWhite.classList.remove("hidden");
    StraightGrey.classList.add("hidden");
    RoundGrey.classList.remove("hidden");
    RoundWhite.classList.add("hidden");
    returnSection.classList.add("hidden");

    activeButton = OneWayButton;
});

RoundButton.addEventListener("click", function () {
    if (activeButton) {
        activeButton.style.backgroundColor = "";
        activeButton.style.color = "";
    }

    RoundButton.style.backgroundColor = "#276AFD";
    RoundButton.style.color = "white";
    RoundWhite.classList.remove("hidden");
    RoundGrey.classList.add("hidden");
    StraightWhite.classList.add("hidden");
    StraightGrey.classList.remove("hidden");
    returnSection.classList.remove("hidden");

    activeButton = RoundButton;
});
RoundButton.click();

var visibleMales = [male1];   
var visibleFemales = []; 
var hiddenMales = [male2,male3,male4];
var hiddenFemales = [female1,female2,female3,female4,female5,female6];

plusButton.addEventListener("click", function(){
    if(hiddenMales.length!=0){
        hiddenMales[0].classList.remove("hidden");
        visibleMales.push(hiddenMales[0]);
        hiddenMales.splice(0, 1);
    }
    else if(hiddenFemales.length!=0){
        hiddenFemales[0].classList.remove("hidden");
        visibleFemales.push(hiddenFemales[0]);
        hiddenFemales.splice(0, 1);
    }
})

   