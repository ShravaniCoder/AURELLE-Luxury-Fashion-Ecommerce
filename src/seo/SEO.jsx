import { Helmet } from 'react-helmet-async';
export default function SEO({title='Modern Heirlooms & Considered Style',description='Discover considered jewellery and modern womenswear at Aurélle.',path=''}) {
 const site = import.meta.env.VITE_SITE_URL || 'https://example.com';
 return <Helmet><title>{title} | AURÉLLE</title><meta name="description" content={description}/><meta name="robots" content="index,follow"/><link rel="canonical" href={`${site}${path}`}/><meta property="og:site_name" content="AURÉLLE"/><meta property="og:title" content={`${title} | AURÉLLE`}/><meta property="og:description" content={description}/><meta property="og:type" content="website"/><meta property="og:url" content={`${site}${path}`}/><meta name="twitter:card" content="summary_large_image"/></Helmet>;
}
