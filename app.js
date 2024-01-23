const dayIns = document.getElementById("day");
const monthIns = document.getElementById("month");
const yrsIns = document.getElementById("year");

const dayOt = document.getElementById("DD");
const monthOt = document.getElementById("MM");
const yearOt = document.getElementById("YY");

// const moment = require('moment');
const form = document.querySelector("form");

 

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months=[31,28,31,30,31,30,31,31,30,31,30,31];
// creating a validation function
function validator() {
    console.log('validator function called');
    const inputs = document.querySelectorAll("input");
    let validate = true;
// creating a foreach function that iterates throught the inputs to check whether there is information inputted in them and what to do when there isn't
    inputs.forEach((i) => {
    const parent = i.parentElement;
    if (!i.value) {
        i.style.borderColor = "red";
        parent.querySelector("small").innerText = "this field is required.";
        validate = false;
    } else if (monthIns.value > 12) {
        monthIns.style.borderColor = "red";
        monthIns.parentElement.querySelector("small").innerText = "must be a valid month";
        validate = false;
    } else if (dayIns.value > 31){
        dayIns.style.borderColor = "red";
        dayIns.parentElement.querySelector("small").innerText = "must be a valid day";
        validate = false;
    } else{
        i.style.borderColor = "black";
        parent.querySelector("small").innerText ="";
        validate = true;
    }
});

    return validate;
}
// fucntion that calculates the time inputted from current time
function submitFnc(e) {
    console.log('submit function called');
    e.preventDefault();
    if (validator()) {
        if (dayIns.value > day) {
            day = day + months[month - 1];
            month = month - 1;
        }
        if (monthIns.value > month) {
            month = month + 12;
            year = year - 1;
        }
        
        const finalDay = day - dayIns.value;
        const finalMonth = month - monthIns.value;
        const finalYear = year - yrsIns.value;
        
        dayOt.innerHTML = finalDay;
        monthOt.innerHTML = finalMonth;
        yearOt.innerHTML = finalYear;
    }
}
// adding an event listener for the submit button
form.addEventListener('submit', submitFnc);


// function submitFnc(e) {
//     e.preventDefault();
//     if (validator()) {
//         // Get the input date
//         const inputDate = moment([yrsIns.value, monthIns.value - 1, dayIns.value]);

//         // Get the current date
//         const currentDate = moment([year, month - 1, day]);

//         // Calculate the difference in years, months, and days
//         const years = currentDate.diff(inputDate, 'years');
//         inputDate.add(years, 'years');

//         const months = currentDate.diff(inputDate, 'months');
//         inputDate.add(months, 'months');

//         const days = currentDate.diff(inputDate, 'days');

//         // Display the results
//         yearOt.textContent = years + " years";
//         monthOt.textContent = months + " months";
//         dayOt.textContent = days + " days";
//     }
// }
