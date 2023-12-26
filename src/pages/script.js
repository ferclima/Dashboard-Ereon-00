document.addEventListener('DOMContentLoaded', function() {
    fetch('../output.json')
        .then(response => response.json())
        .then(data => {
            console.log(data); // Aqui você pode usar os dados importados
        })
        .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));
});