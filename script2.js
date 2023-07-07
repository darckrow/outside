var icon = document.querySelector('.icon');

window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        icon.classList.add('floating');
    } else {
        icon.classList.remove('floating');
    }
});

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("topButton").style.display = "block";
    } else {
        document.getElementById("topButton").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}