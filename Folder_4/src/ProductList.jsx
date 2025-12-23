import ProductCard from "./ProductCard";

function ProductList({ products }) {
  if (!products || products.length === 0) {
    return <p>No products available at the moment.</p>;
  }

  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          inStock={product.inStock}
          isFeatured={product.isFeatured}
        />
      ))}
    </div>
  );
}

export default ProductList;

