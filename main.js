// Fetch products from the API
fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Log the data to check its structure
        const products = data; // Use this line if data is an array of products
        const productContainer = document.getElementById('product-container');

        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.style.border = "1px solid #ccc"; // Add border
            productDiv.style.padding = "16px"; // Add padding
            productDiv.style.margin = "16px"; // Add margin
            productDiv.style.textAlign = "center"; // Center text alignment

            productDiv.innerHTML = `
                <h2>${product.name}</h2>
                <p><strong>Company:</strong> ${product.company}</p>
                <p><strong>Price:</strong> $${product.price}</p>
                <img src="${product.image}" alt="${product.name}" style="width: 200px; height: auto;">
            `;
            productContainer.appendChild(productDiv);
        });
    })
    .catch(error => {
        console.error('Error fetching the products:', error);

        // display an error message
        const productContainer = document.getElementById('product-container');
        const errorMessage = document.createElement('div');
        errorMessage.innerHTML = `<p style="color: red; text-align: center;">Failed to load products. Please try again later.</p>`;
        productContainer.appendChild(errorMessage);
    });
