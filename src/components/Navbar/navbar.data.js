export const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Shop",
    href: "/shop",
  },
  {
    label: "Categories",
    megaMenu: true,
  },
  {
    label: "New Arrivals",
    href: "/shop?filter=new",
  },
  {
    label: "Sale",
    href: "/shop?filter=sale",
  },
];

export const categories = [
  {
    title: "Women",
    href: "/shop?category=women",
    items: [
      {
        label: "Dresses",
        href: "/shop?category=dresses",
      },
      {
        label: "Tops",
        href: "/shop?category=tops",
      },
      {
        label: "Jackets",
        href: "/shop?category=jackets",
      },
      {
        label: "Jeans",
        href: "/shop?category=jeans",
      },
      {
        label: "Skirts",
        href: "/shop?category=skirts",
      },
    ],
  },

  {
    title: "Men",
    href: "/shop?category=men",
    items: [
      {
        label: "Shirts",
        href: "/shop?category=shirts",
      },
      {
        label: "T-Shirts",
        href: "/shop?category=t-shirts",
      },
      {
        label: "Jackets",
        href: "/shop?category=jackets",
      },
      {
        label: "Jeans",
        href: "/shop?category=jeans",
      },
      {
        label: "Trousers",
        href: "/shop?category=trousers",
      },
    ],
  },

  {
    title: "Accessories",
    href: "/shop?category=accessories",
    items: [
      {
        label: "Bags",
        href: "/shop?category=bags",
      },
      {
        label: "Shoes",
        href: "/shop?category=shoes",
      },
      {
        label: "Jewelry",
        href: "/shop?category=jewelry",
      },
      {
        label: "Watches",
        href: "/shop?category=watches",
      },
      {
        label: "Sunglasses",
        href: "/shop?category=sunglasses",
      },
    ],
  },
];

export const megaMenuBanner = {
  eyebrow: "New Season",
  title: "Elevated essentials.",
  description: "Discover the latest pieces made for your everyday style.",
  buttonLabel: "Explore Collection",
  href: "/shop?filter=new",
  image:
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85",
};

export const popularSearches = [
  "Men's Jackets",
  "Women's Dresses",
  "Sneakers",
  "Bags",
  "Accessories",
];

export const recentSearches = [
  "denim jacket",
  "summer dress",
  "white sneakers",
];

/*
 * Demo results shown while search is not backed by an API yet.
 */
export const demoSearchResults = [
  {
    id: 1,
    name: "Oversized Denim Jacket",
    category: "Jackets",
    price: "$89",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Minimal Cotton Shirt",
    category: "Shirts",
    price: "$64",
    image:
      "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Classic Leather Bag",
    category: "Bags",
    price: "$120",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=500&q=80",
  },
];

