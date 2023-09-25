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

  const carousel2 = document.querySelector(".carousel2 ul");
  const items2 = document.querySelectorAll(".carousel2 ul li");
  const prevButton2 = document.querySelector(".carousel2-prev");
  const nextButton2 = document.querySelector(".carousel2-next");
  const itemCount2 = items2.length;
  const itemsPerPage2 = 3; // Altere o número de itens exibidos por página aqui
  let currentIndex2 = 0;

  // Função para avançar o carrossel
  function nextSlide2() {
    currentIndex2 += itemsPerPage2;
      if (currentIndex2 >= itemCount2) {
        currentIndex2 = 0;
      }
      updateCarousel2();
  }

  // Função para voltar o carrossel
  function prevSlide2() {
      currentIndex2 -= itemsPerPage2;
      if (currentIndex2 < 0) {
          currentIndex2 = itemCount - itemsPerPage2;
      }
      updateCarousel2();
  }

  // Atualiza o estado do carrossel com base no índice atual
  function updateCarousel2() {
      const translateX = -currentIndex2 * (100 / itemsPerPage2);
      carousel2.style.transform = `translateX(${translateX}%)`;
  }

  // Adiciona os ouvintes de eventos para os botões de navegação
  nextButton2.addEventListener("click", nextSlide2);
  prevButton2.addEventListener("click", prevSlide2);

  const carousel3 = document.querySelector(".carousel3 ul");
  const items3 = document.querySelectorAll(".carousel3 ul li");
  const prevButton3 = document.querySelector(".carousel3-prev");
  const nextButton3 = document.querySelector(".carousel3-next");
  const itemCount3 = items3.length;
  const itemsPerPage3 = 3; // Altere o número de itens exibidos por página aqui
  let currentIndex3 = 0;

  // Função para avançar o carrossel
  function nextSlide3() {
      currentIndex3 += itemsPerPage3;
      if (currentIndex3 >= itemCount3) {
          currentIndex3 = 0;
      }
      updateCarousel3();
  }

  // Função para voltar o carrossel
  function prevSlide3() {
      currentIndex3 -= itemsPerPage3;
      if (currentIndex3 < 0) {
          currentIndex3 = itemCount3 - itemsPerPage3;
      }
      updateCarousel3();
  }

  // Atualiza o estado do carrossel com base no índice atual
  function updateCarousel3() {
      const translateX = -currentIndex3 * (100 / itemsPerPage3);
      carousel3.style.transform = `translateX(${translateX}%)`;
  }

  // Adiciona os ouvintes de eventos para os botões de navegação
  nextButton3.addEventListener("click", nextSlide3);
  prevButton3.addEventListener("click", prevSlide3);
  
});