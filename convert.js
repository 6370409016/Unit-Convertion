

 let saveFile = () => {

var enterValue = document.getElementsByClassName("input-text")[0].value;



var kg= 2.20462*enterValue;
var pound=0.453592*enterValue;
var litre=0.264172*enterValue;
var gallon=3.78541*enterValue;
var meter=3.28084*enterValue;
var feet=0.3048*enterValue;

document.querySelector(".Convert-All").addEventListener("click", function(){
   document.querySelector(".Met-p").innerHTML="<p>"+enterValue+" Meters = "+feet+" Feets | "+enterValue+" feet = "+meter+" Meters. </p>";
    document.querySelector(".Lit-p").innerHTML="<p>"+enterValue+" Litres = "+gallon+" Gallons | "+enterValue+" Gallons = "+litre+" Litres. </p>";
     document.querySelector(".Kg-p").innerHTML="<p>"+enterValue+" Kilograms = "+pound+" Pounds | "+enterValue+" Pounds = "+kg+" Kilograms. </p>";
});

document.querySelector(".Length").addEventListener('click', function(){
   document.querySelector(".Met-p").innerHTML="<p>"+enterValue+" Meters = "+feet+" Feets | "+enterValue+" feet = "+meter+" Meters. </p>";
});

document.querySelector(".Volume").addEventListener('click', function(){
  document.querySelector(".Lit-p").innerHTML="<p>"+enterValue+" Litres = "+gallon+" Gallons | "+enterValue+" Gallons = "+litre+" Litres. </p>";
});

document.querySelector(".Mass").addEventListener('click', function(){
  document.querySelector(".Kg-p").innerHTML="<p>"+enterValue+" Kilograms = "+pound+" Pounds | "+enterValue+" Pounds = "+kg+" Kilograms. </p>";
});



};
