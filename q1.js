var fname = prompt("Enter Your First Name: ");
var lname = prompt("Enter Your Last Name: ");
var confname = prompt("Are You "+ fname+ " " + lname +"?");
if (confname) {
    
    var bYear = prompt("Enter your birth year:");
    var age = 2023 - parseInt(bYear);

    alert("Welcome, " + fname + " " + lname + "! Your age is " + age + " years.");
} else {
    alert("Please repeat The Process !");
}

