function validateForm() {
    // Obtener los valores de los campos
    const message = document.getElementById("message").value;
    const password = document.getElementById("password").value;
    const checkbox = document.getElementById("checkbox").checked;

    // Validación del campo mensaje
    if (message.trim() === "") {
        alert("El campo de mensaje no puede estar vacío.");
        return false;  // Evita que el formulario se envíe
    }

    // Validación de la contraseña
    if (password.length <= 5) {
        alert("La contraseña debe tener más de 5 caracteres.");
        return false;  // Evita que el formulario se envíe
    }

    // Validación del checkbox
    if (!checkbox) {
        alert("Debes aceptar los términos y condiciones.");
        return false;  // Evita que el formulario se envíe
    }

    // Si todas las validaciones pasan, se envía el formulario
    window.location.href = "https://www.youtube.com/";
    return true;
}
