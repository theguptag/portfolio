function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    if (element.classList.contains('dark-mode')) {
        document.getElementById('dark-mode-img').style.opacity = 0;
        document.getElementById('light-mode-img').style.opacity = 1;
    } else {
        document.getElementById('dark-mode-img').style.opacity = 1;
        document.getElementById('light-mode-img').style.opacity = 0;
    }
}

