if (localStorage.getItem("SessionID") == "5169bc07cec55c46d3fc619eee92ccf7") {
    window.location.replace("../");
}

function getCreds() {
    if (localStorage.getItem("username") == "admin" &&
        localStorage.getItem("password") == "5169bc07cec55c46d3fc619eee92ccf7") {
        
        localStorage.setItem("SessionID", "5169bc07cec55c46d3fc619eee92ccf7");
        window.location.replace("../");
    }
}
