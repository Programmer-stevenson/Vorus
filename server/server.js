import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection (optional - for future features like contact forms, orders)
const connectDB = async () => {
  try {
    if (process.env.MONGODB_URI) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('MongoDB connected successfully');
    } else {
      console.log('Running without MongoDB (no MONGODB_URI provided)');
    }
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
  }
};

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'VORUS API is running' });
});

// Product data endpoint
app.get('/api/products', (req, res) => {
  const products = [
    {
      id: 1,
      name: 'VORUS Noir',
      subtitle: 'The Original',
      description: 'Our signature scent. Bold, mysterious, unforgettable.',
      price: 185,
      image: 'https://images.unsplash.com/photo-1758871992965-836e1fb0f9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjb2xvZ25lJTIwYm90dGxlJTIwZGFya3xlbnwxfHx8fDE3NjQwNDY5NDV8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 2,
      name: 'VORUS Midnight',
      subtitle: 'Limited Edition',
      description: 'Intensified with deeper amber and leather accords.',
      price: 210,
      image: 'https://images.unsplash.com/photo-1666694890565-93659106d39e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlJTIwYmxhY2t8ZW58MXx8fHwxNzYzOTgzODI3fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 3,
      name: 'VORUS Ember',
      subtitle: 'Warm & Spiced',
      description: 'A warmer interpretation with tobacco and vanilla.',
      price: 195,
      image: 'https://images.unsplash.com/photo-1708486235073-14879ff14c4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlJTIwbWluaW1hbGlzdHxlbnwxfHx8fDE3NjQwNDY5NDh8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];
  res.json(products);
});

// Fragrance notes endpoint
app.get('/api/notes', (req, res) => {
  const notes = [
    {
      id: 1,
      name: 'Bergamot',
      description: 'Citrus top note with vibrant, fresh energy',
      image: 'https://images.unsplash.com/photo-1758181839713-ce6068d79147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXJnYW1vdCUyMGNpdHJ1c3xlbnwxfHx8fDE3NjQwNDY5NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 2,
      name: 'Black Pepper',
      description: 'Spicy heart with bold, masculine warmth',
      image: 'https://images.unsplash.com/photo-1649951806971-ad0e00408773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHBlcHBlciUyMHNwaWNlfGVufDF8fHx8MTc2NDA0Njk0Nnww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 3,
      name: 'Midnight Amber',
      description: 'Deep, resinous base with mysterious allure',
      image: 'https://images.unsplash.com/photo-1740819912820-6535ad66884a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWJlciUyMHJlc2lufGVufDF8fHx8MTc2NDA0Njk0N3ww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 4,
      name: 'Smoked Cedar',
      description: 'Woody foundation with refined, smoky character',
      image: 'https://images.unsplash.com/photo-1515446134809-993c501ca304?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWRhciUyMHdvb2R8ZW58MXx8fHwxNzY0MDQ2OTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];
  res.json(notes);
});

// Testimonials endpoint
app.get('/api/testimonials', (req, res) => {
  const testimonials = [
    {
      id: 1,
      quote: "VORUS isn't just a fragrance—it's an attitude. It commands attention without saying a word.",
      author: 'Marcus Chen',
      title: 'GQ Magazine',
      image: 'https://images.unsplash.com/photo-1618008797651-3eb256213400?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwbW9kZWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM5NTkwNTR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 2,
      quote: 'The perfect balance of sophistication and raw magnetism. This is what modern luxury smells like.',
      author: 'James Sullivan',
      title: 'Esquire',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
    },
    {
      id: 3,
      quote: 'A masterclass in olfactory design. VORUS Midnight is my go-to for evening events.',
      author: 'Alexander Noir',
      title: 'Vogue Homme',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400'
    }
  ];
  res.json(testimonials);
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

// Start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 VORUS Server running on port ${PORT}`);
  });
});
