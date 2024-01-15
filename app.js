// const yrs=document.querySelector("years");
// const mths=document.querySelector("months");
// const dys=document.querySelector("days");
// Get the button and date input elements
const btn = document.querySelector("#submit");
const dateInput = document.querySelector("#date");

// Add an event listener to the button
btn.addEventListener("click", function() {
    // Get the date from the input
    const inputDate = new Date(dateInput.value);

    // Get the current date
    const currentDate = new Date();

    // Calculate the difference in years, months, and days
    const years = currentDate.getFullYear() - inputDate.getFullYear();
    const months = (currentDate.getMonth() - inputDate.getMonth()) + (12 * years);
    const days = (currentDate.getDate() - inputDate.getDate()) + (365 * years);

    // Display the results
    yrs.textContent = years + " years";
    mths.textContent = months + " months";
    dys.textContent = days + " days";
});