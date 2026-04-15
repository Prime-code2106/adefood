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
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    const elementsToAnimate = document.querySelectorAll('.fade-in-element');

    elementsToAnimate.forEach(element => {
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
// PRICING PLAN INTERACTIONS
// ========================================

/**
 * Handle pricing plan interactions
 */
function initPricingInteractions() {
    const pricingButtons = document.querySelectorAll('.pricing-card .btn');

    pricingButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const planType = index === 0 ? 'Monthly' : 'Annual';
            console.log(`${planType} plan selected`);
            showNotification(`${planType} plan selected! Redirecting to checkout...`, 'success');
        });
    });
}

// ========================================
// RECIPE BROWSE INTERACTION
// ========================================

/**
 * Handle recipe browse button
 */
function initRecipeButton() {
    const recipeBrowseBtn = document.querySelector('.cook-section .btn-primary');

    if (recipeBrowseBtn) {
        recipeBrowseBtn.addEventListener('click', () => {
            console.log('Browse Recipes clicked');
            showNotification('Recipe directory coming soon! 🍳', 'info');
        });
    }
}

// ========================================
// DIETARY TAG INTERACTIONS
// ========================================

/**
 * Handle dietary tag selection
 */
function initDietaryTags() {
    const dietaryTags = document.querySelectorAll('.dietary-tag');

    dietaryTags.forEach(tag => {
        tag.addEventListener('click', () => {
            const tagName = tag.textContent;
            console.log(`Dietary filter selected: ${tagName}`);

            // Toggle active state
            tag.classList.toggle('active');

            // Show notification
            if (tag.classList.contains('active')) {
                showNotification(`Filtering by ${tagName}`, 'info');
            }
        });
    });
}

// ========================================
// MEAL CARD INTERACTIONS
// ========================================

/**
 * Handle meal card clicks
 */
function initMealCards() {
    const mealCards = document.querySelectorAll('.meal-card');

    mealCards.forEach(card => {
        card.addEventListener('click', () => {
            const mealTitle = card.querySelector('.meal-title').textContent;
            console.log(`Meal selected: ${mealTitle}`);
            showNotification(`${mealTitle} details coming soon!`, 'info');
        });

        // Add keyboard support
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');

        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
}

// ========================================
// GALLERY IMAGE LIGHTBOX (Simple version)
// ========================================

/**
 * Handle gallery image clicks
 */
function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            console.log(`Gallery image ${index + 1} clicked`);
            // In a production app, this would open a lightbox
            showNotification('Image viewer coming soon!', 'info');
        });

        // Add keyboard support
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');

        item.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                item.click();
            }
        });
    });
}

// ========================================
// FOOTER LINK TRACKING
// ========================================

/**
 * Track footer link clicks
 */
function initFooterTracking() {
    const footerLinks = document.querySelectorAll('.footer-list a');

    footerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const linkText = link.textContent;
            console.log(`Footer link clicked: ${linkText}`);

            // For demo purposes, prevent default and show notification
            if (link.getAttribute('href') === '#') {
                e.preventDefault();
                showNotification(`${linkText} page coming soon!`, 'info');
            }
        });
    });
}

// ========================================
// ACTIVE DIETARY TAG STYLING
// ========================================

/**
 * Add CSS for active dietary tags
 */
function addDietaryTagStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .dietary-tag.active {
            background-color: var(--primary-purple);
            color: var(--text-white);
            border-color: var(--primary-purple);
        }
    `;
    document.head.appendChild(style);
}

// ========================================
// SCROLL PROGRESS INDICATOR
// ========================================

/**
 * Add scroll progress indicator
 */
function initScrollProgress() {
    // Create progress bar element
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, var(--primary-purple), var(--secondary-orange));
        z-index: 10000;
        transition: width 0.1s ease-out;
    `;
    document.body.appendChild(progressBar);

    // Update progress on scroll
    function updateScrollProgress() {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    }

    // Throttle scroll events for better performance
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateScrollProgress();
                ticking = false;
            });
            ticking = true;
        }
    });
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
    initPricingInteractions();
    initRecipeButton();
    initDietaryTags();
    initMealCards();
    initGallery();
    initFooterTracking();
    initScrollProgress();
    addDietaryTagStyles();

    // Log initial state
    console.log('Mobile menu:', mobileMenuToggle ? 'Ready' : 'Not found');
    console.log('Navigation links:', navLinks.length);
    console.log('Viewport width:', window.innerWidth);
    console.log('Sections loaded:', document.querySelectorAll('section').length);
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
        initScrollAnimations,
        initPricingInteractions,
        initRecipeButton,
        initDietaryTags,
        initMealCards,
        initGallery,
        initFooterTracking
    };
}
