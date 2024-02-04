function validarFormulario() {
    var pais = document.getElementById("pais").value;
    var estado = document.getElementById("estado").value;
    var municipio = document.getElementById("municipio").value;
    var localidad = document.getElementById("localidad").value;

    if (pais === "" || estado === "" || municipio === "" || localidad === "") {
        alert("Por favor, completa todos los campos.");
        return false; // Evita que se envíe el formulario
    }
    return true; // Permite el envío del formulario si todos los campos están completos
}