window.addEventListener('DOMContentLoaded', (_) => {
    const input = document.getElementById('color-input');
    const output = document.getElementById('output');

    input.addEventListener('change', (_) => {
        output.style.color = input.value;
    })
});