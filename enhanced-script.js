// ===== PROFESSIONAL POS SYSTEM =====
// Multi-language, Multi-currency, Multi-user with all professional features

// ===== CONFIGURATION & DATA =====

// Multi-language support (English, Arabic, French, Spanish)
const languages = {
    en: {
        welcome: 'Welcome to My POS System',
        categories: 'Categories',
        products: 'Products',
        currentOrder: 'Current Order',
        subtotal: 'Subtotal',
        tax: 'Tax',
        total: 'Total',
        clearCart: 'Clear Cart',
        checkout: 'Checkout',
        emptyCart: 'No items in cart',
        allItems: 'All Items',
        food: 'Food',
        drinks: 'Drinks',
        snacks: 'Snacks',
        cashier: 'Cashier',
        admin: 'Admin',
        manager: 'Manager',
        login: 'Login',
        logout: 'Logout',
        username: 'Username',
        password: 'Password',
        lowStock: 'Low Stock Alert',
        printReceipt: 'Print Receipt',
        reports: 'Reports',
        inventory: 'Inventory',
        settings: 'Settings',
        currency: 'Currency',
        language: 'Language',
        sales: 'Sales',
        dashboard: 'Dashboard',
        users: 'Users',
        addProduct: 'Add Product',
        editProduct: 'Edit Product',
        deleteProduct: 'Delete Product',
        stock: 'Stock',
        price: 'Price',
        barcode: 'Barcode',
        category: 'Category',
        save: 'Save',
        cancel: 'Cancel',
        delete: 'Delete',
        edit: 'Edit',
        add: 'Add',
        search: 'Search',
        filter: 'Filter',
        export: 'Export',
        import: 'Import',
        backup: 'Backup',
        restore: 'Restore'
    },
    ar: {
        welcome: 'مرحباً بنظام نقاط البيع',
        categories: 'الفئات',
        products: 'المنتجات',
        currentOrder: 'الطلب الحالي',
        subtotal: 'المجموع الفرعي',
        tax: 'الضريبة',
        total: 'المجموع',
        clearCart: 'مسح السلة',
        checkout: 'الدفع',
        emptyCart: 'لا توجد عناصر في السلة',
        allItems: 'جميع العناصر',
        food: 'طعام',
        drinks: 'مشروبات',
        snacks: 'وجبات خفيفة',
        cashier: 'أمين الصندوق',
        admin: 'مدير',
        manager: 'مدير',
        login: 'تسجيل الدخول',
        logout: 'تسجيل الخروج',
        username: 'اسم المستخدم',
        password: 'كلمة المرور',
        lowStock: 'تنبيه مخزون منخفض',
        printReceipt: 'طباعة الإيصال',
        reports: 'التقارير',
        inventory: 'المخزون',
        settings: 'الإعدادات',
        currency: 'العملة',
        language: 'اللغة',
        sales: 'المبيعات',
        dashboard: 'لوحة التحكم',
        users: 'المستخدمون',
        addProduct: 'إضافة منتج',
        editProduct: 'تعديل منتج',
        deleteProduct: 'حذف منتج',
        stock: 'المخزون',
        price: 'السعر',
        barcode: 'الباركود',
        category: 'الفئة',
        save: 'حفظ',
        cancel: 'إلغاء',
        delete: 'حذف',
        edit: 'تعديل',
        add: 'إضافة',
        search: 'بحث',
        filter: 'تصفية',
        export: 'تصدير',
        import: 'استيراد',
        backup: 'نسخ احتياطي',
        restore: 'استعادة',
        dinar: 'دينار جزائري'
    },
    fr: {
        welcome: 'Bienvenue dans Mon Système POS',
        categories: 'Catégories',
        products: 'Produits',
        currentOrder: 'Commande Actuelle',
        subtotal: 'Sous-total',
        tax: 'Taxe',
        total: 'Total',
        clearCart: 'Vider le Panier',
        checkout: 'Paiement',
        emptyCart: 'Aucun article dans le panier',
        allItems: 'Tous les Articles',
        food: 'Nourriture',
        drinks: 'Boissons',
        snacks: 'Collations',
        cashier: 'Caissier',
        admin: 'Administrateur',
        manager: 'Gestionnaire',
        login: 'Connexion',
        logout: 'Déconnexion',
        username: 'Nom d\'utilisateur',
        password: 'Mot de passe',
        lowStock: 'Alerte Stock Faible',
        printReceipt: 'Imprimer Reçu',
        reports: 'Rapports',
        inventory: 'Inventaire',
        settings: 'Paramètres',
        currency: 'Devise',
        language: 'Langue',
        sales: 'Ventes',
        dashboard: 'Tableau de Bord',
        users: 'Utilisateurs',
        addProduct: 'Ajouter Produit',
        editProduct: 'Modifier Produit',
        deleteProduct: 'Supprimer Produit',
        stock: 'Stock',
        price: 'Prix',
        barcode: 'Code-barres',
        category: 'Catégorie',
        save: 'Enregistrer',
        cancel: 'Annuler',
        delete: 'Supprimer',
        edit: 'Modifier',
        add: 'Ajouter',
        search: 'Rechercher',
        filter: 'Filtrer',
        export: 'Exporter',
        import: 'Importer',
        backup: 'Sauvegarde',
        restore: 'Restaurer'
    },
    es: {
        welcome: 'Bienvenido a Mi Sistema POS',
        categories: 'Categorías',
        products: 'Productos',
        currentOrder: 'Pedido Actual',
        subtotal: 'Subtotal',
        tax: 'Impuesto',
        total: 'Total',
        clearCart: 'Limpiar Carrito',
        checkout: 'Pagar',
        emptyCart: 'No hay artículos en el carrito',
        allItems: 'Todos los Artículos',
        food: 'Comida',
        drinks: 'Bebidas',
        snacks: 'Aperitivos',
        cashier: 'Cajero',
        admin: 'Administrador',
        manager: 'Gerente',
        login: 'Iniciar Sesión',
        logout: 'Cerrar Sesión',
        username: 'Usuario',
        password: 'Contraseña',
        lowStock: 'Alerta Stock Bajo',
        printReceipt: 'Imprimir Recibo',
        reports: 'Informes',
        inventory: 'Inventario',
        settings: 'Configuración',
        currency: 'Moneda',
        language: 'Idioma',
        sales: 'Ventas',
        dashboard: 'Panel de Control',
        users: 'Usuarios',
        addProduct: 'Agregar Producto',
        editProduct: 'Editar Producto',
        deleteProduct: 'Eliminar Producto',
        stock: 'Stock',
        price: 'Precio',
        barcode: 'Código de Barras',
        category: 'Categoría',
        save: 'Guardar',
        cancel: 'Cancelar',
        delete: 'Eliminar',
        edit: 'Editar',
        add: 'Agregar',
        search: 'Buscar',
        filter: 'Filtrar',
        export: 'Exportar',
        import: 'Importar',
        backup: 'Respaldo',
        restore: 'Restaurar'
    }
};

// Multi-currency support including Algerian Dinar
const currencies = {
    USD: { symbol: '$', rate: 1.0, name: 'US Dollar' },
    EUR: { symbol: '€', rate: 0.85, name: 'Euro' },
    AED: { symbol: 'د.إ', rate: 3.67, name: 'UAE Dirham' },
    SAR: { symbol: 'ر.س', rate: 3.75, name: 'Saudi Riyal' },
    DZD: { symbol: 'د.ج', rate: 134.5, name: 'Algerian Dinar' },
    GBP: { symbol: '£', rate: 0.73, name: 'British Pound' },
    MAD: { symbol: 'د.م', rate: 10.2, name: 'Moroccan Dirham' },
    TND: { symbol: 'د.ت', rate: 3.1, name: 'Tunisian Dinar' }
};

// User roles and permissions
const userRoles = {
    admin: {
        name: 'Admin',
        permissions: ['all']
    },
    manager: {
        name: 'Manager', 
        permissions: ['sales', 'inventory', 'reports', 'users', 'settings']
    },
    cashier: {
        name: 'Cashier',
        permissions: ['sales', 'basic_reports']
    }
};

// Sample users (in production, this would be in a secure database)
const users = [
    { id: 1, username: 'admin', password: 'admin123', role: 'admin', name: 'Administrator', active: true },
    { id: 2, username: 'manager', password: 'manager123', role: 'manager', name: 'Store Manager', active: true },
    { id: 3, username: 'cashier1', password: 'cashier123', role: 'cashier', name: 'Ahmed Ali', active: true },
    { id: 4, username: 'cashier2', password: 'cashier123', role: 'cashier', name: 'Fatima Hassan', active: true },
    { id: 5, username: 'cashier3', password: 'cashier123', role: 'cashier', name: 'Omar Benali', active: true }
];

// Enhanced product data with full inventory management
const products = [
    { id: 1, name: 'Hamburger', nameAr: 'همبرغر', price: 8.99, category: 'food', stock: 25, minStock: 5, maxStock: 100, barcode: '1234567890123', supplier: 'Food Corp', cost: 5.50, active: true },
    { id: 2, name: 'Cheeseburger', nameAr: 'تشيز برغر', price: 9.99, category: 'food', stock: 20, minStock: 5, maxStock: 80, barcode: '1234567890124', supplier: 'Food Corp', cost: 6.20, active: true },
    { id: 3, name: 'French Fries', nameAr: 'بطاطس مقلية', price: 3.99, category: 'food', stock: 50, minStock: 10, maxStock: 200, barcode: '1234567890125', supplier: 'Food Corp', cost: 1.80, active: true },
    { id: 4, name: 'Chicken Wings', nameAr: 'أجنحة دجاج', price: 12.99, category: 'food', stock: 15, minStock: 5, maxStock: 60, barcode: '1234567890126', supplier: 'Poultry Plus', cost: 8.50, active: true },
    { id: 5, name: 'Caesar Salad', nameAr: 'سلطة قيصر', price: 7.99, category: 'food', stock: 12, minStock: 5, maxStock: 40, barcode: '1234567890127', supplier: 'Fresh Greens', cost: 4.20, active: true },
    { id: 6, name: 'Coca Cola', nameAr: 'كوكا كولا', price: 2.99, category: 'drinks', stock: 100, minStock: 20, maxStock: 500, barcode: '1234567890128', supplier: 'Beverage Co', cost: 1.50, active: true },
    { id: 7, name: 'Orange Juice', nameAr: 'عصير برتقال', price: 3.49, category: 'drinks', stock: 30, minStock: 10, maxStock: 150, barcode: '1234567890129', supplier: 'Juice Factory', cost: 2.10, active: true },
    { id: 8, name: 'Coffee', nameAr: 'قهوة', price: 2.49, category: 'drinks', stock: 80, minStock: 15, maxStock: 300, barcode: '1234567890130', supplier: 'Coffee Roasters', cost: 1.20, active: true },
    { id: 9, name: 'Water Bottle', nameAr: 'زجاجة ماء', price: 1.99, category: 'drinks', stock: 200, minStock: 50, maxStock: 1000, barcode: '1234567890131', supplier: 'Pure Water', cost: 0.80, active: true },
    { id: 10, name: 'Potato Chips', nameAr: 'رقائق البطاطس', price: 2.99, category: 'snacks', stock: 3, minStock: 10, maxStock: 200, barcode: '1234567890132', supplier: 'Snack Foods', cost: 1.50, active: true }, // Low stock
    { id: 11, name: 'Chocolate Bar', nameAr: 'لوح شوكولاتة', price: 1.99, category: 'snacks', stock: 45, minStock: 15, maxStock: 150, barcode: '1234567890133', supplier: 'Sweet Treats', cost: 1.10, active: true },
    { id: 12, name: 'Cookies', nameAr: 'كوكيز', price: 3.49, category: 'snacks', stock: 2, minStock: 8, maxStock: 100, barcode: '1234567890134', supplier: 'Bakery Plus', cost: 2.00, active: true } // Low stock
];

// ===== GLOBAL STATE =====
let cart = [];
let currentCategory = 'all';
let currentUser = null;
let currentLanguage = localStorage.getItem('posLanguage') || 'en';
let currentCurrency = localStorage.getItem('posCurrency') || 'USD';
let salesHistory = JSON.parse(localStorage.getItem('salesHistory')) || [];
let isLoggedIn = false;
let currentView = 'pos'; // pos, inventory, reports, settings, users

// System settings
const settings = {
    taxRate: parseFloat(localStorage.getItem('taxRate')) || 0.19, // 19% VAT (Algeria standard)
    companyName: localStorage.getItem('companyName') || 'My POS System',
    companyAddress: localStorage.getItem('companyAddress') || 'Algiers, Algeria',
    companyPhone: localStorage.getItem('companyPhone') || '+213 21 123 456',
    receiptFooter: localStorage.getItem('receiptFooter') || 'شكراً لزيارتكم - Thank you for your visit!',
    lowStockThreshold: parseInt(localStorage.getItem('lowStockThreshold')) || 10,
    autoBackup: localStorage.getItem('autoBackup') === 'true',
    printAfterSale: localStorage.getItem('printAfterSale') === 'true',
    showBarcode: localStorage.getItem('showBarcode') === 'true'
};

// ===== UTILITY FUNCTIONS =====

// Get translated text
function t(key) {
    return languages[currentLanguage][key] || key;
}

// Format currency
function formatCurrency(amount) {
    const currency = currencies[currentCurrency];
    const convertedAmount = amount * currency.rate;
    return `${currency.symbol}${convertedAmount.toFixed(2)}`;
}

// Convert price to current currency
function convertPrice(price) {
    return price * currencies[currentCurrency].rate;
}

// Generate unique ID
function generateId() {
    return Date.now() + Math.random().toString(36).substr(2, 9);
}

// Save to localStorage
function saveToStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
        console.error('Failed to save to localStorage:', e);
    }
}

// Load from localStorage
function loadFromStorage(key, defaultValue = null) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : defaultValue;
    } catch (e) {
        console.error('Failed to load from localStorage:', e);
        return defaultValue;
    }
}

// ===== AUTHENTICATION SYSTEM =====

function showLoginScreen() {
    const loginHTML = `
        <div class="login-screen">
            <div class="login-container">
                <div class="login-header">
                    <h1>${t('welcome')}</h1>
                    <div class="language-selector">
                        <label>Choose Language / اختر اللغة:</label>
                        <select id="login-language" onchange="changeLanguage(this.value)">
                            <option value="en" ${currentLanguage === 'en' ? 'selected' : ''}>🇺🇸 English</option>
                            <option value="ar" ${currentLanguage === 'ar' ? 'selected' : ''}>🇩🇿 العربية (Arabic)</option>
                            <option value="fr" ${currentLanguage === 'fr' ? 'selected' : ''}>🇫🇷 Français (French)</option>
                            <option value="es" ${currentLanguage === 'es' ? 'selected' : ''}>🇪🇸 Español (Spanish)</option>
                        </select>
                    </div>
                </div>
                <form class="login-form" onsubmit="handleLogin(event)">
                    <div class="form-group">
                        <label for="username">${t('username')}:</label>
                        <input type="text" id="username" name="username" required>
                    </div>
                    <div class="form-group">
                        <label for="password">${t('password')}:</label>
                        <input type="password" id="password" name="password" required>
                    </div>
                    <button type="submit" class="btn btn-primary">${t('login')}</button>
                </form>
                <div class="demo-users">
                    <h3>Demo Users:</h3>
                    <p><strong>Admin:</strong> admin / admin123</p>
                    <p><strong>Manager:</strong> manager / manager123</p>
                    <p><strong>Cashier:</strong> cashier1 / cashier123</p>
                </div>
            </div>
        </div>
    `;
    
    document.body.innerHTML = loginHTML;
    
    // Add login screen styles
    const loginStyles = `
        <style>
        .login-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
        }
        .login-container {
            background: white;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            min-width: 400px;
            text-align: center;
        }
        .login-header {
            margin-bottom: 30px;
        }
        .login-header h1 {
            color: #667eea;
            margin-bottom: 20px;
        }
        .language-selector select {
            padding: 8px 15px;
            border: 2px solid #ddd;
            border-radius: 5px;
            font-size: 14px;
        }
        .login-form {
            text-align: left;
        }
        .form-group {
            margin-bottom: 20px;
        }
        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #333;
        }
        .form-group input {
            width: 100%;
            padding: 12px;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-size: 16px;
            transition: border-color 0.3s;
        }
        .form-group input:focus {
            outline: none;
            border-color: #667eea;
        }
        .btn {
            width: 100%;
            padding: 15px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s;
        }
        .btn-primary {
            background: #667eea;
            color: white;
        }
        .btn-primary:hover {
            background: #5a6fd8;
            transform: translateY(-2px);
        }
        .demo-users {
            margin-top: 30px;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 8px;
            text-align: left;
        }
        .demo-users h3 {
            color: #667eea;
            margin-bottom: 10px;
        }
        .demo-users p {
            margin: 5px 0;
            font-size: 14px;
        }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', loginStyles);
}

function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const user = users.find(u => u.username === username && u.password === password && u.active);
    
    if (user) {
        currentUser = user;
        isLoggedIn = true;
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('isLoggedIn', 'true');
        
        // Reload the page to initialize the main system
        location.reload();
    } else {
        alert('Invalid username or password');
    }
}

function logout() {
    currentUser = null;
    isLoggedIn = false;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isLoggedIn');
    location.reload();
}

function checkLoginStatus() {
    const savedUser = localStorage.getItem('currentUser');
    const savedLoginStatus = localStorage.getItem('isLoggedIn');
    
    if (savedUser && savedLoginStatus === 'true') {
        currentUser = JSON.parse(savedUser);
        isLoggedIn = true;
    }
}

// ===== LANGUAGE & CURRENCY FUNCTIONS =====

function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('posLanguage', lang);
    
    if (isLoggedIn) {
        updateLanguage();
        displayProducts();
        updateCartDisplay();
    } else {
        // Just update the login screen
        showLoginScreen();
    }
}

function changeCurrency(currency) {
    currentCurrency = currency;
    localStorage.setItem('posCurrency', currency);
    displayProducts();
    updateCartDisplay();
}

function updateLanguage() {
    // Update all text elements with translations
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = t(key);
    });
    
    // Update document direction for Arabic
    document.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;
}

// ===== MAIN SYSTEM INITIALIZATION =====

document.addEventListener('DOMContentLoaded', function() {
    initializeSystem();
});

function initializeSystem() {
    checkLoginStatus();

    if (!isLoggedIn) {
        showLoginScreen();
        return;
    }

    // Initialize main system
    loadSettings();
    createMainInterface();
    updateLanguage();
    displayProducts();
    updateCartDisplay();
    updateTime();
    checkLowStock();

    // Set up intervals
    setInterval(updateTime, 1000);
    setInterval(checkLowStock, 60000); // Check every minute
    setInterval(autoSave, 30000); // Auto-save every 30 seconds

    // Event listeners
    setupEventListeners();

    console.log('Professional POS System initialized successfully');
}

function createMainInterface() {
    const mainHTML = `
        <div class="pos-container">
            <!-- Top Navigation -->
            <nav class="top-nav">
                <div class="nav-left">
                    <h1 data-translate="welcome">${t('welcome')}</h1>
                    <div class="nav-tabs">
                        <button class="nav-tab active" onclick="switchView('pos')" data-translate="sales">${t('sales')}</button>
                        ${hasPermission('inventory') ? `<button class="nav-tab" onclick="switchView('inventory')" data-translate="inventory">${t('inventory')}</button>` : ''}
                        ${hasPermission('reports') ? `<button class="nav-tab" onclick="switchView('reports')" data-translate="reports">${t('reports')}</button>` : ''}
                        ${hasPermission('users') ? `<button class="nav-tab" onclick="switchView('users')" data-translate="users">${t('users')}</button>` : ''}
                        ${hasPermission('settings') ? `<button class="nav-tab" onclick="switchView('settings')" data-translate="settings">${t('settings')}</button>` : ''}
                    </div>
                </div>
                <div class="nav-right">
                    <div class="controls">
                        <div class="control-group">
                            <label>Language:</label>
                            <select id="language-selector" onchange="changeLanguage(this.value)">
                                <option value="en" ${currentLanguage === 'en' ? 'selected' : ''}>🇺🇸 English</option>
                                <option value="ar" ${currentLanguage === 'ar' ? 'selected' : ''}>🇩🇿 العربية</option>
                                <option value="fr" ${currentLanguage === 'fr' ? 'selected' : ''}>🇫🇷 Français</option>
                                <option value="es" ${currentLanguage === 'es' ? 'selected' : ''}>🇪🇸 Español</option>
                            </select>
                        </div>
                        <div class="control-group">
                            <label>Currency:</label>
                            <select id="currency-selector" onchange="changeCurrency(this.value)">
                                ${Object.entries(currencies).map(([code, curr]) =>
                                    `<option value="${code}" ${currentCurrency === code ? 'selected' : ''}>${curr.symbol} ${curr.name}</option>`
                                ).join('')}
                            </select>
                        </div>
                    </div>
                    <div class="user-info">
                        <span class="user-name">${currentUser.name} (${t(currentUser.role)})</span>
                        <span id="current-time"></span>
                        <button class="btn btn-secondary" onclick="logout()" data-translate="logout">${t('logout')}</button>
                    </div>
                </div>
            </nav>

            <!-- Main Content Area -->
            <main class="main-content">
                <!-- POS View -->
                <div id="pos-view" class="view active">
                    <div class="pos-layout">
                        <!-- Categories & Search -->
                        <section class="categories-section">
                            <div class="search-bar">
                                <input type="text" id="product-search" placeholder="${t('search')}..." onkeyup="searchProducts()">
                                <button onclick="scanBarcode()" class="btn btn-secondary">📷 Scan</button>
                            </div>
                            <h2 data-translate="categories">${t('categories')}</h2>
                            <div class="category-buttons">
                                <button class="category-btn active" data-category="all" data-translate="allItems">${t('allItems')}</button>
                                <button class="category-btn" data-category="food" data-translate="food">${t('food')}</button>
                                <button class="category-btn" data-category="drinks" data-translate="drinks">${t('drinks')}</button>
                                <button class="category-btn" data-category="snacks" data-translate="snacks">${t('snacks')}</button>
                            </div>
                            <div class="low-stock-alert" id="low-stock-alert" style="display: none;">
                                <h3 data-translate="lowStock">${t('lowStock')}</h3>
                                <div id="low-stock-items"></div>
                            </div>
                        </section>

                        <!-- Products Grid -->
                        <section class="products-section">
                            <h2 data-translate="products">${t('products')}</h2>
                            <div class="products-grid" id="products-grid">
                                <!-- Products will be loaded here -->
                            </div>
                        </section>

                        <!-- Shopping Cart -->
                        <section class="cart-section">
                            <h2 data-translate="currentOrder">${t('currentOrder')}</h2>
                            <div class="cart-items" id="cart-items">
                                <p class="empty-cart" data-translate="emptyCart">${t('emptyCart')}</p>
                            </div>
                            <div class="cart-summary">
                                <div class="total-line">
                                    <span data-translate="subtotal">${t('subtotal')}:</span>
                                    <span id="subtotal">${formatCurrency(0)}</span>
                                </div>
                                <div class="total-line">
                                    <span data-translate="tax">${t('tax')} (${(settings.taxRate * 100).toFixed(0)}%):</span>
                                    <span id="tax">${formatCurrency(0)}</span>
                                </div>
                                <div class="total-line total">
                                    <span data-translate="total">${t('total')}:</span>
                                    <span id="total">${formatCurrency(0)}</span>
                                </div>
                            </div>
                            <div class="cart-actions">
                                <button class="btn btn-secondary" id="clear-cart" data-translate="clearCart">${t('clearCart')}</button>
                                <button class="btn btn-success" id="print-receipt" data-translate="printReceipt">${t('printReceipt')}</button>
                                <button class="btn btn-primary" id="checkout" data-translate="checkout">${t('checkout')}</button>
                            </div>
                        </section>
                    </div>
                </div>

                <!-- Other views will be added here -->
                <div id="inventory-view" class="view" style="display: none;">
                    <h2 data-translate="inventory">${t('inventory')}</h2>
                    <div class="inventory-content">
                        <!-- Inventory management will be added -->
                    </div>
                </div>

                <div id="reports-view" class="view" style="display: none;">
                    <h2 data-translate="reports">${t('reports')}</h2>
                    <div class="reports-content">
                        <!-- Reports will be added -->
                    </div>
                </div>

                <div id="users-view" class="view" style="display: none;">
                    <h2 data-translate="users">${t('users')}</h2>
                    <div class="users-content">
                        <!-- User management will be added -->
                    </div>
                </div>

                <div id="settings-view" class="view" style="display: none;">
                    <h2 data-translate="settings">${t('settings')}</h2>
                    <div class="settings-content">
                        <!-- Settings will be added -->
                    </div>
                </div>
            </main>
        </div>

        <!-- Checkout Modal -->
        <div class="modal" id="checkout-modal">
            <div class="modal-content">
                <h2 data-translate="checkout">${t('checkout')}</h2>
                <div class="checkout-summary">
                    <div class="checkout-items" id="checkout-items"></div>
                    <div class="checkout-total">
                        <h3><span data-translate="total">${t('total')}</span>: <span id="checkout-total-amount"></span></h3>
                    </div>
                </div>
                <div class="payment-methods">
                    <h3>Payment Method:</h3>
                    <button class="payment-btn" data-method="cash">💵 Cash</button>
                    <button class="payment-btn" data-method="card">💳 Card</button>
                    <button class="payment-btn" data-method="digital">📱 Digital</button>
                </div>
                <div class="payment-details" id="payment-details">
                    <!-- Payment details will be shown here -->
                </div>
                <div class="modal-actions">
                    <button class="btn btn-secondary" id="cancel-checkout" data-translate="cancel">${t('cancel')}</button>
                    <button class="btn btn-primary" id="complete-sale">Complete Sale</button>
                </div>
            </div>
        </div>
    `;

    document.body.innerHTML = mainHTML;
}

// ===== PERMISSION SYSTEM =====

function hasPermission(permission) {
    if (!currentUser) return false;
    const userRole = userRoles[currentUser.role];
    return userRole.permissions.includes('all') || userRole.permissions.includes(permission);
}

// ===== VIEW MANAGEMENT =====

function switchView(viewName) {
    // Hide all views
    document.querySelectorAll('.view').forEach(view => {
        view.style.display = 'none';
    });

    // Remove active class from all tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Show selected view
    const targetView = document.getElementById(`${viewName}-view`);
    if (targetView) {
        targetView.style.display = 'block';
        currentView = viewName;
    }

    // Add active class to selected tab
    event.target.classList.add('active');

    // Load view-specific content
    switch(viewName) {
        case 'inventory':
            loadInventoryView();
            break;
        case 'reports':
            loadReportsView();
            break;
        case 'users':
            loadUsersView();
            break;
        case 'settings':
            loadSettingsView();
            break;
    }
}

// ===== PRODUCT MANAGEMENT =====

function displayProducts() {
    const filteredProducts = currentCategory === 'all'
        ? products.filter(p => p.active)
        : products.filter(p => p.category === currentCategory && p.active);

    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;

    productsGrid.innerHTML = '';

    filteredProducts.forEach(product => {
        const productName = currentLanguage === 'ar' && product.nameAr ? product.nameAr : product.name;
        const isLowStock = product.stock <= product.minStock;

        const productCard = document.createElement('div');
        productCard.className = `product-card ${isLowStock ? 'low-stock' : ''}`;
        productCard.innerHTML = `
            <div class="product-info">
                <h3>${productName}</h3>
                <div class="price">${formatCurrency(product.price)}</div>
                <div class="stock-info">
                    <span class="stock-count">${t('stock')}: ${product.stock}</span>
                    ${isLowStock ? '<span class="low-stock-badge">⚠️ Low</span>' : ''}
                </div>
                ${settings.showBarcode ? `<div class="barcode">${product.barcode}</div>` : ''}
            </div>
        `;

        productCard.addEventListener('click', () => addToCart(product));
        productsGrid.appendChild(productCard);
    });
}

function searchProducts() {
    const searchTerm = document.getElementById('product-search').value.toLowerCase();
    const filteredProducts = products.filter(product => {
        const name = (currentLanguage === 'ar' && product.nameAr ? product.nameAr : product.name).toLowerCase();
        const barcode = product.barcode.toLowerCase();
        return product.active && (name.includes(searchTerm) || barcode.includes(searchTerm));
    });

    displayFilteredProducts(filteredProducts);
}

function displayFilteredProducts(filteredProducts) {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;

    productsGrid.innerHTML = '';

    filteredProducts.forEach(product => {
        const productName = currentLanguage === 'ar' && product.nameAr ? product.nameAr : product.name;
        const isLowStock = product.stock <= product.minStock;

        const productCard = document.createElement('div');
        productCard.className = `product-card ${isLowStock ? 'low-stock' : ''}`;
        productCard.innerHTML = `
            <div class="product-info">
                <h3>${productName}</h3>
                <div class="price">${formatCurrency(product.price)}</div>
                <div class="stock-info">
                    <span class="stock-count">${t('stock')}: ${product.stock}</span>
                    ${isLowStock ? '<span class="low-stock-badge">⚠️ Low</span>' : ''}
                </div>
                ${settings.showBarcode ? `<div class="barcode">${product.barcode}</div>` : ''}
            </div>
        `;

        productCard.addEventListener('click', () => addToCart(product));
        productsGrid.appendChild(productCard);
    });
}

// ===== CART MANAGEMENT =====

function addToCart(product) {
    if (product.stock <= 0) {
        alert(`${product.name} is out of stock!`);
        return;
    }

    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        if (existingItem.quantity >= product.stock) {
            alert(`Cannot add more ${product.name}. Only ${product.stock} in stock.`);
            return;
        }
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCartDisplay();
    saveCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
    saveCart();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    const product = products.find(p => p.id === productId);

    if (item && product) {
        const newQuantity = item.quantity + change;

        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else if (newQuantity > product.stock) {
            alert(`Cannot add more ${product.name}. Only ${product.stock} in stock.`);
        } else {
            item.quantity = newQuantity;
            updateCartDisplay();
            saveCart();
        }
    }
}

function updateCartDisplay() {
    const cartItemsEl = document.getElementById('cart-items');
    const subtotalEl = document.getElementById('subtotal');
    const taxEl = document.getElementById('tax');
    const totalEl = document.getElementById('total');

    if (!cartItemsEl) return;

    if (cart.length === 0) {
        cartItemsEl.innerHTML = `<p class="empty-cart" data-translate="emptyCart">${t('emptyCart')}</p>`;
    } else {
        cartItemsEl.innerHTML = cart.map(item => {
            const itemName = currentLanguage === 'ar' && item.nameAr ? item.nameAr : item.name;
            return `
                <div class="cart-item">
                    <div class="item-info">
                        <div class="item-name">${itemName}</div>
                        <div class="item-price">${formatCurrency(item.price)} each</div>
                    </div>
                    <div class="quantity-controls">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="remove-btn" onclick="removeFromCart(${item.id})">🗑️</button>
                    </div>
                </div>
            `;
        }).join('');
    }

    updateTotals();
}

function updateTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (convertPrice(item.price) * item.quantity), 0);
    const tax = subtotal * settings.taxRate;
    const total = subtotal + tax;

    const subtotalEl = document.getElementById('subtotal');
    const taxEl = document.getElementById('tax');
    const totalEl = document.getElementById('total');

    if (subtotalEl) subtotalEl.textContent = formatCurrency(subtotal / currencies[currentCurrency].rate);
    if (taxEl) taxEl.textContent = formatCurrency(tax / currencies[currentCurrency].rate);
    if (totalEl) totalEl.textContent = formatCurrency(total / currencies[currentCurrency].rate);
}

function clearCart() {
    if (cart.length > 0 && confirm(`${t('clearCart')}?`)) {
        cart = [];
        updateCartDisplay();
        saveCart();
    }
}

function saveCart() {
    saveToStorage('currentCart', cart);
}

function loadCart() {
    const savedCart = loadFromStorage('currentCart', []);
    cart = savedCart;
    updateCartDisplay();
}

// ===== CHECKOUT & PAYMENT SYSTEM =====

function openCheckout() {
    if (cart.length === 0) {
        alert(t('emptyCart'));
        return;
    }

    const modal = document.getElementById('checkout-modal');
    const checkoutItems = document.getElementById('checkout-items');
    const checkoutTotal = document.getElementById('checkout-total-amount');

    // Display checkout items
    const subtotal = cart.reduce((sum, item) => sum + (convertPrice(item.price) * item.quantity), 0);
    const tax = subtotal * settings.taxRate;
    const total = subtotal + tax;

    checkoutItems.innerHTML = cart.map(item => {
        const itemName = currentLanguage === 'ar' && item.nameAr ? item.nameAr : item.name;
        return `
            <div class="checkout-item">
                <span>${itemName} x ${item.quantity}</span>
                <span>${formatCurrency((item.price * item.quantity) / currencies[currentCurrency].rate)}</span>
            </div>
        `;
    }).join('');

    checkoutTotal.textContent = formatCurrency(total / currencies[currentCurrency].rate);

    modal.style.display = 'block';
}

function closeCheckout() {
    const modal = document.getElementById('checkout-modal');
    modal.style.display = 'none';
    document.querySelectorAll('.payment-btn').forEach(btn => btn.classList.remove('active'));
}

function completeSale() {
    const selectedPayment = document.querySelector('.payment-btn.active');

    if (!selectedPayment) {
        alert('Please select a payment method');
        return;
    }

    const paymentMethod = selectedPayment.dataset.method;
    const subtotal = cart.reduce((sum, item) => sum + (convertPrice(item.price) * item.quantity), 0);
    const tax = subtotal * settings.taxRate;
    const total = subtotal + tax;

    // Create sale record
    const sale = {
        id: generateId(),
        date: new Date().toISOString(),
        cashier: currentUser.name,
        items: [...cart],
        subtotal: subtotal / currencies[currentCurrency].rate,
        tax: tax / currencies[currentCurrency].rate,
        total: total / currencies[currentCurrency].rate,
        paymentMethod: paymentMethod,
        currency: currentCurrency
    };

    // Update inventory
    cart.forEach(cartItem => {
        const product = products.find(p => p.id === cartItem.id);
        if (product) {
            product.stock -= cartItem.quantity;
        }
    });

    // Save sale
    salesHistory.push(sale);
    saveToStorage('salesHistory', salesHistory);
    saveToStorage('products', products);

    // Print receipt if enabled
    if (settings.printAfterSale) {
        printReceipt(sale);
    }

    // Show success message
    alert(`${t('checkout')} ${t('completed')}!\n${t('total')}: ${formatCurrency(total / currencies[currentCurrency].rate)}\n${t('paymentMethod')}: ${paymentMethod}`);

    // Clear cart and close modal
    cart = [];
    updateCartDisplay();
    displayProducts(); // Refresh to show updated stock
    closeCheckout();
    saveCart();
}

// ===== PRINTING SYSTEM =====

function printReceipt(sale = null) {
    if (!sale && cart.length === 0) {
        alert('No items to print');
        return;
    }

    let receiptData;
    if (sale) {
        receiptData = sale;
    } else {
        // Create temporary sale data for current cart
        const subtotal = cart.reduce((sum, item) => sum + (convertPrice(item.price) * item.quantity), 0);
        const tax = subtotal * settings.taxRate;
        const total = subtotal + tax;

        receiptData = {
            id: 'TEMP-' + Date.now(),
            date: new Date().toISOString(),
            cashier: currentUser.name,
            items: [...cart],
            subtotal: subtotal / currencies[currentCurrency].rate,
            tax: tax / currencies[currentCurrency].rate,
            total: total / currencies[currentCurrency].rate,
            paymentMethod: 'N/A',
            currency: currentCurrency
        };
    }

    const receiptWindow = window.open('', '_blank');
    const receiptHTML = generateReceiptHTML(receiptData);

    receiptWindow.document.write(receiptHTML);
    receiptWindow.document.close();
    receiptWindow.focus();
    receiptWindow.print();
}

function generateReceiptHTML(sale) {
    const date = new Date(sale.date);
    const formattedDate = date.toLocaleDateString(currentLanguage === 'ar' ? 'ar-DZ' : 'en-US');
    const formattedTime = date.toLocaleTimeString(currentLanguage === 'ar' ? 'ar-DZ' : 'en-US');

    return `
        <!DOCTYPE html>
        <html dir="${currentLanguage === 'ar' ? 'rtl' : 'ltr'}">
        <head>
            <meta charset="UTF-8">
            <title>Receipt - ${sale.id}</title>
            <style>
                body {
                    font-family: 'Courier New', monospace;
                    max-width: 300px;
                    margin: 0 auto;
                    padding: 10px;
                    font-size: 12px;
                    line-height: 1.4;
                }
                .header { text-align: center; margin-bottom: 20px; }
                .company-name { font-size: 16px; font-weight: bold; }
                .separator { border-top: 1px dashed #000; margin: 10px 0; }
                .item-line { display: flex; justify-content: space-between; margin: 5px 0; }
                .total-line { font-weight: bold; }
                .footer { text-align: center; margin-top: 20px; font-size: 10px; }
                @media print {
                    body { margin: 0; padding: 5px; }
                }
            </style>
        </head>
        <body>
            <div class="header">
                <div class="company-name">${settings.companyName}</div>
                <div>${settings.companyAddress}</div>
                <div>${settings.companyPhone}</div>
            </div>

            <div class="separator"></div>

            <div class="receipt-info">
                <div>Receipt #: ${sale.id}</div>
                <div>Date: ${formattedDate} ${formattedTime}</div>
                <div>Cashier: ${sale.cashier}</div>
                <div>Currency: ${currencies[sale.currency].name}</div>
            </div>

            <div class="separator"></div>

            <div class="items">
                ${sale.items.map(item => {
                    const itemName = currentLanguage === 'ar' && item.nameAr ? item.nameAr : item.name;
                    const itemTotal = item.price * item.quantity;
                    return `
                        <div class="item-line">
                            <span>${itemName}</span>
                        </div>
                        <div class="item-line">
                            <span>${item.quantity} x ${formatCurrency(item.price)}</span>
                            <span>${formatCurrency(itemTotal)}</span>
                        </div>
                    `;
                }).join('')}
            </div>

            <div class="separator"></div>

            <div class="totals">
                <div class="item-line">
                    <span>Subtotal:</span>
                    <span>${formatCurrency(sale.subtotal)}</span>
                </div>
                <div class="item-line">
                    <span>Tax (${(settings.taxRate * 100).toFixed(0)}%):</span>
                    <span>${formatCurrency(sale.tax)}</span>
                </div>
                <div class="item-line total-line">
                    <span>TOTAL:</span>
                    <span>${formatCurrency(sale.total)}</span>
                </div>
            </div>

            <div class="separator"></div>

            <div class="payment-info">
                <div>Payment Method: ${sale.paymentMethod}</div>
            </div>

            <div class="footer">
                <div>${settings.receiptFooter}</div>
                <div>Powered by Professional POS System</div>
            </div>
        </body>
        </html>
    `;
}

// ===== LOW STOCK MANAGEMENT =====

function checkLowStock() {
    const lowStockProducts = products.filter(product =>
        product.active && product.stock <= product.minStock
    );

    const alertDiv = document.getElementById('low-stock-alert');
    const itemsDiv = document.getElementById('low-stock-items');

    if (lowStockProducts.length > 0) {
        alertDiv.style.display = 'block';
        itemsDiv.innerHTML = lowStockProducts.map(product => {
            const productName = currentLanguage === 'ar' && product.nameAr ? product.nameAr : product.name;
            return `<div class="low-stock-item">${productName}: ${product.stock} left (Min: ${product.minStock})</div>`;
        }).join('');
    } else {
        alertDiv.style.display = 'none';
    }
}

// ===== UTILITY FUNCTIONS =====

function updateTime() {
    const timeEl = document.getElementById('current-time');
    if (timeEl) {
        const now = new Date();
        const timeString = now.toLocaleTimeString(currentLanguage === 'ar' ? 'ar-DZ' : 'en-US');
        const dateString = now.toLocaleDateString(currentLanguage === 'ar' ? 'ar-DZ' : 'en-US');
        timeEl.textContent = `${dateString} ${timeString}`;
    }
}

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
    const clearCartBtn = document.getElementById('clear-cart');
    const checkoutBtn = document.getElementById('checkout');
    const printReceiptBtn = document.getElementById('print-receipt');
    const cancelCheckoutBtn = document.getElementById('cancel-checkout');
    const completeSaleBtn = document.getElementById('complete-sale');

    if (clearCartBtn) clearCartBtn.addEventListener('click', clearCart);
    if (checkoutBtn) checkoutBtn.addEventListener('click', openCheckout);
    if (printReceiptBtn) printReceiptBtn.addEventListener('click', () => printReceipt());
    if (cancelCheckoutBtn) cancelCheckoutBtn.addEventListener('click', closeCheckout);
    if (completeSaleBtn) completeSaleBtn.addEventListener('click', completeSale);

    // Payment method buttons
    document.querySelectorAll('.payment-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.payment-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Close modal when clicking outside
    const checkoutModal = document.getElementById('checkout-modal');
    if (checkoutModal) {
        checkoutModal.addEventListener('click', function(e) {
            if (e.target === checkoutModal) {
                closeCheckout();
            }
        });
    }
}

function loadSettings() {
    // Settings are already loaded in the settings object
    // This function can be extended to load from server/database
}

function autoSave() {
    saveToStorage('products', products);
    saveToStorage('salesHistory', salesHistory);
    saveToStorage('settings', settings);
}

// ===== BARCODE SCANNING (PLACEHOLDER) =====

function scanBarcode() {
    // This is a placeholder for barcode scanning functionality
    // In a real implementation, you would integrate with a barcode scanner API
    const barcode = prompt('Enter barcode or product name:');
    if (barcode) {
        const product = products.find(p =>
            p.barcode === barcode ||
            p.name.toLowerCase().includes(barcode.toLowerCase()) ||
            (p.nameAr && p.nameAr.includes(barcode))
        );

        if (product) {
            addToCart(product);
        } else {
            alert('Product not found');
        }
    }
}

// Make functions globally available
window.handleLogin = handleLogin;
window.changeLanguage = changeLanguage;
window.changeCurrency = changeCurrency;
window.logout = logout;
window.switchView = switchView;
window.searchProducts = searchProducts;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.clearCart = clearCart;
window.openCheckout = openCheckout;
window.closeCheckout = closeCheckout;
window.completeSale = completeSale;
window.printReceipt = printReceipt;
window.scanBarcode = scanBarcode;
