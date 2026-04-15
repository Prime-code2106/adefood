/**
 * AdeFood Main JavaScript
 * Handles interactive functionality for the website
 */

// ========================================
// DOM ELEMENTS
// ========================================

const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('.navbar');
const btnPrimary = document.querySelector('.btn-primary');
const btnSecondary = document.querySelector('.btn-secondary');

// ========================================
// MOBILE MENU FUNCTIONALITY
// ========================================

/**
 * Toggle mobile menu visibility
 */
function toggleMobileMenu() {
    const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';

    mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('active');

    // Prevent body scroll when menu is open
    if (!isExpanded) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

/**
 * Close mobile menu when clicking on a nav link
 */
function closeMobileMenu() {
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
}

// Event listener for mobile menu toggle
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
}

// Close mobile menu when clicking on nav links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Only prevent default for hash links
        if (link.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                closeMobileMenu();

                // Smooth scroll to section
                setTimeout(() => {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 300);
            }
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (window.innerWidth < 768) {
        const isClickInsideNav = navMenu.contains(e.target);
        const isClickOnToggle = mobileMenuToggle.contains(e.target);

        if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    }
});

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

/**
 * Add shadow to navbar on scroll
 */
function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Event listener for scroll
window.addEventListener('scroll', handleNavbarScroll);

// ========================================
// BUTTON CLICK HANDLERS
// ========================================

/**
 * Handle primary button click (Place Your Order)
 */
if (btnPrimary) {
    btnPrimary.addEventListener('click', () => {
        console.log('Place Your Order button clicked');

        // Add your order functionality here
        // Example: redirect to order page or open order modal
        // window.location.href = '/order';

        // For demo purposes, show an alert
        showNotification('Order feature coming soon! 🍕', 'info');
    });
}

/**
 * Handle secondary button click (Learn More)
 */
if (btnSecondary) {
    btnSecondary.addEventListener('click', () => {
        console.log('Learn More button clicked');

        // Smooth scroll to "How It Works" section
        const howItWorksSection = document.querySelector('#how-it-works');

        if (howItWorksSection) {
            howItWorksSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// ========================================
// NOTIFICATION SYSTEM
// ========================================

/**
 * Show notification message
 * @param {string} message - The message to display
 * @param {string} type - The type of notification (info, success, warning, error)
 */
function showNotification(message, type = 'info') {
    // Check if notification container exists, create if not
    let notificationContainer = document.querySelector('.notification-container');

    if (!notificationContainer) {
        notificationContainer = document.createElement('div');
        notificationContainer.className = 'notification-container';
        notificationContainer.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            gap: 10px;
        `;
        document.body.appendChild(notificationContainer);
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Notification styles
    notification.style.cssText = `
        background-color: ${type === 'info' ? '#7C3AED' : type === 'success' ? '#10B981' : type === 'warning' ? '#F59E0B' : '#EF4444'};
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        font-weight: 500;
        font-size: 14px;
        max-width: 300px;
        animation: slideInRight 0.3s ease-out;
    `;

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;

    if (!document.querySelector('#notification-styles')) {
        style.id = 'notification-styles';
        document.head.appendChild(style);
    }

    // Append notification
    notificationContainer.appendChild(notification);

    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ========================================
// INTERSECTION OBSERVER (Scroll Animations)
// ========================================

/**
 * Animate elements when they come into view
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements (add more selectors as needed)
    const elementsToAnimate = document.querySelectorAll('.hero-content, .hero-image');

    elementsToAnimate.forEach(element => {
        // Initial state
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';

        observer.observe(element);
    });
}

// ========================================
// AVATAR HOVER EFFECTS
// ========================================

/**
 * Add interactive hover effects to customer avatars
 */
function initAvatarEffects() {
    const avatars = document.querySelectorAll('.avatar');

    avatars.forEach((avatar, index) => {
        avatar.addEventListener('mouseenter', () => {
            // Add ripple effect or animation
            console.log(`Avatar ${index + 1} hovered`);
        });
    });
}

// ========================================
// SMOOTH SCROLL FOR ALL HASH LINKS
// ========================================

/**
 * Enable smooth scrolling for all anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            // Skip empty hash
            if (targetId === '#') {
                e.preventDefault();
                return;
            }

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();

                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Update URL without jumping
                history.pushState(null, null, targetId);
            }
        });
    });
}

// ========================================
// KEYBOARD NAVIGATION
// ========================================

/**
 * Handle keyboard navigation (Escape key to close mobile menu)
 */
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Close mobile menu on Escape key
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
}

// ========================================
// RESIZE HANDLER
// ========================================

/**
 * Handle window resize events
 */
function handleResize() {
    // Close mobile menu if window is resized to desktop view
    if (window.innerWidth >= 768 && navMenu.classList.contains('active')) {
        closeMobileMenu();
    }
}

// Debounce resize events for better performance
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(handleResize, 250);
});

// ========================================
// PAGE LOAD PERFORMANCE
// ========================================

/**
 * Lazy load images for better performance
 */
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');

    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports lazy loading
        images.forEach(img => {
            img.src = img.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src;
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// ========================================
// INITIALIZATION
// ========================================

/**
 * Initialize all functionality when DOM is ready
 */
function init() {
    console.log('AdeFood website initialized successfully! 🍕');

    // Initialize all features
    initSmoothScroll();
    initScrollAnimations();
    initAvatarEffects();
    initKeyboardNavigation();
    initLazyLoading();

    // Log initial state
    console.log('Mobile menu:', mobileMenuToggle ? 'Ready' : 'Not found');
    console.log('Navigation links:', navLinks.length);
    console.log('Viewport width:', window.innerWidth);
}

// Run initialization when DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ========================================
// EXPORT FOR POTENTIAL MODULE USE
// ========================================

// If using modules, export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        toggleMobileMenu,
        showNotification,
        initSmoothScroll,
        initScrollAnimations
    };
}
