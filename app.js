const dayIns = document.getElementById("day");
const monthIns = document.getElementById("month");
const yrsIns = document.getElementById("year");

const dayOt = document.getElementById("DD");
const monthOt = document.getElementById("MM");
const yearOt = document.getElementById("YY");

const form = document.querySelector("form");

form.addEventListener("submit", submitFnc);

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months=[31,28,31,30,31,30,31,31,30,31,30,31];

// creating a validation function
function validator() {
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
})
    return validate;
}
// fucntion that calculates the time inputted from current time
function submitFnc(e) {
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
