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
    "5 Ton to 75 Ton Mechanical Power Press",
    "MIG Welding",
    "TIG AC/DC Welding",
    "Arc Welding",
    "Shearing Machine",
    "Metal Box Bending",
    "Spray Painting",
    "Drill Machines"
  ],
  facilities: [
    { label: "Mechanical Power Press", value: "5T, 10T, 20T, 30T, 50T, 75T", count: "10 machines" },
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
    { label: "Power Press Capacity", value: 75, suffix: " Ton" },
    { label: "Press Machines", value: 10, suffix: "+" },
    { label: "Welding Machines", value: 9, suffix: "" },
    { label: "Material Grades", value: 3, suffix: "+" }
  ]
};

const asset = (name) => `/assets/company/${name}`;

export const heroSlides = [
  { title: "Power Press Manufacturing", subtitle: "From 5 Ton to 75 Ton mechanical press machines.", image: asset("cmp1.jpeg") },
  { title: "Industrial Fabrication Floor", subtitle: "Custom fabrication across MS, SS and aluminium.", image: asset("cmp.jpeg") },
  { title: "Welding & Assembly Capability", subtitle: "MIG, TIG AC/DC and Arc welding for reliable assemblies.", image: asset("cmp2.jpeg") }
];

export const services = [
  { title: "Sheet Metal Press Components", description: "Precision press components manufactured on 5 Ton to 75 Ton mechanical power press machines.", image: asset("page-11-image-08-ba259a2ebe.jpg"), icon: "Cog" },
  { title: "Sheet Metal Fabrication", description: "Versatile fabrication for metal sheets, pipes and bars in MS, SS and aluminium.", image: asset("page-12-image-08-738c8112f2.jpg"), icon: "Factory" },
  { title: "MIG Welding", description: "CO2 MIG welding setup for durable industrial fabrication and assemblies.", image: asset("mig-machine.jpeg"), icon: "Flame" },
  { title: "TIG Welding", description: "Argon TIG AC/DC welding for stainless steel and precision fabrication work.", image: asset("Tig-machine.jpeg"), icon: "Zap" },
  { title: "Arc Welding", description: "Arc welding capability for robust structures, brackets and production fixtures.", image: asset("Arc-machine.jpeg"), icon: "Wrench" },
  { title: "SS Fabrication", description: "Stainless steel brackets, tables, buckets and custom SS fabricated products.", image: asset("page-16-image-09-6ab177caea.jpg"), icon: "ShieldCheck" },
  { title: "Industrial Fabrication", description: "Channel structures, conveyor brackets, gratings, elevator boxes and industrial assemblies.", image: asset("page-15-image-09-2b52e26f7d.jpg"), icon: "Blocks" },
  { title: "Custom Manufacturing", description: "Requirement-led metal manufacturing with bending, shearing, drilling and spray painting support.", image: asset("page-14-image-08-de50569bab.jpg"), icon: "Settings2" }
];

export const infrastructure = [
  { title: "Factory Exterior", tag: "Factory", image: asset("page-04-image-08-f1ef75a0f4.jpg") },
  { title: "Manufacturing Shed", tag: "Factory", image: asset("page-04-image-09-60a916d85e.jpg") },
  { title: "Shop Building", tag: "Factory", image: asset("page-04-image-10-654db65ae0.jpg") },
  { title: "Press Shop", tag: "Press Shop", image: asset("cmp1.jpeg") },
  { title: "Shearing Machine", tag: "Machines", image: asset("page-07-image-08-fd2c655084.jpg") },
  { title: "Metal Box Bending", tag: "Machines", image: asset("box.jpeg") },
  { title: "Bending Machine", tag: "3Meter x 3mm", image: asset("comp4.jpeg") },
  { title: "MIG Welding Setup", tag: "Welding", image: asset("page-08-image-08-e879f77892.jpg") },
  { title: "TIG AC/DC Welding", tag: "Welding", image: asset("page-09-image-08-573194056a.jpg") },
  { title: "Arc Welding Setup", tag: "Welding", image: asset("page-10-image-09-540b0c5c7b.jpg") }
];

export const products = [
  { title: "Pressed Metal Clips", category: "Sheet Metal Components", image: asset("part.jpeg") },
  { title: "Sheet Metal Press Component", category: "Sheet Metal Components", image: asset("page-11-image-08-ba259a2ebe.jpg") },
  { title: "Paint Mixer / Stirrer", category: "Stirrers", image: asset("page-12-image-08-738c8112f2.jpg") },
  { title: "Fabrication Stirrer", category: "Stirrers", image: asset("page-13-image-09-f1169b9871.jpg") },
  { title: "Industrial Grating", category: "Gratings", image: asset("page-13-image-08-a9623e63d0.jpg") },
  { title: "Elevator Box", category: "Elevator Boxes", image: asset("page-14-image-08-de50569bab.jpg") },
  { title: "Rake Fabrication", category: "Fabrication Products", image: asset("page-14-image-09-a4d0c0eaab.jpg") },
  { title: "Conveyor Bracket", category: "Conveyor Brackets", image: asset("page-14-image-10-639e8d8ff0.jpg") },
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
