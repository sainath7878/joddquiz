import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const quizzes = [
  {
    _id: uuid(),
    title: "You Can WIN",
    totalScore: 0,
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
        question: "Is Valorant FREE",
        options: ["Yes", "No"],
        answer: "Yes",
      }, {
        _id: uuid(),
        question: "How many Agents in the game have the ability to use utility to scout enemy positions without taking any damage?",
        options: ["2", "4", "3", "1"],
        answer: "4",
      },

    ],
    catergoryName: "Valorant",
  },
];
