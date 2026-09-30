/**
 * Crestline Developers — Site Data
 * All content is hardcoded as JSON / JS objects (no database).
 * Replace EmailJS keys and contact details before going live.
 */

const SITE = {
  name: "Crestline Developers",
  tagline: "Crafting Landmark Spaces",
  description:
    "Premium construction and real estate development company delivering luxury residential, commercial, and turnkey projects with unmatched craftsmanship.",
  phone: "+91 98765 43210",
  phoneRaw: "919876543210",
  email: "enquiry@crestlinedevelopers.com",
  address: "12th Floor, Prestige Towers, MG Road, Bengaluru, Karnataka 560001",
  whatsappMessage:
    "Hello, I visited your website and would like information regarding your construction services.",
  brochureUrl: "#",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.969!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1700000000000",
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    youtube: "https://youtube.com/",
    twitter: "https://x.com/",
  },
  emailjs: {
    publicKey: "YOUR_EMAILJS_PUBLIC_KEY",
    serviceId: "YOUR_EMAILJS_SERVICE_ID",
    templateId: "YOUR_EMAILJS_TEMPLATE_ID",
  },
  stats: {
    projectsCompleted: 180,
    ongoingProjects: 24,
    happyClients: 320,
    yearsExperience: 18,
  },
};

const NAV_LINKS = [
  { label: "Home", href: "index.html" },
  { label: "About", href: "about.html" },
  { label: "Projects", href: "projects.html" },
  { label: "Services", href: "services.html" },
  { label: "Gallery", href: "gallery.html" },
  { label: "Blog", href: "blog.html" },
  { label: "Testimonials", href: "testimonials.html" },
  { label: "Contact", href: "contact.html" },
];

const HERO_SLIDES = [
  {
    title: "Building Tomorrow's Landmarks",
    subtitle: "Luxury residences & commercial spaces engineered for lasting value.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80",
    cta: { label: "Explore Projects", href: "projects.html" },
  },
  {
    title: "Craftsmanship Meets Precision",
    subtitle: "From blueprint to handover — excellence at every stage.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80",
    cta: { label: "Our Services", href: "services.html" },
  },
  {
    title: "Trusted by Discerning Clients",
    subtitle: "18+ years delivering premium developments across India.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80",
    cta: { label: "Get a Quote", href: "contact.html" },
  },
];

const WHY_CHOOSE = [
  {
    icon: "bi-award",
    title: "Award-Winning Quality",
    text: "Nationally recognized for design excellence and on-time delivery.",
  },
  {
    icon: "bi-shield-check",
    title: "Transparent Process",
    text: "Clear milestones, documented progress, and honest communication.",
  },
  {
    icon: "bi-gem",
    title: "Premium Materials",
    text: "Curated suppliers and rigorous quality checks on every batch.",
  },
  {
    icon: "bi-people",
    title: "Expert Team",
    text: "Architects, engineers, and project managers with deep domain expertise.",
  },
];

const PROJECTS = [
  {
    id: "skyline-residences",
    name: "Skyline Residences",
    location: "Whitefield, Bengaluru",
    status: "Completed",
    type: "Residential",
    category: "Apartments",
    completionDate: "March 2025",
    progress: 100,
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "A landmark luxury apartment community featuring sky lounges, landscaped courtyards, and smart-home ready residences designed for modern urban living.",
    features: [
      "3 & 4 BHK Luxury Apartments",
      "Smart Home Integration",
      "Rooftop Infinity Pool",
      "EV Charging Stations",
      "24/7 Concierge",
    ],
    amenities: ["Clubhouse", "Gym", "Kids Play Area", "Landscaped Gardens", "Security"],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.75!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzEyLjAiTiA3N8KwNDUnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000001",
    featured: true,
    beforeImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "orion-business-park",
    name: "Orion Business Park",
    location: "Cyber City, Hyderabad",
    status: "Ongoing",
    type: "Commercial",
    category: "Commercial",
    completionDate: "December 2026",
    progress: 62,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Grade-A commercial campus with flexible floor plates, LEED-ready systems, and premium lobby experiences for enterprise tenants.",
    features: [
      "LEED Gold Target",
      "Flexible Floor Plates",
      "High-Speed Elevators",
      "Conference Suites",
      "Retail Podium",
    ],
    amenities: ["Food Court", "Parking", "Meeting Rooms", "Green Terraces"],
    mapEmbed: SITE.mapEmbed,
    featured: true,
    beforeImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "villa-sereno",
    name: "Villa Sereno",
    location: "ECR, Chennai",
    status: "Completed",
    type: "Residential",
    category: "Villas",
    completionDate: "August 2024",
    progress: 100,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Exclusive gated villa community blending contemporary architecture with coastal living — private gardens, double-height living rooms, and infinity-edge pools.",
    features: [
      "4 & 5 Bedroom Villas",
      "Private Pools",
      "Smart Security",
      "Italian Marble Finishes",
      "Home Theatre Ready",
    ],
    amenities: ["Clubhouse", "Tennis Court", "Spa", "Walking Trails"],
    mapEmbed: SITE.mapEmbed,
    featured: true,
    beforeImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "harbor-heights",
    name: "Harbor Heights",
    location: "Marine Drive, Mumbai",
    status: "Ongoing",
    type: "Residential",
    category: "Apartments",
    completionDate: "June 2027",
    progress: 38,
    image:
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Sea-facing luxury towers with panoramic views, boutique amenities, and world-class interiors curated for Mumbai's elite.",
    features: ["Sea View Residences", "Sky Deck", "Concierge", "Valet Parking"],
    amenities: ["Infinity Pool", "Fine Dining Lounge", "Spa", "Cinema"],
    mapEmbed: SITE.mapEmbed,
    featured: false,
  },
  {
    id: "apex-tower",
    name: "Apex Corporate Tower",
    location: "GIFT City, Gujarat",
    status: "Ongoing",
    type: "Commercial",
    category: "Commercial",
    completionDate: "March 2027",
    progress: 45,
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Iconic commercial tower designed for fintech and global enterprises with cutting-edge infrastructure.",
    features: ["Column-Free Floors", "Data Center Ready", "Helipad Ready Structure"],
    amenities: ["Executive Lounge", "Auditorium", "Cafeteria"],
    mapEmbed: SITE.mapEmbed,
    featured: true,
  },
  {
    id: "gardenia-estates",
    name: "Gardenia Estates",
    location: "Baner, Pune",
    status: "Completed",
    type: "Residential",
    category: "Villas",
    completionDate: "January 2024",
    progress: 100,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Boutique villa enclave surrounded by greens — sustainable design, solar-ready roofs, and artisan interiors.",
    features: ["Net-Zero Ready", "Private Gardens", "Solar Integration"],
    amenities: ["Community Pavilion", "Yoga Deck", "Organic Garden"],
    mapEmbed: SITE.mapEmbed,
    featured: false,
  },
  {
    id: "metro-plaza",
    name: "Metro Plaza",
    location: "Connaught Place, Delhi",
    status: "Completed",
    type: "Commercial",
    category: "Commercial",
    completionDate: "November 2023",
    progress: 100,
    image:
      "https://images.unsplash.com/photo-1554435493-93422e8220c8?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1554435493-93422e8220c8?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Mixed-use retail and office plaza revitalizing a historic corridor with contemporary glass architecture.",
    features: ["Retail Podium", "Office Suites", "Public Plaza"],
    amenities: ["Parking", "Food Court", "Event Space"],
    mapEmbed: SITE.mapEmbed,
    featured: false,
  },
  {
    id: "lakeview-apartments",
    name: "Lakeview Apartments",
    location: "Hebbal, Bengaluru",
    status: "Ongoing",
    type: "Residential",
    category: "Apartments",
    completionDate: "September 2026",
    progress: 55,
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Lake-facing apartments with biophilic design, wellness amenities, and family-centric community spaces.",
    features: ["Lake Views", "Wellness Floor", "Co-Working Pods"],
    amenities: ["Pool", "Library", "Jogging Track"],
    mapEmbed: SITE.mapEmbed,
    featured: false,
  },
];

const SERVICES = [
  {
    id: "residential",
    icon: "bi-house-heart",
    title: "Residential Construction",
    text: "End-to-end construction of premium apartments and gated communities with refined finishes.",
  },
  {
    id: "commercial",
    icon: "bi-building",
    title: "Commercial Buildings",
    text: "Grade-A offices, retail, and mixed-use developments built for performance and prestige.",
  },
  {
    id: "villas",
    icon: "bi-houses",
    title: "Villas",
    text: "Bespoke villa estates with architectural distinction and lifestyle amenities.",
  },
  {
    id: "interior",
    icon: "bi-lamp",
    title: "Interior Works",
    text: "Luxury interiors, custom joinery, and curated material palettes for every space.",
  },
  {
    id: "renovation",
    icon: "bi-tools",
    title: "Renovations",
    text: "Transform existing properties with structural upgrades and contemporary redesign.",
  },
  {
    id: "architecture",
    icon: "bi-rulers",
    title: "Architecture Planning",
    text: "Concept-to-drawing services balancing aesthetics, codes, and constructability.",
  },
  {
    id: "management",
    icon: "bi-kanban",
    title: "Project Management",
    text: "Dedicated PMs ensuring schedules, budgets, and quality stay firmly on track.",
  },
  {
    id: "turnkey",
    icon: "bi-key",
    title: "Turnkey Solutions",
    text: "Single-point accountability from design and permits through final handover.",
  },
];

const TESTIMONIALS = [
  {
    name: "Ananya Mehta",
    role: "Homeowner, Skyline Residences",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    feedback:
      "Crestline delivered our dream home on schedule. The attention to detail in finishes and communication throughout was exceptional.",
    rating: 5,
  },
  {
    name: "Rahul Kapoor",
    role: "CEO, Kapoor Ventures",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
    feedback:
      "Our commercial campus was handed over with zero snags. Their project management discipline is unmatched in the industry.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "Villa Owner, Sereno",
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
    feedback:
      "From concept sketches to the final walkthrough, every interaction felt premium. Truly a luxury construction partner.",
    rating: 5,
  },
  {
    name: "Vikram Shah",
    role: "Investor, Metro Plaza",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    feedback:
      "Transparent reporting and quality craftsmanship made Crestline our go-to developer for future investments.",
    rating: 4,
  },
  {
    name: "Sneha Reddy",
    role: "Interior Client",
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
    feedback:
      "Their interior team transformed our penthouse into a magazine-worthy space. Highly recommended.",
    rating: 5,
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Brief",
    text: "Understand goals, site constraints, budget, and lifestyle aspirations.",
  },
  {
    step: "02",
    title: "Design & Planning",
    text: "Architecture, structural design, and approvals aligned to your vision.",
  },
  {
    step: "03",
    title: "Construction",
    text: "Precision execution with milestone tracking and quality audits.",
  },
  {
    step: "04",
    title: "Finishing & Handover",
    text: "Snag-free delivery, documentation, and after-sales support.",
  },
];

const CERTIFICATIONS = [
  { name: "ISO 9001:2015", icon: "bi-patch-check" },
  { name: "IGBC Member", icon: "bi-tree" },
  { name: "CREDAI Affiliate", icon: "bi-building-check" },
  { name: "Safety Excellence", icon: "bi-shield-fill-check" },
];

const PARTNERS = [
  { name: "UltraTech", initials: "UT" },
  { name: "Asian Paints", initials: "AP" },
  { name: "Jaquar", initials: "JQ" },
  { name: "Schneider", initials: "SC" },
  { name: "Havells", initials: "HV" },
  { name: "Kohler", initials: "KH" },
];

const TEAM = [
  {
    name: "Arjun Malhotra",
    role: "Founder & Managing Director",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    bio: "18+ years shaping landmark developments across India.",
  },
  {
    name: "Dr. Meera Iyer",
    role: "Chief Architect",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    bio: "Award-winning architect specializing in sustainable luxury.",
  },
  {
    name: "Karan Desai",
    role: "Head of Construction",
    photo:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    bio: "Operations leader with a flawless on-time delivery record.",
  },
  {
    name: "Neha Banerjee",
    role: "Client Experience Lead",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    bio: "Ensuring every client journey feels seamless and premium.",
  },
];

const JOURNEY = [
  { year: "2007", title: "Foundation", text: "Crestline Developers established in Bengaluru." },
  { year: "2012", title: "First Landmark", text: "Delivered our first 200+ unit residential community." },
  { year: "2016", title: "National Expansion", text: "Projects launched in Hyderabad, Chennai & Pune." },
  { year: "2020", title: "Sustainability Push", text: "Adopted IGBC standards across all new developments." },
  { year: "2024", title: "180+ Projects", text: "Crossed 180 completed projects with 320+ happy clients." },
];

const VALUES = [
  { icon: "bi-brightness-high", title: "Integrity", text: "Honest timelines, transparent pricing, no shortcuts." },
  { icon: "bi-stars", title: "Excellence", text: "Craftsmanship that stands the test of time." },
  { icon: "bi-heart", title: "Client First", text: "Every decision begins with the end user's experience." },
  { icon: "bi-recycle", title: "Sustainability", text: "Responsible materials and energy-efficient design." },
];

const AWARDS = [
  { year: "2024", title: "Best Luxury Developer — South India", org: "Realty Awards" },
  { year: "2023", title: "Excellence in Project Delivery", org: "CREDAI" },
  { year: "2022", title: "Green Building Champion", org: "IGBC" },
  { year: "2021", title: "Customer Choice Award", org: "Times Realty" },
];

const GALLERY_ITEMS = [
  {
    id: 1,
    type: "construction",
    title: "Foundation Works",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    type: "construction",
    title: "Structural Frame",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    type: "team",
    title: "Site Leadership",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    type: "team",
    title: "Design Review",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 5,
    type: "finished",
    title: "Luxury Lobby",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 6,
    type: "finished",
    title: "Completed Villa",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 7,
    type: "finished",
    title: "Modern Tower",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 8,
    type: "construction",
    title: "Crane Operations",
    image:
      "https://images.unsplash.com/photo-1590644365607-1c5aefdd3397?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 9,
    type: "video",
    title: "Project Walkthrough",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 10,
    type: "finished",
    title: "Penthouse Interior",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 11,
    type: "team",
    title: "Client Handover",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 12,
    type: "video",
    title: "Construction Timelapse",
    image:
      "https://images.unsplash.com/photo-1581094794329-adeeebd3b234?auto=format&fit=crop&w=1000&q=80",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

const BLOG_POSTS = [
  {
    id: "construction-tips-2025",
    title: "10 Construction Tips for First-Time Home Builders",
    category: "Construction Tips",
    date: "January 12, 2026",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
    excerpt:
      "Essential guidance on budgeting, material selection, and contractor coordination before you break ground.",
    content:
      "Building your first home is exciting — and complex. Start with a clear brief, validate soil reports, lock material specifications early, and insist on weekly progress reviews. Partner with a developer who provides transparent milestones and documented quality checks at every stage.",
  },
  {
    id: "home-design-trends",
    title: "Home Design Trends Defining Luxury Living",
    category: "Home Design",
    date: "February 3, 2026",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
    excerpt:
      "Biophilic interiors, smart automation, and flexible open plans are reshaping premium residences.",
    content:
      "Today's luxury homes prioritize natural light, indoor-outdoor continuity, and wellness spaces. Expect integrated automation, muted material palettes, and dedicated work-from-home suites designed for longevity rather than trends.",
  },
  {
    id: "building-planning-guide",
    title: "A Practical Guide to Building Planning Approvals",
    category: "Building Planning",
    date: "March 1, 2026",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
    excerpt:
      "Navigate municipal approvals, setbacks, and FAR rules with a clear planning checklist.",
    content:
      "Successful projects begin with compliant drawings. Understand local bye-laws, engage a licensed architect early, and maintain a document trail for every submission. Crestline manages this end-to-end so clients stay focused on design decisions.",
  },
  {
    id: "sustainable-materials",
    title: "Choosing Sustainable Materials Without Compromising Luxury",
    category: "Construction Tips",
    date: "March 18, 2026",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=80",
    excerpt:
      "How to balance eco-conscious choices with the look and feel of premium finishes.",
    content:
      "From low-VOC paints to responsibly sourced stone and high-performance glazing, sustainable luxury is achievable. We curate supplier partners who meet both aesthetic and environmental standards.",
  },
  {
    id: "open-plan-living",
    title: "Planning Open-Plan Living for Indian Homes",
    category: "Home Design",
    date: "April 2, 2026",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80",
    excerpt:
      "Zoning kitchens, living, and dining without losing warmth or privacy.",
    content:
      "Open plans work best when acoustics, ventilation, and cultural cooking needs are respected. Use material transitions and partial partitions to define zones while keeping visual flow.",
  },
  {
    id: "cost-control",
    title: "Cost Control Strategies During Construction",
    category: "Building Planning",
    date: "April 20, 2026",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=80",
    excerpt:
      "Proven methods to keep budgets predictable from excavation to finishing.",
    content:
      "Lock BOQs early, manage change orders formally, and schedule material procurement against market cycles. Our clients receive live cost dashboards throughout the build.",
  },
];

const FAQS = [
  {
    q: "How long does a typical residential project take?",
    a: "Timelines vary by scale. A luxury villa typically takes 12–18 months; mid-rise apartments may take 24–36 months from groundbreaking to handover.",
  },
  {
    q: "Do you offer turnkey solutions?",
    a: "Yes. Our turnkey package covers design, approvals, construction, interiors, and final handover under a single accountable team.",
  },
  {
    q: "Can I customize floor plans and finishes?",
    a: "Absolutely. We offer design consultations and curated finish packages so every home reflects your lifestyle.",
  },
  {
    q: "How do you ensure construction quality?",
    a: "We follow ISO processes, third-party audits, and stage-wise quality checklists with photo documentation shared with clients.",
  },
  {
    q: "Is financing assistance available?",
    a: "We partner with leading banks and NBFCs. Our team can connect you with preferred home-loan partners.",
  },
];

const COST_ESTIMATOR = {
  types: [
    { id: "apartment", label: "Apartment", ratePerSqft: 2800 },
    { id: "villa", label: "Villa", ratePerSqft: 3500 },
    { id: "commercial", label: "Commercial", ratePerSqft: 3200 },
    { id: "interior", label: "Interior Fit-out", ratePerSqft: 1800 },
  ],
  finishes: [
    { id: "standard", label: "Standard", multiplier: 1 },
    { id: "premium", label: "Premium", multiplier: 1.25 },
    { id: "luxury", label: "Luxury", multiplier: 1.55 },
  ],
};

const INQUIRY_TYPES = [
  "General Enquiry",
  "Residential Construction",
  "Commercial Project",
  "Villa Construction",
  "Interior Works",
  "Renovation",
  "Turnkey Solution",
  "Other",
];
