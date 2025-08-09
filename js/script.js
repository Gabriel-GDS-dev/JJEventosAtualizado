// Product Database
const productsDatabase = {
  salgados: [
    {
      id: "entreveiro",
      nome: "Entreveiro",
      categoria: "salgados",
      descricao:
        "Delicioso entreveiro preparado com ingredientes frescos e temperos especiais, ideal para eventos.",
      imagem: "entreveiro.jpeg",
      destaque: true,
    },
    {
      id: "Picanha",
      nome: "Picanha",
      categoria: "salgados",
      descricao:
        "Picanha suculenta grelhada no ponto, temperada com ervas finas e acompanhamentos especiais.",
      imagem: "maminha.jpeg",
      destaque: true,
    },
    {
      id: "paella-frutos",
      nome: "Paella de Frutos do Mar",
      categoria: "salgados",
      descricao:
        "Autêntica paella espanhola com frutos do mar frescos, arroz bomba e açafrão.",
      imagem: "paelladefrutosdomar.jpeg",
      destaque: true,
    },
    {
      id: "paella-carnes",
      nome: "Paella de Carnes Brancas",
      categoria: "salgados",
      descricao:
        "Paella tradicional com carnes brancas selecionadas e vegetais frescos.",
      imagem: "paelladecarnebranca.jpeg",
    },
    {
      id: "risoto-palmito",
      nome: "Risoto de Palmito",
      categoria: "salgados",
      descricao:
        "Cremoso risoto de palmito com queijo parmesão e ervas aromáticas.",
      imagem: "risotodepalmito.jpeg",
    },
    {
      id: "costela-e-porco",
      nome: "Costela e Porco",
      categoria: "salgados",
      descricao:
        "Costela suculenta e porco inteiro, acompanhados de molho barbecue especial.",
      imagem: "costelaeporco.jpg",
    },
    {
      id: "costelas",
      nome: "Costelas",
      categoria: "salgados",
      descricao:
        "Costelas suculentas assadas lentamente, temperadas com especiarias especiais.",
      imagem: "costelas.jpg",
    },
    {
      id: "costelas-de-lado",
      nome: "Costelas",
      categoria: "salgados",
      descricao:
        "Costelas suculentas assadas lentamente, temperadas com especiarias especiais.",
      imagem: "costelasdelado.jpg",
    },
    {
      id: "costelas-e-espetos",
      nome: "Costelas e Espetos",
      categoria: "salgados",
      descricao:
        "Costelas e espetos suculentos assados lentamente, temperados com especiarias especiais.",
      imagem: "costelaseespetos.jpg",
    },
    {
      id: "costelas-e-um-espeto",
      nome: "Costelas e um Espeto",
      categoria: "salgados",
      descricao:
        "Costelas e um espeto suculentos assados lentamente, temperados com especiarias especiais.",
      imagem: "costelaseumespeto.jpg",
    },
    {
      id: "entreveiro-daf",
      nome: "Entreveiro Daf",
      categoria: "salgados",
      descricao:
        "Entreveiro feito para a compania Daf.",
      imagem: "entreveirodaf.jpg",
    },
    {
      id: "picanha2",
      nome: "Picanha",
      categoria: "salgados",
      descricao:
        "Picanha deliciosa.",
      imagem: "maminha2.jpg",
    },
    {
      id: "picanhas",
      nome: "Picanhas",
      categoria: "salgados",
      descricao:
        "Suculentas picanhas grelhadas, temperadas com sal grosso e ervas finas.",
      imagem: "picanhas.jpg",
    },
  ],
  doces: [
    {
      id: "fondue-morango",
      nome: "Fondue de Morango",
      categoria: "doces",
      descricao:
        "Delicioso fondue de chocolate com morangos frescos e acompanhamentos variados.",
      imagem: "fonduedemorango.jpeg",
    },
    {
      id: "waffle-banana",
      nome: "Waffle de Banana com Leite Condensado",
      categoria: "doces",
      descricao:
        "Waffle crocante com banana caramelizada e leite condensado artesanal.",
      imagem: "waffledebananacomleitecondensado.jpeg",
    },
    {
      id: "waffle-morango",
      nome: "Waffle de Morango",
      categoria: "doces",
      descricao: "Waffle dourado servido com morangos frescos e chantilly.",
      imagem: "waffledemorango.jpeg",
    },
    {
      id: "pudim",
      nome: "Pudim",
      categoria: "doces",
      descricao: "Pudim caseiro cremoso com calda de caramelo artesanal.",
      imagem: "pudim.jpeg",
    },
    {
      id: "fondue-banana",
      nome: "Fondue de Banana",
      categoria: "doces",
      descricao:
        "Fondue de chocolate com banana caramelizada e acompanhamentos especiais.",
      imagem: "fonduedebanana.jpeg",
    },
  ],
  saladas: [
    {
      id: "salada-abacaxi",
      nome: "Salada de Abacaxi",
      categoria: "saladas",
      descricao:
        "Refrescante salada tropical com abacaxi, folhas verdes e molho especial.",
      imagem: "saladadeabacaxi.jpeg",
    },
    {
      id: "salada-beterraba",
      nome: "Salada de Beterraba",
      categoria: "saladas",
      descricao: "Salada nutritiva com beterraba roxa, queijo branco e nozes.",
      imagem: "saladadebeterraba.jpeg",
    },
    {
      id: "salada-tomate",
      nome: "Salada de Tomate com Cebola",
      categoria: "saladas",
      descricao:
        "Clássica salada com tomates maduros, cebola roxa e temperos frescos.",
      imagem: "saladadetomateecebola.jpeg",
    },
    {
      id: "salada-mista-3",
      nome: "Salada Mista com Três Saladas",
      categoria: "saladas",
      descricao:
        "Combinação harmoniosa de três saladas diferentes em uma única porção.",
      imagem: "saladamista1.jpeg",
    },
    {
      id: "salada-mista-4",
      nome: "Salada Mista com Quatro Saladas",
      categoria: "saladas",
      descricao:
        "Variedade ainda maior com quatro tipos de saladas cuidadosamente selecionadas.",
      imagem: "saladamista2.jpeg",
    },
  ],
};

// App State
let currentCategory = "todos";
let currentProduct = null;

// DOM Elements
const productsGrid = document.getElementById("productsGrid");
const categoryTabs = document.querySelectorAll(".category-tab");
const modal = document.getElementById("productModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");
const relatedProducts = document.getElementById("relatedProducts");
const closeModal = document.querySelector(".close-modal");

// Mobile Menu Elements
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenuBtn = document.getElementById("closeMenu");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

// Utility Functions
function getImagePath(imageName) {
  return `./img/${imageName}`;
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
    
  // Aplicar tratamento de erro após renderizar
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
                <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem; color: #7E4A39;">${product.nome}</h4>
                <button class="view-details" style="padding: 0.5rem 1rem; font-size: 0.9rem;">Ver Detalhes</button>
            </div>
        </div>
      `
    )
    .join("");
    
  // Aplicar tratamento de erro após renderizar
  handleImageErrors();
}

// CORREÇÃO 4: Modal sem onerror inline
function showProduct(productId) {
  const product = getAllProducts().find((p) => p.id === productId);
  if (!product) return;

  currentProduct = product;
  modalTitle.textContent = product.nome;
  modalImage.innerHTML = `<img src="${getImagePath(product.imagem)}" alt="${product.nome}" 
                               style="width: 100%; height: 100%; object-fit: cover; border-radius: 15px;" 
                               loading="lazy" />`;
  modalDescription.textContent = product.descricao;

  const related = getRelatedProducts(product);
  renderRelatedProducts(related);

  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  
  // Aplicar tratamento de erro na imagem do modal
  handleImageErrors();
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
    if (currentSrc.includes('./img/')) {
      // Tentar sem ./
      img.src = currentSrc.replace('./img/', 'img/');
    } else if (currentSrc.includes('img/')) {
      // Tentar com ./
      img.src = currentSrc.replace('img/', './img/');
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

// CORREÇÃO 6: Função para criar placeholder SVG
function createImagePlaceholder(text = 'Imagem não disponível') {
  return `data:image/svg+xml;charset=UTF-8,%3Csvg width='300' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f8f9fa'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23666' font-family='Arial, sans-serif' font-size='14'%3E${encodeURIComponent(text)}%3C/text%3E%3C/svg%3E`;
}

// Hide modal
function hideModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
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

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (modal.style.display === "block") {
        hideModal();
      } else if (mobileMenu.classList.contains("active")) {
        closeMobileMenu();
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

/* // Service Worker registration for PWA (optional)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registrado com sucesso:', registration);
      })
      .catch(error => {
        console.log('Falha no registro do SW:', error);
      });
  });
} */

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
    
    // Could be inserted into header if search functionality is needed
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
  
  // Initialize search manager (if needed)
  // const searchManager = new SearchManager();
  
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

// CORREÇÃO 8: Verificar se imagens existem (função utilitária)
async function checkImageExists(url) {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
}

// CORREÇÃO 9: Função para debug - verificar todas as imagens
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
  fetch('./img/')
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