// Mobile menu toggle
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

// Gallery image modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery-image');
    
    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            openImageModal(this.src, this.alt);
        });
    });
});

// Function to open image in modal
function openImageModal(imageSrc, imageAlt) {
    // Create modal if it doesn't exist
    let modal = document.getElementById('imageModal');
    
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'imageModal';
        modal.className = 'image-modal';
        modal.innerHTML = `
            <div class="image-modal-content">
                <span class="close-image-modal">&times;</span>
                <img id="modalImage" src="" alt="" />
                <div class="image-modal-caption"></div>
            </div>
        `;
        document.body.appendChild(modal);

        // Add close functionality
        const closeBtn = modal.querySelector('.close-image-modal');
        closeBtn.addEventListener('click', closeImageModal);
        
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeImageModal();
            }
        });

        // Add keyboard support
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                closeImageModal();
            }
        });
    }

    // Show modal with image
    const modalImg = modal.querySelector('#modalImage');
    const caption = modal.querySelector('.image-modal-caption');
    
    modalImg.src = imageSrc;
    modalImg.alt = imageAlt;
    caption.textContent = imageAlt;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Function to close image modal
function closeImageModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only prevent default for internal anchors
            if (href !== '#' && href.includes('#')) {
                const targetId = href.split('#')[1];
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// Add scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animate service sections
    const serviceElements = document.querySelectorAll('.service-section, .contact-section');
    serviceElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// Add CSS for image modal (since we're separating CSS)
document.addEventListener('DOMContentLoaded', function() {
    // Add modal styles if not already present
    if (!document.getElementById('modal-styles')) {
        const style = document.createElement('style');
        style.id = 'modal-styles';
        style.textContent = `
            .image-modal {
                display: none;
                position: fixed;
                z-index: 9999;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.9);
                backdrop-filter: blur(5px);
            }

            .image-modal-content {
                position: relative;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                max-width: 90%;
                max-height: 90%;
                text-align: center;
            }

            .image-modal-content img {
                max-width: 100%;
                max-height: 80vh;
                object-fit: contain;
                border-radius: 10px;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
            }

            .close-image-modal {
                position: absolute;
                top: -40px;
                right: 0;
                color: white;
                font-size: 2rem;
                font-weight: bold;
                cursor: pointer;
                background: rgba(0, 0, 0, 0.5);
                border-radius: 50%;
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: background 0.3s ease;
            }

            .close-image-modal:hover {
                background: rgba(255, 255, 255, 0.2);
            }

            .image-modal-caption {
                color: white;
                margin-top: 1rem;
                font-size: 1.1rem;
                text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
            }

            @media (max-width: 768px) {
                .close-image-modal {
                    top: -50px;
                    font-size: 1.5rem;
                    width: 35px;
                    height: 35px;
                }
                
                .image-modal-content img {
                    max-height: 70vh;
                }
            }
        `;
        document.head.appendChild(style);
    }
});