# Quick Start Guide - AdeFood

Get your AdeFood website up and running in 5 minutes!

## Step 1: View the Website

### Option A: Direct File Open (Simplest)
1. Navigate to the project folder
2. Double-click `index.html`
3. Your default browser will open the website

### Option B: Local Server (Recommended)
Using a local server provides a better development experience.

**Using Python 3:**
```bash
cd /path/to/adefood
python -m http.server 8000
```
Then open: http://localhost:8000

**Using Node.js:**
```bash
cd /path/to/adefood
npx http-server
```
Then open: http://localhost:8080

**Using PHP:**
```bash
cd /path/to/adefood
php -S localhost:8000
```
Then open: http://localhost:8000

## Step 2: Replace Placeholder Images (Optional)

The website uses placeholder images. To use your own:

### Hero Food Image
1. Get a high-quality food image (1200x1200px recommended)
2. Save it as `images/hero-food-bowl.jpg`
3. Open `index.html`
4. Find line with `class="food-image"`
5. Update the `src` attribute:
   ```html
   src="images/hero-food-bowl.jpg"
   ```

### Customer Avatars
1. Get 6 avatar images (150x150px each)
2. Save as `images/customer-1.jpg` through `images/customer-6.jpg`
3. Open `index.html`
4. Find the section with `class="customer-avatars"`
5. Update each avatar's `src` attribute:
   ```html
   <img src="images/customer-1.jpg" alt="Customer 1">
   ```

### Favicon
1. Create or download a favicon (32x32px)
2. Save as `images/favicon.ico`
3. No code changes needed - already referenced in HTML!

## Step 3: Customize Your Content

### Update Logo Name
**File:** `index.html` (Line ~34)
```html
<span class="logo-text">Your<span class="logo-highlight">Name</span></span>
```

### Update Navigation Menu
**File:** `index.html` (Lines ~46-52)
```html
<li><a href="#how-it-works">How it works</a></li>
<li><a href="#meals">Meals</a></li>
<!-- Add or modify menu items -->
```

### Update Hero Headline
**File:** `index.html` (Lines ~63-65)
```html
<h1 class="hero-title">
    Your Awesome Headline Here <span class="highlight">Today</span>
</h1>
```

### Update Hero Subheading
**File:** `index.html` (Lines ~68-70)
```html
<p class="hero-subtitle">
    Your compelling description goes here...
</p>
```

## Step 4: Customize Colors (Optional)

### Change Brand Colors
**File:** `css/style.css` (Lines ~35-40)

```css
:root {
    /* Change these to your brand colors */
    --primary-purple: #7C3AED;    /* Main brand color */
    --secondary-orange: #F59E0B;  /* Accent color */
    --bg-primary: #F5F3F0;        /* Background color */
}
```

**Popular Color Schemes:**

**Scheme 1: Blue & Orange**
```css
--primary-purple: #2563EB;     /* Blue */
--secondary-orange: #F97316;   /* Orange */
```

**Scheme 2: Green & Yellow**
```css
--primary-purple: #10B981;     /* Green */
--secondary-orange: #FBBF24;   /* Yellow */
```

**Scheme 3: Red & Gold**
```css
--primary-purple: #DC2626;     /* Red */
--secondary-orange: #F59E0B;   /* Gold */
```

## Step 5: Test Your Website

### Desktop Testing
1. Open in browser
2. Click all navigation links
3. Test both buttons
4. Hover over elements to see effects

### Mobile Testing
1. Resize browser window to mobile size (< 768px)
2. Click hamburger menu (three lines)
3. Verify menu opens/closes
4. Test navigation works

**Or use DevTools:**
1. Press F12 to open DevTools
2. Press Ctrl+Shift+M (Cmd+Shift+M on Mac)
3. Select different device sizes
4. Test functionality

## Common Tasks

### Add a New Page Section
1. Open `index.html`
2. Add after the hero section:
```html
<section id="new-section" class="new-section">
    <div class="container">
        <h2>Section Title</h2>
        <p>Section content...</p>
    </div>
</section>
```

3. Open `css/style.css` and add styling:
```css
.new-section {
    padding: var(--spacing-3xl) 0;
    background-color: var(--bg-white);
}
```

### Change Font
1. Go to [Google Fonts](https://fonts.google.com/)
2. Select a font (e.g., "Poppins")
3. Copy the `<link>` tag
4. Replace the font link in `index.html` (Line ~11)
5. Update CSS in `css/style.css`:
```css
body {
    font-family: 'Poppins', sans-serif;
}
```

### Add More Buttons
Copy the button structure from `index.html`:
```html
<button class="btn btn-primary">
    Your Button Text
</button>
```

**Button Styles Available:**
- `btn-primary` - Purple filled button
- `btn-secondary` - White outlined button

## Troubleshooting

### Images Not Showing?
- Check file path matches exactly
- Verify image files are in `images/` folder
- Check file extensions (.jpg, .png, etc.)
- Look for typos in filename

### Menu Not Working on Mobile?
- Open browser console (F12)
- Look for JavaScript errors
- Verify `js/main.js` is loading
- Check network tab for failed requests

### Styles Look Wrong?
- Check if `css/style.css` is loading
- Look for syntax errors in CSS
- Verify file paths are correct
- Clear browser cache (Ctrl+Shift+R)

### Buttons Not Clickable?
- Check if `js/main.js` is loading
- Look for JavaScript errors in console
- Verify button classes are correct

## Next Steps

1. **Add More Sections**: Create "How It Works", "Meals", "Contact" pages
2. **Add Forms**: Create order form, contact form, newsletter signup
3. **Add Menu Items**: Build a menu page with food items
4. **Deploy Online**: Upload to GitHub Pages, Netlify, or Vercel
5. **SEO Optimization**: Add meta tags, Open Graph tags, schema markup
6. **Analytics**: Add Google Analytics or similar tracking

## Useful Resources

- **Images**: [Unsplash](https://unsplash.com), [Pexels](https://pexels.com)
- **Icons**: [Font Awesome](https://fontawesome.com), [Heroicons](https://heroicons.com)
- **Colors**: [Coolors](https://coolors.co), [Adobe Color](https://color.adobe.com)
- **Fonts**: [Google Fonts](https://fonts.google.com)

## Getting Help

- Check `README.md` for overview and features
- Check `DEVELOPER_GUIDE.md` for technical details
- Check `images/README.md` for image guidelines

## File Structure Reference

```
adefood/
├── index.html              ← Main HTML file
├── css/
│   └── style.css          ← All styles
├── js/
│   └── main.js            ← All JavaScript
├── images/
│   └── README.md          ← Image guide
├── README.md              ← Project overview
├── DEVELOPER_GUIDE.md     ← Technical guide
├── QUICKSTART.md          ← This file
└── LICENSE                ← License file
```

## Keyboard Shortcuts for Development

- **F12**: Open DevTools
- **Ctrl+Shift+M**: Toggle device toolbar (responsive view)
- **Ctrl+Shift+C**: Inspect element
- **Ctrl+Shift+R**: Hard reload (clear cache)
- **Ctrl+S**: Save file
- **Ctrl+F**: Find in file

---

**You're all set! Enjoy building your food delivery website! 🍕🚀**

Need help? Check the other documentation files or open an issue on GitHub.
