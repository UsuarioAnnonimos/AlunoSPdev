// Script para estilizar e adicionar interações
document.addEventListener('DOMContentLoaded', () => {
    const serviceItems = document.querySelectorAll('#SERVIÇOS li');
    
    // Adiciona um efeito de hover nos itens de serviço
    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = '#e0f7fa';
            item.style.transition = 'background-color 0.3s ease';
        });
        item.addEventListener('mouseleave', () => {
            item.style.backgroundColor = '';
        });
    });

    // Scroll suave para âncoras
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20, // Ajusta a posição ao rolar
                    behavior: 'smooth'
                });
            }
        });
    });
});
