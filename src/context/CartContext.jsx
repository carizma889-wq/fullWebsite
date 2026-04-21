/* eslint-disable react-refresh/only-export-components */
import { createContext,useState,useEffect } from "react";

export const CartContext=createContext([])


export const CartsProvider=({children})=>{
    const [Cart,SetCart]=useState(()=>{
        const data=localStorage.getItem('Cart');
        return data? JSON.parse(data):[]
    })
    const toggleCart=(product)=>{
        SetCart((prev)=>{
            const exists=prev.find((item)=>item.id===product.id)
            if(exists){
                return prev.filter((item)=>item.id !== product.id)
            }else{
                return [...prev,product]
            }
        })
    }
    useEffect(()=>{
        localStorage.setItem('Cart',JSON.stringify(Cart))
    },[Cart])
    return(
        <CartContext.Provider value={{Cart,toggleCart}}>
            {children}
        </CartContext.Provider>
    )
}