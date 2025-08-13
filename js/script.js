// Product Database com eventos e mídias
const productsDatabase = {
  salgados: [
    {
      id: "entreveiro",
      nome: "Entreveiro Especial",
      categoria: "salgados",
      descricao: "Entreveiro suculento temperado com ervas selecionadas e grelhado no ponto perfeito.",
      imagem: "entreveiro.jpeg",
    },
    {
      id: "picanha-premium",
      nome: "Picanha Premium",
      categoria: "salgados", 
      descricao: "Picanha nobre grelhada com sal grosso, acompanhada de molhos especiais da casa.",
      imagem: "maminha.jpeg",
    },
    {
      id: "pedaco",
      nome: "Pedaço de Picanha",
      categoria: "salgados", 
      descricao: "Pedaço suculento de picanha grelhada, perfeito para porções.",
      imagem: "pedacopicanha.jpg",
      destaque: true,
      evento: "evento_picanha",
      medias: [
        { tipo: "video", arquivo: "cortandocarne.mp4", nome: "Cortando a Carne Suculenta", descricao: "Cortando a carne suculenta" },
        { tipo: "imagem", arquivo: "pedacopicanha.jpg", nome: "Pedaço de Picanha", descricao: "Pedaço de picanha" },
        { tipo: "imagem", arquivo: "picanhamalpassada.jpg", nome: "Picanha Mal Passada", descricao: "Picanha mal passada" },
        { tipo: "imagem", arquivo: "picanhasnoespeto.jpg", nome: "Picanha no Espeto", descricao: "Picanha no espeto" }
      ]
    },
    {
      id: "paella-frutos",
      nome: "Paella de Frutos do Mar",
      categoria: "salgados",
      descricao: "Autêntica paella espanhola com frutos do mar frescos e açafrão importado.",
      imagem: "paelladefrutosdomar.jpeg",
      destaque: true,
      evento: "evento_paella"
    },
    {
      id: "paella-carnes",
      nome: "Paella de Carnes Brancas",
      categoria: "salgados",
      descricao: "Paella tradicional com carnes selecionadas e vegetais frescos do dia.",
      imagem: "paelladecarnebranca.jpeg",
      evento: "evento_paella"
    },
    {
      id: "risoto-palmito",
      nome: "Risoto de Palmito",
      categoria: "salgados",
      descricao: "Risoto cremoso com palmito pupunha e queijo parmesão envelhecido.",
      imagem: "risotodepalmito.jpeg",
    },
    {
      id: "costela-e-porco",
      nome: "Costela Bovina e Porco Inteiro Assado",
      categoria: "salgados",
      descricao: "Costela bovina e porco inteiro assados lentamente com temperos especiais da casa.",
      imagem: "costelaeporco.jpg",
      evento: "evento_costela",
      medias: [
        { tipo: "imagem", arquivo: "costelaeporco.jpg", nome: "Costela Bovina e Porco Inteiro Assado", descricao: "Costela bovina e porco inteiro assado" },
        { tipo: "imagem", arquivo: "costelas.jpg", nome: "Costelas", descricao: "Costelas suculentas" },
        { tipo: "imagem", arquivo: "costelasdelado.jpg", nome: "Costelas", descricao: "Costelas" },
        { tipo: "imagem", arquivo: "costelaseespetos.jpg", nome: "Costelas e Espetos", descricao: "Costelas e espetos" },
        { tipo: "imagem", arquivo: "costelaseumespeto.jpg", nome: "Costelas em um Espeto", descricao: "Costelas em um espeto" }
      ]
    },
    {
      id: "costelas-rotativas",
      nome: "Costelas",
      categoria: "salgados",
      descricao: "Costelas assadas em sistema rotativo para cocção uniforme e sabor único.",
      imagem: "costelasrotativas.jpg",
      evento: "evento_costela_especial"
    },
    {
      id: "entreveiro-daf",
      nome: "Entreveiro Corporativo",
      categoria: "salgados",
      descricao: "Entreveiro especialmente preparado para eventos corporativos e empresariais.",
      imagem: "entreveirodaf.jpg",
      evento: "evento_corporativo"
    },
    {
      id: "picanha2",
      nome: "Picanha no Espeto",
      categoria: "salgados",
      descricao: "Picanha no estilo tradicional brasileiro, grelhada na brasa.",
      imagem: "maminha2.jpg",
      evento: "evento_tradicional"
    },
    {
      id: "picanhas",
      nome: "Picanhas Especiais",
      categoria: "salgados",
      descricao: "Seleção especial de picanhas nobres para grandes celebrações.",
      imagem: "picanhas.jpg",
      evento: "evento_tradicional"
    }
  ],
  doces: [
    {
      id: "fondue-morango",
      nome: "Fondue de Morango",
      categoria: "doces",
      descricao: "Fondue de chocolate belga com morangos frescos e acompanhamentos variados.",
      imagem: "fonduedemorango.jpeg",
      evento: "evento_fondue"
    },
    {
      id: "waffle-banana",
      nome: "Waffle de Banana com Leite Condensado",
      categoria: "doces",
      descricao: "Waffle artesanal com banana e leite condensado caseiro.",
      imagem: "waffledebananacomleitecondensado.jpeg",
      evento: "evento_waffle"
    },
    {
      id: "waffle-morango",
      nome: "Waffle de Morango",
      categoria: "doces",
      descricao: "Waffle dourado servido com morangos frescos e chantilly aerado.",
      imagem: "waffledemorango.jpeg",
      evento: "evento_waffle"
    },
    {
      id: "pudim",
      nome: "Pudim Caseiro",
      categoria: "doces",
      descricao: "Pudim cremoso feito com ovos frescos e calda de caramelo artesanal.",
      imagem: "pudim.jpeg",
      evento: "evento_sobremesa"
    },
    {
      id: "fondue-banana",
      nome: "Fondue de Banana",
      categoria: "doces",
      descricao: "Fondue doce com banana caramelizada e chocolate meio amargo derretido.",
      imagem: "fonduedebanana.jpeg",
      evento: "evento_fondue"
    }
  ],
  saladas: [
    {
      id: "salada-abacaxi",
      nome: "Salada Tropical",
      categoria: "saladas",
      descricao: "Salada refrescante com abacaxi, folhas verdes e molho cítrico especial.",
      imagem: "saladadeabacaxi.jpeg",
      evento: "evento_salada"
    },
    {
      id: "salada-beterraba",
      nome: "Salada de Beterraba",
      categoria: "saladas",
      descricao: "Salada nutritiva com beterraba roxa, queijo frescal e nozes crocantes.",
      imagem: "saladadebeterraba.jpeg",
      evento: "evento_salada"
    },
    {
      id: "salada-tomate",
      nome: "Salada Caprese",
      categoria: "saladas",
      descricao: "Tomates frescos com cebola roxa, manjericão e azeite extravirgem.",
      imagem: "saladadetomateecebola.jpeg",
      evento: "evento_salada"
    },
    {
      id: "salada-mista-3",
      nome: "Salada Trio",
      categoria: "saladas",
      descricao: "Combinação harmoniosa de três saladas diferentes em uma porção generosa.",
      imagem: "saladamista1.jpeg",
      evento: "evento_salada_mista"
    },
    {
      id: "salada-mista-4",
      nome: "Salada Quarteto",
      categoria: "saladas",
      descricao: "Variedade completa com quatro tipos de saladas cuidadosamente balanceadas.",
      imagem: "saladamista2.jpeg",
      evento: "evento_salada_mista"
    }
  ]
};

// App State
let currentCategory = "todos";
let currentProduct = null;

// DOM Elements
const productsGrid = document.getElementById("productsGrid");
const categoryTabs = document.querySelectorAll(".category-tab");
const modal = document.getElementById("productModal");
const modalTitle = document.getElementById("modalTitle");
const modalMediaContainer = document.getElementById("modalMediaContainer");
const modalCurrentItemTitle = document.getElementById("modalCurrentItemTitle");
const modalCurrentItemDescription = document.getElementById("modalCurrentItemDescription");
const relatedProducts = document.getElementById("relatedProducts");
const closeModal = document.querySelector(".close-modal");

// Modal Media Carousel Elements
const mediaPrev = document.getElementById("mediaPrev");
const mediaNext = document.getElementById("mediaNext");
const mediaIndicators = document.getElementById("mediaIndicators");

let currentMediaIndex = 0;
let currentProductMedias = [];

// Mobile Menu Elements
const menuToggle = document.getElementById("menuToggle");

// Utility Functions
function getImagePath(imageName) {
  return `../img/${imageName}`;
}

function getVideoPath(videoName) {
  return `../img/${videoName}`;
}

// Get all products
function getAllProducts() {
  return [
    ...productsDatabase.salgados,
    ...productsDatabase.doces,
    ...productsDatabase.saladas,
  ];
}

// Filter products by category
function filterProducts(category) {
  if (category === "todos") {
    return getAllProducts();
  }
  return productsDatabase[category] || [];
}

// Get featured products
function getFeaturedProducts() {
  return getAllProducts().filter((product) => product.destaque);
}

// Get related products (same category, excluding current)
function getRelatedProducts(product) {
  return productsDatabase[product.categoria]
    .filter((p) => p.id !== product.id)
    .slice(0, 3);
}

// Get products from same event, with clicked product first
function getEventProducts(clickedProduct) {
  if (!clickedProduct.evento) return [clickedProduct];
  
  const eventProducts = getAllProducts().filter(p => p.evento === clickedProduct.evento);
  
  // Reorganizar para que o produto clicado apareça primeiro
  const reorderedProducts = [clickedProduct];
  eventProducts.forEach(product => {
    if (product.id !== clickedProduct.id) {
      reorderedProducts.push(product);
    }
  });
  
  return reorderedProducts;
}

// Create media items for carousel with specific order
function createMediaItems(clickedProduct) {
  let mediaItems = [];

  // Se o produto clicado tem mídias específicas, use-as
  if (clickedProduct.medias && clickedProduct.medias.length > 0) {
    mediaItems = clickedProduct.medias.map(media => ({
      tipo: media.tipo,
      src: media.tipo === 'video' ? getVideoPath(media.arquivo) : getImagePath(media.arquivo),
      alt: `${clickedProduct.nome} - ${media.tipo}`,
      nome: media.nome || clickedProduct.nome, // Usa o nome da mídia se existir
      descricao: media.descricao || clickedProduct.descricao // Usa a descrição da mídia se existir
    }));
  } else {
    // Obter produtos do evento com ordem baseada no produto clicado
    const eventProducts = getEventProducts(clickedProduct);

    mediaItems = eventProducts.map(eventProduct => ({
      tipo: 'imagem',
      src: getImagePath(eventProduct.imagem),
      alt: eventProduct.nome,
      nome: eventProduct.nome,
      descricao: eventProduct.descricao
    }));
  }

  // Garantir que sempre há pelo menos uma mídia
  if (mediaItems.length === 0) {
    mediaItems = [{
      tipo: 'imagem',
      src: getImagePath(clickedProduct.imagem),
      alt: clickedProduct.nome,
      nome: clickedProduct.nome,
      descricao: clickedProduct.descricao
    }];
  }

  return mediaItems;
}

// Render products with animation
function renderProducts(products) {
  productsGrid.innerHTML = products
    .map(
      (product, index) => `
        <div class="product-card" onclick="showProduct('${product.id}')" style="animation-delay: ${index * 0.1}s">
            <div class="product-image">
                <img src="${getImagePath(product.imagem)}" alt="${product.nome}" 
                     style="width: 100%; height: 100%; object-fit: cover;" 
                     loading="lazy" />
            </div>
            <div class="product-info">
                <h3>${product.nome}</h3>
                <p>${product.descricao.substring(0, 100)}...</p>
                <button class="view-details">Ver Detalhes</button>
            </div>
        </div>
    `
    )
    .join("");
    
  handleImageErrors();
}

// Render related products in modal
function renderRelatedProducts(products) {
  relatedProducts.innerHTML = products
    .map(
      (product) => `
        <div class="product-card" onclick="showProduct('${product.id}')">
            <div class="product-image" style="height: 180px;">
                <img src="${getImagePath(product.imagem)}" alt="${product.nome}" 
                     style="width: 100%; height: 100%; object-fit: cover;" 
                     loading="lazy" />
            </div>
            <div class="product-info" style="padding: 1rem;">
                <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem; color: #7E4A39;">${product.nome}</h3>
                <button class="view-details" style="padding: 0.5rem 1rem; font-size: 0.9rem;">Ver Detalhes</button>
            </div>
        </div>
      `
    )
    .join("");
    
  handleImageErrors();
}

function renderModalMediaCarousel(mediaItems) {
  currentProductMedias = mediaItems;
  currentMediaIndex = 0;

  renderCurrentMediaItem();

  // Renderiza indicadores somente se houver mais de uma mídia
  if (mediaItems.length > 1) {
    mediaIndicators.innerHTML = mediaItems
      .map(
        (_, index) =>
          `<span class="media-indicator${index === 0 ? ' active' : ''}" data-index="${index}" onclick="goToMedia(${index})"></span>`
      )
      .join('');

    mediaIndicators.style.display = 'flex';
    mediaPrev.style.display = 'flex';
    mediaNext.style.display = 'flex';
  } else {
    mediaIndicators.style.display = 'none';
    mediaPrev.style.display = 'none';
    mediaNext.style.display = 'none';
  }

  updateCurrentItemInfo();
  handleImageErrors();
}

function renderCurrentMediaItem() {
  const media = currentProductMedias[currentMediaIndex];
  if (!media) return;

  // Escapa aspas duplas para evitar problemas no HTML
  const nomeEsc = (media.nome || '').replace(/"/g, '&quot;');
  const descEsc = (media.descricao || '').replace(/"/g, '&quot;');

  if (media.tipo === 'video') {
    modalMediaContainer.innerHTML = `
      <div class="media-item active" data-index="${currentMediaIndex}" data-nome="${nomeEsc}" data-descricao="${descEsc}">
        <video src="${media.src}" alt="${media.alt}" muted playsinline preload="metadata">
          Seu navegador não suporta vídeos.
        </video>
        <div class="video-play-overlay" onclick="toggleVideo(${currentMediaIndex})"></div>
      </div>
    `;
  } else {
    modalMediaContainer.innerHTML = `
      <div class="media-item active" data-index="${currentMediaIndex}" data-nome="${nomeEsc}" data-descricao="${descEsc}">
        <img src="${media.src}" alt="${media.alt}" loading="lazy" />
      </div>
    `;
  }
}

function updateMediaCarousel() {
  renderCurrentMediaItem();

  // Atualiza indicadores
  document.querySelectorAll('.media-indicator').forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentMediaIndex);
  });

  // Atualiza info do item atual
  updateCurrentItemInfo();

  // Pausa todos os vídeos exceto o atual
  document.querySelectorAll('.media-item video').forEach((video, index) => {
    if (index !== 0) { // Só existe um vídeo no DOM agora
      video.pause();
      video.currentTime = 0;
      video.closest('.media-item').classList.remove('playing');
    }
  });
}

function updateCurrentItemInfo() {
  // Busca direto do array de mídias, não do DOM
  const media = currentProductMedias[currentMediaIndex];
  if (media) {
    modalTitle.textContent = media.nome || currentProduct.nome || '';
    modalCurrentItemTitle.textContent = media.nome || '';
    modalCurrentItemDescription.textContent = media.descricao || '';
  } else {
    modalTitle.textContent = currentProduct ? currentProduct.nome : '';
    modalCurrentItemTitle.textContent = '';
    modalCurrentItemDescription.textContent = '';
  }
}

function nextMedia() {
  if (currentProductMedias.length <= 1) return;
  currentMediaIndex = (currentMediaIndex + 1) % currentProductMedias.length;
  updateMediaCarousel();
}

function prevMedia() {
  if (currentProductMedias.length <= 1) return;
  currentMediaIndex = (currentMediaIndex - 1 + currentProductMedias.length) % currentProductMedias.length;
  updateMediaCarousel();
}

function goToMedia(index) {
  currentMediaIndex = index;
  updateMediaCarousel();
}

function toggleVideo(index) {
  const videoElement = document.querySelector(`[data-index="${index}"] video`);
  const mediaItem = videoElement.closest('.media-item');
  
  if (videoElement.paused) {
    // Pause all other videos first
    document.querySelectorAll('.media-item video').forEach(video => {
      video.pause();
      video.closest('.media-item').classList.remove('playing');
    });
    
    videoElement.play();
    mediaItem.classList.add('playing');
  } else {
    videoElement.pause();
    mediaItem.classList.remove('playing');
  }
}

// Show product modal with media carousel
function showProduct(productId) {
  const product = getAllProducts().find((p) => p.id === productId);
  if (!product) return;

  currentProduct = product;
  modalTitle.textContent = product.nome;

  // Create and render media carousel with clicked product first
  const mediaItems = createMediaItems(product);
  renderModalMediaCarousel(mediaItems);

  const related = getRelatedProducts(product);
  renderRelatedProducts(related);

  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  
  // Track analytics
  AnalyticsHelper.trackProductView(productId);
}

function handleImageErrors() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    // Remove listeners anteriores para evitar duplicação
    img.removeEventListener('error', handleImageError);
    img.removeEventListener('load', handleImageLoad);
    
    // Adiciona novos listeners
    img.addEventListener('error', handleImageError);
    img.addEventListener('load', handleImageLoad);
  });
}

function handleImageError(event) {
  const img = event.target;
  console.log('Erro ao carregar imagem:', img.src);
  
  // Verificar se já tentou recarregar
  if (!img.dataset.retried) {
    img.dataset.retried = 'true';
    console.log('Tentando recarregar imagem...');
    
    // Tentar com caminho alternativo
    const currentSrc = img.src;
    if (currentSrc.includes('../img/')) {
      // Tentar sem ../
      img.src = currentSrc.replace('../img/', 'img/');
    } else if (currentSrc.includes('img/')) {
      // Tentar com ../
      img.src = currentSrc.replace('img/', '../img/');
    }
    return;
  }
  
  // Se ainda falhar, criar placeholder
  const placeholder = createImagePlaceholder(img.alt || 'Imagem não disponível');
  img.src = placeholder;
  img.style.backgroundColor = '#f8f9fa';
  img.style.border = '1px dashed #dee2e6';
}

function handleImageLoad(event) {
  const img = event.target;
  console.log('Imagem carregada:', img.src);
  
  // Remover estilos de erro
  img.style.backgroundColor = '';
  img.style.border = '';
}

// Função para criar placeholder SVG
function createImagePlaceholder(text = 'Imagem não disponível') {
  return `data:image/svg+xml;charset=UTF-8,%3Csvg width='300' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f8f9fa'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23666' font-family='Arial, sans-serif' font-size='14'%3E${encodeURIComponent(text)}%3C/text%3E%3C/svg%3E`;
}

// Hide modal
function hideModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
  
  // Pause all videos and reset
  document.querySelectorAll('.media-item video').forEach(video => {
    video.pause();
    video.currentTime = 0;
    video.closest('.media-item').classList.remove('playing');
  });
}

// Switch category
function switchCategory(category) {
  currentCategory = category;

  // Update active tab
  categoryTabs.forEach((tab) => {
    tab.classList.remove("active");
    if (tab.dataset.category === category) {
      tab.classList.add("active");
    }
  });

  // Render products with loading state
  productsGrid.innerHTML = '<div style="text-align: center; padding: 2rem; color: #7E4A39;">Carregando produtos...</div>';
  
  setTimeout(() => {
    const products = filterProducts(category);
    renderProducts(products);
    
    // Track analytics
    AnalyticsHelper.trackCategoryView(category);
  }, 200);
}

// Mobile Menu Functions
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking on a link (mobile)
        navLinks.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                navLinks.classList.remove('active');
            }
        });

        // Close menu when clicking outside (mobile)
        document.addEventListener('click', function(e) {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
            }
        });
    }
});

// Carousel Functions
class CarouselManager {
  constructor() {
    this.slides = document.querySelector(".carousel-slides");
    this.images = document.querySelectorAll(".carousel-slides img");
    this.indicators = document.querySelectorAll(".indicator");
    this.prevBtn = document.querySelector(".carousel-prev");
    this.nextBtn = document.querySelector(".carousel-next");
    this.currentIndex = 0;
    this.autoSlideInterval = null;
    this.isAutoSliding = true;
    
    this.init();
  }
  
  init() {
    if (!this.slides || !this.images.length) return;
    
    this.bindEvents();
    this.startAutoSlide();
  }
  
  bindEvents() {
    // Navigation buttons
    if (this.prevBtn) {
      this.prevBtn.addEventListener("click", () => {
        this.stopAutoSlide();
        this.prevSlide();
        this.startAutoSlide();
      });
    }
    
    if (this.nextBtn) {
      this.nextBtn.addEventListener("click", () => {
        this.stopAutoSlide();
        this.nextSlide();
        this.startAutoSlide();
      });
    }
    
    // Indicators
    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        this.stopAutoSlide();
        this.goToSlide(index);
        this.startAutoSlide();
      });
    });
    
    // Touch/Swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    this.slides.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });
    
    this.slides.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe(touchStartX, touchEndX);
    });
    
    // Pause on hover
    const carousel = document.querySelector(".hero-carousel");
    if (carousel) {
      carousel.addEventListener("mouseenter", () => this.stopAutoSlide());
      carousel.addEventListener("mouseleave", () => this.startAutoSlide());
    }
    
    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (modal.style.display === "block") return; // Don't interfere with modal
      
      if (e.key === "ArrowLeft") {
        this.stopAutoSlide();
        this.prevSlide();
        this.startAutoSlide();
      } else if (e.key === "ArrowRight") {
        this.stopAutoSlide();
        this.nextSlide();
        this.startAutoSlide();
      }
    });
  }
  
  handleSwipe(startX, endX) {
    const threshold = 50;
    const difference = startX - endX;
    
    if (Math.abs(difference) > threshold) {
      this.stopAutoSlide();
      
      if (difference > 0) {
        this.nextSlide(); // Swipe left - next slide
      } else {
        this.prevSlide(); // Swipe right - prev slide
      }
      
      this.startAutoSlide();
    }
  }
  
  updateSlidePosition() {
    if (!this.slides) return;
    
    this.slides.style.transform = `translateX(${-this.currentIndex * 100}%)`;
    
    // Update indicators
    this.indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === this.currentIndex);
    });
  }
  
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.updateSlidePosition();
  }
  
  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.updateSlidePosition();
  }
  
  goToSlide(index) {
    this.currentIndex = index;
    this.updateSlidePosition();
  }
  
  startAutoSlide() {
    if (!this.isAutoSliding) return;
    
    this.stopAutoSlide();
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }
  
  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    }
  }
  
  destroy() {
    this.stopAutoSlide();
  }
}

// Initialize app
function init() {
  // Show all products initially
  renderProducts(getAllProducts());

  // Add event listeners for category tabs
  categoryTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      switchCategory(tab.dataset.category);
    });
  });

  // Modal event listeners
  if (closeModal) {
    closeModal.addEventListener("click", hideModal);
  }
  
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) hideModal();
    });
  }

  // Media carousel navigation
  if (mediaPrev) {
    mediaPrev.addEventListener("click", prevMedia);
  }
  
  if (mediaNext) {
    mediaNext.addEventListener("click", nextMedia);
  }

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (modal.style.display === "block") {
        hideModal();
      }
    }
    
    // Media carousel keyboard navigation
    if (modal.style.display === "block") {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevMedia();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        nextMedia();
      }
    }
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
  
  // Initialize carousel
  const carousel = new CarouselManager();
  
  // Cleanup on page unload
  window.addEventListener("beforeunload", () => {
    carousel.destroy();
  });
}

// Make functions globally available
window.showProduct = showProduct;
window.toggleVideo = toggleVideo;
window.goToMedia = goToMedia;
window.nextMedia = nextMedia;
window.prevMedia = prevMedia;

// Start the app when DOM is loaded
document.addEventListener("DOMContentLoaded", init);

// Performance optimization: Lazy loading for images
function setupLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// Initialize lazy loading after page load
window.addEventListener("load", setupLazyLoading);

// Error handling for global errors
window.addEventListener("error", (e) => {
  console.error("Erro na aplicação:", e.error);
});

// Utilities for better UX
class UIUtils {
  static showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${type === 'error' ? '#dc3545' : '#28a745'};
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      z-index: 10000;
      opacity: 0;
      transform: translateX(100%);
      transition: all 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => {
        if (toast.parentNode) {
          document.body.removeChild(toast);
        }
      }, 300);
    }, 3000);
  }
  
  static debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  
  static throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
}

// Search functionality (optional enhancement)
class SearchManager {
  constructor() {
    this.searchInput = null;
    this.searchResults = [];
    this.init();
  }
  
  init() {
    this.createSearchInput();
    this.bindEvents();
  }
  
  createSearchInput() {
    // This could be added to the header if needed
    const searchHTML = `
      <div class="search-container" style="display: none;">
        <input type="text" id="searchInput" placeholder="Buscar produtos..." 
               style="padding: 0.5rem 1rem; border: 2px solid #C6AE5B; border-radius: 25px; font-size: 1rem;">
        <button id="searchBtn" style="margin-left: 0.5rem; padding: 0.5rem 1rem; background: #C6AE5B; color: white; border: none; border-radius: 25px;">
          Buscar
        </button>
      </div>
    `;
  }
  
  bindEvents() {
    // Implementation for search functionality
  }
  
  search(query) {
    if (!query || query.length < 2) {
      return getAllProducts();
    }
    
    const normalizedQuery = query.toLowerCase().trim();
    return getAllProducts().filter(product => 
      product.nome.toLowerCase().includes(normalizedQuery) ||
      product.descricao.toLowerCase().includes(normalizedQuery) ||
      product.categoria.toLowerCase().includes(normalizedQuery)
    );
  }
}

// Performance monitoring
class PerformanceMonitor {
  constructor() {
    this.metrics = {
      loadTime: 0,
      domReady: 0,
      firstPaint: 0
    };
    this.init();
  }
  
  init() {
    // Monitor page load performance
    window.addEventListener('load', () => {
      this.metrics.loadTime = performance.now();
      this.logMetrics();
    });
    
    // Monitor DOM ready time
    document.addEventListener('DOMContentLoaded', () => {
      this.metrics.domReady = performance.now();
    });
    
    // Monitor first paint (if available)
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-paint') {
            this.metrics.firstPaint = entry.startTime;
          }
        }
      });
      
      observer.observe({ entryTypes: ['paint'] });
    }
  }
  
  logMetrics() {
    console.log('Performance Metrics:', this.metrics);
  }
}

// Analytics helper (for future integration)
class AnalyticsHelper {
  static trackEvent(eventName, eventData = {}) {
    // This could integrate with Google Analytics, Facebook Pixel, etc.
    console.log('Event tracked:', eventName, eventData);
    
    // Example: Google Analytics 4
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, eventData);
    }
    
    // Example: Facebook Pixel
    if (typeof fbq !== 'undefined') {
      fbq('track', eventName, eventData);
    }
  }
  
  static trackPageView(pageName) {
    this.trackEvent('page_view', { page_name: pageName });
  }
  
  static trackProductView(productId) {
    this.trackEvent('view_item', { item_id: productId });
  }
  
  static trackCategoryView(category) {
    this.trackEvent('view_item_list', { item_category: category });
  }
}

// Accessibility improvements
class AccessibilityManager {
  constructor() {
    this.init();
  }
  
  init() {
    this.setupKeyboardNavigation();
    this.setupFocusManagement();
    this.setupAriaLabels();
  }
  
  setupKeyboardNavigation() {
    // Tab navigation for product cards
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const focused = document.activeElement;
        if (focused.classList.contains('product-card')) {
          e.preventDefault();
          focused.click();
        }
      }
    });
  }
  
  setupFocusManagement() {
    // Manage focus when modal opens/closes
    let lastFocusedElement = null;
    
    const originalShowProduct = window.showProduct;
    window.showProduct = function(productId) {
      lastFocusedElement = document.activeElement;
      originalShowProduct(productId);
      
      // Focus on close button
      setTimeout(() => {
        const closeBtn = document.querySelector('.close-modal');
        if (closeBtn) closeBtn.focus();
      }, 100);
    };
    
    const originalHideModal = hideModal;
    hideModal = function() {
      originalHideModal();
      if (lastFocusedElement) {
        lastFocusedElement.focus();
      }
    };
  }
  
  setupAriaLabels() {
    // Add ARIA labels to interactive elements
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `Ver detalhes do produto ${index + 1}`);
    });
    
    // Add ARIA labels to carousel controls
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    
    if (prevBtn) prevBtn.setAttribute('aria-label', 'Slide anterior');
    if (nextBtn) nextBtn.setAttribute('aria-label', 'Próximo slide');
  }
}

// Initialize additional managers
document.addEventListener('DOMContentLoaded', () => {
  // Initialize performance monitoring
  const performanceMonitor = new PerformanceMonitor();
  
  // Initialize accessibility improvements
  const accessibilityManager = new AccessibilityManager();
  
  // Track initial page view
  AnalyticsHelper.trackPageView('home');
});

// Enhanced error handling with user feedback
window.addEventListener('error', (e) => {
  console.error('Erro na aplicação:', e.error);
  
  // Show user-friendly error message
  UIUtils.showToast('Ops! Algo deu errado. Tente recarregar a página.', 'error');
});

// Handle offline/online states
window.addEventListener('online', () => {
  UIUtils.showToast('Conexão restaurada!', 'success');
});

window.addEventListener('offline', () => {
  UIUtils.showToast('Você está offline. Algumas funcionalidades podem não funcionar.', 'error');
});

function optimizeImages() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    // Apenas adicionar lazy loading
    img.setAttribute('loading', 'lazy');
  });
}

// Verificar se imagens existem (função utilitária)
async function checkImageExists(url) {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
}

// Função para debug - verificar todas as imagens
function debugImages() {
  const allProducts = getAllProducts();
  console.log('=== DEBUG DE IMAGENS ===');
  console.log('Total de produtos:', allProducts.length);
  
  allProducts.forEach(product => {
    const imagePath = getImagePath(product.imagem);
    console.log(`${product.nome}: ${imagePath}`);
  });
  
  console.log('Imagens no DOM:', document.querySelectorAll('img').length);
  
  // Verificar se a pasta img existe
  fetch('../img/')
    .then(response => {
      console.log('Pasta img/ existe:', response.ok);
    })
    .catch(() => {
      console.log('Pasta img/ não encontrada - verifique o caminho');
    });
}

// Call image optimization after DOM is ready
document.addEventListener('DOMContentLoaded', optimizeImages);

// Export utilities for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    UIUtils,
    SearchManager,
    PerformanceMonitor,
    AnalyticsHelper,
    AccessibilityManager
  };
}