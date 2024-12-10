import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("recommended");
  const [showFilter, setShowFilter] = useState(false); // Set this to false by default
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Categories available for filtering
  const categories = ["Men", "Women", "Electronics", "Jewelry", "Child"];

  // Map API categories to user-friendly categories
  const mapCategory = (apiCategory) => {
    if (apiCategory === "men's clothing") return "Men";
    if (apiCategory === "women's clothing") return "Women";
    if (apiCategory === "electronics") return "Electronics";
    if (apiCategory === "jewelery") return "Jewelry";
    return "Child"; // Default for any unmatched category
  };

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Handle sorting based on filter
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  // Handle category filtering
  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category]
    );
  };

  // Filter products based on selected categories
  const filteredProducts = selectedCategories.length
    ? products.filter((product) =>
        selectedCategories.includes(mapCategory(product.category))
      )
    : products;

  // Sorting products based on filter criteria
  const sortedProducts = () => {
    let sorted = filteredProducts;
 

    switch (filter) {
      case "priceLowToHigh":
        sorted = [...filteredProducts].sort((a, b) => a.price - b.price);
        break;
      case "priceHighToLow":
        sorted = [...filteredProducts].sort((a, b) => b.price - a.price);
        break;
      case "newestFirst":
        sorted = [...filteredProducts].sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        break;
      case "popular":
        sorted = [...filteredProducts].sort(
          (a, b) => b.rating.rate - a.rating.rate
        );
        break;
      default:
        break;
    }
    return sorted;
  };

  if (loading) {
    return <div className="products">Loading...</div>;
  }

  return (
    <div className="products">
      <Filter
        onFilterChange={handleFilterChange}
        totalItem={products.length}
        appliedFilter={filter}
        showFilter={showFilter}
        setShowFilter={setShowFilter}
      />

      <div className="product-container">
        {/* Side Navigation for Category Filter */}
        <div
          className={
            showFilter ? "product-side-nav" : "product-side-nav-hidden"
          }
        >
          <h2>Category Filter</h2>
          {categories.map((category) => (
            <div key={category} className="category-checkbox">
              <input
                type="checkbox"
                id={category}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              <label htmlFor={category}>{category}</label>
            </div>
          ))}
        </div>

        {/* Product Items Area */}
        <div
          className="product-items"
          style={showFilter ? { width: "70%" } : { width: "100%" }}
        >
          <div className="products-grid">
            {sortedProducts().map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-image"
                  />
                </div>
                <div className="product-details">
                  <h3 className="product-title">
                    {product.title.substring(0, 10)}...
                  </h3>
                  <div className="auth-message">
                    <span className="auth-link">Sign up</span> or{" "}
                    <span className="auth-link">create account</span> to see
                    pricing
                  </div>
                  <div>{product.price}</div>
                  <div>{product.rating.rate}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
