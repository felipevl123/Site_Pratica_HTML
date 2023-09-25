document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel ul");
  const items = document.querySelectorAll(".carousel ul li");
  const prevButton = document.querySelector(".carousel-prev");
  const nextButton = document.querySelector(".carousel-next");
  const itemCount = items.length;
  const itemsPerPage = 3; // Altere o número de itens exibidos por página aqui
  let currentIndex = 0;

  // Função para avançar o carrossel
  function nextSlide() {
      currentIndex += itemsPerPage;
      if (currentIndex >= itemCount) {
          currentIndex = 0;
      }
      updateCarousel();
  }

  // Função para voltar o carrossel
  function prevSlide() {
      currentIndex -= itemsPerPage;
      if (currentIndex < 0) {
          currentIndex = itemCount - itemsPerPage;
      }
      updateCarousel();
  }

  // Atualiza o estado do carrossel com base no índice atual
  function updateCarousel() {
      const translateX = -currentIndex * (100 / itemsPerPage);
      carousel.style.transform = `translateX(${translateX}%)`;
  }

  // Adiciona os ouvintes de eventos para os botões de navegação
  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);
});
