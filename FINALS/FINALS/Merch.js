const products = {
  'sticker-pack': { title: 'Sticker', price: 49.99 },
  'plushie': { title: 'Plushie', price: 119.25 },
  'keychain': { title: 'Keychain', price: 99.99 }
};

// ======= CART HANDLING =======
function getCurrentUser() {
  return localStorage.getItem("currentUser");
}

function getCartKey() {
  const user = getCurrentUser();
  return user ? `cart_${user}` : "cart_guest";
}

function readCart() {
  return JSON.parse(localStorage.getItem(getCartKey()) || "{}");
}

function writeCart(cart) {
  localStorage.setItem(getCartKey(), JSON.stringify(cart));
}

function clearCart() {
  localStorage.removeItem(getCartKey());
}

// ======= RENDER CART =======
const cartModal = document.getElementById('cartModal');

function openCart() {
  cartModal.setAttribute('aria-hidden', 'false');
  renderCart();
}

function closeCart() {
  cartModal.setAttribute('aria-hidden', 'true');
}

function formatPHP(value) {
  return value.toFixed(2);
}

function renderCart() {
  const cart = readCart();
  const list = document.getElementById('cartItems');
  list.innerHTML = '';

  let total = 0;
  Object.entries(cart).forEach(([id, qty]) => {
    const product = products[id];
    if (!product) return;
    const li = document.createElement('li');
    li.textContent = `${product.title} — ₱${formatPHP(product.price)} × ${qty}`;
    list.appendChild(li);
    total += product.price * qty;
  });

  document.getElementById('cartTotal').textContent = formatPHP(total);
}

// ======= AUTH CHECK =======
function isLoggedIn() {
  return !!getCurrentUser();
}

// ======= EVENT LISTENERS =======
document.addEventListener('click', (e) => {

  // Add to cart
  if (e.target.matches('.add-btn')) {
    if (!isLoggedIn()) {
      alert("Please log in to add items to your cart.");
      return;
    }
    const id = e.target.closest('.product-card').dataset.id;
    const cart = readCart();
    cart[id] = (cart[id] || 0) + 1;
    writeCart(cart);
    openCart();
  }

  // Buy Now
  if (e.target.matches('.buy-btn')) {
    if (!isLoggedIn()) {
      alert("Please log in to buy items.");
      return;
    }
    const id = e.target.closest('.product-card').dataset.id;
    const product = products[id];

    let quantity = prompt(`How many ${product.title}s would you like to buy?`, 1);
    quantity = parseInt(quantity, 10);
    if (isNaN(quantity) || quantity <= 0) {
      alert("Please enter a valid quantity.");
      return;
    }

    const totalPrice = product.price * quantity;
    if (confirm(`You are about to buy ${quantity} ${product.title}(s) for ₱${formatPHP(totalPrice)}. Proceed?`)) {
      alert(`You successfully bought ${quantity} ${product.title}(s).`);
    }
  }

  // Close cart modal
  if (e.target.id === 'closeCart' || e.target.id === 'cartModal') closeCart();

  // Checkout
  if (e.target.id === 'checkoutBtn') {
    if (!isLoggedIn()) {
      alert("Please log in to checkout.");
      return;
    }
    const cart = readCart();
    if (Object.keys(cart).length === 0) {
      alert("Your cart is empty.");
      return;
    }
    if (confirm("Do you want to buy the item(s)?")) {
      alert("Your order has been placed!");
      clearCart();
      renderCart();
      closeCart();
    }
  }

});

// View Cart Button
document.getElementById('viewCartBtn').addEventListener('click', () => {
  if (!isLoggedIn()) {
    alert("Please log in to view your cart.");
    return;
  }
  openCart();
});

// Reset Cart Button
document.getElementById('resetCartBtn').addEventListener('click', () => {
  if (!isLoggedIn()) {
    alert("Please log in to reset your cart.");
    return;
  }
  if (confirm("Are you sure you want to clear your cart?")) {
    clearCart();
    renderCart();
  }
});

// Initial render
document.addEventListener("DOMContentLoaded", () => {
  if (!isLoggedIn()) {
    document.getElementById('agentsLoginPrompt').style.display = "block";
    document.querySelector('.products-section').style.display = "none";
    document.querySelector('.cart-footer').style.display = "none";
  } else {
    renderCart();
  }
});

