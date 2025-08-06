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
      id: "maminha",
      nome: "Maminha",
      categoria: "salgados",
      descricao:
        "Maminha suculenta grelhada no ponto, temperada com ervas finas e acompanhamentos especiais.",
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

// Adicione esta função no início do código
function getImagePath(imageName) {
  return `./img/${imageName}`; // Ajuste o caminho conforme sua estrutura
}

// Modifique a função renderProducts():
function renderProducts(products) {
  productsGrid.innerHTML = products
    .map(
      (product) => `
        <div class="product-card" onclick="showProduct('${product.id}')">
            <div class="product-image">
                <img src="${getImagePath(product.imagem)}" alt="${
        product.nome
      }" style="width: 100%; height: 100%; object-fit: cover;" />
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
}

// Render related products in modal
function renderRelatedProducts(products) {
  relatedProducts.innerHTML = products
    .map(
      (product) => `
                <div class="product-card" onclick="showProduct('${
                  product.id
                }')">
                    <div class="product-image" style="height: 180px;">
                        <img src="${getImagePath(product.imagem)}" alt="${
        product.nome
      }" style="width: 100%; height: 100%; object-fit: cover;" />
                    </div>
                    <div class="product-info" style="padding: 1rem;">
                        <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem; color: #7E4A39;">${
                          product.nome
                        }</h4>
                        <button class="view-details" style="padding: 0.5rem 1rem; font-size: 0.9rem;">Ver Detalhes</button>
                    </div>
                </div>
            `
    )
    .join("");
}

// Show product in modal
function showProduct(productId) {
  const product = getAllProducts().find((p) => p.id === productId);
  if (!product) return;

  currentProduct = product;
  modalTitle.textContent = product.nome;
  modalImage.innerHTML = `<img src="${getImagePath(product.imagem)}" alt="${
    product.nome
  }" style="width: 100%; height: 100%; object-fit: cover; border-radius: 15px;" />`;
  modalDescription.textContent = product.descricao;

  const related = getRelatedProducts(product);
  renderRelatedProducts(related);

  modal.style.display = "block";
  document.body.style.overflow = "hidden";
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

  // Render products
  const products = filterProducts(category);
  renderProducts(products);
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
  closeModal.addEventListener("click", hideModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) hideModal();
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "block") {
      hideModal();
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
}

// Make functions globally available
window.showProduct = showProduct;

// Start the app
document.addEventListener("DOMContentLoaded", init);