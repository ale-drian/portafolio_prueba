
(function() {
emailjs.init("user_BKRoSvYJA2ncJXk2NIQjU");
})();
window.onload = function() {
    let nombre = document.getElementById("formulario_nombre").value;
    document.getElementById('portafolio_formulario').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_1sabzr7', 'template_9xpmmd7', this)
            .then(function() {
                swal("Mensaje enviado", "Tu mensaje fué enviado. Te responderé a la brevedad " + nombre + ".", "success");
                document.getElementById('portafolio_formulario').reset();
            }, function(error) {
                swal("Mensaje no enviado", "Ocurrió un problema, intenta mas tarde.", "error");
                console.log('Ocurrio un problema', error);
            });
    });
}