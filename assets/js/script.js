import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

document.addEventListener('DOMContentLoaded', function () {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Tu mensaje fue enviado!');
});