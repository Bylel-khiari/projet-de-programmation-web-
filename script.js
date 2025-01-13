document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner tous les boutons "Acheter"
    const buyButtons = document.querySelectorAll('.buy-button');

    // Ajouter un événement de clic à chaque bouton
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.dataset.productId;
            addToCart(productId);
        });
    });

    // Fonction pour ajouter un produit au panier
    function addToCart(productId) {
        // Logique pour ajouter le produit au panier
        console.log(`Produit ${productId} ajouté au panier`);
        // Vous pouvez ajouter ici la logique pour mettre à jour l'interface utilisateur, envoyer une requête au serveur, etc.
    }
});
// Exemple de mise à jour de l'interface utilisateur pour afficher le panier
function updateCartUI() {
    const cart = document.querySelector('.cart');
    const cartItems = getCartItems();
    cart.innerHTML = ''; // Vider le panier actuel

    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.textContent = `Produit ${item.id} - Quantité: ${item.quantity}`;
        cart.appendChild(cartItem);
    });
}

// Fonction pour obtenir les éléments du panier (exemple simple avec localStorage)
function getCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart;
}

// Fonction pour ajouter un produit au panier et mettre à jour l'interface utilisateur
function addToCart(productId) {
    let cart = getCartItems();
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(`Produit ${productId} ajouté au panier`);
    updateCartUI();
}

// Initialiser l'interface utilisateur du panier au chargement de la page
updateCartUI();