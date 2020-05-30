function enroll(elem) {
    alertDiv = document.querySelector(".alert-success");
    alertDiv.innerHTML = "You have enrolled in " + elem.value;
    alertDiv.style.visibility = "visible";
    alertDiv.style.display = "block";

    setTimeout(function() {
        jQuery(".alert-success").fadeOut('slow');
    }, 1000);
}
