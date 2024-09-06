function validateForm() {
    
    const message = document.getElementById("message").value;
    const password = document.getElementById("password").value;
    const checkbox = document.getElementById("checkbox").checked;

    
    if (message.trim() === "") {
        alert("El campo de mensaje no puede estar vacío.");
        return false;  // Evita que el formulario se envíe
    }

    
    if (password.length <= 5) {
        alert("La contraseña debe tener más de 5 caracteres.");
        return false;  // Evita que el formulario se envíe
    }

    
    if (!checkbox) {
        alert("Debes aceptar los términos y condiciones.");
        return false;  // Evita que el formulario se envíe
    }

    
    return true;
}
