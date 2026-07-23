import ProductCard from "./ProductCard";

export default function ProductGrid({ products, onSelect, onAdd }) {
  return (
    <div className="products-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} onSelect={onSelect} onAdd={onAdd} />
      ))}
    </div>
  )
}