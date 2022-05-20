import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const quizzes = [
  {
    _id: uuid(),
    title: "Valorant Quiz",
    totalScore: 50,
    imgSrc: "https://res.cloudinary.com/duy47nrum/image/upload/v1652807954/joddquiz/valorant_vdfsjl.jpg",
    categoryName: "Valorant",
    mcqs: [
      {
        _id: uuid(),
        question: "Who is the only Agent who has a flash that is completely effective even if you look away?",
        options: ["Phoenix", "Omen", "Reyna", "Breach"],
        answer: "Omen",
      },
      {
        _id: uuid(),
        question: "How many Agents in Valorant have the ability to smoke areas?",
        options: ["3", "6", "4", "2"],
        answer: "4",
      },
      {
        _id: uuid(),
        question: "Who Made Valorant?",
        options: ["Riot Games", "Epic Games", "RockStar Games", "Ubisoft"],
        answer: "Riot Games",
      },
      {
        _id: uuid(),
        question: "Is Valorant FREE?",
        options: ["Yes", "No"],
        answer: "Yes",
      }, {
        _id: uuid(),
        question: "How many Agents in the game have the ability to use utility to scout enemy positions without taking any damage?",
        options: ["2", "4", "3", "1"],
        answer: "4",
      },

    ],
  },
  {
    _id: uuid(),
    title: "GTA V Quiz",
    totalScore: 50,
    imgSrc: "https://res.cloudinary.com/duy47nrum/image/upload/v1652808012/joddquiz/GTA-V_ltuquc.webp",
    categoryName: "GTA V",
    mcqs: [
      {
        _id: uuid(),
        question: "Which company is publisher of Grand Theft Auto V?",
        options: ["Rockstar North", "Rockstar Games", "Blizzard", "EA Games"],
        answer: "Rockstar Games",
      },
      {
        _id: uuid(),
        question: "What year was the game released?",
        options: ["2013", "2012", "2014", "2011"],
        answer: "2013",
      },
      {
        _id: uuid(),
        question: "Who are the three main characters in the game?",
        options: ["Michael, Tracy and Henry.", "Trevor, Carl Johnson and Big Smoke.", "Michael, Trevor and Franklin.", "John, Henry and Paul."],
        answer: "Michael, Trevor and Franklin.",
      },
      {
        _id: uuid(),
        question: "GTA 5 has the biggest map of all GTA games. True or false?",
        options: ["True", "False"],
        answer: "True",
      }, {
        _id: uuid(),
        question: "Which character behaves a bit like a psychopath and have anger issues??",
        options: ["Franklin", "Lester", "Lamar", "Trevor"],
        answer: "Trevor",
      },

    ],
  },
  {
    _id: uuid(),
    title: "CS GO Quiz",
    totalScore: 50,
    imgSrc: "https://res.cloudinary.com/duy47nrum/image/upload/v1652807838/joddquiz/csgo.png_ucwyth.png",
    categoryName: "CS GO",
    mcqs: [
      {
        _id: uuid(),
        question: "What Is The Most Popular Map In CS:GO?",
        options: ["DUST II", "Inferno", "Mirage", "Cobblestone"],
        answer: "DUST II",
      },
      {
        _id: uuid(),
        question: "Which Gun Out Of This List Has The Best Accuracy When Running?",
        options: ["MP9", "Mac-10", "P90", "AK-47"],
        answer: "P90",
      },
      {
        _id: uuid(),
        question: "How Much Damage Does The Ak-47 Roughly Do At Point-blank? (excluding Head)",
        options: ["25", "40", "75", "15"],
        answer: "40",
      },
      {
        _id: uuid(),
        question: "What Is The Highest Rank Possible In CS:GO Competitive?",
        options: ["Supreme Master", "Global Elite", "Distinguished Master Guardian", "Silver 1"],
        answer: "Global Elite",
      }, {
        _id: uuid(),
        question: "When Was CS:GO Released??",
        options: ["2016", "2012", "2014", "2010"],
        answer: "2012",
      },

    ],
  },
  {
    _id: uuid(),
    title: "Fortnite Quiz",
    totalScore: 50,
    imgSrc: "https://res.cloudinary.com/duy47nrum/image/upload/v1652807739/joddquiz/fortnite_xsu0zk.jpg",
    categoryName: "Fortnite",
    mcqs: [
      {
        _id: uuid(),
        question: "How many modes does the game have??",
        options: ["7", "2", "1", "13"],
        answer: "2",
      },
      {
        _id: uuid(),
        question: "When was the game initially released?",
        options: ["2018", "2014", "2016", "2017"],
        answer: "2017",
      },
      {
        _id: uuid(),
        question: "Who developed the game?",
        options: ["Riot Games", "Epic Games", "RockStar Games", "Ubisoft"],
        answer: "Epic Games",
      },
      {
        _id: uuid(),
        question: "The name of the hot air balloon is:",
        options: ["Battle balloon", "Battle carrier", "Battle Bus", "Carrier Bus"],
        answer: "Battle Bus",
      }, {
        _id: uuid(),
        question: "How many players participate in Fortnite Battle Royale?",
        options: ["8", "50", "100", "200"],
        answer: "100",
      },

    ],
  },
];
