# AdeFood - Modern Food Delivery Website

A beautiful, modern food delivery website built with pure HTML, CSS, and JavaScript. Features a stunning hero section with responsive design, smooth animations, and interactive elements.

## Features

- **Modern Hero Section**: Eye-catching two-column layout with compelling copy and beautiful food imagery
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Smooth Animations**: Professional fade-in, slide-in, and floating animations
- **Interactive Navigation**: Mobile-friendly hamburger menu with smooth transitions
- **Customer Testimonials**: Social proof with customer avatars and trust badge
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation, and focus states
- **Performance Optimized**: Lazy loading images, efficient CSS, and minimal JavaScript
- **Clean Code**: Well-organized, commented, and following modern best practices

## Project Structure

```
adefood/
├── index.html              # Main HTML file with hero section
├── css/
│   └── style.css          # Comprehensive styling with CSS variables
├── js/
│   └── main.js            # Interactive functionality
├── images/
│   └── README.md          # Guide for adding images
├── LICENSE                # Project license
└── README.md              # This file
```

## Design Highlights

### Color Palette
- **Primary Purple**: `#7C3AED` - Main brand color for buttons and accents
- **Secondary Orange**: `#F59E0B` - Trust badge and highlights
- **Background Cream**: `#F5F3F0` - Warm, welcoming background
- **Text Primary**: `#1F2937` - Main text color
- **Text Secondary**: `#6B7280` - Secondary text and descriptions

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, large, attention-grabbing
- **Body Text**: Clean, readable, optimized line-height

### Key Components
1. **Navigation Bar**: Fixed header with logo and menu items
2. **Hero Content**: Compelling headline, subheading, and CTAs
3. **Hero Image**: Large food photography with decorative elements
4. **Testimonials**: Customer avatars with trust badge
5. **Floating Cards**: Decorative UI elements (desktop only)

## Getting Started

### Quick Start

1. **Clone or download** this repository
2. **Open** `index.html` in your web browser
3. That's it! No build process or dependencies required.

### Local Development

For better development experience, use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Customization Guide

### 1. Replace Placeholder Images

The site currently uses placeholder images. Add your own images:

1. **Hero Food Image**: Add `images/hero-food-bowl.jpg` (1200x1200px)
2. **Customer Avatars**: Add `images/customer-1.jpg` through `customer-6.jpg` (150x150px)
3. **Favicon**: Add `images/favicon.ico`

See `images/README.md` for detailed instructions.

### 2. Update Colors

Edit CSS variables in `css/style.css`:

```css
:root {
    --primary-purple: #7C3AED;    /* Your brand color */
    --secondary-orange: #F59E0B;  /* Accent color */
    --bg-primary: #F5F3F0;        /* Background color */
    /* ... more variables */
}
```

### 3. Modify Content

Edit text in `index.html`:
- Logo name (line ~34)
- Navigation menu items (lines ~46-52)
- Hero headline (lines ~63-65)
- Hero subheading (lines ~68-70)
- Button text (lines ~75, 79)

### 4. Add Functionality

Extend `js/main.js` to add features:
- Order form submission
- User authentication
- Menu browsing
- Cart functionality
- API integration

## Browser Support

- **Chrome**: Latest 2 versions
- **Firefox**: Latest 2 versions
- **Safari**: Latest 2 versions
- **Edge**: Latest 2 versions
- **Mobile Safari**: iOS 12+
- **Chrome Mobile**: Latest

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1279px
- **Large Desktop**: ≥ 1280px

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Alt text for images
- Responsive text sizing
- High contrast mode support
- Reduced motion support

## Performance Features

- Lazy loading images
- Optimized CSS (no frameworks)
- Minimal JavaScript
- CSS Grid and Flexbox (no Bootstrap)
- Smooth animations with GPU acceleration
- Compressed assets (when using real images)

## Future Enhancements

Planned features for future development:
- [ ] Full menu page with filtering
- [ ] Order placement system
- [ ] User dashboard
- [ ] Restaurant partner pages
- [ ] Reviews and ratings
- [ ] Real-time order tracking
- [ ] Payment integration
- [ ] Admin panel

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Grid, Flexbox, and custom properties
- **JavaScript (ES6+)**: Interactive functionality
- **Google Fonts**: Inter font family

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the terms specified in the LICENSE file.

## Credits

- **Design**: Modern food delivery website design
- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter) by Google Fonts
- **Placeholder Images**: Unsplash and Pravatar

## Contact

For questions or feedback, please open an issue on GitHub.

---

**Built with ❤️ using HTML, CSS, and JavaScript**
