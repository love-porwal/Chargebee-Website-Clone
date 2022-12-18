
let account = JSON.parse(localStorage.getItem("account-data")) || [];

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let students = {
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,

    }

    if (students.name == "" || students.email == "" || students.password == "") {
        alert("fill all the details");
    } else {
        account.push(students);
        localStorage.setItem("account-data", JSON.stringify(account));
        alert("Signup Sucessfully");
        window.location = "login.html";
    }
})