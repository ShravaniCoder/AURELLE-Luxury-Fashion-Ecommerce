import { createContext, useContext, useMemo, useState } from 'react';
const CartContext = createContext(null);
export function CartProvider({children}) {
 const [items,setItems] = useState([]);
 const add = (product, quantity=1) => setItems(old => { const found=old.find(x=>x.id===product.id); return found ? old.map(x=>x.id===product.id?{...x,quantity:x.quantity+quantity}:x) : [...old,{...product,quantity}]; });
 const remove = id => setItems(old=>old.filter(x=>x.id!==id));
 const setQuantity = (id,quantity) => setItems(old=>quantity<1?old.filter(x=>x.id!==id):old.map(x=>x.id===id?{...x,quantity}:x));
 const clear = () => setItems([]);
 const count = items.reduce((s,x)=>s+x.quantity,0); const subtotal=items.reduce((s,x)=>s+x.price*x.quantity,0);
 const value=useMemo(()=>({items,add,remove,setQuantity,clear,count,subtotal}),[items,count,subtotal]);
 return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export const useCart = () => useContext(CartContext);
