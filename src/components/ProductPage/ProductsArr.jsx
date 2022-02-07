const productVariant = {
  offscreen: {
    y: 0,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1,

      type: "spring",
      bounce: 0.4,
      duration: 2,
    },
  },
};
const productVariant2 = {
  offscreen: {
    y: 0,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3,

      type: "spring",
      bounce: 0.4,
      duration: 2,
    },
  },
};
const productVariant3 = {
  offscreen: {
    y: 0,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,

      type: "spring",
      bounce: 0.4,
      duration: 2,
    },
  },
};
export const productsArr = [
  {
    id: 1,
    imgLink:
      "https://www.pricemarket.sk/3623-large_default/vysavac-rowenta-ro3953ea-aaa-cervena-.jpg",
    colorLayout: "purple-500",
    name: "With Pouch",
    variantType: productVariant,
  },
  {
    id: 2,
    imgLink: "https://images.robotworld.sk/7900/foto_7903.jpg",
    colorLayout: "pink-500",
    name: "Robotic",
    variantType: productVariant2,
  },
  {
    id: 3,
    imgLink:"https://im9.cz/sk/iR/importprodukt-orig/56b/56b900d6a7caa5eb3a1b128bedb6e5d7--mmf250x250.jpg",
    colorLayout: "indigo-700",
    name: "Without Pouch",
    variantType: productVariant3,
  },
];
