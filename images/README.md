# Images Directory

This directory is designated for storing all image assets for the AdeFood website.

## Recommended Images to Add

### 1. Hero Section Food Image
- **File name**: `hero-food-bowl.jpg` or `hero-food-bowl.png`
- **Recommended size**: 1200x1200px (square aspect ratio)
- **Content**: High-quality image of a food bowl with meatballs, rice, and vegetables
- **Format**: JPG or PNG
- **Optimization**: Compress to under 500KB for web performance

**Current placeholder**: Using Unsplash API
**Location in code**: `index.html` line with class `.food-image`

### 2. Customer Avatar Images
- **File names**: `customer-1.jpg`, `customer-2.jpg`, etc.
- **Recommended size**: 150x150px (square)
- **Format**: JPG or PNG
- **Content**: Professional headshots or avatar images

**Current placeholder**: Using pravatar.cc API
**Location in code**: `index.html` within `.customer-avatars` section

### 3. Favicon
- **File name**: `favicon.ico`
- **Recommended size**: 32x32px or 16x16px
- **Format**: ICO
- **Content**: AdeFood logo or "F" icon

**Current placeholder**: None (browser will show default)
**Location in code**: `index.html` in `<head>` section

### 4. Logo (Optional - currently text-based)
- **File name**: `logo.svg` or `logo.png`
- **Format**: SVG preferred (scalable), or PNG
- **Content**: Full AdeFood logo

## Image Optimization Tips

1. **Compress images**: Use tools like TinyPNG, ImageOptim, or Squoosh
2. **Use WebP format**: Modern format with better compression
3. **Lazy loading**: Already implemented in HTML with `loading="lazy"`
4. **Responsive images**: Consider using `<picture>` element with multiple sizes
5. **Alt text**: Always provide descriptive alt text for accessibility

## Image Sources

### Free Stock Photos for Food
- **Unsplash**: https://unsplash.com/s/photos/food-bowl
- **Pexels**: https://www.pexels.com/search/healthy-food/
- **Pixabay**: https://pixabay.com/images/search/food/

### Avatar/Profile Images
- **UI Faces**: https://uifaces.co/
- **This Person Does Not Exist**: https://thispersondoesnotexist.com/
- **Generated Photos**: https://generated.photos/

## How to Replace Placeholder Images

### Replace Hero Food Image
1. Add your image to this directory: `images/hero-food-bowl.jpg`
2. Open `index.html`
3. Find the `.food-image` element
4. Replace the `src` attribute:
   ```html
   <img
       src="images/hero-food-bowl.jpg"
       alt="Delicious healthy meal bowl with meatballs, rice, and fresh vegetables"
       class="food-image"
       loading="eager"
   >
   ```

### Replace Customer Avatars
1. Add 6 images to this directory: `images/customer-1.jpg` through `images/customer-6.jpg`
2. Open `index.html`
3. Find the `.customer-avatars` section
4. Replace each avatar's `src` attribute:
   ```html
   <div class="avatar">
       <img src="images/customer-1.jpg" alt="Customer 1" loading="lazy">
   </div>
   ```

### Add Favicon
1. Add `favicon.ico` to this directory
2. The `index.html` already references it correctly

## Directory Structure
```
images/
├── README.md (this file)
├── hero-food-bowl.jpg (add your hero image here)
├── customer-1.jpg (add customer avatars)
├── customer-2.jpg
├── customer-3.jpg
├── customer-4.jpg
├── customer-5.jpg
├── customer-6.jpg
└── favicon.ico (add favicon here)
```

## Notes
- Keep image file names lowercase and use hyphens instead of spaces
- Always test image loading on different devices and screen sizes
- Monitor website performance with tools like Google PageSpeed Insights
- Consider using a CDN for serving images in production
