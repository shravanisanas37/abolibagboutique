/* ==========================================================================
   Aboli Bag Boutique & Jewellery Shop - Client Logic Application
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. Static Products Database
    // ==========================================
    const products = [
        {
            id: 1,
            name: "Aboli Silk Zardosi Potli",
            category: "bags",
            subcategory: "Potli",
            price: 799,
            originalPrice: 999,
            tag: "sale",
            description: "Handcrafted silk potli decorated with gold bead fringes and delicate Zardosi embroidery. Extremely spacious with secure double drawstrings, making it the perfect companion for wedding ensembles and festive lehengas.",
            material: "Raw Silk, Premium Glass Beads, Golden Threading",
            dimensions: "8 x 6 inches",
            colors: "Crimson Red, Antique Gold, Emerald Green",
            image: "https://images.unsplash.com/photo-1605733513597-a8f8d410cf3c?auto=format&fit=crop&w=600&q=80",
            thumbnails: [
                "https://images.unsplash.com/photo-1605733513597-a8f8d410cf3c?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=600&q=80"
            ]
        },
        {
            id: 2,
            name: "Premium Pearl Wedding Clutch",
            category: "bags",
            subcategory: "Clutch",
            price: 1299,
            originalPrice: null,
            tag: "new",
            description: "Luxe velvet box clutch adorned with hand-embroidered pearls and floral sequin designs. Comes with a sturdy, detachable gold shoulder chain. Features a secure top snap closure clasp.",
            material: "Velvet Base, Faux Pearls, Polished Brass Clasp & Chain",
            dimensions: "7.5 x 4.5 x 2 inches",
            colors: "Deep Maroon, Royal Blue, Emerald Green",
            image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80",
            thumbnails: [
                "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1605733513597-a8f8d410cf3c?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=600&q=80"
            ]
        },
        {
            id: 3,
            name: "Classic Vegan Leather Sling",
            category: "bags",
            subcategory: "Sling",
            price: 949,
            originalPrice: null,
            tag: "popular",
            description: "Designed for modern convenience and clean elegance. Crafted with smooth vegan leather, this sling features a compact design with three secure zipper compartments and an adjustable cross-body strap.",
            material: "High-grade Water-resistant Vegan Leather, Brass Zippers",
            dimensions: "9 x 6.5 x 3 inches",
            colors: "Deep Tan, Rich Chocolate, Cherry Red",
            image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80",
            thumbnails: [
                "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=600&q=80"
            ]
        },
        {
            id: 4,
            name: "Daily Style Canvas Tote",
            category: "bags",
            subcategory: "Tote",
            price: 649,
            originalPrice: null,
            tag: "",
            description: "Spacious heavy-duty cotton canvas bag with printed classic floral patterns and thick vegan leather handles. Features a zip closure at the top and a secure zip pocket inside for valuables.",
            material: "100% Cotton Canvas, Premium PU Leather Straps",
            dimensions: "14 x 12 x 4.5 inches",
            colors: "Warm Cream & Floral, Indigo & Tan, Sage Green",
            image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=600&q=80",
            thumbnails: [
                "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=600&q=80"
            ]
        },
        {
            id: 5,
            name: "Eco-Friendly Tassel Jute Sling",
            category: "bags",
            subcategory: "Sling",
            price: 599,
            originalPrice: 699,
            tag: "sale",
            description: "Handcrafted natural jute sling bag with a colorful cotton thread tassel, wooden button hook closure, and clean fabric inner lining. Lightweight, sustainable, and extremely charming.",
            material: "Natural Organic Jute, Cotton Tassel, Wooden Button",
            dimensions: "8.5 x 8 inches",
            colors: "Natural Beige, Soft Jute Brown",
            image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=600&q=80",
            thumbnails: [
                "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=600&q=80"
            ]
        },
        {
            id: 6,
            name: "Minimalist Slim Zip Wallet",
            category: "bags",
            subcategory: "Wallet",
            price: 399,
            originalPrice: null,
            tag: "",
            description: "A sleek, multi-slot accordion style wallet with an elegant gold snap-button front flap. Includes 8 card slots, a full-length bill section, and a zipped coin compartment.",
            material: "Scratch-resistant Saffiano PU Leather, Metal Snaps",
            dimensions: "4.5 x 3.5 x 1 inch",
            colors: "Blush Pink, Sage Olive, Classic Matte Black",
            image: "https://images.unsplash.com/photo-1627124112126-7d4ad855b4b4?auto=format&fit=crop&w=600&q=80",
            thumbnails: [
                "https://images.unsplash.com/photo-1627124112126-7d4ad855b4b4?auto=format&fit=crop&w=600&q=80"
            ]
        },
        {
            id: 7,
            name: "Luxe Floral Handcrafted Tote",
            category: "bags",
            subcategory: "Tote",
            price: 890,
            originalPrice: null,
            tag: "popular",
            description: "Make a statement with this premium structured tote. Features multiple inner partitions for cosmetics, tablets, and keys. Reinforced stitching and gold hardware feet on the bottom.",
            material: "High-grade Structured Vegan Leather, Gold Alloy Accents",
            dimensions: "13 x 11 x 5 inches",
            colors: "Warm Blush Tan, Midnight Blue, Charcoal Grey",
            image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=600&q=80",
            thumbnails: [
                "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=600&q=80"
            ]
        },
        {
            id: 8,
            name: "Royal Kundan Choker Set",
            category: "jewellery",
            subcategory: "Necklaces",
            price: 1899,
            originalPrice: 2499,
            tag: "sale",
            description: "Premium Kundan glass stone choker featuring pearls, adjustable silk thread back link, and custom gem finishes. Set includes matching drop earrings with silicon push-backs.",
            material: "Hand-cut Kundan Stones, Shell Pearls, 22k Gold-Plated Brass",
            dimensions: "Choker: Adjustable length, Earrings: 2.2 inches long",
            colors: "Cream Pearl White, Emerald Green & Gold, Ruby Red & Gold",
            image: "https://images.unsplash.com/photo-1599643478514-4a888f802c01?auto=format&fit=crop&w=600&q=80",
            thumbnails: [
                "https://images.unsplash.com/photo-1599643478514-4a888f802c01?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=600&q=80"
            ]
        },
        {
            id: 9,
            name: "Antique Temple Work Pendant Set",
            category: "jewellery",
            subcategory: "Necklaces",
            price: 1499,
            originalPrice: null,
            tag: "new",
            description: "Intricately designed antique gold-finished temple necklace set displaying traditional Lakshmi motifs. Completed with a matching pair of classic Jhumka drop earrings.",
            material: "Brass base, Matte Gold plating, Kemp red stones",
            dimensions: "Chain: 18 inches, Pendant: 3 x 2.2 inches",
            colors: "Matte Antique Copper Gold",
            image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=600&q=80",
            thumbnails: [
                "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1599643478514-4a888f802c01?auto=format&fit=crop&w=600&q=80"
            ]
        },
        {
            id: 10,
            name: "Royal Peacock Jhumka Earrings",
            category: "jewellery",
            subcategory: "Earrings",
            price: 690,
            originalPrice: null,
            tag: "popular",
            description: "Traditional peacock design jhumkas featuring delicate hanging pearls. Perfect styling matching item for festive kurtas and ethnic sarees.",
            material: "Brass Base, Synthetic Pearls, Meenakari Enameling",
            dimensions: "2.5 inches length, 1.2 inches diameter",
            colors: "Gold with Blue-Green enamel, Gold-White pearls",
            image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=600&q=80",
            thumbnails: [
                "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=600&q=80"
            ]
        },
        {
            id: 11,
            name: "Gold-Plated Kada Bangles (Pair)",
            category: "jewellery",
            subcategory: "Bangles",
            price: 899,
            originalPrice: null,
            tag: "new",
            description: "Openable Kada style bangles with screw locking mechanism, studded with Kundan glass stones. Ideal for bridal coordinates.",
            material: "Alloy Base, High-Gloss 22k Gold Polish, Kundan settings",
            dimensions: "Bangle Sizes available: 2.4, 2.6, 2.8",
            colors: "Glossy Gold, Pearl Cream",
            image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80",
            thumbnails: [
                "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=600&q=80"
            ]
        },
        {
            id: 12,
            name: "American Diamond Hoop Studs",
            category: "jewellery",
            subcategory: "Earrings",
            price: 499,
            originalPrice: 599,
            tag: "sale",
            description: "Sparkling Swiss cut American Diamond huggie hoop studs. Extremely versatile, complements western gowns as well as Indian salwar suits.",
            material: "Alloy Base, White Gold Rhodium Finish, Premium AD Stones",
            dimensions: "0.85 inch diameter",
            colors: "Silver Chrome",
            image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=80",
            thumbnails: [
                "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=80"
            ]
        },
        {
            id: 13,
            name: "Adjustable Royal Cocktail Ring",
            category: "jewellery",
            subcategory: "Rings",
            price: 350,
            originalPrice: null,
            tag: "",
            description: "Magnificent statement ring featuring a central emerald cut ruby gem surrounded by micro-paved American diamonds. Adjustable loop ensures a comfortable fit on any finger.",
            material: "Alloy base, Cubic Zirconia stones, Ruby glass centerpiece",
            dimensions: "Adjustable diameter",
            colors: "Ruby Crimson & Silver, Emerald Green & Silver",
            image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80",
            thumbnails: [
                "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80"
            ]
        },
        {
            id: 14,
            name: "Grand Kundan Bridal Combo Set",
            category: "jewellery",
            subcategory: "Necklaces",
            price: 3499,
            originalPrice: null,
            tag: "popular",
            description: "All-in-one luxurious bridal jewellery set containing a choker, a long haar pendant necklace, matching grand jhumkas, and a delicate Maang Tikka. Perfect for brides who want a royal traditional appearance.",
            material: "Copper-Brass, Heavy Gold Plating, Pearls, Grade-A Kundan Gems",
            dimensions: "Dual Necklace set: Adjustable drawstrings, Earrings: 3 inches long",
            colors: "Traditional Pearl Gold, Mint Green & Gold, Deep Red & Gold",
            image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=600&q=80",
            thumbnails: [
                "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1599643478514-4a888f802c01?auto=format&fit=crop&w=600&q=80"
            ]
        }
    ];

    // ==========================================
    // 2. Lookbook Gallery Database
    // ==========================================
    const galleryItems = [
        {
            id: 1,
            url: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80",
            category: "Bags",
            title: "Embroidered Velvet Clutch",
            subcaption: "Styling match for bridal lehengas"
        },
        {
            id: 2,
            url: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=600&q=80",
            category: "Jewellery",
            title: "Royal Kundan Sets",
            subcaption: "Bridal choker arrangements"
        },
        {
            id: 3,
            url: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80",
            category: "Bags",
            title: "Earthy Slings & Clutches",
            subcaption: "Sophisticated designs for functions"
        },
        {
            id: 4,
            url: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=600&q=80",
            category: "Jewellery",
            title: "Traditional Temple Ornaments",
            subcaption: "Gold matte choker set display"
        },
        {
            id: 5,
            url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80",
            category: "Combos",
            title: "Coordinated Festive Bundles",
            subcaption: "Potli and kada matching"
        },
        {
            id: 6,
            url: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e08?auto=format&fit=crop&w=600&q=80",
            category: "Store",
            title: "Aboli Boutique Storefront",
            subcaption: "Laxmi Vishnu Nivas bldg showroom"
        },
        {
            id: 7,
            url: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=600&q=80",
            category: "Store",
            title: "Artisanal Selection Desk",
            subcaption: "Consultations with styling expert"
        },
        {
            id: 8,
            url: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=600&q=80",
            category: "Combos",
            title: "Clutches & Rings Match",
            subcaption: "Evening party coordination designs"
        }
    ];

    // ==========================================
    // 3. State Management & Filtering Parameters
    // ==========================================
    let activeCategory = "all";
    let activeSubcategory = "all";
    let searchQuery = "";
    let sortValue = "newest";
    let activeGalleryFilter = "all";
    let activeLightboxIndex = 0;
    let filteredGalleryCache = [...galleryItems];

    // Reference Elements
    const productsGrid = document.getElementById('products-grid');
    const catalogSearch = document.getElementById('catalog-search');
    const catalogSort = document.getElementById('catalog-sort');
    const bagSubFilter = document.getElementById('bag-subcategories-filter');
    const jewellerySubFilter = document.getElementById('jewellery-subcategories-filter');
    const galleryMasonryGrid = document.getElementById('gallery-masonry-grid');
    
    // ==========================================
    // 4. Header Scroll Handling
    // ==========================================
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ==========================================
    // 5. Mobile Drawer Toggle
    // ==========================================
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    const mobileIcon = mobileMenuToggle.querySelector('i');

    mobileMenuToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        if (navLinksContainer.classList.contains('active')) {
            mobileIcon.className = 'fas fa-times';
        } else {
            mobileIcon.className = 'fas fa-bars';
        }
    });

    // ==========================================
    // 6. Routing System (SPA Logic)
    // ==========================================
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.page-section');

    function navigateToSection(targetId) {
        // Close mobile drawer
        navLinksContainer.classList.remove('active');
        mobileIcon.className = 'fas fa-bars';

        let sectionId = targetId;
        let subRouteCategory = null;

        // Support sub-routes like products/bags
        if (targetId.startsWith('products/')) {
            sectionId = 'products';
            subRouteCategory = targetId.split('/')[1];
        }

        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('active-section');
        });

        // Deactivate all nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Show target section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active-section');
        } else {
            document.getElementById('home').classList.add('active-section');
            sectionId = "home";
        }

        // Activate corresponding nav link
        const matchingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        if (matchingLink) {
            matchingLink.classList.add('active');
        }

        // Handle sub-route product filtering on navigation
        if (sectionId === 'products') {
            const filterValue = subRouteCategory || 'all';
            const filterBtn = document.querySelector(`.filter-btn[data-filter="${filterValue}"]`);
            if (filterBtn) {
                // Set active class in sidebar
                const parentGroup = filterBtn.closest('.filter-options');
                if (parentGroup) {
                    parentGroup.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                }
                filterBtn.classList.add('active');
                
                activeCategory = filterValue;
                activeSubcategory = "all";
                
                // Reset subcategory button selections
                document.querySelectorAll('#bag-subcategories-filter .filter-btn').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('#jewellery-subcategories-filter .filter-btn').forEach(b => b.classList.remove('active'));
                
                const bagAllBtn = document.querySelector('#bag-subcategories-filter .filter-btn[data-sub="all"]');
                const jewelAllBtn = document.querySelector('#jewellery-subcategories-filter .filter-btn[data-sub="all"]');
                if (bagAllBtn) bagAllBtn.classList.add('active');
                if (jewelAllBtn) jewelAllBtn.classList.add('active');

                updateSubcategoryVisibility();
                renderProducts();
            }
        }

        // Scroll page to top smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Attach click events to nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            navigateToSection(targetId);
            history.pushState(null, null, `#${targetId}`);
        });
    });

    // Detect internal anchor clicks
    document.body.addEventListener('click', (e) => {
        const anchor = e.target.closest('a');
        if (anchor && anchor.getAttribute('href') && anchor.getAttribute('href').startsWith('#') && !anchor.classList.contains('nav-link')) {
            const targetId = anchor.getAttribute('href').substring(1);
            
            // Check if section exists or if it's a sub-route of products
            let sectionCheckId = targetId;
            if (targetId.startsWith('products/')) {
                sectionCheckId = 'products';
            }

            if (document.getElementById(sectionCheckId)) {
                e.preventDefault();
                navigateToSection(targetId);
                history.pushState(null, null, `#${targetId}`);
            }
        }
    });

    // Window back/forward navigation
    window.addEventListener('popstate', () => {
        const hash = window.location.hash.substring(1) || 'home';
        navigateToSection(hash);
    });

    // Parse URL on load
    const currentHash = window.location.hash.substring(1) || 'home';
    navigateToSection(currentHash);


    // ==========================================
    // 7. Hero Banner Slideshow Scroller
    // ==========================================
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroPrev = document.getElementById('hero-prev');
    const heroNext = document.getElementById('hero-next');
    const heroDotsContainer = document.getElementById('hero-dots');
    let heroCurrentIndex = 0;
    let heroTimer = null;

    // Create navigation dots
    heroSlides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            changeHeroSlide(index);
            resetHeroTimer();
        });
        heroDotsContainer.appendChild(dot);
    });

    const heroDots = document.querySelectorAll('.slider-dot');

    function changeHeroSlide(index) {
        heroSlides[heroCurrentIndex].classList.remove('active');
        heroDots[heroCurrentIndex].classList.remove('active');
        
        heroCurrentIndex = (index + heroSlides.length) % heroSlides.length;
        
        heroSlides[heroCurrentIndex].classList.add('active');
        heroDots[heroCurrentIndex].classList.add('active');
    }

    function nextHeroSlide() {
        changeHeroSlide(heroCurrentIndex + 1);
    }

    function prevHeroSlide() {
        changeHeroSlide(heroCurrentIndex - 1);
    }

    function startHeroTimer() {
        heroTimer = setInterval(nextHeroSlide, 5000); // 5 seconds
    }

    function resetHeroTimer() {
        clearInterval(heroTimer);
        startHeroTimer();
    }

    if (heroPrev && heroNext) {
        heroPrev.addEventListener('click', () => {
            prevHeroSlide();
            resetHeroTimer();
        });
        heroNext.addEventListener('click', () => {
            nextHeroSlide();
            resetHeroTimer();
        });
        startHeroTimer();
    }

    // ==========================================
    // 8. Testimonials Carousel Scroller
    // ==========================================
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testPrev = document.getElementById('test-prev');
    const testNext = document.getElementById('test-next');
    let testIndex = 0;
    let testTimer = null;

    function changeTestimonial(index) {
        testimonialSlides[testIndex].classList.remove('active');
        testIndex = (index + testimonialSlides.length) % testimonialSlides.length;
        testimonialSlides[testIndex].classList.add('active');
    }

    function startTestTimer() {
        testTimer = setInterval(() => {
            changeTestimonial(testIndex + 1);
        }, 6000); // 6 seconds
    }

    function resetTestTimer() {
        clearInterval(testTimer);
        startTestTimer();
    }

    if (testPrev && testNext) {
        testPrev.addEventListener('click', () => {
            changeTestimonial(testIndex - 1);
            resetTestTimer();
        });
        testNext.addEventListener('click', () => {
            changeTestimonial(testIndex + 1);
            resetTestTimer();
        });
        startTestTimer();
    }

    // ==========================================
    // 9. FAQ Accordion Toggle
    // ==========================================
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(faq => {
                faq.classList.remove('active');
            });

            // If it wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // ==========================================
    // 10. Products Catalog Rendering & Logic
    // ==========================================
    
    // Filter controls mapping
    window.filterCatalog = (filterType, value, buttonEl) => {
        // Manage active classes in sidebar
        const parentGroup = buttonEl.closest('.filter-options');
        const siblingBtns = parentGroup.querySelectorAll('.filter-btn');
        siblingBtns.forEach(btn => btn.classList.remove('active'));
        buttonEl.classList.add('active');

        if (filterType === 'category') {
            activeCategory = value;
            activeSubcategory = "all"; // Reset subcategory
            
            // Sync subcategory button highlight styles
            document.querySelectorAll('#bag-subcategories-filter .filter-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('#jewellery-subcategories-filter .filter-btn').forEach(b => b.classList.remove('active'));
            
            const bagAllBtn = document.querySelector('#bag-subcategories-filter .filter-btn[data-sub="all"]');
            const jewelAllBtn = document.querySelector('#jewellery-subcategories-filter .filter-btn[data-sub="all"]');
            if (bagAllBtn) bagAllBtn.classList.add('active');
            if (jewelAllBtn) jewelAllBtn.classList.add('active');

            // Hide/Show subcategory blocks based on main category
            updateSubcategoryVisibility();
        } else if (filterType === 'subcategory') {
            activeSubcategory = value;
        }

        renderProducts();
    };

    // Category Box Quick Link Navigation
    window.filterCatalogByCategory = (catKey) => {
        // Direct view to products catalog section
        navigateToSection("products");
        history.pushState(null, null, `#products`);

        // Trigger filter click programmatically
        let targetBtn;
        if (catKey === 'new-arrivals') {
            targetBtn = document.querySelector('.filter-btn[data-filter="new-arrivals"]');
        } else if (catKey === 'bags') {
            targetBtn = document.querySelector('.filter-btn[data-filter="bags"]');
        } else if (catKey === 'jewellery') {
            targetBtn = document.querySelector('.filter-btn[data-filter="jewellery"]');
        }

        if (targetBtn) {
            targetBtn.click();
        }
    };

    function updateSubcategoryVisibility() {
        if (!bagSubFilter || !jewellerySubFilter) return;

        if (activeCategory === 'all') {
            bagSubFilter.style.display = 'block';
            jewellerySubFilter.style.display = 'block';
        } else if (activeCategory === 'bags') {
            bagSubFilter.style.display = 'block';
            jewellerySubFilter.style.display = 'none';
        } else if (activeCategory === 'jewellery') {
            bagSubFilter.style.display = 'none';
            jewellerySubFilter.style.display = 'block';
        } else {
            // New arrivals or Sale
            bagSubFilter.style.display = 'none';
            jewellerySubFilter.style.display = 'none';
        }
    }

    function renderProducts() {
        if (!productsGrid) return;
        productsGrid.innerHTML = "";

        // 1. Filter local catalog array
        let displayList = products.filter(product => {
            // Main Category filter
            if (activeCategory === 'bags' && product.category !== 'bags') return false;
            if (activeCategory === 'jewellery' && product.category !== 'jewellery') return false;
            if (activeCategory === 'new-arrivals' && product.tag !== 'new' && product.tag !== 'popular') return false;
            if (activeCategory === 'sale' && product.tag !== 'sale') return false;

            // Subcategory filter
            if (activeSubcategory !== 'all') {
                if (product.subcategory !== activeSubcategory) return false;
            }

            // Search query filter
            if (searchQuery !== "") {
                const searchLower = searchQuery.toLowerCase();
                const matchesName = product.name.toLowerCase().includes(searchLower);
                const matchesDesc = product.description.toLowerCase().includes(searchLower);
                const matchesSub = product.subcategory.toLowerCase().includes(searchLower);
                const matchesMat = product.material.toLowerCase().includes(searchLower);
                if (!matchesName && !matchesDesc && !matchesSub && !matchesMat) return false;
            }

            return true;
        });

        // 2. Sort results
        if (sortValue === 'price-low') {
            displayList.sort((a, b) => a.price - b.price);
        } else if (sortValue === 'price-high') {
            displayList.sort((a, b) => b.price - a.price);
        } else if (sortValue === 'popular') {
            // Put popular/sale tags first
            displayList.sort((a, b) => {
                const aRank = (a.tag === 'popular' || a.tag === 'new') ? 2 : 1;
                const bRank = (b.tag === 'popular' || b.tag === 'new') ? 2 : 1;
                return bRank - aRank;
            });
        } else {
            // newest order (id descending)
            displayList.sort((a, b) => b.id - a.id);
        }

        // 3. Render items
        if (displayList.length === 0) {
            productsGrid.innerHTML = `
                <div class="empty-products-state">
                    <i class="fas fa-search"></i>
                    <h4>No Products Found</h4>
                    <p>We couldn't find matches for "${searchQuery}". Try selecting another category or check your spelling.</p>
                </div>
            `;
            return;
        }

        displayList.forEach(prod => {
            const card = document.createElement('div');
            card.className = 'product-item';
            
            // Tag badge helper
            let badgeHTML = "";
            if (prod.tag === 'new') badgeHTML = `<span class="tag-badge new">New</span>`;
            else if (prod.tag === 'sale') badgeHTML = `<span class="tag-badge sale">Offer</span>`;
            else if (prod.tag === 'popular') badgeHTML = `<span class="tag-badge">Hot</span>`;

            // Sale prices helper
            let priceHTML = `₹${prod.price}`;
            if (prod.originalPrice) {
                priceHTML = `₹${prod.price} <span class="prod-price-original">₹${prod.originalPrice}</span>`;
            }

            card.innerHTML = `
                <div class="prod-img-wrap" onclick="openProductModal(${prod.id})">
                    ${badgeHTML}
                    <img src="${prod.image}" alt="${prod.name}" class="prod-img">
                    <div class="prod-overlay">
                        <span class="prod-quick-view">Quick View</span>
                    </div>
                </div>
                <div class="prod-info">
                    <span class="prod-category">${prod.category} | ${prod.subcategory}</span>
                    <h3 class="prod-title">${prod.name}</h3>
                    <p class="prod-price">${priceHTML}</p>
                    <p class="prod-avail"><i class="fas fa-store-alt"></i> Available in Satara Store</p>
                    <a href="https://wa.me/919082140384?text=Hi%20Aboli!%20I%20am%20interested%20in%20inquiring%20about%20the%20${encodeURIComponent(prod.name)}%20(Price:%20₹${prod.price}).%20Is%20it%20available%20in%20store?" target="_blank" class="btn btn-outline btn-full">
                        <i class="fab fa-whatsapp"></i> Enquire on WhatsApp
                    </a>
                </div>
            `;
            productsGrid.appendChild(card);
        });
    }

    // Attach search and sort events
    if (catalogSearch) {
        catalogSearch.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            renderProducts();
        });
    }
    if (catalogSort) {
        catalogSort.addEventListener('change', (e) => {
            sortValue = e.target.value;
            renderProducts();
        });
    }

    // Initial render
    updateSubcategoryVisibility();
    renderProducts();

    // ==========================================
    // 11. Product Detail Modal Window
    // ==========================================
    const detailModal = document.getElementById('product-detail-modal');
    const modalContent = document.getElementById('modal-content-inject');

    window.openProductModal = (id) => {
        const prod = products.find(p => p.id === id);
        if (!prod) return;

        // Set up prices
        let priceHTML = `₹${prod.price}`;
        if (prod.originalPrice) {
            priceHTML = `₹${prod.price} <span class="prod-price-original">₹${prod.originalPrice}</span>`;
        }

        // Thumbnails generation
        let thumbsHTML = "";
        prod.thumbnails.forEach((thumbUrl, idx) => {
            thumbsHTML += `
                <div class="modal-thumb-item ${idx === 0 ? 'active' : ''}" onclick="swapModalImage('${thumbUrl}', this)">
                    <img src="${thumbUrl}" alt="Thumbnail ${idx + 1}">
                </div>
            `;
        });

        // Spec list generation
        let specsHTML = "";
        if (prod.material) specsHTML += `<li class="modal-spec-item"><strong>Material:</strong> ${prod.material}</li>`;
        if (prod.dimensions) specsHTML += `<li class="modal-spec-item"><strong>Dimensions:</strong> ${prod.dimensions}</li>`;
        if (prod.colors) specsHTML += `<li class="modal-spec-item"><strong>Available Colours:</strong> ${prod.colors}</li>`;

        modalContent.innerHTML = `
            <div class="modal-gallery-column">
                <div class="modal-main-img-wrap">
                    <img src="${prod.image}" alt="${prod.name}" class="modal-main-img" id="modal-main-image-target">
                </div>
                <div class="modal-thumbs-row">
                    ${thumbsHTML}
                </div>
            </div>
            <div class="modal-details-column">
                <span class="modal-category">${prod.category} | ${prod.subcategory}</span>
                <h3 class="modal-title">${prod.name}</h3>
                <p class="modal-price">${priceHTML}</p>
                <div class="modal-divider"></div>
                <h4 class="modal-desc-title">Description</h4>
                <p class="modal-desc">${prod.description}</p>
                
                <h4 class="modal-desc-title">Specifications</h4>
                <ul class="modal-specs-list">
                    ${specsHTML}
                    <li class="modal-spec-item"><strong>Store Code:</strong> AB-${prod.id}${prod.category.substring(0,2).toUpperCase()}</li>
                </ul>

                <div class="modal-offline-notice">
                    <i class="fas fa-info-circle"></i>
                    <span><strong>Store Exclusive:</strong> We do not offer delivery. Visit our showroom at Laxmi Vishnu Nivas bldg to verify textures and buy.</span>
                </div>

                <a href="https://wa.me/919082140384?text=Hi%20Aboli!%20I%20am%20interested%20in%20inquiring%20about%20the%20${encodeURIComponent(prod.name)}%20(Code:%20AB-${prod.id}${prod.category.substring(0,2).toUpperCase()}).%20Please%20let%20me%20know%20if%20it's%20available%20in%20store." target="_blank" class="btn btn-whatsapp-cta btn-full">
                    <i class="fab fa-whatsapp"></i> Reserve / Enquire on WhatsApp
                </a>
            </div>
        `;

        detailModal.classList.add('active');
        document.body.style.overflow = "hidden"; // Disable background scrolling
    };

    window.swapModalImage = (imgUrl, thumbEl) => {
        document.getElementById('modal-main-image-target').src = imgUrl;
        
        // Remove active class from other thumbnails
        const parent = thumbEl.closest('.modal-thumbs-row');
        parent.querySelectorAll('.modal-thumb-item').forEach(thumb => {
            thumb.classList.remove('active');
        });
        
        // Add active to current
        thumbEl.classList.add('active');
    };

    window.closeProductModal = () => {
        detailModal.classList.remove('active');
        document.body.style.overflow = ""; // Re-enable background scrolling
    };

    window.closeProductModalOutside = (e) => {
        if (e.target === detailModal) {
            closeProductModal();
        }
    };

    // ==========================================
    // 12. Privacy Policy Modal Window
    // ==========================================
    const privacyModal = document.getElementById('privacy-policy-modal');

    window.openPrivacyModal = (e) => {
        if (e) e.preventDefault();
        privacyModal.classList.add('active');
        document.body.style.overflow = "hidden";
    };

    window.closePrivacyModal = () => {
        privacyModal.classList.remove('active');
        document.body.style.overflow = "";
    };

    window.closePrivacyModalOutside = (e) => {
        if (e.target === privacyModal) {
            closePrivacyModal();
        }
    };

    // ==========================================
    // 13. Gallery / Lookbook Masonry Layout & Lightbox
    // ==========================================
    
    window.filterGallery = (filterKey, buttonEl) => {
        // Toggle tab highlights
        const parent = buttonEl.closest('.gallery-filter-bar');
        parent.querySelectorAll('.gallery-tab').forEach(tab => tab.classList.remove('active'));
        buttonEl.classList.add('active');

        activeGalleryFilter = filterKey;
        renderGallery();
    };

    function renderGallery() {
        if (!galleryMasonryGrid) return;
        galleryMasonryGrid.innerHTML = "";

        filteredGalleryCache = galleryItems.filter(item => {
            if (activeGalleryFilter === 'all') return true;
            return item.category.toLowerCase() === activeGalleryFilter.toLowerCase();
        });

        filteredGalleryCache.forEach((item, idx) => {
            const card = document.createElement('div');
            card.className = 'gallery-card';
            card.onclick = () => openLightbox(idx);

            card.innerHTML = `
                <img src="${item.url}" alt="${item.title}">
                <div class="gallery-card-content">
                    <span class="gallery-card-tag">${item.category}</span>
                    <h4 class="gallery-card-title">${item.title}</h4>
                </div>
            `;
            galleryMasonryGrid.appendChild(card);
        });
    }

    // Lightbox Controls
    const lightbox = document.getElementById('gallery-lightbox');
    const lightboxImg = document.getElementById('lightbox-image-target');
    const lightboxCap = document.getElementById('lightbox-caption-target');
    const lightboxSubCap = document.getElementById('lightbox-subcaption-target');

    window.openLightbox = (index) => {
        activeLightboxIndex = index;
        updateLightboxContent();
        lightbox.classList.add('active');
        document.body.style.overflow = "hidden";
    };

    function updateLightboxContent() {
        const item = filteredGalleryCache[activeLightboxIndex];
        if (!item) return;

        lightboxImg.src = item.url;
        lightboxCap.textContent = item.title;
        lightboxSubCap.textContent = `Category: ${item.category} — ${item.subcaption}`;
    }

    window.navigateLightbox = (direction) => {
        activeLightboxIndex = (activeLightboxIndex + direction + filteredGalleryCache.length) % filteredGalleryCache.length;
        updateLightboxContent();
    };

    window.closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = "";
    };

    window.closeLightboxOutside = (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    };

    // Keyboard support for Lightbox
    window.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') navigateLightbox(1);
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
    });

    // Gallery Initial Render
    renderGallery();

    // ==========================================
    // 14. Contact Form WhatsApp Integrator
    // ==========================================
    const inquiryForm = document.getElementById('contact-inquiry-form');
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('form-name').value.trim();
            const interest = document.getElementById('form-interest').value;
            const message = document.getElementById('form-message').value.trim();

            const prefilledText = `Hi Aboli! My name is ${name}. I am visiting your website catalog and I am interested in [${interest}]. Here is my request: ${message}`;
            
            // Format WhatsApp API URL
            const whatsappUrl = `https://wa.me/919082140384?text=${encodeURIComponent(prefilledText)}`;
            
            // Open in a new tab
            window.open(whatsappUrl, '_blank');
            
            // Reset form inputs
            inquiryForm.reset();
        });
    }

    // Set Footer Copyright Year
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});
