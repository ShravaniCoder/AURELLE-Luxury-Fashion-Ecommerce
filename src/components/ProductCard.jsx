import { Link } from 'react-router-dom';
import { Heart, ArrowUpRight } from 'lucide-react';
import { money } from '../data/products';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
export default function ProductCard({product,index=0}){const {add}=useCart();const [saved,setSaved]=useState(false);return <article className={`product-card product-card-${index%4}`}><div className="product-image-wrap"><Link to={`/product/${product.id}`} aria-label={`View ${product.name}`}><img src={product.image} alt={product.alt} loading="lazy"/></Link>{product.tag&&<span className="product-tag">{product.tag}</span>}<button className={`wishlist-button ${saved?'is-saved':''}`} aria-label={saved?'Remove from wishlist':'Add to wishlist'} onClick={()=>setSaved(!saved)}><Heart size={17} fill={saved?'currentColor':'none'}/></button><button className="quick-add" onClick={()=>add(product)}>Add to bag <span>+</span></button></div><div className="product-info"><div><Link to={`/product/${product.id}`} className="product-name">{product.name}</Link><span className="product-category">{product.type}</span></div><strong>{money(product.price)}</strong></div></article>}
