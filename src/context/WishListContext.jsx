/* eslint-disable react-refresh/only-export-components */
import { createContext,useState,useEffect } from "react";

export const WishlistContext=createContext([])


export const WishlistProvider = ({ children }) => {
const [wishlist, setWishlist] = useState(() => {
  const data = localStorage.getItem("wishlist");
  return data ? JSON.parse(data) : [];
});
const toggleWishlist = (product) => {
    setWishlist((prev) => {
        const exists = prev.find((item) => item.id === product.id);
        if (exists) {
            return prev.filter((item) => item.id !== product.id);
        } else {
            return [...prev, product];
        }
    });
};
 useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);
return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
        {children}
    </WishlistContext.Provider>
);
};