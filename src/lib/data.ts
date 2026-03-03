export interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  descripcionCorta: string;
  precio: number;
  colores: string[];
  tallas: string[];
  imagen: string;
}

export const productos: Producto[] = [
  {
    id: 1,
    nombre: "Camiseta Oversize Beige",
    categoria: "Camisetas",
    descripcionCorta:
      "Camiseta oversize de algodón premium con caída natural y máxima comodidad para looks urbanos minimalistas.",
    precio: 39.9,
    colores: ["Beige", "Negro", "Blanco"],
    tallas: ["S", "M", "L", "XL"],
    imagen: "/images/camiseta-oversize-beige.png",
  },
  {
    id: 2,
    nombre: "Hoodie Urbano Negro",
    categoria: "Hoodies",
    descripcionCorta:
      "Hoodie urbano con interior afelpado, ideal para clima fresco y outfits streetwear modernos.",
    precio: 79.9,
    colores: ["Negro", "Gris"],
    tallas: ["M", "L", "XL"],
    imagen: "/images/hoodie-urbano-negro.png",
  },
  {
    id: 3,
    nombre: "Chaqueta Denim Classic",
    categoria: "Chaquetas",
    descripcionCorta:
      "Chaqueta denim clásica con acabado premium y costuras reforzadas para un estilo atemporal.",
    precio: 119.9,
    colores: ["Azul claro", "Azul oscuro"],
    tallas: ["S", "M", "L"],
    imagen: "/images/chaqueta-denim.png",
  },
  {
    id: 4,
    nombre: "Polo Basic Blanco",
    categoria: "Polos",
    descripcionCorta:
      "Polo clásico slim fit con acabado suave y estructura ligera para uso diario.",
    precio: 49.9,
    colores: ["Blanco", "Negro", "Azul marino"],
    tallas: ["S", "M", "L", "XL"],
    imagen: "/images/polo-basic-blanco.png",
  },
  {
    id: 5,
    nombre: "Jogger Urbano Gris",
    categoria: "Pantalones",
    descripcionCorta:
      "Jogger moderno con ajuste tapered y tela flexible para máxima comodidad.",
    precio: 69.9,
    colores: ["Gris", "Negro"],
    tallas: ["S", "M", "L", "XL"],
    imagen: "/images/jogger-urbano-gris.png",
  },
  {
    id: 6,
    nombre: "Camisa Lino Beige",
    categoria: "Camisas",
    descripcionCorta:
      "Camisa de lino transpirable con caída natural, ideal para climas cálidos.",
    precio: 89.9,
    colores: ["Beige", "Blanco"],
    tallas: ["S", "M", "L"],
    imagen: "/images/camisa-lino-beige.png",
  },
  {
    id: 7,
    nombre: "Chaqueta Bomber Negra",
    categoria: "Chaquetas",
    descripcionCorta:
      "Bomber moderna con diseño minimalista y acabado estructurado.",
    precio: 129.9,
    colores: ["Negro", "Verde oliva"],
    tallas: ["M", "L", "XL"],
    imagen: "/images/chaqueta-bomber-negra.png",
  },
];
