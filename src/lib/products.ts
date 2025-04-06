export interface Product {
  id: string
  name: string
  category: string
  shortDesc: string
  description: string
  standard: string
  stock: number
  specifications: Record<string, string>
  contact: {
    name: string
    position: string
  }
}

// Mock data
const products: Product[] = [
  {
    id: "h-beam-steel",
    name: "H-Beam Steel",
    category: "besi-beton",
    shortDesc: "Standard: JIS G3101 SS400",
    description:
      "H-Beam Steel adalah produk baja struktural berbentuk H yang digunakan secara luas dalam konstruksi bangunan, jembatan, dan infrastruktur lainnya. Produk ini memiliki kekuatan tinggi dan tahan terhadap tekanan.",
    standard: "JIS G3101 SS400",
    stock: 120,
    specifications: {
      Length: "6 - 12 meters",
      Width: "100 - 400 mm",
      Thickness: "6 - 24 mm",
      Grade: "SS400",
      "Yield Strength": "≥ 245 N/mm²",
      "Tensile Strength": "400 - 510 N/mm²",
    },
    contact: {
      name: "Budi Santoso",
      position: "Marketing Manager",
    },
  },
  {
    id: "besi-beton-ulir",
    name: "Besi Beton Ulir",
    category: "besi-beton",
    shortDesc: "Diameter 10mm - 32mm",
    description: "Besi beton ulir berkualitas tinggi dengan kekuatan tarik optimal untuk konstruksi bangunan.",
    standard: "SNI 07-2052-2002",
    stock: 250,
    specifications: {
      Diameter: "10 - 32 mm",
      Length: "12 meters",
      Grade: "U-40",
      "Yield Strength": "≥ 400 N/mm²",
      "Tensile Strength": "480 - 600 N/mm²",
    },
    contact: {
      name: "Budi Santoso",
      position: "Marketing Manager",
    },
  },
  {
    id: "besi-beton-polos",
    name: "Besi Beton Polos",
    category: "besi-beton",
    shortDesc: "Diameter 6mm - 16mm",
    description: "Besi beton polos untuk kebutuhan konstruksi ringan dan penggunaan umum.",
    standard: "SNI 07-2052-2002",
    stock: 180,
    specifications: {
      Diameter: "6 - 16 mm",
      Length: "12 meters",
      Grade: "U-24",
      "Yield Strength": "≥ 240 N/mm²",
      "Tensile Strength": "380 - 480 N/mm²",
    },
    contact: {
      name: "Sarah Johnson",
      position: "Sales Representative",
    },
  },
  {
    id: "plat-baja-hitam",
    name: "Plat Baja Hitam",
    category: "plat-baja",
    shortDesc: "Ketebalan 1.2mm - 25mm",
    description: "Plat baja hitam untuk kebutuhan industri dan konstruksi dengan berbagai ketebalan.",
    standard: "JIS G3101 SS400",
    stock: 95,
    specifications: {
      Thickness: "1.2 - 25 mm",
      Width: "1220 - 1500 mm",
      Length: "2440 - 6000 mm",
      Grade: "SS400",
      Surface: "Black",
    },
    contact: {
      name: "Mike Chen",
      position: "Sales Representative",
    },
  },
  {
    id: "plat-baja-putih",
    name: "Plat Baja Putih",
    category: "plat-baja",
    shortDesc: "Ketebalan 0.2mm - 2.0mm",
    description: "Plat baja putih dengan lapisan galvanis untuk ketahanan terhadap korosi.",
    standard: "JIS G3302",
    stock: 120,
    specifications: {
      Thickness: "0.2 - 2.0 mm",
      Width: "1000 - 1219 mm",
      Length: "2000 - 2440 mm",
      Coating: "Zinc (Z)",
      Surface: "Galvanized",
    },
    contact: {
      name: "Sarah Johnson",
      position: "Sales Representative",
    },
  },
  {
    id: "pipa-baja-hitam",
    name: "Pipa Baja Hitam",
    category: "pipa-baja",
    shortDesc: "Diameter 1/2 inch - 8 inch",
    description: "Pipa baja hitam untuk berbagai aplikasi industri dan konstruksi.",
    standard: "SNI 0068:2013",
    stock: 150,
    specifications: {
      Diameter: "1/2 - 8 inch",
      Length: "6 meters",
      "Wall Thickness": "1.8 - 10.0 mm",
      Type: "Welded",
      Surface: "Black",
    },
    contact: {
      name: "Budi Santoso",
      position: "Marketing Manager",
    },
  },
  {
    id: "pipa-baja-galvanis",
    name: "Pipa Baja Galvanis",
    category: "pipa-baja",
    shortDesc: "Diameter 1/2 inch - 6 inch",
    description: "Pipa baja galvanis tahan karat untuk instalasi air dan gas.",
    standard: "SNI 0068:2013",
    stock: 85,
    specifications: {
      Diameter: "1/2 - 6 inch",
      Length: "6 meters",
      "Wall Thickness": "1.8 - 5.0 mm",
      Type: "Welded",
      Surface: "Galvanized",
    },
    contact: {
      name: "Mike Chen",
      position: "Sales Representative",
    },
  },
  {
    id: "baja-ringan-c75",
    name: "Baja Ringan C75",
    category: "baja-ringan",
    shortDesc: "Ketebalan 0.75mm",
    description: "Baja ringan profil C untuk rangka atap dengan ketahanan tinggi.",
    standard: "SNI 7971:2013",
    stock: 200,
    specifications: {
      Profile: "C75",
      Thickness: "0.75 mm",
      Width: "75 mm",
      Length: "6 meters",
      Coating: "AZ100",
    },
    contact: {
      name: "Sarah Johnson",
      position: "Sales Representative",
    },
  },
]

export async function getAllProducts(): Promise<Product[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return products
}

export async function getProductById(id: string): Promise<Product | undefined> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return products.find((product) => product.id === id)
}

export async function getRelatedProducts(category: string): Promise<Product[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return products.filter((product) => product.category === category).slice(0, 3)
}

