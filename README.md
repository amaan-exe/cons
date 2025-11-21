# Smart Construction & Developers

A modern, production-ready React website for Smart Construction & Developers - a leading construction company based in Patna, Bihar.

![Website Preview](https://img.shields.io/badge/Status-Production%20Ready-success)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38bdf8)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646cff)

## 🌟 Features

- **Modern React Architecture** - Built with React 19 and Vite for optimal performance
- **Tailwind CSS** - Production-compiled, no CDN dependencies
- **WhatsApp Integration** - Direct inquiry submission via WhatsApp
- **SEO Optimized** - Dynamic meta tags, structured data, and Open Graph support
- **Responsive Design** - Mobile-first approach, works on all devices
- **Smooth Animations** - Framer Motion for professional animations
- **Fast Loading** - Optimized build with code splitting
- **Clean URLs** - React Router for seamless navigation

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/amaan-exe/cons.git

# Navigate to project directory
cd cons

# Install dependencies
npm install

# Start development server
npm run dev
```

The website will be available at `http://localhost:5173`

## 📦 Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

The optimized files will be in the `dist` folder, ready for deployment.

## 🏗️ Project Structure

```
cons/
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Clients.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── SEO.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── ProjectsPage.jsx
│   │   └── ContactPage.jsx
│   ├── assets/         # Images and static files
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Public assets
├── index.html          # HTML template
├── tailwind.config.js  # Tailwind configuration
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies
```

## 💬 WhatsApp Integration

The contact form includes WhatsApp integration that sends inquiries directly to the business WhatsApp number.

**How it works:**
1. User fills out the contact form
2. Clicks "Send via WhatsApp"
3. WhatsApp opens with pre-formatted message
4. Message includes all form details
5. Sent to: +91 700 485 9323

## 🎨 Customization

### Update Company Information

Edit `src/components/Contact.jsx` to change the WhatsApp number:

```javascript
const whatsappNumber = '917004859323'; // Change this
```

### Modify Theme Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: { ... },    // Orange construction theme
  secondary: { ... },  // Gray professional theme
  accent: { ... }      // Blue accent colors
}
```

## 📱 Pages

- **Home** (`/`) - Hero, services overview, about, clients, contact
- **About** (`/about`) - Company profile, mission, vision
- **Services** (`/services`) - Detailed services and machinery
- **Projects** (`/projects`) - Completed and ongoing projects
- **Contact** (`/contact`) - Contact form with WhatsApp integration

## 🔧 Technologies Used

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **React Router 6** - Client-side routing
- **React Helmet Async** - SEO meta tags
- **Framer Motion** - Animation library
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📊 SEO Features

- ✅ Dynamic meta tags per page
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card support
- ✅ Structured data (JSON-LD) for local business
- ✅ Semantic HTML5
- ✅ Proper heading hierarchy
- ✅ Alt text for images
- ✅ Fast loading times

## 🌐 Deployment

### Netlify
```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

### Vercel
```bash
npm run build
vercel --prod
```

### GitHub Pages
```bash
npm run build
# Push dist folder to gh-pages branch
```

## 📞 Company Information

**Smart Construction & Developers**
- **Proprietor:** Md Sufiyan Raza
- **Established:** February 22, 2022
- **Head Office:** S/49, 2ND Floor, Haji Harman Complex, AIIMS Road, Phulwari Sharif, Patna-801505, Bihar
- **Phone:** +91 700 485 9323
- **Email:** smartconstructiondevelopers@gmail.com

### Major Clients
- Mahavir Cancer Sansthan, Patna
- AIIMS Patna
- Bihar State Disaster Management Authority
- Nephrocare Health Services Limited
- And more...

## 📄 License

This project is proprietary and confidential.

## 🤝 Support

For support or inquiries, contact:
- Email: smartconstructiondevelopers@gmail.com
- Phone: +91 700 485 9323
- WhatsApp: +91 700 485 9323

---

**Built with ❤️ for Smart Construction & Developers**
