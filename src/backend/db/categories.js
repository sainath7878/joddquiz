import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Valorant",
    description: "Quizes based on Valorant",
    imgSrc: "https://res.cloudinary.com/duy47nrum/image/upload/v1652807954/joddquiz/valorant_vdfsjl.jpg"
  },
  {
    _id: uuid(),
    categoryName: "GTA V",
    description: "Quizes based on GTA V",
    imgSrc: "https://res.cloudinary.com/duy47nrum/image/upload/v1652808012/joddquiz/GTA-V_ltuquc.webp"
  },
  {
    _id: uuid(),
    categoryName: "CS GO",
    description: "Quizes based on CS GO",
    imgSrc: "https://res.cloudinary.com/duy47nrum/image/upload/v1652807838/joddquiz/csgo.png_ucwyth.png"
  },
  {
    _id: uuid(),
    categoryName: "Fortnite",
    description: "Quizes based on Fortnite",
    imgSrc: "https://res.cloudinary.com/duy47nrum/image/upload/v1652807739/joddquiz/fortnite_xsu0zk.jpg"
  },
];
