import React, { createContext, useState } from "react";

// Create a new Context object that will hold the favorites data
export const FavoritesContext = createContext();

// This component provides the Favorites context to all child components
export const FavoritesProvider = ({ children }) => {
  // Declare a state variable "favorites" to store the list of favorite items
  const [favorites, setFavorites] = useState([]);

  // Function to add an item to the favorites list
  const addFavorite = (item) => {
    // Use the previous state to avoid overwriting existing favorites
    setFavorites((prev) => [...prev, item]);
  };

  // Function to remove an item from the favorites list by its id
  const removeFavorite = (itemId) => {
    // Filter out the item that matches the given id
    setFavorites((prev) => prev.filter((item) => item.id !== itemId));
  };

  // Function to check if an item is already in the favorites list
  const isFavorite = (itemId) => {
    // Returns true if any item in favorites has the same id
    return favorites.some((item) => item.id === itemId);
  };

  // Provide the context values to all children that consume this provider
  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
