import {create} from 'zustand';

interface UserState {
  username: string;
  setUsername: (username: string) => void;
}

export const userStore = create<UserState>(set => ({
  username: '',
  setUsername: (newUsername: string) => set({username: newUsername}),
}));

interface FavoriteState {
  favorites: number[];
  addFavorite: (favorite: number) => void;
  removeFavorite: (favorite: number) => void;
}

export const favoriteStore = create<FavoriteState>(set => ({
  favorites: [],
  addFavorite: (favorite: number) =>
    set(state => ({favorites: [...state.favorites, favorite]})),
  removeFavorite: (favorite: number) =>
    set(state => ({favorites: state.favorites.filter(f => f !== favorite)})),
}));

interface Product {
  id: number;
  color: string;
  size: string;
  count: number;
}

interface CartState {
  cart: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
}

export const cartStore = create<CartState>(set => ({
  cart: [],
  addProduct: (product: Product) =>
    set(state => ({cart: [...state.cart, product]})),
  removeProduct: (id: number) =>
    set(state => ({cart: state.cart.filter(p => p.id !== id)})),
}));
