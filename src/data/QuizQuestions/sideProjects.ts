/***************************************************************************************************************************
 * @file: PROJECT-ROOT-FOLDER/src/data/QuizQuestions/sideProjects.ts
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description:
 *  - This file contains the quiz questions and answers related to the "Side Projects" topic.
 *  - Each question is structured with options, a question type, and the correct answer(s).
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality:
 *  - Provides a specific set of quiz questions for the "Side Projects" theme.
 *  - Supports multiple-choice questions (MCQs) and questions with multiple correct answers (MAQs).
 *  - Enhances the variety of the quiz by offering diverse questions within the same topic.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/19/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made:
 *  - Initial creation with a set of questions specifically curated for the "Side Projects" topic.
 *  - Regular updates to questions and answers to ensure accuracy and engagement.
 *  - Inclusion of additional questions to expand the question set over time.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes:
 *  - The questions in this file are designed to challenge fans on their knowledge of the members of 
 *  - Coheed and Cambria's side projects and test their knowledge about specific details.
 *  - Regular review and updates are crucial to keep the content fresh and accurate.
 ***************************************************************************************************************************/

// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from ".";

export const sideProjects: Topic = {
  topic: "Side Projects",
  totalQuestions: 32,
  questions: [
    {
      question:
        "What is the name of the second full-length album by The Prize Fighter Inferno?",
      choices: [
        "Half Measures",
        "The City Introvert",
        "My Brother's Blood Machine",
        "Before They Bury Me",
      ],
      type: "MCQs",
      correctAnswers: ["The City Introvert"],
    },
    {
      question:
        "Fire Deuce is a side project of which member of Coheed and Cambria?",
      choices: [
        "Claudio Sanchez",
        "Travis Stever",
        "Josh Eppard",
        "Zach Cooper",
      ],
      type: "MCQs",
      correctAnswers: ["Travis Stever"],
    },
    {
      question:
        "What was the name Travis Stever used in his band Fire Deuce?",
      choices: [
        "Cleveland Stever",
        "Travis Stever",
        "Boston Strangler",
        "Yankee Dandy",
      ],
      type: "MCQs",
      correctAnswers: ["Cleveland Stever"],
    },
    {
      question: "What was the original name of Davenport Cabinet?",
      choices: [
        "The Pink Panther",
        "The English Panther",
        "Deuce Cabinet",
        "Weerd Science",
      ],
      type: "MCQs",
      correctAnswers: ["The English Panther"],
    },
    {
      question: "Who is the rapper Weerd Science?",
      choices: ["Travis Stever", "Joey Eppard", "Tom Cruise", "Josh Eppard"],
      type: "MCQs",
      correctAnswers: ["Josh Eppard"],
    },
    {
      question: "Who is the lead singer of L.S. Dunes?",
      choices: [
        "Anthony Green",
        "Zach Cooper",
        "Joey Eppard",
        "Claudio Sanchez",
      ],
      type: "MCQs",
      correctAnswers: ["Anthony Green"],
    },
    {
      question:
        "What is the name of the boxer who goes by the name The Prize Fighter Inferno?",
      choices: ["West Coast Devin", "Mike Tyson", "Jesse", "Claudio"],
      type: "MCQs",
      correctAnswers: ["Jesse"],
    },
    {
      question:
        "What other band is L.S. Dunes guitarist Frank Iero a member of?",
      choices: [
        "Circa Survive",
        "The Sound of Animals Fighting",
        "Thursday",
        "My Chemical Romance",
      ],
      type: "MCQs",
      correctAnswers: ["My Chemical Romance"],
    },
    {
      question: "What is the name of Davenport Cabinet's third album?",
      choices: [
        "Nostalgia In Stereo",
        "Our Machine",
        "Damned Renegades",
        "Risks in Magic",
      ],
      type: "MCQs",
      correctAnswers: ["Damned Renegades"],
    },
    {
      question: "Whose side project is called The Prize Fighter Inferno?",
      choices: [
        "Travis Stever",
        "Zach Cooper",
        "Josh Eppard",
        "Claudio Sanchez",
      ],
      type: "MCQs",
      correctAnswers: ["Claudio Sanchez"],
    },
    {
      question:
        "What is the name of the band Zach Cooper was in before joining Coheed and Cambria?",
      choices: ["Nirvana", "Afterman", "Inferno", "Life Before This"],
      type: "MCQs",
      correctAnswers: ["Life Before This"],
    },
    {
      question:
        "What is the title of The Prize Fighter Inferno's debut album?",
      choices: [
        "Half Measures",
        "My Brother's Blood Machine",
        "The Going Price for Home",
        "Gutter Phenomenon",
      ],
      type: "MCQs",
      correctAnswers: ["My Brother's Blood Machine"],
    },
    {
      question:
        "What event saw the release of the Prize Fighter Inferno's EP 'Half Measures'?",
      choices: [
        "New York ComicCon",
        "First Tour Date",
        "Claudio's birthday",
        "Birth of Claudio's son",
      ],
      type: "MCQs",
      correctAnswers: ["New York ComicCon"],
    },
    {
      question:
        "What song on the Prize Fighter Inferno's EP 'Stray Bullets' was NOT included on the album 'The City Introvert'?",
      choices: [
        "Stray Bullets",
        "Stand By Me",
        "Crazy For You",
        "Death Rattle",
      ],
      type: "MCQs",
      correctAnswers: ["Stand By Me"],
    },
    {
      question:
        "What Prize Fighter Inferno song features vocals by Chondra Echert?",
      choices: [
        "Half Measures",
        "The Simple Fix",
        "Elm Street Lover Boy",
        "Pistol Pete Matty",
      ],
      type: "MCQs",
      correctAnswers: ["Half Measures"],
    },
    {
      question:
        "What Prize Fighter Inferno song features Chondra Echert singing the lyrics 'La la la, la la la la'?",
      choices: ["Gears", "Erizo Schultz", "More Than Love", "Sweet Talker"],
      type: "MCQs",
      correctAnswers: ["Gears"],
    },
    {
      question:
        "In The Prize Fighter Inferno's song 'Pistol Pete Matty,' what instrument is prominently featured?",
      choices: ["Banjo", "Accordion", "Mandolin", "Trumpet"],
      type: "MCQs",
      correctAnswers: ["Banjo"],
    },
    {
      question:
        "Davenport Cabinet is a side project led by which member of Coheed and Cambria?",
      choices: [
        "Claudio Sanchez",
        "Travis Stever",
        "Josh Eppard",
        "Zach Cooper",
      ],
      type: "MCQs",
      correctAnswers: ["Travis Stever"],
    },
    {
      question:
        "What is the name of the Prize Fighter Inferno EP that was available to people who ordered the fourth issue of 'Kill Audio'?",
      choices: [
        "Beaver Records",
        "Erizo Schultz",
        "Who Watches The Watchmen",
        "The Echomaker",
      ],
      type: "MCQs",
      correctAnswers: ["Beaver Records"],
    },
    {
      question:
        "What is the title of the first album under the Davenport Cabinet name?",
      choices: [
        "Our Machine",
        "Nostalgia in Stereo",
        "Damned Renegades",
        "Risk and Reward",
      ],
      type: "MCQs",
      correctAnswers: ["Nostalgia in Stereo"],
    },
    {
      question:
        "Travic Stever came up with the name Davenport Cabinet after the Davenport Brothers. What was the profession of these brothers?",
      choices: [
        "Magicians",
        "Carpenters",
        "Singers",
        "Bank Robbers",
      ],
      type: "MCQs",
      correctAnswers: ["Magicians"],
    },
    {
      question:
        "In 2010, Davenport Cabinet released a 12 inch EP with which other band?",
      choices: [
        "Circa Survive",
        "Thank You Scientist",
        "One Small Step For Landmines",
        "The Dear Hunter",
      ],
      type: "MCQs",
      correctAnswers: ["One Small Step For Landmines"],
    },
    {
      question:
        "What is the name of the band Travis Stever formed in 2021?",
      choices: [
        "Full Scale Riot",
        "Zero Trust",
        "Skarhead",
        "Fire Deuce",
      ],
      type: "MCQs",
      correctAnswers: ["Zero Trust"],
    },
    {
      question:
        "What Prize Fighter Inferno song did Travis Stever play lap steel guitar on?",
      choices: [
        "Wayne Andrews, The Old Beekeeper",
        "The Going Price for Home",
        "The Margretville Dance",
        "Run, Gunner Recall, Run! The Town Wants You Dead!",
      ],
      type: "MCQs",
      correctAnswers: [
        "Wayne Andrews, The Old Beekeeper",
      ],
    },
    {
      question:
        "What name did Josh Eppard use when drumming for the band Fire Deuce?",
      choices: [
        "Weerd Science",
        "Bobby Delicious",
        "Rick Whispers",
        "Deuce Newton",
      ],
      type: "MCQs",
      correctAnswers: ["Deuce Newton"],
    },
    {
      question:
        "What is the title of Weerd Science's debut album released in 2005?",
      choices: [
        "The Waterfront EP",
        "Friends and Nervous Breakdowns",
        "Red Light Juliet",
        "Sick Kids",
      ],
      type: "MCQs",
      correctAnswers: ["Friends and Nervous Breakdowns"],
    },
    {
      question:
        "Weerd Science's song 'Conspiracy Theories w/ out Mel Gibson' is part of which EP?",
      choices: [
        "The Waterfront EP",
        "Sick Kids",
        "Red Light Juliet",
        "Friends and Nervous Breakdowns",
      ],
      type: "MCQs",
      correctAnswers: ["Friends and Nervous Breakdowns"],
    },
    {
      question:
        "What is the title of Weerd Science's third full-length album released in 2014?",
      choices: [
        "The Waterfront EP",
        "Red Light Juliet",
        "Ruin Your Life",
        "Red Light Juliet Part 2",
      ],
      type: "MCQs",
      correctAnswers: ["Red Light Juliet"],
    },
    {
      question:
        "What is the name of the band Josh Eppard joined in 2009?",
      choices: [
        "3",
        "Applehead",
        "Get Your Rock Out",
        "Terrible Things",
      ],
      type: "MCQs",
      correctAnswers: ["Terrible Things"],
    },
    {
      question:
        "What is the title of Weerd Science's second album released in 2011?",
      choices: [
        "Red Light Juliet",
        "Sick Kids",
        "The Waterfront EP",
        "Ruin Your Life",
      ],
      type: "MCQs",
      correctAnswers: ["Sick Kids"],
    },
    {
      question:
        "Claudio Sanchez and Travis Stever were in what band together before creating the band Shabūtie?",
      choices: ["Penelope", "Evil Ink", "Toxic Parents", "Naked Prey"],
      type: "MCQs",
      correctAnswers: ["Toxic Parents"],
    },
    {
      question:
        "What is the name of Shabūtie's first studio demo released in 1999?",
      choices: [
        "Delirium Trigger",
        "Plan to Take Over the World",
        "The Penelope EP",
        "Naked Prey",
      ],
      type: "MCQs",
      correctAnswers: ["Plan to Take Over the World"],
    },
  ],
};
