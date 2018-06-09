//********** PACKAGES BUTTONS ********** 
// TAKES YOU TO CONTACT PAGE
$(document).ready(function () {
    $("#button1").click(function () {
        window.location = "contact.html";
    });
    $("#button2").click(function () {
        window.location = "contact.html";
    });
    
    // CHANGE NAVIGATION COLORS - DOM manip

$("a.navlinks").css("color", "#6E4D44");  
$("a#title").css("color","#8093B2");
$(".home nav#navbar > ul > li:nth-child(2) a").css("color", "white");
$(".services nav#navbar > ul > li:nth-child(3) a").css("color", "white");
$(".about nav#navbar > ul > li:nth-child(4) a").css("color", "white");
$(".contact nav#navbar > ul > li:nth-child(5) a").css("color", "white");
$("footer li").css("color", "white");
$(".designby").css("color", "white");
//$(".contact.valid").css("padding-top", "75px");
    

    

// FORM - DOM manip
// Remove form border
$(function() {
    $("fieldset").css("border", "none");
});



// BUTTON HOVER - changes opacity - DOM manip
$(".buttons").mouseenter(function () {
    $(this).fadeTo(100, 0.4, function () {
        $(".buttons").mouseleave(function () {
            $(this).fadeTo(100, 1);
        });
    });
})
})




// ************* MAP ****************
// initialize       
function init() {
    var mapOptions = {
        center: new google.maps.LatLng(40.8025, -105.5917),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 13
    };

    var venueMap;
    venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}

// load 
function loadScript() {
    var script = document.createElement('script');
    script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=init"
    document.body.appendChild(script);
}

// LOADS WITH PAGE
//        window.onload = loadScript;

// SHOW AND HIDE MAP -- DOM Manipulation
function showMap() {
    $("#directions").on('click', function () {
        $("#map").show();
        $("#directions").val("Hide map");
        $(loadScript).show();
        hideMap();
    });
}

function hideMap() {
    $("#directions").click(function () {
        $("#directions").val("Show map");
        $("#map").hide();
        showMap();
    });
}

// LOAD FUNCTION
showMap();
//        hideMap();


//DOM Manipulation, set form onSubmit to validator
//document.getElementById("contactForm").setAttribute("onSubmit", "Validate()");

//****** FORM VALIDATION ******
        function Validate() {

            //initiate variable with input values
            var fname = document.getElementById('firstname').value;
            var lname = document.getElementById('lastname').value;
            var email = document.getElementById('email').value;
            var address = document.getElementById('address').value;
            var city = document.getElementById('city').value;
            var states = document.getElementById('dropdown').value;
            var zipcode = document.getElementById('zipcode').value;
            //            var package = document.getElementsByName('package').value;
            //            var payment = document.getElementsByName('payment').value;

            var isValid = true;


            //validate first name not empty
            if (fname == "") {
                document.getElementById('fnFB').innerHTML = "* This is Required";
                isValid = false;
            }else if (isValid!=false) {
                document.getElementById('fnFB').innerHTML = "";
                isValid = true;
            } else {
                document.getElementById('fnFB').innerHTML = "";
            }

            //validate last name not empty
            if (lname == "") {
                document.getElementById('lnFB').innerHTML = "* This is Required";
                isValid = false;
            } else if (isValid!=false) {
                document.getElementById('lnFB').innerHTML = "";
                isValid = true;
            } else {
                document.getElementById('lnFB').innerHTML = "";
            }

            //validate email not empty
            if (email == "" || !email.includes("@") || !email.includes(".")) {
                document.getElementById('emailFB').innerHTML = "* This is not a valid email address.";
                isValid = false;
            } else if (isValid!=false) {
                document.getElementById('emailFB').innerHTML = "";
                isValid = true;
            } else {
                document.getElementById('emailFB').innerHTML = "";
            }

            //validate address not empty
            if (address == "") {
                document.getElementById('addressFB').innerHTML = "* This is Required";
                isValid = false;
            } else if (isValid!=false) {
                document.getElementById('addressFB').innerHTML = "";
                isValid = true;
            } else {
                document.getElementById('addressFB').innerHTML = "";
            }

            //validate city not empty
            if (city == "") {
                document.getElementById('cityFB').innerHTML = "* This is Required";
                isValid = false;
            } else if (isValid!=false) {
                document.getElementById('cityFB').innerHTML = "";
                isValid = true;
            } else {
                document.getElementById('cityFB').innerHTML = "";
            }

            //validate state not empty
            if (states == "choose") { document.getElementById('stateFB').innerHTML = "* This is Required"; 
                isValid = false; 
            } else if (isValid!=false) {
                document.getElementById('stateFB').innerHTML = "";
                isValid = true; 
            } else {
                document.getElementById('stateFB').innerHTML = "";
            }
        
            //validate zipcode not empty
            if (zipcode == "") {
                document.getElementById('zipcodeFB').innerHTML = "* This is Required";
                isValid = false;
            } else if (isValid!=false) {
                document.getElementById('zipcodeFB').innerHTML = "";
                isValid = true;
            } else {
                document.getElementById('zipcodeFB').innerHTML = "";
            }

            //validate package not empty
            var pack1 = document.getElementById('package1').checked;
            var pack2 = document.getElementById('package2').checked;


            if ((pack1 == false) && (pack2 == false)) {
                document.getElementById('packageFB').innerHTML = "* This is required";
                isValid = false;
            } else if (isValid!=false) {
                document.getElementById('packageFB').innerHTML = "";
                isValid = true;
            } else {
                document.getElementById('packageFB').innerHTML = "";
            }

            //validate payment not empty
//            var pay1 = document.getElementById('amex').checked;
//            var pay2 = document.getElementById('visa').checked;
//            var pay3 = document.getElementById('mc').checked;
//            var pay4 = document.getElementById('discover').checked;
//
//            if ((pay1 == false) && (pay2 == false) && (pay3 == false) && (pay4 == false)) {
//                document.getElementById('payFB').innerHTML = "* This is required";
//                isValid = false;
//            } else {
//                document.getElementById('payFB').innerHTML = "";
//                isValid = true;
//            }

        if (isValid == true) {
            return true
        } else {
            return false;
            }
        }   //****** END FORM VALIDATION FUNCTION ******

