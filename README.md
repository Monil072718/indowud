# Indowud NFC - Official Website

A modern, responsive website for Indowud NFC - a premium eco-friendly Natural Fibre Composite (NFC) board solutions company. Built with Next.js 15, React 19, and TypeScript.

## 🌟 Overview

Indowud NFC offers sustainable, eco-friendly board solutions made from rice husk. This website showcases their product range, corporate information, media content, and provides a platform for customers to learn about and contact the company.

## 🚀 Tech Stack

### Core Technologies
- **Next.js 15.5.4** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework

### Key Dependencies
- **Framer Motion 12.23.24** - Animation library
- **Swiper 12.0.2** - Touch slider component
- **Lucide React 0.545.0** - Icon library
- **Country State City 3.2.1** - Location data for forms

### Development Tools
- **ESLint** - Code linting
- **Turbopack** - Fast bundler (Next.js default)

## 📁 Project Structure

```
indowud/
├── public/                 # Static assets (images, PDFs)
│   ├── Indowud-nfc-eBrochure.pdf
│   ├── Warranty-Card_Indowud.pdf
│   └── [images]/
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── nfc/          # NFC product pages
│   │   │   ├── products/
│   │   │   ├── applications/
│   │   │   ├── features/
│   │   │   ├── manufacturing-process/
│   │   │   └── ...
│   │   ├── corporate/    # Corporate pages
│   │   │   ├── chairman-message/
│   │   │   ├── mission-vision/
│   │   │   ├── our-team/
│   │   │   └── certifications/
│   │   ├── media/        # Media pages
│   │   │   ├── blog/
│   │   │   ├── news/
│   │   │   └── video/
│   │   ├── contact/      # Contact page
│   │   ├── quick-links/  # Legal & warranty pages
│   │   └── page.tsx      # Homepage
│   ├── components/
│   │   ├── common/       # Reusable components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Breadcrumb.tsx
│   │   │   └── ...
│   │   └── sections/     # Page sections
│   │       ├── HeroSlider.tsx
│   │       ├── ContactUs.tsx
│   │       └── ...
│   └── globals.css       # Global styles
├── next.config.ts        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Dependencies
└── README.md             # This file
```

## ✨ Key Features

### Product Showcase
- **Product Catalog** - Comprehensive display of NFC products (ZeroWud, Indowud Board, Doors, Frames, etc.)
- **Product Details** - Specifications, features, and application information
- **NFC-GLU Section** - Dedicated section for adhesive products
- **Image Galleries** - Visual product presentations

### Corporate Information
- **Chairman Message** - Leadership communication
- **Mission & Vision** - Company values and goals
- **Our Team** - Team member profiles
- **Certifications** - Industry certifications and awards

### Media & Content
- **Blog** - Articles and stories
- **News** - Media mentions and press coverage
- **Videos** - Product videos and testimonials

### Technical Pages
- **Manufacturing Process** - Production methodology
- **Test Results** - Product testing data
- **Comparative Study** - Product comparisons
- **Fire Test** - Fire resistance testing
- **Sustainability** - Green rating and eco-credentials
- **Applications** - Use cases and examples
- **FAQs** - Frequently asked questions

### User Experience
- **Responsive Design** - Mobile-first, works on all devices
- **Smooth Animations** - Framer Motion powered transitions
- **Breadcrumb Navigation** - Consistent navigation across pages
- **Contact Forms** - Location-based contact forms
- **PDF Downloads** - Product brochures and warranty cards

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ (recommended: Node.js 20+)
- npm, yarn, pnpm, or bun

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd indowud
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Styling & Design

### Brand Colors
- **Teal**: `#0FA5A5` - Primary brand color
- **Magenta**: `#C13584` - Secondary brand color

### Typography
- Standardized font sizes across all pages
- Responsive typography (mobile-first approach)
- Consistent heading hierarchy

### Components
- **Breadcrumb** - Standardized navigation breadcrumbs
- **Buttons** - Primary and secondary button variants
- **Cards** - Product cards, blog cards, feature cards
- **Icons** - Lucide React icon library

## 🔧 Configuration

### Next.js Configuration (`next.config.ts`)
- Image optimization with AVIF and WebP formats
- Remote image domains configured (Cloudinary, Pexels, Unsplash)
- Performance optimizations enabled
- Security headers configured
- Cache control for static assets

### TypeScript
- Strict mode enabled
- Path aliases configured (`@/*` maps to `./src/*`)

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: Default (< 640px)
- **Tablet**: `sm:` (640px+)
- **Desktop**: `md:` (768px+), `lg:` (1024px+)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Production Server
```bash
npm run start
```

### Recommended Platforms
- **Vercel** - Optimized for Next.js (recommended)
- **Netlify** - Alternative deployment option
- **Self-hosted** - Node.js server required

## 📄 Key Pages

### Main Sections
- `/` - Homepage with hero slider
- `/nfc/products` - Product catalog
- `/nfc/applications` - Application examples
- `/corporate/chairman-message` - Leadership message
- `/corporate/our-team` - Team profiles
- `/media/blog` - Blog articles
- `/media/news` - News and press
- `/contact` - Contact form

### Product Pages
- `/nfc/products#zerowud-nfc` - ZeroWud NFC panels
- `/nfc/products#indowud-nfc-board` - Indowud NFC Board
- `/nfc/products#nfc-door` - NFC Doors
- `/nfc/products#nfc-frame` - NFC Frames
- And more...

## 🔍 SEO & Performance

- **Structured Data** - JSON-LD schema for better search visibility
- **Meta Tags** - Optimized meta descriptions and Open Graph tags
- **Image Optimization** - Next.js Image component with lazy loading
- **Code Splitting** - Automatic code splitting by Next.js
- **Font Optimization** - Optimized font loading

## 📦 Public Assets

### PDFs
- `Indowud-nfc-eBrochure.pdf` - Product brochure
- `Warranty-Card_Indowud.pdf` - Warranty information

### Images
All product images and assets are stored in the `public/` directory.

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📞 Support

For support or inquiries, visit the [Contact Us](/contact) page on the website.

## 📄 License

This project is proprietary and confidential.

---

**Built with ❤️ for Indowud NFC**
