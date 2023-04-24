const date = document.getElementById("date");
const month = document.getElementById("month");
const year = document.getElementById("year");
const btn = document.getElementById("submit");
const card = document.getElementById("card");
const res = document.createElement("h3");


btn.addEventListener("click", () => {
    res.innerHTML = "";
    let birthDate = date.value;
    let birthMonth = month.value;
    let birthYear = year.value;
    if (birthDate.length > 2 || birthMonth.length > 2 || birthYear.length > 4) {
        res.innerText = "Please enter valid data for all fields !";
        card.appendChild(res);
    } else {
        let currentDate = new Date().getDate();
        let currentMonth = new Date().getMonth() + 1;
        let currentYear = new Date().getFullYear();
        let calMonths = [30, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (currentDate < birthDate) {
            currentDate = currentDate + calMonths[currentMonth - 1];
            currentMonth = currentMonth - 1;
        }
        if (birthMonth > currentMonth) {
            currentMonth = currentMonth + 12;
            currentYear = currentYear - 1;
        }
        let days = currentDate - birthDate;
        let months = currentMonth - birthMonth;
        let years = currentYear - birthYear;

        res.innerText = `Your Age is ${years} years ${months} months ${days} days`;
        card.appendChild(res);
    }
});