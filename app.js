/* ==========================================================================
   AL FAROOQ PETROLEUM ENTERPRISE - INTERACTIVE JAVASCRIPT APP
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Master Products & Services Catalog Data
  const productsData = [
    {
      id: 'otp-plant',
      title: 'Oil Treatment Plants (OTP) for Deposits',
      category: 'processing',
      categoryLabel: 'Processing & Plants',
      description: 'Skid-mounted and stationary oil treatment units designed to purify raw crude deposits, remove water/emulsions, and achieve commercial export specifications.',
      specs: [
        'Custom throughput capacity from 1,000 to 50,000 BOPD',
        'Multi-stage electrostatic & thermal deemulsification',
        'Automatic BS&W (Basic Sediment and Water) monitoring',
        'Integrated gas recovery and flare knock-out drums'
      ]
    },
    {
      id: 'pressure-plant',
      title: 'Module-Type Formation Pressure Maintenance Plant',
      category: 'processing',
      categoryLabel: 'Processing & Plants',
      description: 'Modular water and gas injection plants engineered to sustain reservoir pressure and maximize secondary oil recovery efficiency in mature fields.',
      specs: [
        'Skid-mounted modular architecture for rapid field deployment',
        'High-pressure injection pump suites (up to 350 bar)',
        'Comprehensive water filtration & deoxygenation units',
        'Automated PLC control with remote SCADA telemetry'
      ]
    },
    {
      id: 'nitrogen-system',
      title: 'Mobile Nitrogen Production System',
      category: 'mobile',
      categoryLabel: 'Mobile Systems',
      description: 'Heavy-duty truck/trailer mounted nitrogen generation units for well purging, pressure testing, nitrified acidizing, and well completion operations.',
      specs: [
        'High purity nitrogen delivery (95% to 99.9% N2)',
        'Delivery pressure ratings up to 500 bar (7,250 PSI)',
        'All-weather rugged design built for difficult terrain',
        'Independent diesel-driven air compressor package'
      ]
    },
    {
      id: 'gas-pumping',
      title: 'Mobile Gas Pumping System',
      category: 'mobile',
      categoryLabel: 'Mobile Systems',
      description: 'Self-contained mobile booster pumping units for emergency gas evacuation, line purging, and field gas lift operations across remote wells.',
      specs: [
        'High-displacement multi-stage gas booster pumps',
        'Hazardous area Zone 1 / Class 1 Div 2 explosion-proof rating',
        'Integrated fuel gas conditioning & safety shutdown valves',
        'Rapid hookup manifold connections for quick dispatch'
      ]
    },
    {
      id: 'gas-compressor',
      title: 'Natural Gas Stationary Compressor System',
      category: 'processing',
      categoryLabel: 'Processing & Plants',
      description: 'Industrial heavy-duty reciprocating and screw compressor packages for wellhead gas boosting, pipeline gathering, and gas reinjection.',
      specs: [
        'Engineered for continuous heavy 24/7 duty cycles',
        'Corrosive & sour gas (H2S/CO2) resistant metallurgy options',
        'Vibration-damped structural steel skid base',
        'High thermal efficiency air-cooled heat exchangers'
      ]
    },
    {
      id: 'custody-metering',
      title: 'Oil and Gas Custody Metering System',
      category: 'processing',
      categoryLabel: 'Processing & Plants',
      description: 'API and OIML certified high-accuracy fiscal custody transfer metering skids with provers for fiscal oil & gas handover between operators.',
      specs: [
        'Ultrasonic, Coriolis mass, and turbine flow meter configurations',
        'Bi-directional pipe prover or compact prover integration',
        'Flow computer suite with automatic temperature & pressure correction',
        'Redundant dual-stream skid design for zero-downtime metering'
      ]
    },
    {
      id: 'desalting-plants',
      title: 'Oil Desalting Plants',
      category: 'processing',
      categoryLabel: 'Processing & Plants',
      description: 'Single and dual-stage electrostatic desalting units for removing corrosive salts and sediment from raw crude prior to refining or export.',
      specs: [
        'High efficiency desalting (>99% salt removal)',
        'AC/DC dual frequency electrostatic grid transformers',
        'Optimized wash-water mixing valves and demulsifier injection',
        'Sludge flush & bottom sediment removal systems'
      ]
    },
    {
      id: 'gas-separators',
      title: 'Gas Separators',
      category: 'drilling',
      categoryLabel: 'Drilling & Separators',
      description: 'Surface gas-liquid separators and mud-gas separators (poor boy degassers) for safely disengaging gas from mud streams during well control operations.',
      specs: [
        'High gas handling throughput with internal baffle plates',
        'ASME Section VIII Div 1 certified pressure vessels',
        'Sour gas service (NACE MR0175 compliant)',
        'Custom vessel diameters and inlet manifold arrangements'
      ]
    },
    {
      id: 'four-phase-separator',
      title: 'Four-Phase High Pressure Raw Oil Separator',
      category: 'drilling',
      categoryLabel: 'Drilling & Separators',
      description: 'Advanced well testing and production separators designed to segregate raw wellbore effluent into oil, water, gas, and solids (sand/sediment).',
      specs: [
        '4-phase separation: Oil, Free Water, Gas, and Sand',
        'Operating pressures up to 1,440 PSI (100 bar)',
        'Automatic level controllers & pneumatic control valves',
        'Sand jetting system for online solids removal without shutdown'
      ]
    },
    {
      id: 'diesel-heaters',
      title: 'Mobile Diesel Heaters',
      category: 'mobile',
      categoryLabel: 'Mobile Systems',
      description: 'Industrial mobile thermal fluid and indirect diesel heaters for preheating heavy crude lines, fluid tank heating, and cold weather field operations.',
      specs: [
        'Thermal output up to 5,000,000 BTU/hr',
        'Trailer or skid mounted with heavy duty diesel burners',
        'Spark arrestor exhaust & over-temperature safety cutoffs',
        'Dual fuel capabilities (Diesel / Field Gas)'
      ]
    },
    {
      id: 'drilling-equipment',
      title: 'Drilling Equipment & Rig Machinery',
      category: 'drilling',
      categoryLabel: 'Drilling & Separators',
      description: 'Comprehensive representation for drilling components including mud pumps, rotary tables, top drives, BOP stacks, and drill string tools.',
      specs: [
        'API 7K / 8C certified drilling equipment',
        'Triplex mud pumps (500 HP to 2200 HP)',
        'Annular & Ram Blowout Preventers (BOPs)',
        'Complete spares inventory & emergency field dispatch'
      ]
    },
    {
      id: 'production-equipment',
      title: 'Production Equipment & Wellhead Valves',
      category: 'processing',
      categoryLabel: 'Processing & Plants',
      description: 'High-pressure surface Xmas trees, choke manifolds, gate valves, and wellhead safety control systems for oil and gas production wells.',
      specs: [
        'Pressure ratings from 3,000 PSI to 15,000 PSI (API 6A)',
        'Manual, hydraulic, and pneumatic actuator options',
        'Extensive material classes (AA to HH for corrosive service)',
        'Emergency surface safety valve (SSV) control panels'
      ]
    },
    {
      id: 'process-plant',
      title: 'Process Plant Modules',
      category: 'processing',
      categoryLabel: 'Processing & Plants',
      description: 'Turnkey pre-fabricated process modules including gas dehydration (TEG), amine sweetening (H2S removal), and fuel gas conditioning units.',
      specs: [
        'Pre-engineered modular skids for minimal field assembly',
        'Complete electrical instrumentation & hazard class wiring',
        'High thermal recovery heat exchangers',
        'Guaranteed output gas dewpoint & H2S purity specs'
      ]
    },
    {
      id: 'wells-operations',
      title: 'Wells Operations Support & Tools',
      category: 'drilling',
      categoryLabel: 'Drilling & Separators',
      description: 'Wireline units, slickline tools, downhole packers, artificial lift components, and well stimulation support machinery.',
      specs: [
        'Comprehensive well intervention tool suites',
        'Progressing cavity pumps (PCP) & ESP accessories',
        'Production packers & bridge plugs',
        'On-site technical supervision by petroleum engineers'
      ]
    },
    {
      id: 'specialized-chemicals',
      title: 'Specialized Oilfield Chemicals',
      category: 'chemicals',
      categoryLabel: 'Chemicals & Services',
      description: 'High-performance production chemicals including demulsifiers, corrosion inhibitors, scale inhibitors, biocide treatments, and drilling mud additives.',
      specs: [
        'Formulated for extreme salinity, temperature, and sour conditions',
        'Demulsifiers for rapid oil-water phase separation',
        'Eco-friendly biodegradable chemical options',
        'Bulk ISO tank container delivery to site'
      ]
    }
  ];

  // DOM Elements
  const productsContainer = document.getElementById('products-container');
  const searchInput = document.getElementById('catalog-search');
  const clearSearchBtn = document.getElementById('clear-search');
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  // Spec Modal Elements
  const specModal = document.getElementById('spec-modal');
  const modalCloseBtn = document.getElementById('modal-close');
  const modalCategory = document.getElementById('modal-category');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalSpecsList = document.getElementById('modal-specs-list');
  const modalQuoteBtn = document.getElementById('modal-quote-btn');
  
  // Navigation & Drawer Elements
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerCloseBtn = document.getElementById('drawer-close');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const headerQuoteBtn = document.getElementById('header-quote-btn');
  
  // Node Diagram Interactive Info Display
  const nodeItems = document.querySelectorAll('.node-item');
  const nodeInfoText = document.getElementById('node-info-text');
  
  // Quote Form
  const quoteForm = document.getElementById('quote-form');
  const formEquipmentSelect = document.getElementById('form-equipment');

  let activeCategory = 'all';
  let searchQuery = '';

  // Render Catalog Cards
  function renderCatalog() {
    if (!productsContainer) return;

    const filtered = productsData.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      productsContainer.innerHTML = `
        <div class="glass-card text-center" style="grid-column: 1 / -1; padding: 4rem 2rem;">
          <i data-lucide="package-x" style="font-size: 3rem; color: var(--text-subtle); margin-bottom: 1rem;"></i>
          <h3>No matching equipment or service found</h3>
          <p style="color: var(--text-muted); margin-top: 0.5rem;">Try adjusting your search terms or filter selection.</p>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    productsContainer.innerHTML = filtered.map(item => `
      <div class="product-card glass-card">
        <span class="product-category-tag">${item.categoryLabel}</span>
        <h3 class="product-title">${item.title}</h3>
        <p class="product-desc">${item.description}</p>
        
        <div class="product-specs-preview">
          <div class="spec-pill"><i data-lucide="check"></i> <span>${item.specs[0]}</span></div>
          <div class="spec-pill"><i data-lucide="check"></i> <span>${item.specs[1]}</span></div>
        </div>

        <button class="btn btn-outline btn-sm view-spec-btn w-full" data-id="${item.id}">
          <i data-lucide="eye"></i> View Specs & Inquiry
        </button>
      </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();

    // Attach click listeners to view spec buttons
    document.querySelectorAll('.view-spec-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        openSpecModal(id);
      });
    });
  }

  // Filter Buttons Handler
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-category');
      renderCatalog();
    });
  });

  // Search Input Handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      clearSearchBtn.style.display = searchQuery ? 'block' : 'none';
      renderCatalog();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      clearSearchBtn.style.display = 'none';
      renderCatalog();
    });
  }

  // Open Spec Modal
  function openSpecModal(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product || !specModal) return;

    modalCategory.textContent = product.categoryLabel;
    modalTitle.textContent = product.title;
    modalDesc.textContent = product.description;

    modalSpecsList.innerHTML = product.specs.map(spec => `
      <li><i data-lucide="shield-check"></i> ${spec}</li>
    `).join('');

    if (window.lucide) window.lucide.createIcons();

    modalQuoteBtn.setAttribute('data-item', product.title);
    specModal.showModal();
  }

  // Close Spec Modal
  if (modalCloseBtn && specModal) {
    modalCloseBtn.addEventListener('click', () => specModal.close());
    specModal.addEventListener('click', (e) => {
      const rect = specModal.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        specModal.close();
      }
    });
  }

  if (modalQuoteBtn) {
    modalQuoteBtn.addEventListener('click', () => {
      const itemTitle = modalQuoteBtn.getAttribute('data-item');
      if (specModal) specModal.close();
      
      // Scroll to contact form and set dropdown
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }

      if (formEquipmentSelect) {
        let matchedOption = false;
        for (let i = 0; i < formEquipmentSelect.options.length; i++) {
          if (formEquipmentSelect.options[i].text.toLowerCase().includes(itemTitle.toLowerCase()) ||
              itemTitle.toLowerCase().includes(formEquipmentSelect.options[i].value.toLowerCase())) {
            formEquipmentSelect.selectedIndex = i;
            matchedOption = true;
            break;
          }
        }
        if (!matchedOption) {
          formEquipmentSelect.value = "Other Indenting Service";
        }
      }
    });
  }

  // Header Quote Button
  if (headerQuoteBtn) {
    headerQuoteBtn.addEventListener('click', () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Mobile Navigation Drawer Toggle
  if (mobileMenuToggle && mobileDrawer) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileDrawer.setAttribute('aria-hidden', 'false');
    });
  }

  function closeMobileDrawer() {
    if (mobileDrawer) mobileDrawer.setAttribute('aria-hidden', 'true');
  }

  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeMobileDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeMobileDrawer);
  mobileNavLinks.forEach(link => link.addEventListener('click', closeMobileDrawer));

  // Interactive Strengths Node Hover Handler
  nodeItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const info = item.getAttribute('data-info');
      if (nodeInfoText) nodeInfoText.textContent = info;
    });

    item.addEventListener('click', () => {
      const info = item.getAttribute('data-info');
      if (nodeInfoText) nodeInfoText.textContent = info;
      showToast(info);
    });
  });

  // Quote Form Submission Handler
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('form-name').value;
      const equipment = formEquipmentSelect.value;
      const isRush = document.getElementById('form-rush').checked;

      showToast(`Inquiry received from ${name}! Petroleum Engineer Sohaib Farooq will contact you shortly.${isRush ? ' (Flagged for Rush Delivery Dispatch)' : ''}`);

      quoteForm.reset();
    });
  }

  // Toast Notification System
  function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <i data-lucide="check-circle-2" style="color: var(--primary-cyan); font-size: 1.2rem;"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4500);
  }

  // Initial Catalog Render
  renderCatalog();
});
