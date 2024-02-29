var elementoDuvidas = document.querySelectorAll(".duvida");

elementoDuvidas.forEach(function (duvida) {
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa');
    });
});