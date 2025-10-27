import api from './api';

const TOKEN_KEY = 'auth_token';
const USER_KEY = 'auth_user';

export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
};

export const setUser = (user) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const getUser = () => {
  const user = localStorage.getItem(USER_KEY);
  return user ? JSON.parse(user) : null;
};

// Login
export const login = async (email, password) => {
  const response = await api.post('/login', {
    user: { email, password }
  });
  
  const token = response.headers['authorization']?.split(' ')[1];
  
  if (token) {
    setToken(token);
    setUser(response.data.user);
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
  
  return response.data;
};

export const signup = async (email, password) => {
  const response = await api.post('/signup', {
    user: { email, password }
  });
  
  const token = response.headers['authorization']?.split(' ')[1];
  if (token) {
    setToken(token);
    setUser(response.data.user);
    
    // Configura o token em todas as requisições futuras
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
  
  return response.data;
};

export const logout = () => {
  removeToken();
  delete api.defaults.headers.common['Authorization'];
};

// Inicializar token ao carregar app
export const initializeAuth = () => {
  const token = getToken();
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
};