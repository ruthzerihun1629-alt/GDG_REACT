function ProductCard({ name, price, image, inStock, isFeatured }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      {image && <img src={image} alt={name} width="100" />}
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Price:</strong> ${price}</p>
      {!inStock && <p style={{ color: "red" }}>Out of Stock</p>}
      {isFeatured && <p style={{ color: "green" }}>Featured</p>}
      {price > 100 && <p style={{ color: "blue" }}>Premium Product</p>}
    </div>
  );
}

export default ProductCard;

