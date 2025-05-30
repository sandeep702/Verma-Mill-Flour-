# Verma Flour Mill

A modern web application for Verma Flour Mill - serving fresh, stone-ground flour since 2003.

## 🌾 About

Verma Flour Mill is a family-owned business that has been providing premium quality stone-ground flour for over 22 years. This website showcases our products, heritage, and allows customers to place orders online.

## ✨ Features

- **Product Catalog**: Browse our range of fresh flours including wheat, bajra, and multigrain
- **Online Ordering**: Easy-to-use cart system with secure payment integration
- **Company History**: Learn about our 22 year legacy and modern grinding the flour 
- **Customer Reviews**: Read testimonials from satisfied customers
- **Contact & Support**: Multiple ways to reach us for orders and inquiries
- **Responsive Design**: Optimized for all devices - desktop, tablet, and mobile

## 🛠️ Technologies Used

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui component library
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Payment**: Razorpay integration
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd verma-flour-mill
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn/ui components
│   ├── Navbar.tsx      # Navigation component
│   ├── Footer.tsx      # Footer component
│   └── ...
├── pages/              # Page components
│   ├── Home.tsx        # Homepage
│   ├── About.tsx       # About us page
│   ├── Products.tsx    # Products catalog
│   ├── Cart.tsx        # Shopping cart
│   └── ...
├── contexts/           # React contexts
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── styles/             # CSS files
```

## 🎨 Design System

The project uses a custom color palette inspired by wheat and traditional flour mills:

- **Brown Warm**: Primary brand color
- **Wheat Gold**: Secondary accent color
- **Wheat Light**: Background tones
- **Cream**: Neutral backgrounds

## 💳 Payment Integration

The application integrates with Razorpay for secure payment processing. To set up payments:

1. Create a Razorpay account
2. Add your Razorpay key to the environment variables
3. Configure webhook endpoints for payment confirmations

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)


## 📄 License

This project is proprietary software owned by Verma Flour Mill.

## 📞 Contact

- **Website**: [empty]
- **Email**: [kamboz629@gmail.com]
- **Phone**: [8295059554]
- **Address**: [empty]

---

© 2024 Verma Flour Mill. All rights reserved.