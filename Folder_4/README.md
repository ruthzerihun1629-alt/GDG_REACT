Product Showcase React App

A small React application that displays a list of products using reusable card components. Products are rendered dynamically from a static data array, with conditional UI elements based on product properties.

Features

Reusable ProductCard component

Displays product image, name, and price

Conditional rendering:

"Out of Stock" if inStock is false

"Featured" if isFeatured is true

"Premium Product" if price > 100

Hide image if no image is provided

ProductList component renders multiple ProductCards using .map()

Displays "No products available at the moment." if the product list is empty

Technologies Used

React (Functional Components)

JavaScript ES6

Vite (for development server)
