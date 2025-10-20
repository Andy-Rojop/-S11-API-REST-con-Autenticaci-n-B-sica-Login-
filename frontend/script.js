const form = document.getElementById("loginForm");
const alertContainer = document.getElementById("alertContainer");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            showAlert("success", data.message);
            localStorage.setItem("token", data.token);
        } else {
            showAlert("danger", data.message);
        }
    } catch (error) {
        showAlert("warning", "Error de conexión con el servidor");
    }
});

function showAlert(type, message) {
    alertContainer.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `;

    // El mensaje desaparece automáticamente después de 3 segundos
    setTimeout(() => {
        const alert = document.querySelector(".alert");
        if (alert) {
            alert.classList.remove("show");
            alert.classList.add("fade");
            setTimeout(() => alert.remove(), 100); // se remueve del DOM
        }
    }, 3000);
}
