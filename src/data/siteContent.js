export const contact = {
  company: "ANSH INDUSTRIES",
  owner: "Amar Awati",
  phones: ["98344 06900", "97678 62341"],
  email: "anshindustries90@gmail.com",
  gstin: "27CEGPA5020L1ZQ",
  address: "Gat No. 201/6, 16C, Near Rajkumar Unit 2, Bapukaka Nagar, MIDC Kupwad Block, Sangli MH 416 436",
  whatsapp: "919834406900",
  mapQuery: "Gat No. 201/6 16C Bapukaka Nagar MIDC Kupwad Sangli Maharashtra 416436"
};

export const profile = {
  name: "ANSH INDUSTRIES",
  type: "Sheet Metal Press Components & Sheet Metal Fabrication",
  headline: "Precision Sheet Metal Manufacturing Solutions",
  intro:
    "ANSH INDUSTRIES provides superior quality sheet metal press components and sheet metal fabrication services from Sangli MIDC. The shop supports press work, fabrication, welding, bending, shearing, drilling, spray painting and custom metal manufacturing across MS, SS and aluminium.",
  vision:
    "At Ansh Industries, our vision is to be a leading provider of superior quality sheet metal press component and sheet metal fabrication services, recognized for our commitment to precision, innovation, and excellence. We aspire to foster long-term partnerships with our clients by consistently delivering exceptional solutions that meet and exceed their expectations.",
  mission: [
    "Deliver high-quality sheet metal fabrication services that meet and exceed customer expectations.",
    "Continuously incorporate advanced technologies and innovative techniques to enhance products and services.",
    "Prioritize customer satisfaction with reliable, timely, and efficient solutions tailored to specific needs.",
    "Implement environmentally responsible practices and promote a professional, safe working environment.",
    "Invest in the development and well-being of the team so they are equipped to excel."
  ],
  materials: ["MS", "SS", "Aluminium"],
  capabilities: [
    "5 Ton to 110 Ton Mechanical Power Press",
    "MIG Welding",
    "TIG AC/DC Welding",
    "Arc Welding",
    "Shearing Machine",
    "Metal Box Bending",
    "Spray Painting",
    "Drill Machines"
  ],
  facilities: [
    { label: "Mechanical Power Press", value: "5T, 10T, 20T, 30T, 50T, 75T, 110T", count: "11 machines" },
    { label: "Fly Press Machines", value: "Manual forming support", count: "2 machines" },
    { label: "Sheet Shearing Machine", value: "1270 x 2mm", count: "1 machine" },
    { label: "MIG (CO2) Welding", value: "Fabrication welding", count: "4 machines" },
    { label: "TIG (Argon) AC/DC", value: "SS and precision work", count: "1 machine" },
    { label: "Arc Welding", value: "Industrial fabrication", count: "4 machines" },
    { label: "Metal Box Bending", value: "Box and enclosure bending", count: "1 machine" },
    { label: "Drill Machines", value: "Hole making and finishing", count: "2 machines" },
    { label: "Spray Painting", value: "Surface finishing", count: "1 setup" }
  ],
  stats: [
    { label: "Power Press Capacity", value: 110, suffix: " Ton" },
    { label: "Press Machines", value: 11, suffix: "+" },
    { label: "Welding Machines", value: 9, suffix: "" },
    { label: "Material Grades", value: 3, suffix: "+" }
  ]
};

const asset = (name) => `/assets/company/${name}`;

export const heroSlides = [
  { title: "Power Press Manufacturing", subtitle: "From 5 Ton to 110 Ton mechanical press machines.", image: asset("cmp1.jpeg") },
  { title: "Industrial Fabrication Floor", subtitle: "Custom fabrication across MS, SS and aluminium.", image: asset("cmp.jpeg") },
  { title: "Welding & Assembly Capability", subtitle: "MIG, TIG AC/DC and Arc welding for reliable assemblies.", image: asset("cmp2.jpeg") }
];

export const services = [
  { title: "Sheet Metal Press Components", description: "Precision press components manufactured on 5 Ton to 110 Ton mechanical power press machines.", image: asset("Press1.png"), icon: "Cog" },
  { title: "Sheet Metal Fabrication", description: "Versatile fabrication for metal sheets, pipes and bars in MS, SS and aluminium.", image: asset("page-12-image-08-738c8112f2.jpg"), icon: "Factory" },
  { title: "MIG Welding", description: "CO2 MIG welding setup for durable industrial fabrication and assemblies.", image: asset("mig.png"), icon: "Flame" },
  { title: "TIG Welding", description: "Argon TIG AC/DC welding for stainless steel and precision fabrication work.", image: asset("tig.png"), icon: "Zap" },
  { title: "Arc Welding", description: "Arc welding capability for robust structures, brackets and production fixtures.", image: asset("arc.png"), icon: "Wrench" },
  { title: "SS Fabrication", description: "Stainless steel brackets, tables, buckets and custom SS fabricated products.", image: asset("ss.jpeg"), icon: "ShieldCheck" },
  { title: "Industrial Fabrication", description: "Channel structures, conveyor brackets, gratings, elevator boxes and industrial assemblies.", image: asset("industrial.jpeg"), icon: "Blocks" },
  { title: "Custom Manufacturing", description: "Requirement-led metal manufacturing with bending, shearing, drilling and spray painting support.", image: asset("custome.jpeg"), icon: "Settings2" }
];

export const infrastructure = [
  { title: "Factory Exterior", tag: "Factory", image: asset("page-04-image-08-f1ef75a0f4.jpg") },
  { title: "Manufacturing Shed", tag: "Factory", image: asset("page-04-image-09-60a916d85e.jpg") },
  { title: "Shop Building", tag: "Factory", image: asset("page-04-image-10-654db65ae0.jpg") },
  { title: "Press Shop", tag: "Press Shop", image: asset("cmp1.jpeg") },
  { title: "Shearing Machine", tag: "Machines", image: asset("Shearing.png") },
  { title: "Metal Box Bending", tag: "Machines", image: asset("box.jpeg") },
  { title: "Bending Machine", tag: "3Meter x 3mm", image: asset("comp4.PNG") },
  { title: "MIG Welding Setup", tag: "Welding", image: asset("mig.png") },
  { title: "TIG AC/DC Welding", tag: "Welding", image: asset("tig.png") },
  { title: "Arc Welding Setup", tag: "Welding", image: asset("arc.png") },
  { title: "110 Ton Mechanical Power Press", tag: "Machines", image: asset("press110.jpg") }
];

export const products = [
  { title: "Pressed Metal Clips", category: "Sheet Metal Components", image: asset("part.jpeg") },
  { title: "Sheet Metal Press Component", category: "Sheet Metal Components", image: asset("Press1.png") },
  { title: "Paint Mixer / Stirrer", category: "Stirrers", image: asset("page-12-image-08-738c8112f2.jpg") },
  { title: "Fabrication Stirrer", category: "Stirrers", image: asset("Fabrication.png") },
  { title: "Industrial Grating", category: "Gratings", image: asset("Grating.png") },
  { title: "Elevator Box", category: "Elevator Boxes", image: asset("Elevator.png") },
  { title: "Rake Fabrication", category: "Fabrication Products", image: asset("Rake.png") },
  { title: "Conveyor Bracket", category: "Conveyor Brackets", image: asset("Conveyor.png") },
  { title: "Channel Structure", category: "Industrial Structures", image: asset("page-15-image-09-2b52e26f7d.jpg") },
  { title: "SS Bracket", category: "SS Fabrication", image: asset("page-16-image-08-3cb0261462.jpg") },
  { title: "SS Table", category: "SS Fabrication", image: asset("page-16-image-09-6ab177caea.jpg") },
  { title: "SS Bucket", category: "SS Fabrication", image: asset("page-16-image-10-141025917a.jpg") }
];

export const industries = ["Automotive", "Machine Building", "Material Handling", "Industrial Plants", "Fabrication Contractors", "OEM Components"];

export const testimonials = [
  { quote: "Reliable fabrication support with practical shop-floor understanding and consistent finishing.", name: "Industrial Buyer", role: "Fabrication Requirement" },
  { quote: "Good capability mix for press components, welding and custom metal assemblies under one roof.", name: "OEM Partner", role: "Sheet Metal Components" }
];
export const measuringInstruments = [
  { name: "Digital Vernier (Mitutoyo)", range: "0-200 mm" },
  { name: "Digital Vernier (Baker)", range: "0-300 mm" },
  { name: "Digital Vernier (Baker)", range: "0-150 mm" },
  { name: "Simple Vernier (Mitutoyo)", range: "0-300 mm" },
  { name: "Micrometer", range: "0-25 mm" },
  { name: "Micrometer", range: "25-50 mm" },
  { name: "Digital Height Gauge (Baker)", range: "0-300 mm" },
  { name: "Surface Plate", range: "400 x 400 mm" },
  { name: "Radius Gauge", range: "1.0 - 7.0 mm" },
  { name: "Radius Gauge", range: "7.0 - 15.0 mm" },
  { name: "Degree Protector", range: "0-180°" },
  { name: "Filler Gauge", range: "0.01 - 0.1 mm" },
  { name: "Magnetic V Block", range: '6"' }
];
export const valuedCustomers = [
  "Rajkumar Industries, Kupwad",
  "Samruddhi Building Systems, Sangli",
  "KPT, Jaysingpur",
  "Pyrox, Bangalore",
  "Utkarsh Fab Tech",
  "Yash Associates, Kupwad",
  "Tatya Chain Industries, Sangli",
  "Satyam Engg, Shirdon",
  "Om Shree Engg, Kupwad",
  "Eibenstock Positron, Tardal"
  "SK Industries"
  "Akshay Industries"
];
export const futurePlans = [
  {
    title: "500 Ton Press Machine",
    description: "Expansion of press shop capacity up to 500 Ton for heavy-duty sheet metal components."
  },
  {
    title: "3 kW Fiber Laser Cutting Machine",
    description: "High precision laser cutting capability for complex sheet metal profiles and faster production."
  },
  {
    title: "CNC Bending Machine",
    description: "Bending capacity up to 6 mm thickness × 3000 mm length for accurate and repeatable fabrication."
  }
];
