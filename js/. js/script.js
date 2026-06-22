// Ẩn / hiện nội dung

const btnToggle = document.getElementById("btnToggle");
const content = document.getElementById("content");

btnToggle.addEventListener("click", function () {

    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }

});


// Kiểm tra form

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const result = document.getElementById("result");

    if (name === "" || email === "" || message === "") {
        result.textContent = "Vui lòng nhập đầy đủ thông tin!";
        result.style.color = "red";
    } else {
        result.textContent = "Gửi thông tin thành công!";
        result.style.color = "green";
    }

});
