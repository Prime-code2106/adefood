# Developer Guide - AdeFood

This guide provides technical details for developers working on the AdeFood website.

## Code Organization

### HTML Structure (index.html)
```
<body>
  ├── <nav> Navigation Bar
  │   ├── Logo
  │   ├── Mobile Menu Toggle
  │   └── Navigation Menu
  │
  └── <section class="hero"> Hero Section
      ├── Hero Content (Left Column)
      │   ├── Title
      │   ├── Subtitle
      │   ├── CTA Buttons
      │   └── Testimonials
      └── Hero Image (Right Column)
          ├── Food Image
          ├── Decorative Circle
          └── Floating Cards
```

### CSS Architecture (css/style.css)

#### Organization
1. **CSS Reset & Base Styles** (Lines 1-30)
2. **CSS Variables** (Lines 32-95)
3. **Utility Classes** (Lines 97-115)
4. **Navigation Bar** (Lines 117-245)
5. **Hero Section** (Lines 247-520)
6. **Responsive Design** (Lines 522-650)
7. **Accessibility** (Lines 652-690)
8. **Print Styles** (Lines 692-727)

#### CSS Variables Reference
```css
/* Colors */
--primary-purple: #7C3AED;
--secondary-orange: #F59E0B;
--bg-primary: #F5F3F0;

/* Spacing Scale */
--spacing-xs: 0.5rem;   /* 8px */
--spacing-sm: 1rem;     /* 16px */
--spacing-md: 1.5rem;   /* 24px */
--spacing-lg: 2rem;     /* 32px */
--spacing-xl: 3rem;     /* 48px */
--spacing-2xl: 4rem;    /* 64px */
--spacing-3xl: 6rem;    /* 96px */

/* Typography Scale */
--font-size-xs: 0.75rem;   /* 12px */
--font-size-sm: 0.875rem;  /* 14px */
--font-size-base: 1rem;    /* 16px */
--font-size-lg: 1.125rem;  /* 18px */
--font-size-2xl: 1.5rem;   /* 24px */
--font-size-3xl: 2rem;     /* 32px */
--font-size-4xl: 2.5rem;   /* 40px */
--font-size-5xl: 3rem;     /* 48px */
```

### JavaScript Architecture (js/main.js)

#### Module Structure
1. **DOM Elements** - Cache frequently used DOM references
2. **Mobile Menu** - Toggle functionality for responsive navigation
3. **Navbar Scroll** - Dynamic navbar styling on scroll
4. **Button Handlers** - Click event handlers for CTAs
5. **Notification System** - Toast-style notifications
6. **Scroll Animations** - Intersection Observer for reveal effects
7. **Smooth Scroll** - Enhanced anchor link behavior
8. **Keyboard Navigation** - Accessibility enhancements
9. **Lazy Loading** - Performance optimization for images
10. **Initialization** - Setup on DOM ready

## Key Features Implementation

### 1. Responsive Navigation

**Mobile Menu (< 768px)**
```javascript
// Toggle mobile menu
function toggleMobileMenu() {
    const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
    mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('active');
}
```

**CSS**
```css
@media (max-width: 767px) {
    .nav-menu {
        position: absolute;
        transform: translateY(-100%);
        /* Slides down when .active class added */
    }
}
```

### 2. Hero Layout

**CSS Grid Implementation**
```css
.hero-wrapper {
    display: grid;
    grid-template-columns: 1fr;        /* Mobile: stacked */
}

@media (min-width: 1024px) {
    .hero-wrapper {
        grid-template-columns: 1fr 1fr;  /* Desktop: side-by-side */
    }
}
```

### 3. Smooth Animations

**Keyframe Animations**
```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.hero-content {
    animation: fadeInUp 0.8s ease-out;
}
```

**Intersection Observer (JavaScript)**
```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});
```

### 4. Button Styling

**Primary Button**
```css
.btn-primary {
    background-color: var(--primary-purple);
    color: var(--text-white);
    box-shadow: 0 4px 14px 0 rgba(124, 58, 237, 0.4);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px 0 rgba(124, 58, 237, 0.5);
}
```

### 5. Testimonials Component

**Overlapping Avatars**
```css
.avatar {
    margin-left: -12px;  /* Creates overlap */
}

.avatar:first-child {
    margin-left: 0;      /* First avatar no offset */
}
```

## Customization Patterns

### Adding a New Section

1. **HTML**: Add semantic section element
```html
<section id="new-section" class="new-section">
    <div class="container">
        <!-- Content here -->
    </div>
</section>
```

2. **CSS**: Style the section
```css
.new-section {
    padding: var(--spacing-3xl) 0;
    background-color: var(--bg-white);
}
```

3. **JavaScript**: Add interactivity
```javascript
const newSection = document.querySelector('#new-section');
// Add event listeners or observers
```

### Adding a New Color Theme

1. Update CSS variables in `:root`
2. Create new modifier classes
```css
.theme-dark {
    --bg-primary: #1F2937;
    --text-primary: #F9FAFB;
}
```

3. Toggle with JavaScript
```javascript
document.body.classList.toggle('theme-dark');
```

### Adding Form Validation

```javascript
function validateForm(formElement) {
    const formData = new FormData(formElement);
    const errors = [];

    // Validation logic
    if (!formData.get('email')) {
        errors.push('Email is required');
    }

    if (errors.length > 0) {
        showNotification(errors.join(', '), 'error');
        return false;
    }

    return true;
}
```

## Performance Optimization

### 1. Image Optimization
- Use WebP format with JPG fallback
- Lazy load images below the fold
- Optimize with compression tools
- Use responsive images with `srcset`

```html
<picture>
    <source srcset="image.webp" type="image/webp">
    <source srcset="image.jpg" type="image/jpeg">
    <img src="image.jpg" alt="Description" loading="lazy">
</picture>
```

### 2. CSS Optimization
- Use CSS variables for consistency
- Minimize use of expensive properties (box-shadow on every element)
- Use `will-change` sparingly for animations
- Avoid layout thrashing

### 3. JavaScript Optimization
- Debounce scroll and resize events
- Cache DOM queries
- Use event delegation for dynamic elements
- Lazy load non-critical scripts

```javascript
// Debounce example
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(handleResize, 250);
});
```

## Testing Checklist

### Functionality
- [ ] Navigation menu works on mobile and desktop
- [ ] All buttons have proper hover states
- [ ] Smooth scrolling works for anchor links
- [ ] Mobile menu closes when clicking links
- [ ] Keyboard navigation works (Tab, Escape)

### Responsive Design
- [ ] Test on mobile (375px, 414px)
- [ ] Test on tablet (768px, 1024px)
- [ ] Test on desktop (1280px, 1920px)
- [ ] Check landscape orientation on mobile
- [ ] Verify touch targets are at least 44x44px

### Accessibility
- [ ] Semantic HTML elements used
- [ ] All images have alt text
- [ ] ARIA labels present where needed
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Color contrast meets WCAG AA (4.5:1)
- [ ] Screen reader tested

### Performance
- [ ] Images optimized and compressed
- [ ] Lazy loading implemented
- [ ] No console errors
- [ ] Page loads in < 3 seconds
- [ ] Lighthouse score > 90

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## Debugging Tips

### Common Issues

**Mobile menu not working**
- Check if JavaScript is loading
- Verify `aria-expanded` attribute toggling
- Check CSS `.active` class is applied

**Images not loading**
- Verify file path is correct
- Check image file exists
- Look for console errors
- Test with placeholder URLs

**Animations not smooth**
- Check if `prefers-reduced-motion` is active
- Verify GPU acceleration (`transform` vs `left/top`)
- Test on lower-end devices

## Build & Deployment

### No Build Required
This is a static site with no build process.

### Deployment Options

**1. GitHub Pages**
```bash
# Push to GitHub
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main

# Enable GitHub Pages in repo settings
# Select main branch as source
```

**2. Netlify**
```bash
# Drag and drop the entire folder to Netlify
# Or connect GitHub repo for continuous deployment
```

**3. Vercel**
```bash
npx vercel
```

**4. Traditional Hosting**
- Upload all files via FTP
- Ensure file permissions are correct
- Configure server for proper MIME types

## File Size Reference

- `index.html`: ~6 KB
- `css/style.css`: ~20 KB
- `js/main.js`: ~12 KB
- **Total (before images)**: ~38 KB

## Browser DevTools Tips

### Inspect Responsive Design
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test various device sizes

### Performance Profiling
1. Open DevTools > Performance tab
2. Click Record
3. Perform actions
4. Stop recording and analyze

### Accessibility Audit
1. Open DevTools > Lighthouse tab
2. Select "Accessibility" category
3. Run audit
4. Fix issues

## Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [Can I Use](https://caniuse.com/)
- [Web.dev](https://web.dev/)

---

**Happy Coding! 🚀**
