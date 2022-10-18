const products = [
  {
    id: 0,
    title: "Nike Logo Imported from Thailand (White Color) Quality B",
    image:
      "https://static-01.shop.com.mm/p/3adb9991909b30059e90eba034477a96.jpg",
    categories: ["hat"],
    price: 14900,
  },
  {
    id: 1,
    title: "LA Hat (Unisex)",
    image:
      "https://static-01.shop.com.mm/p/6d02e5c3f90b03c91d5b8f9b83bbaf38.jpg",
    categories: ["hat"],
    price: 7500,
  },
  {
    id: 2,
    title: "REBACCA Titanium Good Quality Eyewear ( AMK )",
    image:
      "https://mm-live-21.slatic.net/kf/S1babcd13b49a4dd990f8d718cfc3e463V.jpg",
    categories: ["glasses"],
    price: 30000,
  },
  {
    id: 3,
    title: "Rayban Eyewear",
    image:
      "https://mm-live-21.slatic.net/kf/S5d03711ef3bf4b74b7a92416c3bd6348A.jpg",
    categories: ["glasses"],
    price: 7000,
  },
  {
    id: 4,
    title: "Gioven Kelvin Long Sleeve Shirt GK-2134#XA-21-1",
    image:
      "https://static-01.shop.com.mm/p/2253dbd3bca1600151c9c486a71c9b92.jpg",
    categories: ["shirt"],
    price: 3000,
  },
  {
    id: 5,
    title: "Stripe Shirt",
    image:
      "https://static-01.shop.com.mm/p/f8f480d5bb12c559684c951c5616bf0f.jpg",
    categories: ["shirt"],
    price: 8000,
  },
  {
    id: 6,
    title: "KARRIMOR RAINCOAT",
    image:
      "https://static-01.shop.com.mm/p/907b605c59fbf6fc23cc7a87a9fd10ae.jpg",
    categories: ["coat"],
    price: 18000,
  },
  {
    id: 7,
    title: "Leather Jacket",
    image:
      "https://static-01.shop.com.mm/p/5a9aed71501d991bcbbcb81714947960.jpg",
    categories: ["coat"],
    price: 19500,
  },
  {
    id: 8,
    title: "Men's G-Motion Drawstring Jogger Pants",
    image:
      "https://static-01.shop.com.mm/p/1002a8d92ce8c72d13b7c480fdb80bd6.jpg",
    categories: ["pant"],
    price: 65990,
  },
  {
    id: 9,
    title: "Sport Jogger Pant",
    image:
      "https://static-01.shop.com.mm/p/4df8068bb5d43e87ec8a431667ad92a8.jpg",
    categories: ["pant"],
    price: 12500,
  },
  {
    id: 10,
    title: "Skechers - Men - Lifestyle - SOLAR FUSE -52759",
    image:
      "https://static-01.shop.com.mm/p/98483a8a61c96391c3440cd21b0c8eb7.jpg",
    categories: ["shoe"],
    price: 102000,
  },
  {
    id: 11,
    image:
      "https://static-01.shop.com.mm/p/31e54944ed3e5ef97bd09284fdf997f4.jpg",
    title:
      "Skechers - Boys - LIFESTYLE - SKECHERS BOYS - FLEX-GLOW ELITE - VORLO - 400137L",
    categories: ["shoe"],
    price: 135000,
  },
  {
    id: 12,
    image:
      "https://static-01.shop.com.mm/p/bb133fa72b1ff8b11f88cf4e7ae8b157.png",
    title: "Hipper - Men Slipper HS-8324",
    categories: ["slipper"],
    price: 9000,
  },
  {
    id: 13,
    image:
      "https://static-01.shop.com.mm/p/10ed1770276e7b0bb6862ca4f44e4e35.png",
    title: "Home Slipper Shoe",
    categories: ["slipper"],
    price: 10900,
  },
  {
    id: 14,
    image:
      "https://static-01.shop.com.mm/p/ab1e54038686b6d7e252210b4f8be868.jpg",
    title: "Men Slipper",
    categories: ["slipper"],
    price: 5450,
  },
  {
    id: 15,
    image:
      "https://static-01.shop.com.mm/p/73266a4f5dda6087a057f075295a537c.jpg",
    title: "FASHION X FACTORY SENSELEAD FEMALE CASUAL LONG PANTS",
    categories: ["pant"],
    price: 21000,
  },
  {
    id: 16,
    image:
      "https://static-01.shop.com.mm/p/c3df5cedb108d5a68ab8f7bc58aa23a8.jpg",
    title: "Sport Sweat Pant",
    categories: ["pant"],
    price: 12000,
  },
  {
    id: 17,
    image:
      "https://static-01.shop.com.mm/p/33dd9d59a3a73838b4865d52f22e1ce5.jpg",
    title: "Semi Casual Pants",
    categories: ["pant"],
    price: 10500,
  },
  {
    id: 18,
    image:
      "https://static-01.shop.com.mm/p/3773a7d87d98e7622d179cfb60e30b8c.jpg",
    title: "Long Pant, Joggers, cargo jogger",
    categories: ["pant"],
    price: 18500,
  },
  {
    id: 19,
    image:
      "https://mm-live-21.slatic.net/kf/Sc11ed190f6e1408893604ea5c52f7893g.jpg",
    title: "Trandy Ripped jeans hooded jackets",
    categories: ["coat"],
    price: 40000,
  },
  {
    id: 20,
    image:
      "https://mm-live-21.slatic.net/kf/Sc71f60ab7348493781919af461efd9ffR.jpg",
    title: "Long cotton coat Jacket",
    categories: ["coat"],
    price: 22000,
  },
  {
    id: 21,
    image:
      "https://static-01.shop.com.mm/p/4fbdadb83865fa649421a555fb63dc9a.jpg",
    title: "Plain Style Hat",
    categories: ["hat"],
    price: 20200,
  },
  {
    id: 22,
    image:
      "https://static-01.shop.com.mm/p/62da3ed6da203c6948114a4dd66ac860.jpg",
    title: "Free Style Hat",
    categories: ["hat"],
    price: 21300,
  },
  {
    id: 23,
    image:
      "https://static-01.shop.com.mm/p/a33c23e5896ee5383934f2b9c0cfd7ce.jpg",
    title: "Giordano Cotton Cap",
    categories: ["hat"],
    price: 17900,
  },
  {
    id: 24,
    image:
      "https://static-01.shop.com.mm/p/5df8e510cb01115c030928700d6bc99a.jpg",
    title: "Leather Pattern Baseball Cap (Pre Order)",
    categories: ["hat"],
    price: 19350,
  },
  {
    id: 25,
    image:
      "https://mm-live-21.slatic.net/kf/S58632f529a124d3e8a2fbb03e75f4b57q.jpg",
    title: "sport outdoor shoes",
    categories: ["shoe"],
    price: 32340,
  },
  {
    id: 26,
    image:
      "https://static-01.shop.com.mm/p/17548bb01669cb5561ee27b45a629bca.jpg",
    title: "Timberland BRADSTREETULTEK+ Oxford - Dark Brown",
    categories: ["shoe"],
    price: 279300,
  },
  {
    id: 27,
    image:
      "https://static-01.shop.com.mm/p/76f47d50eead263609fc10e2242efd95.jpg",
    title: "Skechers - Men - Lifestyle - Elite Flex - Westerfield - 52868",
    categories: ["shoe"],
    price: 112000,
  },
  {
    id: 28,
    image:
      "https://static-01.shop.com.mm/p/9499e923104096cd1aba6bff98471f0c.jpg",
    title: "Timberland MADBURY SIDEZIPWP - Black",
    categories: ["shoe"],
    price: 318500,
  },
  {
    id: 29,
    image:
      "https://static-01.shop.com.mm/p/bf6efec74f64c7ccb693db18c9ef6069.jpg",
    title: "OAKLEY Apparition",
    categories: ["glasses"],
    price: 370000,
  },
  {
    id: 30,
    image:
      "https://static-01.shop.com.mm/p/44d5cbb14674e66833565cecc8b878e3.jpg",
    title: "Sunglasses",
    categories: ["glasses"],
    price: 35000,
  },
  {
    id: 31,
    image:
      "https://static-01.shop.com.mm/p/4a0511b5d1bace3e4141815285f92b6a.jpg",
    title: "Cool Black Sunglasses",
    categories: ["glasses"],
    price: 10000,
  },
  {
    id: 32,
    image:
      "https://static-01.shop.com.mm/p/1a73d21e5234148b7011201dd8a1dd48.jpg",
    title: "OAKLEY UV-400/polarized",
    categories: ["glasses"],
    price: 40000,
  },
  {
    id: 33,
    image:
      "https://static-01.shop.com.mm/original/3cefb75950872bfaf395f9137dc5b875.jpg",
    title: "ALT 18X1 SHIRTS GREEN",
    categories: ["shirt"],
    price: 4900,
  },
  {
    id: 34,
    image:
      "https://static-01.shop.com.mm/p/0c208801565bc800476c6a415aba4e44.jpg",
    title: "Boy Shirt",
    categories: ["shirt"],
    price: 8000,
  },
  {
    id: 35,
    image:
      "https://static-01.shop.com.mm/p/dbef0e4221cff839a349348691becaac.jpg",
    title: "Dice Formal Men Shirt long wear Fashion",
    categories: ["shirt"],
    price: 13800,
  },
  {
    id: 36,
    image:
      "https://static-01.shop.com.mm/p/151735058fa1a4329d5b4a88ba0d12e2.jpg",
    title: "Bossini Men Round Neck>0107020>80",
    categories: ["shirt"],
    price: 31500,
  },
];

module.exports = products;
