const OneWayButton = document.querySelector(".FlightType1");
const RoundButton = document.querySelector(".FlightType");
var RoundGrey = document.getElementById("Grey1");
var StraightGrey = document.getElementById("Grey2");
var RoundWhite = document.getElementById("White1");
var StraightWhite = document.getElementById("White2");
var RefreshButton = document.querySelector(".RefreshButton");
var returnSection = document.querySelector(".ReturnDate");

var to_input = document.getElementById("to");
var from_input = document.getElementById("from");

var departuredate = document.querySelector(".DepartureDate .departure_input");
var returndate = document.querySelector(".ReturnDate .departure_input");

var first_name = document.getElementById("first_name");
var family_name = document.getElementById("family_name");
var age = document.getElementById("age");
var nationality = document.getElementById("nationality");
var num_pass = document.getElementById("num_pass");

var searchButton = document.querySelector(".SearchButton");

from_input.addEventListener("input", checkInputs);
to_input.addEventListener("input", checkInputs);
departuredate.addEventListener("input", checkInputs);
returndate.addEventListener("input", checkInputs);
first_name.addEventListener("input", checkInputs);
family_name.addEventListener("input", checkInputs);
age.addEventListener("input", checkInputs);
nationality.addEventListener("input", checkInputs);
num_pass.addEventListener("input", checkInputs);

function checkInputs() {
    if(activeButton===RoundButton){
    var areInputsFilled = from_input.value.trim() !== "" && to_input.value.trim() !== "" && departuredate.value.trim() !== "" && returndate.value.trim() !== "" && first_name.value.trim() !== "" && family_name.value.trim() !== "" && age.value.trim() !== "" && nationality.value.trim() !== "" && num_pass.value.trim() !== "";
    }
    else{
        var areInputsFilled = from_input.value.trim() !== "" && to_input.value.trim() !== "" && departuredate.value.trim() !== "" && first_name.value.trim() !== "" && family_name.value.trim() !== "" && age.value.trim() !== "" && nationality.value.trim() !== "" && num_pass.value.trim() !== ""; 
    }

    if (areInputsFilled) {
      searchButton.classList.remove("hidden");
    } else {
      searchButton.classList.add("hidden");
    }
  }

const plusButton = document.getElementById("plusButton");
var male1= document.getElementById("male1");
var male2= document.getElementById("male2");
var male3= document.getElementById("male3");
var male4= document.getElementById("male4");
var Imgfemale1= document.getElementById("Imgfemale1");
var Imgfemale2= document.getElementById("Imgfemale2");
var Imgfemale3= document.getElementById("Imgfemale3");
var Imgfemale4= document.getElementById("Imgfemale4");
var Imgmale1= document.getElementById("Imgmale1");
var Imgmale2= document.getElementById("Imgmale2");
var Imgmale3= document.getElementById("Imgmale3");
var Imgmale4= document.getElementById("Imgmale4");
var info1= document.getElementById("info1");
var info2= document.getElementById("info2");
var info3= document.getElementById("info3");
var info4= document.getElementById("info4");
var info =[info1,info2,info3,info4];
var passengerNum=1;
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


RefreshButton.addEventListener("click", function(){
    to_input.value="";
    from_input.value="";
})

var visibleMales = [male1];   
var hiddenMales = [male2,male3,male4];


plusButton.addEventListener("click", function(){

    if(passengerNum<5){
    if(hiddenMales.length!=0){
        hiddenMales[0].classList.remove("hidden");
        hiddenMales[0].click();
        visibleMales.push(hiddenMales[0]);
        hiddenMales.splice(0, 1);
        for(let i=0; i<4; i++){
            info[0].classList.add("hidden");
        }
        info[passengerNum].classList.remove("hidden");
        passengerNum++;
    }
}
else{
    return;
}
})
var male_button1 = document.getElementById("M1");
var female_button1 = document.getElementById("F1");
let activeGenderButton1 = null;

var male_button2 = document.getElementById("M2");
var female_button2 = document.getElementById("F2");
let activeGenderButton2 = null;

var male_button3 = document.getElementById("M3");
var female_button3 = document.getElementById("F3");
let activeGenderButton3 = null;

var male_button4 = document.getElementById("M4");
var female_button4 = document.getElementById("F4");
let activeGenderButton4 = null;

male_button1.addEventListener("click", function () {
    if (activeGenderButton1 === female_button1 || activeGenderButton1 === null) {
        male_button1.style.backgroundColor = "black";
        male_button1.style.color = "white";

        if (activeGenderButton1 !== null) {
            activeGenderButton1.style.backgroundColor = "#dee0e6";
            activeGenderButton1.style.color = "black";
        }
        Imgmale1.classList.remove("hidden");
        Imgfemale1.classList.add("hidden");
        activeGenderButton1 = male_button1;
    }
});

female_button1.addEventListener("click", function () {
    if (activeGenderButton1 === male_button1 || activeGenderButton1 === null) {
        female_button1.style.backgroundColor = "black";
        female_button1.style.color = "white";

        if (activeGenderButton1 !== null) {
            activeGenderButton1.style.backgroundColor = "#dee0e6";
            activeGenderButton1.style.color = "black";
        }

        Imgfemale1.classList.remove("hidden");
        Imgmale1.classList.add("hidden");
        activeGenderButton1 = female_button1;
    }
});

male_button1.addEventListener("click", function () {
    if (activeGenderButton1 === female_button1 || activeGenderButton1 === null) {
        male_button1.style.backgroundColor = "black";
        male_button1.style.color = "white";

        if (activeGenderButton1 !== null) {
            activeGenderButton1.style.backgroundColor = "#dee0e6";
            activeGenderButton1.style.color = "black";
        }
        Imgmale1.classList.remove("hidden");
        Imgfemale1.classList.add("hidden");
        activeGenderButton1 = male_button1;
    }
});

female_button1.addEventListener("click", function () {
    if (activeGenderButton1 === male_button1 || activeGenderButton1 === null) {
        female_button1.style.backgroundColor = "black";
        female_button1.style.color = "white";

        if (activeGenderButton1 !== null) {
            activeGenderButton1.style.backgroundColor = "#dee0e6";
            activeGenderButton1.style.color = "black";
        }

        Imgfemale1.classList.remove("hidden");
        Imgmale1.classList.add("hidden");
        activeGenderButton1 = female_button1;
    }
});

male_button2.addEventListener("click", function () {
    if (activeGenderButton2 === female_button2 || activeGenderButton2 === null) {
        male_button2.style.backgroundColor = "black";
        male_button2.style.color = "white";

        if (activeGenderButton2 !== null) {
            activeGenderButton2.style.backgroundColor = "#dee0e6";
            activeGenderButton2.style.color = "black";
        }
        Imgmale2.classList.remove("hidden");
        Imgfemale2.classList.add("hidden");
        activeGenderButton2 = male_button2;
    }
});

female_button2.addEventListener("click", function () {
    if (activeGenderButton2 === male_button2 || activeGenderButton2 === null) {
        female_button2.style.backgroundColor = "black";
        female_button2.style.color = "white";

        if (activeGenderButton2 !== null) {
            activeGenderButton2.style.backgroundColor = "#dee0e6";
            activeGenderButton2.style.color = "black";
        }

        Imgfemale2.classList.remove("hidden");
        Imgmale2.classList.add("hidden");
        activeGenderButton2 = female_button2;
    }
});

male_button3.addEventListener("click", function () {
    if (activeGenderButton3 === female_button3 || activeGenderButton3 === null) {
        male_button3.style.backgroundColor = "black";
        male_button3.style.color = "white";

        if (activeGenderButton3 !== null) {
            activeGenderButton3.style.backgroundColor = "#dee0e6";
            activeGenderButton3.style.color = "black";
        }
        Imgmale3.classList.remove("hidden");
        Imgfemale3.classList.add("hidden");
        activeGenderButton3 = male_button3;
    }
});

female_button3.addEventListener("click", function () {
    if (activeGenderButton3 === male_button3 || activeGenderButton3 === null) {
        female_button3.style.backgroundColor = "black";
        female_button3.style.color = "white";

        if (activeGenderButton3 !== null) {
            activeGenderButton3.style.backgroundColor = "#dee0e6";
            activeGenderButton3.style.color = "black";
        }

        Imgfemale3.classList.remove("hidden");
        Imgmale3.classList.add("hidden");
        activeGenderButton3 = female_button3;
    }
});

male_button4.addEventListener("click", function () {
    if (activeGenderButton4 === female_button4 || activeGenderButton4 === null) {
        male_button4.style.backgroundColor = "black";
        male_button4.style.color = "white";

        if (activeGenderButton4 !== null) {
            activeGenderButton4.style.backgroundColor = "#dee0e6";
            activeGenderButton4.style.color = "black";
        }
        Imgmale4.classList.remove("hidden");
        Imgfemale4.classList.add("hidden");
        activeGenderButton4 = male_button4;
    }
});

female_button4.addEventListener("click", function () {
    if (activeGenderButton4 === male_button4 || activeGenderButton4 === null) {
        female_button4.style.backgroundColor = "black";
        female_button4.style.color = "white";

        if (activeGenderButton4 !== null) {
            activeGenderButton4.style.backgroundColor = "#dee0e6";
            activeGenderButton4.style.color = "black";
        }

        Imgfemale4.classList.remove("hidden");
        Imgmale4.classList.add("hidden");
        activeGenderButton4 = female_button4;
    }
});

male_button1.click();
male_button2.click();
male_button3.click();
male_button4.click();

let activePassenger= null;
male1.addEventListener("click",function(){
    if (activePassenger !== male1 || activePassenger === null) {
    Imgfemale1.style.backgroundColor = "#c0cde6";
    Imgmale1.style.backgroundColor = "#c0cde6";
    info1.classList.remove("hidden");
    info2.classList.add("hidden");
    info3.classList.add("hidden");
    info4.classList.add("hidden");
    if(activePassenger!==null){
    var Activeimages =activePassenger.querySelectorAll("img");
    Activeimages.forEach(function (image) {
        image.style.backgroundColor = "white";
    
    })
    }
} 
    activePassenger=male1;
})
male2.addEventListener("click",function(){
    if (activePassenger !== male2 || activePassenger === null) {
    Imgfemale2.style.backgroundColor = "#c0cde6";
    Imgmale2.style.backgroundColor = "#c0cde6";
    info1.classList.add("hidden");
    info2.classList.remove("hidden");
    info3.classList.add("hidden");
    info4.classList.add("hidden");
    if(activePassenger!==null){
        var Activeimages =activePassenger.querySelectorAll("img");
        Activeimages.forEach(function (image) {
            image.style.backgroundColor = "white";
        
        })
        }
    }
    activePassenger=male2;
})

male3.addEventListener("click",function(){
    if (activePassenger !== male3 || activePassenger === null) {
    Imgmale3.style.backgroundColor = "#c0cde6";
    Imgfemale3.style.backgroundColor = "#c0cde6";
    info1.classList.add("hidden");
    info2.classList.add("hidden");
    info3.classList.remove("hidden");
    info4.classList.add("hidden");
    if(activePassenger!==null){
        var Activeimages =activePassenger.querySelectorAll("img");
        Activeimages.forEach(function (image) {
            image.style.backgroundColor = "white";
        
        })
        }
    }
    activePassenger=male3;
})
male4.addEventListener("click",function(){
    if (activePassenger !== male4 || activePassenger === null) {
    Imgmale4.style.backgroundColor = "#c0cde6";
    Imgfemale4.style.backgroundColor = "#c0cde6";
    info1.classList.add("hidden");
    info2.classList.add("hidden");
    info3.classList.add("hidden");
    info4.classList.remove("hidden");
    if(activePassenger!==null){
        var Activeimages =activePassenger.querySelectorAll("img");
        Activeimages.forEach(function (image) {
            image.style.backgroundColor = "white";
        
        })
        }
    }
    activePassenger=male4;
})


male1.click();

   