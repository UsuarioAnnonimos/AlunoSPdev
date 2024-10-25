//Representa o botão de menu da classe celular no HTML
var iconeMenu = document.querySelector('.celular');
// Representa a  lista menu que está invisivel
var listaMenu = document.querySelector('.opcoes');
// Monitora quando há um click
iconeMenu.addEventListener('click', function() {
// Alternar classe "opcoes" para "mostrarMenu"
    alert('teste');
    listaMenu.classList.toggle('mostrarMenu');
});

