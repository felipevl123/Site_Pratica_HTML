// Função para avançar para o próximo item no carrossel
function nextItem(carousel) {
  const carouselContainer = carousel.querySelector('.carousel-container');
  const carouselItems = carouselContainer.querySelector('.carousel-items');
  const itemWidth = carouselItems.querySelector('li').offsetWidth;

  carouselItems.style.transform = `translateX(-${itemWidth}px)`;

  // Mover o primeiro item para o final da lista
  carouselItems.appendChild(carouselItems.querySelector('li'));
  carouselItems.style.transition = 'none';

  // Reiniciar a transformação para trazer o primeiro item de volta à vista
  setTimeout(() => {
    carouselItems.style.transition = '';
    carouselItems.style.transform = 'translateX(0)';
  }, 0);
}

// Função para voltar para o item anterior no carrossel
function prevItem(carousel) {
  const carouselContainer = carousel.querySelector('.carousel-container');
  const carouselItems = carouselContainer.querySelector('.carousel-items');
  const itemWidth = carouselItems.querySelector('li').offsetWidth;

  carouselItems.style.transition = 'none';

  // Mover o último item para o início da lista
  carouselItems.insertBefore(
    carouselItems.querySelector('li:last-child'),
    carouselItems.querySelector('li:first-child')
  );

  // Definir a transformação para a posição correta
  carouselItems.style.transform = `translateX(-${itemWidth}px)`;

  // Adicionar um pequeno atraso antes de aplicar a transição
  setTimeout(() => {
    carouselItems.style.transition = '';
    carouselItems.style.transform = 'translateX(0)';
  }, 0);
}

// Função para adicionar os ouvintes de evento aos botões de navegação
function setupCarousel(carousel) {
  const prevButton = carousel.querySelector('.carousel-prev');
  const nextButton = carousel.querySelector('.carousel-next');

  prevButton.addEventListener('click', () => prevItem(carousel));
  nextButton.addEventListener('click', () => nextItem(carousel));
}

// Obter todos os elementos do carrossel e configurá-los
const carousels = document.querySelectorAll('.carousel');
carousels.forEach(setupCarousel);
