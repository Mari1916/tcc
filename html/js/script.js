document.addEventListener('DOMContentLoaded', function() {

    const buttons = document.querySelectorAll('.destino button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Esta funcionalidade ainda não foi implementada.');
        });
    });
});

document.getElementById('search-button').addEventListener('click', function() {
    // Captura o valor do campo de texto
    var searchText = document.getElementById('search-input').value;
    
    // Verifica se o campo de busca não está vazio
    if(searchText.trim() !== "") {
        // Aqui você pode implementar a lógica da pesquisa, como redirecionar para outra página ou filtrar conteúdo
        alert('Você pesquisou por: ' + searchText);
        
        // Exemplo: Redirecionando para uma página de resultados
        // window.location.href = "resultados.html?search=" + encodeURIComponent(searchText);
    } else {
        alert('Por favor, insira um termo de pesquisa.');
    }
});

function toggleAccessibilityMenu() {
    const menu = document.getElementById('accessibility-menu');
    const isHidden = menu.style.display === 'none' || menu.style.display === '';
    menu.style.display = isHidden ? 'block' : 'none';
    menu.setAttribute('aria-hidden', !isHidden);
}

function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

function increaseFontSize() {
    document.body.classList.toggle('large-font');
}

function resetAccessibility() {
    document.body.classList.remove('high-contrast', 'large-font');
}