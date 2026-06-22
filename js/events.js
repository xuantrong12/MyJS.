// CLICK
document.getElementById("btnClick").addEventListener("click", function () {
    document.getElementById("clickResult").textContent =
        "Bạn đã nhấn nút!";
});

// CHANGE
document.getElementById("colorSelect").addEventListener("change", function () {
    document.getElementById("colorText").style.color = this.value;
});

// KEYUP
document.getElementById("nameInput").addEventListener("keyup", function () {
    document.getElementById("preview").textContent = this.value;
});

// SUBMIT
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    document.getElementById("submitResult").textContent =
        "Form đã được gửi (đã chặn tải lại trang)";
});
