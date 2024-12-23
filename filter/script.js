// Sample product data
const products = [
    { id: 1, name: "Laptop", category: "electronics", price: 900, image: "images/laptop.jpg" },
    { id: 2, name: "T-Shirt", category: "clothing", price: 25, image: "images/tshirt.jpg" },
    { id: 3, name: "Book: JavaScript", category: "books", price: 15, image: "images/book.jpg" },
    { id: 4, name: "Smartphone", category: "electronics", price: 350, image: "images/smartphone.jpg" },
    { id: 5, name: "Jacket", category: "clothing", price: 80, image: "images/jacket.jpg" },
    { id: 6, name: "Novel", category: "books", price: 12, image: "images/novel.jpg" },
    { id: 7, name: "Tablet", category: "electronics", price: 150, image: "images/tablet.jpg" },
  ];
  
  
  function filterProducts() {
    const category = document.getElementById('category').value;
    const price = document.getElementById('price').value;
  
    let filteredProducts = products;
  

    if (category !== 'all') {
      filteredProducts = filteredProducts.filter(product => product.category === category);
    }displayProducts(filteredProducts);
  }
  

  function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
  
    if (products.length === 0) {
      productList.innerHTML = '<p>No products found</p>';
      return;
    }
  
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
  
      productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Category: ${product.category}</p>
        <p>Price: $${product.price}</p>
      `;
  
      productList.appendChild(productDiv);
    });
  }
  window.onload(displayProducts(products))
  
