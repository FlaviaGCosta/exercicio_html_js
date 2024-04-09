document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('meuFormulario');
    const mensagem = document.getElementById('mensagem');

    formulario.onsubmit = function(e) {
        e.preventDefault();

        const campoA = parseInt(document.getElementById('campoA').value, 10);
        const campoB = parseInt(document.getElementById('campoB').value, 10);

        if(campoB > campoA) {
            mensagem.textContent = 'Formulário válido! O número B é maior que o número A.';
            mensagem.style.color = 'green';
        } else {
            mensagem.textContent = 'Formulário inválido! O número B deve ser maior que o número A.';
            mensagem.style.color = 'red';
        }
    };
});
