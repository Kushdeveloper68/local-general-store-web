import axios from "axios";

const API = axios.create({
  baseURL: 'http://localhost:5000/',
  withCredentials: true,
});

export const loginApi = async (username, password) => {
  try {
    const response = await API.post('/api/login', { username, password });
    return response.data;
  } catch (error) {
    console.error('loginApi error:', error.response?.data || error.message);
    return error.response?.data || { success: false, message: 'Login failed' };
  }
};

// Add popular product
export const addPopularProductApi = async (productData) => {
  try {
    const token = localStorage.getItem('adminToken');
    const response = await API.post('/api/popular-products', productData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('addPopularProductApi error:', error.response?.data || error.message);
    return error.response?.data || { success: false, message: 'Failed to add product' };
  }
};

// Add offer product
export const addOfferProductApi = async (offerData) => {
  try {
    const token = localStorage.getItem('adminToken');
    const response = await API.post('/api/offer-products', offerData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('addOfferProductApi error:', error.response?.data || error.message);
    return error.response?.data || { success: false, message: 'Failed to add offer' };
  }
};

// Get all popular products (for admin with auth)
export const getPopularProductsApi = async () => {
  try {
    const token = localStorage.getItem('adminToken');
    const response = await API.get('/api/popular-products', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('getPopularProductsApi error:', error.response?.data || error.message);
    return error.response?.data || { success: false, message: 'Failed to fetch products' };
  }
};

// Get all popular products (for customer - public)
export const getPopularProductsPublicApi = async () => {
  try {
    const response = await API.get('/api/popular-products');
    return response.data;
  } catch (error) {
    console.error('getPopularProductsPublicApi error:', error.response?.data || error.message);
    return error.response?.data || { success: false, message: 'Failed to fetch products' };
  }
};

// Get all offer products (for admin with auth)
export const getOfferProductsApi = async () => {
  try {
    const token = localStorage.getItem('adminToken');
    const response = await API.get('/api/offer-products', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('getOfferProductsApi error:', error.response?.data || error.message);
    return error.response?.data || { success: false, message: 'Failed to fetch offers' };
  }
};

// Get all offer products (for customer - public)
export const getOfferProductsPublicApi = async () => {
  try {
    const response = await API.get('/api/offer-products');
    return response.data;
  } catch (error) {
    console.error('getOfferProductsPublicApi error:', error.response?.data || error.message);
    return error.response?.data || { success: false, message: 'Failed to fetch offers' };
  }
};

// Delete popular product
export const deletePopularProductApi = async (productId) => {
  try {
    const token = localStorage.getItem('adminToken');
    const response = await API.delete(`/api/popular-products/${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('deletePopularProductApi error:', error.response?.data || error.message);
    return error.response?.data || { success: false, message: 'Failed to delete product' };
  }
};

// Delete offer product
export const deleteOfferProductApi = async (offerId) => {
  try {
    const token = localStorage.getItem('adminToken');
    const response = await API.delete(`/api/offer-products/${offerId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('deleteOfferProductApi error:', error.response?.data || error.message);
    return error.response?.data || { success: false, message: 'Failed to delete offer' };
  }
};

// WhatsApp utility functions
export const generateWhatsAppMessage = (product) => {
  const message = `Hi, I'm interested in ordering *${product.title}*${product.quantity ? ` (${product.quantity})` : ''}. Price: $${product.offerPrice || product.price}. Please confirm availability and share payment details.`;
  return encodeURIComponent(message);
};

export const getWhatsAppLink = (message = null) => {
  const phoneNumber = '918160751735';
  if (message) {
    return `https://wa.me/${phoneNumber}?text=${message}`;
  }
  return `https://wa.me/${phoneNumber}`;
};
