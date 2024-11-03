// Task 2: Fetch products from the API
fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
        // Check response
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); 
    })
    .then(data => {
        // Extract product details and display them
        const products = data; // API returns an array of products
        const productContainer = document.getElementById('product-container');

        products.forEach(product => {
            // create a new div for each product
            const productDiv = document.createElement('div');
            productDiv.innerHTML = `
                <h2>${product.name}</h2>
                <p>Price: $${product.price}</p>
                <img src="${product.image}" alt="${product.name}">
            `;
            productContainer.appendChild(productDiv); // add the product div to the container
        });
    })
    .catch(error => {
        console.error('Error fetching the products:', error);
    });
