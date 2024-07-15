//Animação da mudança de cor da navbar
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header');
    header.classList.toggle('rolagem', this.window.scrollY > 350)
})

//Utilidade para jogar o site para cima novamente:
let scrollBtn = document.querySelector('#scrollBtn');



function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // pode ser o "smooth" ou o "auto" também
    });
}

window.onscroll = function () {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollBtn").style.display = "block";
    } else {
        document.getElementById("scrollBtn").style.display = "none";
    }
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });

function openNav() {
    document.getElementById("myNav").style.width = '100%';
}

function closeNav() {
    document.getElementById("myNav").style.width = '0%';
}

// Adiciona um evento de clique ao documento
document.addEventListener('click', function(event) {
    // Verifica se o alvo do clique não é o botão de abrir o menu nem nenhum de seus elementos filhos
    if (!event.target.matches('.nav-button-mobile') && !event.target.closest('.overlay-content')) {
        // Fecha o menu se estiver aberto
        closeNav();
    }
});


// Adiciona um evento de redimensionamento da janela para verificar o tamanho da tela
window.addEventListener('resize', function() {
    // Verifica se a largura da janela é menor que 768 pixels (tamanho de tela para dispositivos móveis)
    if (window.innerWidth < 768) {
        // Fecha o menu se estiver aberto
        closeNav();
    }
});


