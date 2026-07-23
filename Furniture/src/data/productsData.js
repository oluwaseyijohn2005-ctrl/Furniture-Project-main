 const productsData = [
  // LIVING ROOM
  { id: 1, name: "Boucle Accent Chair", price: 478400, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop&q=80", category: "Living",
    description: "Cozy boucle fabric accent chair. Perfect for your living room or bedroom corner with its soft texture and modern silhouette.",
    specs: ["Material: Boucle Fabric", "Color: Cream", "Dimensions: 75x80x90cm", "Weight Capacity: 120kg"] },
  
  { id: 2, name: "Velvet 3-Seater Sofa", price: 2078400, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop&q=80", category: "Living",
    description: "Luxurious velvet 3-seater sofa with solid wood legs. Designed for both comfort and style in modern homes.",
    specs: ["Material: Premium Velvet + Solid Wood", "Seats: 3", "Dimensions: 220x90x85cm", "Assembly: Required"] },
  
  { id: 3, name: "Wooden Coffee Table", price: 558400, image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=500&h=500&fit=crop&q=80", category: "Living",
    description: "Minimalist solid oak coffee table with clean lines. A timeless centerpiece for your living area.",
    specs: ["Material: Solid Oak Wood", "Dimensions: 120x60x45cm", "Finish: Natural Matte", "Weight: 18kg"] },
  
  { id: 4, name: "Linen Armchair", price: 734400, image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&h=500&fit=crop&q=80", category: "Living",
    description: "Elegant linen armchair with plush cushioning. Perfect for reading nooks and conversation areas.",
    specs: ["Material: Linen Fabric + Foam", "Color: Sand Beige", "Dimensions: 80x85x95cm", "Weight Capacity: 130kg"] },
  
  { id: 5, name: "Rattan Side Table", price: 318400, image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&h=500&fit=crop&q=80", category: "Living",
    description: "Handwoven rattan side table that adds boho warmth to any space. Great beside sofas or beds.",
    specs: ["Material: Natural Rattan", "Dimensions: 45x45x55cm", "Finish: Light Brown", "Weight: 4.5kg"] },
  
  { id: 6, name: "TV Console Oak", price: 638400, image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&h=500&fit=crop&q=80", category: "Living",
    description: "Modern oak TV console with 2 drawers and open shelving. Fits TVs up to 65 inches.",
    specs: ["Material: Oak Veneer", "Drawers: 2", "Dimensions: 160x40x50cm", "Fits TVs up to 65''"] },

  // DINING
  { id: 7, name: "Oak Dining Table 6-Seater", price: 1278400, image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=500&h=500&fit=crop&q=80", category: "Dining",
    description: "Solid oak dining table that seats 6 comfortably. Perfect for family dinners and gatherings.",
    specs: ["Material: Solid Oak", "Seats: 6", "Dimensions: 180x90x75cm", "Finish: Natural Oil"] },
  
  { id: 8, name: "Dining Chair Set of 2", price: 239200, image: "https://images.unsplash.com/photo-1580482198871-bceaa66f8e82?w=500&h=500&fit=crop&q=80", category: "Dining",
    description: "Set of 2 modern dining chairs with cushioned seats and sturdy wooden legs.",
    specs: ["Material: Fabric + Wood", "Set: 2 Chairs", "Dimensions: 45x55x85cm each", "Color: Grey"] },
  
  { id: 9, name: "Marble Dining Table", price: 1918400, image: "https://mhfdecor.com/cdn/shop/files/elysian-marble-dining-table-500x500_1024x.png?v=1767863466", category: "Dining",
    description: "Elegant white marble top dining table with black steel base. A luxury centerpiece for 6 people.",
    specs: ["Material: Marble Top + Steel Base", "Seats: 6", "Dimensions: 180x90x75cm", "Weight: 85kg"] },
  
  { id: 10, name: "Bar Stool Set of 2", price: 191200, image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/85/3196373/1.jpg?0065", category: "Dining",
    description: "Modern bar stools with backrest and footrest. Perfect height for kitchen islands and bars.",
    specs: ["Material: Metal + Leather", "Set: 2 Stools", "Height: 75cm", "Adjustable: No"] },

  // BEDROOM
  { id: 11, name: "King Size Bed Frame", price: 1598400, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&h=500&fit=crop&q=80", category: "Bedroom",
    description: "Minimalist king size bed frame with upholstered headboard. Strong support, no box spring needed.",
    specs: ["Size: King 180x200cm", "Material: Wood + Fabric", "Headboard Height: 110cm", "Mattress Not Included"] },
  
  { id: 12, name: "Wardrobe 3-Door", price: 1118400, image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500&h=500&fit=crop&q=80", category: "Bedroom",
    description: "Spacious 3-door wardrobe with hanging space and shelves. Soft-close doors included.",
    specs: ["Material: MDF + Veneer", "Doors: 3", "Dimensions: 150x55x220cm", "Features: Hanging Rail + 4 Shelves"] },
  
  { id: 13, name: "Bedside Table", price: 159200, image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=500&h=500&fit=crop&q=80", category: "Bedroom",
    description: "Compact bedside table with 1 drawer and 1 shelf. Perfect for lamps and books.",
    specs: ["Material: Wood", "Drawers: 1", "Dimensions: 50x40x55cm", "Finish: Walnut"] },
  
  { id: 14, name: "Dresser with Mirror", price: 798400, image: "https://images.unsplash.com/photo-1618223497016-3f45b4511a0e?w=500&h=500&fit=crop&q=80", category: "Bedroom",
    description: "6-drawer wooden dresser with large attached mirror. Great storage and vanity in one.",
    specs: ["Material: MDF + Veneer", "Drawers: 6", "Dimensions: 160x45x180cm", "Mirror: 80x100cm"] },
  
  { id: 15, name: "Upholstered Headboard", price: 318400, image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=500&h=500&fit=crop&q=80", category: "Bedroom",
    description: "Tufted upholstered headboard that fits king and queen beds. Adds luxury to any bedroom.",
    specs: ["Material: Fabric + Foam", "Fits: King/Queen Bed", "Height: 120cm", "Mounting: Wall Mount"] },

  // OFFICE
  { id: 16, name: "Ergonomic Office Chair", price: 239200, image: "https://images.unsplash.com/photo-1541558869434-2840d308329a?w=500&h=500&fit=crop&q=80", category: "Office",
    description: "Ergonomic office chair with lumbar support and adjustable height. Designed for all-day comfort.",
    specs: ["Material: Mesh + Leather", "Adjustments: Height + Tilt", "Weight Capacity: 150kg", "Wheels: 5 Casters"] },
  
  { id: 17, name: "Executive Desk", price: 478400, image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500&h=500&fit=crop&q=80", category: "Office",
    description: "Spacious executive desk with cable management. Perfect for home office or corporate setup.",
    specs: ["Material: Engineered Wood", "Dimensions: 160x80x75cm", "Drawers: 3", "Color: Dark Walnut"] },
  
  { id: 18, name: "Bookshelf 5-Tier", price: 638400, image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=500&h=500&fit=crop&q=80", category: "Office",
    description: "5-tier open bookshelf for books, decor and office storage. Sturdy and modern design.",
    specs: ["Material: Metal + Wood", "Shelves: 5", "Dimensions: 100x30x180cm", "Weight Capacity: 30kg per shelf"] },
  
  { id: 19, name: "Filing Cabinet", price: 239200, image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=500&h=500&fit=crop&q=80", category: "Office",
    description: "2-drawer filing cabinet for A4 and letter files. Lock included for security.",
    specs: ["Material: Metal", "Drawers: 2", "Dimensions: 40x50x70cm", "Lock: Yes"] },

  // DECOR & LIGHTING
  { id: 20, name: "Ceramic Table Lamp", price: 142400, image: "https://images.thdstatic.com/productImages/4ae423df-614e-4175-b7f4-034485d4378e/svn/jute-outdoor-rugs-hd-alh60169-6x9-fa_600.jpg", category: "Decor",
    description: "Handcrafted ceramic table lamp with linen shade. Creates warm ambient lighting.",
    specs: ["Material: Ceramic + Linen", "Height: 55cm", "Bulb: E27 Not Included", "Color: White"] },
  
  { id: 21, name: "Floor Lamp Modern", price: 191200, image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&h=500&fit=crop&q=80", category: "Decor",
    description: "Sleek modern floor lamp with adjustable arm. Perfect for reading corners.",
    specs: ["Material: Metal", "Height: 160cm", "Adjustable: Yes", "Bulb: E27 Not Included"] },
  
  { id: 22, name: "Wall Mirror Large", price: 239200, image: "https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?w=500&h=500&fit=crop&q=80", category: "Decor",
    description: "Large round wall mirror with thin black frame. Makes rooms look bigger and brighter.",
    specs: ["Material: Glass + Metal", "Diameter: 100cm", "Frame: Black", "Mounting: Wall Hanging"] },
  
  { id: 23, name: "Jute Area Rug 6x9", price: 318400, image: "https://images.unsplash.com/photo-1586108329946-18b4dc8b6e7a?w=500&h=500&fit=crop&q=80", category: "Decor",
    description: "Natural jute rug. Adds warmth and texture to any room. Handwoven and durable.",
    specs: ["Material: 100% Jute", "Size: 6ft x 9ft", "Color: Natural Beige", "Backing: Non-slip"] },
  
  { id: 24, name: "Plant Stand Wood", price: 79800, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&h=500&fit=crop&q=80", category: "Decor",
    description: "3-tier wooden plant stand to display your indoor plants beautifully.",
    specs: ["Material: Solid Wood", "Tiers: 3", "Dimensions: 60x30x80cm", "Finish: Natural"] },
  
  { id: 25, name: "Throw Pillow Set of 3", price: 47800, image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=500&h=500&fit=crop&q=80", category: "Decor",
    description: "Set of 3 decorative throw pillows with removable covers. Instantly refresh your sofa.",
    specs: ["Material: Cotton + Polyester", "Set: 3 Pillows", "Size: 45x45cm each", "Colors: Beige, Grey, Cream"] },

  // OUTDOOR
  { id: 26, name: "Patio Dining Set 4-Seater", price: 1118400, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=500&fit=crop&q=80", category: "Outdoor",
    description: "Weather-resistant 4-seater patio dining set. Perfect for gardens and balconies.",
    specs: ["Material: Rattan + Steel", "Seats: 4", "Table Size: 120x120x75cm", "Weatherproof: Yes"] },
  
  { id: 27, name: "Outdoor Lounge Chair", price: 398400, image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&h=500&fit=crop&q=80", category: "Outdoor",
    description: "Comfortable outdoor lounge chair with thick cushions. Relax in style.",
    specs: ["Material: Aluminum + Fabric", "Cushions: Included", "Dimensions: 70x80x90cm", "UV Resistant: Yes"] },
  
  { id: 28, name: "Garden Bench Teak", price: 478400, image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=500&h=500&fit=crop&q=80", category: "Outdoor",
    description: "Solid teak garden bench. Weather resistant and ages beautifully over time.",
    specs: ["Material: Solid Teak", "Seats: 2-3", "Dimensions: 130x60x85cm", "Finish: Natural Oil"] },

  // KITCHEN
  { id: 29, name: "Kitchen Island Cart", price: 558400, image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500&h=500&fit=crop&q=80", category: "Kitchen",
    description: "Mobile kitchen island cart with drawers and wine rack. Adds prep space and storage.",
    specs: ["Material: Wood + Metal", "Wheels: 4 Locking", "Dimensions: 120x60x90cm", "Features: 2 Drawers + Wine Rack"] },
  
  { id: 30, name: "Bar Cabinet", price: 798400, image: "https://images.unsplash.com/photo-1551298370-9d3d53740f9d?w=500&h=500&fit=crop&q=80", category: "Kitchen",
    description: "Stylish bar cabinet with glass doors and internal lighting. Perfect for entertaining.",
    specs: ["Material: Wood + Glass", "Doors: 2", "Dimensions: 100x40x180cm", "Features: LED Light + 3 Shelves"] },
  
  { id: 31, name: "Dining Bench", price: 318400, image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&h=500&fit=crop&q=80", category: "Kitchen",
    description: "Upholstered dining bench that seats 3. Great space saver for dining tables.",
    specs: ["Material: Fabric + Wood", "Seats: 3", "Dimensions: 140x40x45cm", "Color: Light Grey"] },
];
export default productsData;