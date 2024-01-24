/***************************************************************************************************************************
 * @file: PROJECT-ROOT-FOLDER/src/data/QuizQuestions/amory.ts
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: 
 *  - This file contains the quiz questions and answers related to the "AMORY WARS" topic.
 *  - Each question is structured with options, a question type, and the correct answer(s).
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: 
 *  - Provides a specific set of quiz questions for the "AMORY WARS" theme.
 *  - Supports multiple-choice questions (MCQs) and questions with multiple correct answers (MAQs).
 *  - Enhances the variety of the quiz by offering diverse questions within the same topic.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: Last Updated on: 01/24/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *  - Initial creation with a set of questions specifically curated for the "AMORY WARS" topic.
 *  - Regular updates to questions and answers to ensure accuracy and engagement.
 *  - Inclusion of additional questions to expand the question set over time.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *  - The questions in this file are designed to challenge fans of "The Amory Wars" and test their 
 *  - knowledge about specific details about the Amory Wars graphic novels and comics.
 *  - Regular review and updates are crucial to keep the content fresh and accurate.
 ***************************************************************************************************************************/

// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from ".";

export const amory: Topic = {
  topic: "AMORY WARS",
  totalQuestions: 57,
  questions: [
    {
      question:
        "Which of these inhabitants of Heaven's Fence are NOT catalogued?",
      choices: [
        "Men",
        "The Narrows",
        "The Mage",
        "The Prise",
      ],
      type: "MCQs",
      correctAnswers: ["The Narrows"],
    },
    {
      question: "What is the name of Dr. Sirius Amory's wife?",
      choices: ["Mirriam", "Meri", "Mandy", "Martha"],
      type: "MCQs",
      correctAnswers: ["Meri"],
    },
    {
      question: "What are the names of Coheed and Cambria's 'twins'?",
      choices: [
        "Mike and Melinda",
        "Claudio and Josephine",
        "Leonard and Holly",
        "Matthew and Maria",
      ],
      type: "MCQs",
      correctAnswers: ["Matthew and Maria"],
    },
    {
      question: "How did Coheed kill his youngest 'children'?",
      choices: ["Poisoned Them", "Chocked Them", "Shot Them", "Drowned Them"],
      type: "MCQs",
      correctAnswers: ["Poisoned Them"],
    },
    {
      question: "How did Coheed kill his oldest 'daughter'?",
      choices: ["Bullet To The Head", "Hammer Blow To The Head", "Burned Her To Eeath", "Drowned Her"],
      type: "MCQs",
      correctAnswers: ["Hammer Blow To The Head"],
    },
    {
      question: "What is the name of Josephine's boyfriend?",
      choices: ["Johnny", "Cecil", "Patrick", "Travis"],
      type: "MCQs",
      correctAnswers: ["Patrick"],
    },
    {
      question: "What is the name of Claudio's girlfriend?",
      choices: ["Newo", "Sara", "Penny", "Rachel"],
      type: "MCQs",
      correctAnswers: ["Newo"],
    },
    {
      question:
        "What is the name of the religious text that outlines the structure and destiny of Heaven's Fence?",
      choices: [
        "The Creation of the Worlds",
        "The Prophecies of Heaven's Fence",
        "God's Design",
        "Ghansgraad",
      ],
      type: "MCQs",
      correctAnswers: ["Ghansgraad"],
    },
    {
      question:
        "What is the name of the uncatalogued inhabitant that Claudio meets in Si-Revody?",
      choices: ["Victor", "Sizer", "Cecil", "Patrick"],
      type: "MCQs",
      correctAnswers: ["Cecil"],
    },
    {
      question: "What is the name of the only Admiral in the United Red Army?",
      choices: [
        "Mayo Deftinwolf",
        "Covent Marth",
        "Michael Todd",
        "Vielar Crom",
      ],
      type: "MCQs",
      correctAnswers: ["Vielar Crom"],
    },
    {
      question: "Who is the leader of the rebellion against Wilhelm Ryan?",
      choices: [
        "Mariah Antillarea",
        "Cecil B. Deville",
        "Inferno",
        "Vielar Crom",
      ],
      type: "MCQs",
      correctAnswers: ["Mariah Antillarea"],
    },
    {
      question: "What is another name for the prophecy of The Crowing?",
      choices: ["Son of Three", "Guardians", "God's Warrior", "Ghansgraad"],
      type: "MCQs",
      correctAnswers: ["Son of Three"],
    },
    {
      question:
        "What is the name of the camp Claudio was forced to work in on Shylos X?",
      choices: ["Crystal Lake", "Si-Revody ", "Apity Prime", "Paris: Earth"],
      type: "MCQs",
      correctAnswers: ["Si-Revody "],
    },
    {
      question:
        "What is the name of the mysterious energy being that guides Sirius Amory?",
      choices: [
        "The Prize Fighter Inferno",
        "Sirius Amory",
        "The All-Mother",
        "The Ghost of Wilhelm Ryan",
      ],
      type: "MCQs",
      correctAnswers: ["The All-Mother"],
    },
    {
      question:
        "What is the name of the planet Coheed and Cambria live on?",
      choices: ["Hetricus", "Apity Prime", "Cobalt and Calcium", "Star IV"],
      type: "MCQs",
      correctAnswers: ["Hetricus"],
    },
    {
      question:
        "What is the name of the gang that assaulted Josephine?",
      choices: [
        "Jersey City Devils",
        "Jersey City Angels",
        "Jersey City Demons",
        "Jersey City Priests",
      ],
      type: "MCQs",
      correctAnswers: ["Jersey City Devils"],
    },
    {
      question:
        "What is the name of the character who is a key figure in 'The Unheavenly Creatures' narrative?",
      choices: ["Creature", "Vaxis", "Gutter", "Senorita Erminia"],
      type: "MCQs",
      correctAnswers: ["Vaxis"],
    },
    {
      question: "In the false memory that was implanted in Cambria, what was her occupation?",
      choices: [
        "Lawyer",
        "Nurse",
        "Shop Owner",
        "Professor",
      ],
      type: "MCQs",
      correctAnswers: ["Nurse"],
    },
    {
      question: "Where did Mayo Deftinwolf discard Sizer's body?",
      choices: [
        "House Atlantic",
        "Donar",
        "Grail Arbor",
        "Godder Damm",
      ],
      type: "MCQs",
      correctAnswers: ["Godder Damm"],
    },
    {
      question:
        "What is the name of Inferno's spaceship?",
      choices: [
        "Sizer",
        "Chase",
        "The Dark Sentencer",
        "Grail Arbor",
      ],
      type: "MCQs",
      correctAnswers: ["Grail Arbor"],
    },
    {
      question:
        "What planet was Mariah Antillerea killed on?",
      choices: [
        "Kalline",
        "Shylos X",
        "Paris:Earth",
        "Dil-Ariuth IX",
      ],
      type: "MCQs",
      correctAnswers: ["Paris:Earth"],
    },
    {
      question:
        "What is the name of the spacecraft that Sirius Amory uses to reach the Keywork in 'The Afterman: Ascension'?",
      choices: [
        "The Dark Sentencer",
        "The Willing Well",
        "The Vaxis",
        "The Meriwell",
      ],
      type: "MCQs",
      correctAnswers: ["The Meriwell"],
    },
    {
      question:
        "What is the name of the city that Wilhelm Ryan released the new and improved dragonfiles on?",
      choices: [
        "Bendelesh",
        "Valley's Hill",
        "Sinosure",
        "Kalline",
      ],
      type: "MCQs",
      correctAnswers: ["Kalline"],
    },
    {
      question:
        "What is the Dark Sentencer?",
      choices: [
        "A Spaceship",
        "Nickname for Mayo Deftinwolf",
        "A Prison Planet",
        "A Weapon",
      ],
      type: "MCQs",
      correctAnswers: ["A Prison Planet"],
    },
    {
      question: "What is the name of the home planet of The Narrows?",
      choices: ["Hilmgore", "Javan III", "Donar", "Howling Earth"],
      type: "MCQs",
      correctAnswers: ["Hilmgore"],
    },
    {
      question: "What is the Camper Velorium?",
      choices: [
        "A Weapon",
        "A Spaceship",
        "A Religious Artifact",
        "A Secret Organization",
      ],
      type: "MCQs",
      correctAnswers: ["A Spaceship"],
    },
    {
      question: "What is the name of Vaxis' mother?",
      choices: [
        "Ambellina",
        "Nia Worn",
        "Meri Amory",
        "Ruetama Galadoline",
      ],
      type: "MCQs",
      correctAnswers: ["Nia Worn"],
    },
    {
      question:
        "Who is the leader of the Liars Club?",
      choices: ["Vaxis", "Candelaria", "HOSS", "Nostrand Crane"],
      type: "MCQs",
      correctAnswers: ["Candelaria"],
    },
    {
      question: "What is the Keywork?",
      choices: [
        "A Weapon",
        "A Celestial Event",
        "A Spaceship",
        "Interconnecting beams of energy",
      ],
      type: "MCQs",
      correctAnswers: ["Interconnecting beams of energy"],
    },
    {
      question: "What is the name of Ryder's ex-girlfriend?",
      choices: [
        "Ambellina",
        "Mariah",
        "Meriwell",
        "Erica",
      ],
      type: "MCQs",
      correctAnswers: ["Erica"],
    },
    {
      question:
        "What is the name of the collection of 78 planets and seven stars held in place by the Keywork?",
      choices: [
        "Heaven's Fence",
        "Heavenly Collection",
        "Keywork",
        "Magical Nexus",
      ],
      type: "MCQs",
      correctAnswers: ["Heaven's Fence"],
    },
    {
      question: "Who is the Supreme Tri-Mage?",
      choices: ["Claudio Kilgannon", "The Crowing", "Wilhelm Ryan", "Creature"],
      type: "MCQs",
      correctAnswers: ["Wilhelm Ryan"],
    },
    {
      question:
        "What was the first graphic series related to 'The Amory Wars' that was published in 2004?",
      choices: [
        "The Amory Wars: Good Apollo, I'm Burning Star IV",
        "The Second Stage Turbine Blade Ultimate Edition",
        "The Bag.On.Line. Adventures: The Second Stage Turbine Blade",
        "Evil Ink’s The Amory Wars",
      ],
      type: "MCQs",
      correctAnswers: [
        "The Bag.On.Line. Adventures: The Second Stage Turbine Blade"],
    },
    {
      question:
        "Who co-wrote the novel 'Year of the Black Rainbow' with Claudio Sanchez?",
      choices: [
        "Wes Abbott",
        "Christopher Shy",
        "Peter David",
        "Claudio Sanchez",
      ],
      type: "MCQs",
      correctAnswers: ["Peter David"],
    },
    {
      question: "What is the Great Crash?",
      choices: ["A Cosmological Event", "A Spacecraft", "A Great Battle", "A Weapon"],
      type: "MCQs",
      correctAnswers: ["A Cosmological Event"],
    },
    {
      question:
        "What are the Unheavenly Creatures?",
      choices: [
        "A Gang",
        "K.B.I",
        "The Prise",
        "Star System",
      ],
      type: "MCQs",
      correctAnswers: ["A Gang"],
    },
    {
      question:
        "What is the name of a mythical monster with a centipede-like body?",
      choices: ["The Narrows", "Keneyto", "Scolorustia", "Crosif"],
      type: "MCQs",
      correctAnswers: ["Scolorustia"],
    },
    {
      question: "What was the name given to Cambria, Coheed, and Inferno?",
      choices: ["K.B.I.", "Red Army", "Sinstar", "The Prise"],
      type: "MCQs",
      correctAnswers: ["K.B.I."],
    },
    {
      question: "How many sectors are there in Heaven's Fence?",
      choices: ["4", "12", "11", "10"],
      type: "MCQs",
      correctAnswers: ["12"],
    },
    {
      question:
        "On December 2, 2012, who announced he bought the rights for a film adaptation of 'The Amory Wars'?",
      choices: [
        "Peter David",
        "Christopher Nolan",
        "Dwayne Johnson",
        "Mark Wahlberg",
      ],
      type: "MCQs",
      correctAnswers: ["Mark Wahlberg"],
    },
    {
      question: "Gus Vazquez was the artist for the first issue of 'The Second Stage Turbine Blade' comic?",
      choices: ["TRUE", "FALSE"],
      type: "boolean",
      correctAnswers: ["TRUE"],
      comment: "He also illustrated the second issue as well",
    },
    {
      question: "The Mage are burdened eternally with the responsibility of guarding the Keywork?",
      choices: ["TRUE", "FALSE"],
      type: "boolean",
      correctAnswers: ["FALSE"],
      comment: "The Prise are responsible for guarding the Keywork",
    },
    {
      question: "The right side of Mayo Deftinwolf's face was damaged by a plasma cannon?",
      choices: ["TRUE", "FALSE"],
      type: "boolean",
      correctAnswers: ["FALSE"],
      comment: "It was the left side of his face that was damaged",
    },
    {
      question: "Mayo Deftinwolf is a cyborg?",
      choices: ["TRUE", "FALSE"],
      type: "boolean",
      correctAnswers: ["TRUE"],
      comment: "He was the first Z-class cybernetic organism of its kind",
    },
    {
      question: "How many years after the colonization of Silent Earth: 3 did the opening scene of the 'Second Stage Turbine Blade' take place?",
      choices: [
        "6",
        "7",
        "4",
        "2",
    ],
      type: "MCQs",
      correctAnswers: ["6"],
    },
    {
      question: "Which character has the first line of dialogue in the 'Second Stage Turbine Blade' comics?",
      choices: [
        "Inferno",
        "Coheed",
        "Cambria",
        "Claudio",
    ],
      type: "MCQs",
      correctAnswers: ["Inferno"],
    },
    {
      question: "What planet was Coheed 'born' on?",
      choices: [
        "Helvar",
        "Hetricus",
        "Morlunus",
        "Omega",
    ],
      type: "MCQs",
      correctAnswers: ["Helvar"],
    },
    {
      question: "What is Coheed's 'occupation' on Hetricus?",
      choices: [
        "Lawyer",
        "Heat Treat Specialist",
        "Soldier",
        "Mechanic",
    ],
      type: "MCQs",
      correctAnswers: ["Heat Treat Specialist"],
    },
    {
      question: "What was the name of the upper respiratory disease that Coheed's father 'contracted'?",
      choices: [
        "Ikkin",
        "Melvus",
        "Aetna",
        "Tra-Nuvis",
    ],
      type: "MCQs",
      correctAnswers: ["Melvus"],
    },
    {
      question: "What is the name of Claudio Kilgannon's high school?",
      choices: [
        "Rye Cooper",
        "Aetna Six",
        "Immaculate Conception",
        "Hetricus High",
    ],
      type: "MCQs",
      correctAnswers: ["Rye Cooper"],
    },
    {
      question: "What was Cambria's 'maiden' name?",
      choices: [
        "Myers",
        "Conroy",
        "Ryan",
        "Gortus",
    ],
      type: "MCQs",
      correctAnswers: ["Myers"],
    },
    {
      question: "What was the name of the hospital Cambria 'worked' in when she 'met' Coheed?",
      choices: [
        "George Haven",
        "Ikkin",
        "Aetna Six",
        "Arbor",
    ],
      type: "MCQs",
      correctAnswers: ["George Haven"],
    },
    {
      question: "Claudio's girlfriend was the captain of what team at their high school?",
      choices: [
        "air-ball",
        "basketball",
        "volleyball",
        "golf",
    ],
      type: "MCQs",
      correctAnswers: ["air-ball"],
    },
    {
      question: "Which of these is NOT an alias of Inferno?",
      choices: [
        "Jesse Kilgannon",
        "Mainframe",
        "Runaway Bomber",
        "Grail Arbor",
    ],
      type: "MCQs",
      correctAnswers: ["Grail Arbor"],
    },
    {
      question: "Who found Mariah Antillarea on a riverbank when she was an infant?",
      choices: [
        "Aetna Six",
        "Inferno",
        "Monks",
        "Coheed",
    ],
      type: "MCQs",
      correctAnswers: ["Monks"],
    },
    {
      question: "Who is the Chief Representative of The Prise Fellowship ?",
      choices: [
        "Ambellina",
        "Paranoia",
        "Ondriah",
        "Hundriah",
    ],
      type: "MCQs",
      correctAnswers: ["Paranoia"],
    },
    {
      question: "Who did Wilhelm Ryan execute in a public broadcast therefore starting the War of the Mages?",
      choices: [
        "Covent Marth",
        "Althaddeus Favor",
        "Sundihar Jepp",
        "Grave Minetoter",
    ],
      type: "MCQs",
      correctAnswers: ["Covent Marth"],
    },
  ],
};
