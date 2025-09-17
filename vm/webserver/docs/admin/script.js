document.getElementById("terminaliframe").src = "http://" + location.host + ":8080";

if (localStorage.getItem("SessionID") != "5169bc07cec55c46d3fc619eee92ccf7") {
    window.location.replace("./login");
}
