# LocalStore - E-Commerce Platform

A full-stack e-commerce application with admin panel for managing products, orders, and offers.

## Project Structure

```
├── backend/          # Node.js + Express server
│   ├── controllers/  # Business logic
│   ├── models/       # Database schemas
│   ├── routes/       # API endpoints
│   ├── middlewares/  # Authentication & validation
│   └── connections/  # Database connection
└── frontend/         # React + Vite application
    ├── src/
    │   ├── components/  # Reusable React components
    │   ├── pages/       # Page components
    │   └── api/         # API integration
```

## Features

- **Product Management** - Browse and filter products
- **User Authentication** - JWT-based user login
- **Admin Panel** - Manage products, offers, and orders
- **Offers & Promotions** - Create and manage special deals
- **Delivery Tracking** - Order delivery information
- **Responsive Design** - Mobile-friendly UI with Tailwind CSS

## Tech Stack

### Backend
- Node.js + Express
- JWT Authentication
- Database models for Users & Products

### Frontend
- React + Vite
- Tailwind CSS for styling
- ESLint for code quality

## Getting Started

### Backend Setup
```bash
cd backend
npm install
npm start
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## API Routes

- `POST /api/auth/login` - User login
- `GET /api/products` - Get all products
- `POST /api/products` - Create product (admin)
- `GET /api/offers` - Get active offers
- `POST /api/orders` - Create order

## Environment Variables

Create a `.env` file in the backend directory with your configuration:
```
DB_CONNECTION=your_database_url
JWT_SECRET=your_secret_key
PORT=5000
```

## Contributing

Feel free to submit issues and enhancement requests.
