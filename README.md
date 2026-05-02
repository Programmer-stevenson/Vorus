# VORUS - Luxury Cologne Landing Page

A stunning, fully-responsive luxury cologne brand landing page built with the MERN stack, Framer Motion, and Tailwind CSS.

ATTENTION, PLEASE READ!!!!!!!!!!!!!!!!!!!!!!!!
ALL VORUS BRANDED IMAGES WERE ENGINEERED AND CREATED BY ME FROM SCRATCH TO SHOWCASE PRODUCT DESIGN SKILLS AND THAN INCOPRATE THAT DESIGN INTO A WEBSITE. 



## 🚀 Features

- **Modern React Frontend** - Built with React 18 and TypeScript
- **Smooth Animations** - Powered by Framer Motion for elegant scroll-triggered and hover animations
- **Responsive Design** - Fully responsive layout with Tailwind CSS
- **Express Backend** - Node.js/Express server with API endpoints
- **MongoDB Ready** - Database integration ready for e-commerce functionality
- **Luxury Aesthetic** - Dark theme with metallic chrome accents and glass effects

## 🎨 Design Elements

- **Chrome Text Effects** - Metallic gradient text for premium feel
- **Glass Morphism** - Frosted glass card effects
- **Floating Animations** - Subtle floating bottle animations
- **Particle Effects** - Ambient floating particles
- **Grayscale Hover** - Images transition from grayscale to color on hover

## 📦 Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- Framer Motion
- Tailwind CSS
- Lucide React Icons



## 🛠️ Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn


### Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd vorus-clone
```

2. **Install all dependencies**
```bash
npm run install:all
```

Or install separately:
```bash
# Root dependencies
npm install

# Client dependencies
cd client && npm install

# Server dependencies
cd ../server && npm install
```

3. **Environment Variables** (optional)

Create a `.env` file in the server directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/vorus
NODE_ENV=development
```

4. **Run the development server**
```bash
# From root directory - runs both client and server
npm run dev
```

Or run separately:
```bash
# Terminal 1 - Server
cd server && npm run dev

# Terminal 2 - Client  
cd client && npm run dev
```

5. **Open in browser**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 📁 Project Structure

```
vorus-clone/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Hero.tsx
│   │   │   ├── FragranceNotes.tsx
│   │   │   ├── ProductShowcase.tsx
│   │   │   ├── LifestyleSection.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── CTASection.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ImageWithFallback.tsx
│   │   ├── styles/
│   │   │   └── globals.css
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── index.html
│   ├── tailwind.config.js
│   ├── vite.config.ts
│   └── package.json
├── server/                 # Express backend
│   ├── server.js
│   └── package.json
├── package.json            # Root package.json
└── README.md
```


## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Vorus Black | `#0C0C0D` | Primary background |
| Vorus Charcoal | `#1F1F22` | Secondary background |
| Vorus Steel | `#A9A9AE` | Accent color |
| Vorus White | `#ECECEC` | Primary text |

## 🔧 Customization

### Changing Colors
Edit `tailwind.config.js` to modify the color palette:
```javascript
theme: {
  extend: {
    colors: {
      'vorus-black': '#0C0C0D',
      'vorus-charcoal': '#1F1F22',
      'vorus-steel': '#A9A9AE',
      'vorus-white': '#ECECEC',
    },
  },
}
```

### Adding New Products
Update the `products` array in `ProductShowcase.tsx` or fetch from the API endpoint.

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Render/Vercel/Railway
1. Connect your repository
2. Set build command: `npm run build`
3. Set start command: `npm run server`
4. Add environment variables

## 📄 License

MIT License - feel free to use for personal or commercial projects.

## 🙏 Credits

- Images from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)
- Fonts from [Google Fonts](https://fonts.google.com) (Playfair Display, Inter)

---

Built with ❤️ using the MERN Stack
# Vorus
