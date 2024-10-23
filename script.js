document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    document.getElementById("response").innerText = `Gracias, ${name}! Tu mensaje ha sido enviado.`;
    this.reset(); // Limpiar el formulario
});
