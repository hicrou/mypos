// Sample product data
const products = [
    { id: 1, name: 'Hamburger', price: 8.99, category: 'food' },
    { id: 2, name: 'Cheeseburger', price: 9.99, category: 'food' },
    { id: 3, name: 'French Fries', price: 3.99, category: 'food' },
    { id: 4, name: 'Chicken Wings', price: 12.99, category: 'food' },
    { id: 5, name: 'Caesar Salad', price: 7.99, category: 'food' },
    { id: 6, name: 'Coca Cola', price: 2.99, category: 'drinks' },
    { id: 7, name: 'Orange Juice', price: 3.49, category: 'drinks' },
    { id: 8, name: 'Coffee', price: 2.49, category: 'drinks' },
    { id: 9, name: 'Water Bottle', price: 1.99, category: 'drinks' },
    { id: 10, name: 'Potato Chips', price: 2.99, category: 'snacks' },
    { id: 11, name: 'Chocolate Bar', price: 1.99, category: 'snacks' },
    { id: 12, name: 'Cookies', price: 3.49, category: 'snacks' },
];

// Cart state
let cart = [];
let currentCategory = 'all';

// DOM elements
const productsGrid = document.getElementById('products-grid');
const cartItems = document.getElementById('cart-items');
const subtotalEl = document.getElementById('subtotal');
const taxEl = document.getElementById('tax');
const totalEl = document.getElementById('total');
const checkoutModal = document.getElementById('checkout-modal');
const currentTimeEl = document.getElementById('current-time');

// Initialize the POS system
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
    updateCartDisplay();
    updateTime();
    setInterval(updateTime, 1000);
    
    // Event listeners
    setupEventListeners();
});

function setupEventListeners() {
    // Category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.dataset.category;
            displayProducts();
        });
    });
    
    // Cart actions
    document.getElementById('clear-cart').addEventListener('click', clearCart);
    document.getElementById('checkout').addEventListener('click', openCheckout);
    document.getElementById('cancel-checkout').addEventListener('click', closeCheckout);
    document.getElementById('complete-sale').addEventListener('click', completeSale);
    
    // Payment method buttons
    document.querySelectorAll('.payment-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.payment-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Close modal when clicking outside
    checkoutModal.addEventListener('click', function(e) {
        if (e.target === checkoutModal) {
            closeCheckout();
        }
    });
}

function displayProducts() {
    const filteredProducts = currentCategory === 'all' 
        ? products 
        : products.filter(product => product.category === currentCategory);
    
    productsGrid.innerHTML = '';
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <div class="price">$${product.price.toFixed(2)}</div>
        `;
        
        productCard.addEventListener('click', () => addToCart(product));
        productsGrid.appendChild(productCard);
    });
}

function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartDisplay();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartDisplay();
        }
    }
}

function updateCartDisplay() {
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">No items in cart</p>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="item-info">
                    <div class="item-name">${item.name}</div>
                    <div class="item-price">$${item.price.toFixed(2)} each</div>
                </div>
                <div class="quantity-controls">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
        `).join('');
    }
    
    updateTotals();
}

function updateTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + tax;
    
    subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    taxEl.textContent = `$${tax.toFixed(2)}`;
    totalEl.textContent = `$${total.toFixed(2)}`;
}

function clearCart() {
    if (cart.length > 0 && confirm('Are you sure you want to clear the cart?')) {
        cart = [];
        updateCartDisplay();
    }
}

function openCheckout() {
    if (cart.length === 0) {
        alert('Cart is empty!');
        return;
    }
    checkoutModal.style.display = 'block';
}

function closeCheckout() {
    checkoutModal.style.display = 'none';
    document.querySelectorAll('.payment-btn').forEach(btn => btn.classList.remove('active'));
}

function completeSale() {
    const selectedPayment = document.querySelector('.payment-btn.active');
    
    if (!selectedPayment) {
        alert('Please select a payment method');
        return;
    }
    
    const paymentMethod = selectedPayment.dataset.method;
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) * 1.08;
    
    // Simulate sale completion
    alert(`Sale completed!\nPayment Method: ${paymentMethod.charAt(0).toUpperCase() + paymentMethod.slice(1)}\nTotal: $${total.toFixed(2)}\nThank you for your purchase!`);
    
    // Clear cart and close modal
    cart = [];
    updateCartDisplay();
    closeCheckout();
}

function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const dateString = now.toLocaleDateString();
    currentTimeEl.textContent = `${dateString} ${timeString}`;
}

// Make functions globally available
window.updateQuantity = updateQuantity;
