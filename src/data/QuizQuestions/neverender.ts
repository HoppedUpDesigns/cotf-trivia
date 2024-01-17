/***************************************************************************************************************************
 * @file: PROJECT-ROOT-FOLDER/src/data/QuizQuestions/neverender.ts
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: 
 *  - This file contains the quiz questions and answers related to the "S.S. Neverender" topic.
 *  - Each question is structured with options, a question type, and the correct answer(s).
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: 
 *  - Provides a specific set of quiz questions for the "S.S. Neverender" theme.
 *  - Supports multiple-choice questions (MCQs) and questions with multiple correct answers (MAQs).
 *  - Enhances the variety of the quiz by offering diverse questions within the same topic.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/17/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *  - Initial creation with a set of questions specifically curated for the "S.S. Neverender" topic.
 *  - Regular updates to questions and answers to ensure accuracy and engagement.
 *  - Inclusion of additional questions to expand the question set over time.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *  - The questions in this file are designed to challenge fans about the details of the S.S. Neverender cruises 
 *  - and test their knowledge about specific details about the events and bands on the cruises.
 *  - Regular review and updates are crucial to keep the content fresh and accurate.
 ***************************************************************************************************************************/

// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from ".";

export const neverender: Topic = {
  topic: "S.S. Neverender",
  totalQuestions: 42,
  questions: [
    {
      question:
        "What is the name of the Norwegian Cruise Line ship for the first S.S. Neverender cruise?",
      choices: ["Pearl", "Bliss", "Gem", "Diamond"],
      type: "MCQs",
      correctAnswers: ["Gem"],
    },
    {
      question:
        "What is the name of the Norwegian Cruise Line ship for the second S.S. Neverender cruise?",
      choices: ["Gem", "Pearl", "Bliss", "Emerald"],
      type: "MCQs",
      correctAnswers: ["Pearl"],
    },
    {
      question:
        "West Coast Devin played cowbell on what Coheed and Cambria song on the second night of Coheed and Cambria's indoor show on the second S.S. Neverender cruise?",
      choices: [
        "The Camper Velourium II: Backend of Forever",
        "A Favor House Atlantic",
        "Welcome Home",
        "The Camper Velourium I: Faint of Hearts",
      ],
      type: "MCQs",
      correctAnswers: ["The Camper Velourium I: Faint of Hearts"],
    },
    {
      question: "What city did the second S.S. Neverender cruise visit?",
      choices: [
        "Nassau, Bahamas",
        "Puerto Plata, Dominican Republic",
        "Cancun, Mexico",
        "Oslo, Normay",
      ],
      type: "MCQs",
      correctAnswers: ["Puerto Plata, Dominican Republic"],
    },
    {
      question:
        "Whao played the port kick-off show for the second S.S. Neverender cruise?",
      choices: [
        "Motion City Soundtrack",
        "Animals As Leaders",
        "Mannequin Pussy",
        "Sunny Day Real Estate",
      ],
      type: "MCQs",
      correctAnswers: ["Motion City Soundtrack"],
    },
    {
      question:
        "What was the name of the special IPA that was available on the second S.S. Neverender cruise?",
      choices: ["Jai Alai", "Two-Hearted", "The Liars Club", "Freak of Nature"],
      type: "MCQs",
      correctAnswers: ["The Liars Club"],
    },
    {
      question: "What was the guest named drink winner for the the second S.S. Neverender cruise called?",
      choices: [
        "Al the Painkiller",
        "Ambellini",
        "Godder Damm",
        "Blood Red Summer",
      ],
      type: "MCQs",
      correctAnswers: ["Blood Red Summer"],
    },
    {
      question:
        "What is the name of Mannequin Pussy's lead vocalist and guitarist?",
      choices: [
        "Melvin Dabice",
        "Marisa Dabice",
        "Molly Dabice",
        "Melissa Dabice",
      ],
      type: "MCQs",
      correctAnswers: ["Marisa Dabice"],
    },
    {
      question:
        "What is the title of Mannequin Pussy's critically acclaimed album released in 2019?",
      choices: ["Romantic", "Patience", "Gypsy Pervert", "Perfect"],
      type: "MCQs",
      correctAnswers: ["Patience"],
    },
    {
      question:
        "What is the name of the band who played the port kick-off show on the first S.S. Neverender cruise?",
      choices: [
        "Thank You Scientist",
        "Hail The Sun",
        "Taking Back Sunday",
        "Fire Deuce",
      ],
      type: "MCQs",
      correctAnswers: ["Taking Back Sunday"],
    },
    {
      question: "Which band played at the Prom on the first S.S. Neverender cruise?",
      choices: [
        "Hail The Sun",
        "Animals as Leaders",
        "Thank You Scientist",
        "Coheed and Cambria",
      ],
      type: "MCQs",
      correctAnswers: ["Thank You Scientist"],
    },
    {
      question:
        "What is the title of Sunny Day Real Estate's debut album, released in 1994?",
      choices: [
        "How It Feels to Be Something On",
        "The Rising Tide",
        "Diary",
        "Sunny Day Real Estate",
      ],
      type: "MCQs",
      correctAnswers: ["Diary"],
    },
    {
      question:
        "Sunny Day Real Estate's original lineup included which musician who later became a member of the Foo Fighters?",
      choices: [
        "Dave Grohl",
        "Nate Mendel",
        "Taylor Hawkins",
        "Chris Shiflett",
      ],
      type: "MCQs",
      correctAnswers: ["Nate Mendel"],
    },
    {
      question:
        "What is the title of Motion City Soundtrack's breakthrough album, released in 2005?",
      choices: [
        "My Dinosaur Life",
        "Even If It Kills Me",
        "Commit This to Memory",
        "Go",
      ],
      type: "MCQs",
      correctAnswers: ["Commit This to Memory"],
    },
    {
      question:
        "Motion City Soundtrack's song 'Everything Is Alright' gained popularity and is known for its inclusion in which popular video game?",
      choices: [
        "Guitar Hero III: Legends of Rock",
        "Tony Hawk's Pro Skater 4",
        "Rock Band 2",
        "Need for Speed: Most Wanted",
      ],
      type: "MCQs",
      correctAnswers: ["Guitar Hero III: Legends of Rock"],
    },
    {
      question:
        "Animals As Leaders is known for pioneering a fusion of progressive metal with which other musical genre?",
      choices: [
        "Jazz Fusion",
        "Country",
        "Electronic Dance Music (EDM)",
        "Blues",
      ],
      type: "MCQs",
      correctAnswers: ["Jazz Fusion"],
    },
    {
      question:
        "Tosin Abasi, the guitarist and founder of Animals As Leaders, is known for popularizing and mastering which unique playing technique?",
      choices: [
        "Sweep Picking",
        "Tapping",
        "Chicken Picking",
        "Hybrid Picking",
      ],
      type: "MCQs",
      correctAnswers: ["Tapping"],
    },
    {
      question:
        "Psychedelic Porn Crumpets originated from which city in Australia?",
      choices: ["Sydney", "Melbourne", "Perth", "Brisbane"],
      type: "MCQs",
      correctAnswers: ["Perth"],
    },
    {
      question:
        "What is the title of Psychedelic Porn Crumpets' debut album, released in 2015?",
      choices: [
        "High Visceral {Part 1}",
        "And Now for the Whatchamacallit",
        "It's Not What You Think",
        "Old News for Young Souls",
      ],
      type: "MCQs",
      correctAnswers: ["High Visceral {Part 1}"],
    },
    {
      question:
        "Anthony Green is best known as the lead vocalist for which post-hardcore band?",
      choices: ["Circa Survive", "Thrice", "Saosin", "Chiodos"],
      type: "MCQs",
      correctAnswers: ["Circa Survive"],
    },
    {
      question:
        "In addition to Circa Survive, Anthony Green is a former member of which experimental musical collective?",
      choices: [
        "The Sound of Animals Fighting",
        "Tides of Man",
        "The Dear Hunter",
        "Dance Gavin Dance",
      ],
      type: "MCQs",
      correctAnswers: ["The Sound of Animals Fighting"],
    },
    {
      question:
        "Who is Hail The Sun's lead vocalist and drummer?",
      choices: ["Donovan Melero", "Shane Gann", "Aric Garcia", "John Stirrat"],
      type: "MCQs",
      correctAnswers: ["Donovan Melero"],
    },
    {
      question:
        "What is the title of Hail The Sun's debut album, released in 2014?",
      choices: [
        "Culture Scars",
        "Wake",
        "Elephantitis",
        "Pow! Right in the Kisser!",
      ],
      type: "MCQs",
      correctAnswers: ["Wake"],
    },
    {
      question:
        "Prince Daddy & The Hyena's album 'Cosmic Thrill Seekers' was released in collaboration with which record label?",
      choices: [
        "Run For Cover Records",
        "Topshelf Records",
        "Polyvinyl Record Co.",
        "Counter Intuitive Records",
      ],
      type: "MCQs",
      correctAnswers: ["Counter Intuitive Records"],
    },
    {
      question:
        "What is the title of Prince Daddy & The Hyena's debut album released in 2016?",
      choices: [
        "I Thought You Didn't Even Like Leaving",
        "Adult Summers",
        "Meet Me at The Mall, Pt. 2",
        "Thrashville",
      ],
      type: "MCQs",
      correctAnswers: ["I Thought You Didn't Even Like Leaving"],
    },
    {
      question:
        "What is the title of Davenport Cabinet's EP released in 2014, featuring acoustic versions of previously released songs?",
      choices: [
        "Nostalgia in Stereo",
        "Our Machine II",
        "Risks in Magic",
        "Ruin Your Life",
      ],
      type: "MCQs",
      correctAnswers: ["Our Machine II"],
    },
    {
      question:
        "Joey Eppard is best known as the lead vocalist and guitarist for which progressive rock band?",
      choices: [
        "Porcupine Tree",
        "The Dear Hunter",
        "Coheed and Cambria",
        "3 (Three)",
      ],
      type: "MCQs",
      correctAnswers: ["3 (Three)"],
    },
    {
      question:
        "In addition to being a vocalist and guitarist, Joey Eppard is proficient in playing which instrument?",
      choices: ["Keyboards", "Drums", "Bass Guitar", "Violin"],
      type: "MCQs",
      correctAnswers: ["Keyboards"],
    },
    {
      question:
        "Mac Sabbath is a parody band known for combining the music of Black Sabbath with the theme of which fast-food restaurant?",
      choices: ["Burger King", "McDonald's", "KFC", "Taco Bell"],
      type: "MCQs",
      correctAnswers: ["McDonald's"],
    },
    {
      question:
        "What is the title of Mac Sabbath's debut album, released in 2015?",
      choices: [
        "Forbidden Chicken",
        "Master of Nuggets",
        "Never Say Diet",
        "Drive Thru Massacre",
      ],
      type: "MCQs",
      correctAnswers: ["Never Say Diet"],
    },
    {
      question: "What is the title of Pinkshift's debut EP, released in 2021?",
      choices: ["Sacred Geometry", "Pastel Clouds", "Mars", "Tainted Waters"],
      type: "MCQs",
      correctAnswers: ["Sacred Geometry"],
    },
    {
      question: "Who is the lead vocalist of Pinkshift?",
      choices: [
        "Ashrita Kumar",
        "Paul Valle",
        "Myron Houngbedji",
        "Erich Weinroth",
      ],
      type: "MCQs",
      correctAnswers: ["Ashrita Kumar"],
    },
    {
      question:
        "Pinkshift's breakout single 'i'm gonna tell my therapist on you' gained popularity in which year?",
      choices: ["2018", "2019", "2020", "2021"],
      type: "MCQs",
      correctAnswers: ["2020"],
    },
    {
      question:
        "Militarie Gun is a punk band formed by members of which other well-known punk group?",
      choices: ["Dead Kennedys", "Fugazi", "Jawbreaker", "Against Me!"],
      type: "MCQs",
      correctAnswers: ["Against Me!"],
    },
    {
      question:
        "What is the title of Militarie Gun's debut album released in 2021?",
      choices: [
        "All Roads Lead to the Gun",
        "All Across the Gun",
        "All You Need is the Gun",
        "All Roads Lead to the End",
      ],
      type: "MCQs",
      correctAnswers: ["All Roads Lead to the Gun"],
    },
    {
      question:
        "What is the title of Brand of Sacrifice's debut studio album released in 2019?",
      choices: ["Godhand", "The Interstice", "Eclipse", "Lifeblood"],
      type: "MCQs",
      correctAnswers: ["Godhand"],
    },
    {
      question:
        "Brand of Sacrifice collaborated with which iconic deathcore vocalist on the track 'Altered Eyes'?",
      choices: ["Phil Bozeman", "CJ McMahon", "Alex Terrible", "Dickie Allen"],
      type: "MCQs",
      correctAnswers: ["CJ McMahon"],
    },
    {
      question:
        "What is the title of Kaonashi's debut full-length album released in 2019?",
      choices: [
        "Why Did You Do It?",
        "Dear Lemon House, You Ruined Me: Senior Year",
        "Enough to Make You Sick",
        "A Place Where Nothing Matters",
      ],
      type: "MCQs",
      correctAnswers: ["Dear Lemon House, You Ruined Me: Senior Year"],
    },
    {
      question:
        "Kaonashi's name is derived from a character in which animated film by Studio Ghibli?",
      choices: [
        "Princess Mononoke",
        "Spirited Away",
        "My Neighbor Totoro",
        "Howl's Moving Castle",
      ],
      type: "MCQs",
      correctAnswers: ["Spirited Away"],
    },
    {
      question:
        "In 2020, Kaonashi released a split EP with another band. What is the title of that EP?",
      choices: [
        "Brotherhood of the Snake",
        "Crimson Thorn",
        "Why Did You Do It?",
        "Worlds I've Lost",
      ],
      type: "MCQs",
      correctAnswers: ["Worlds I've Lost"],
    },
    {
      question: "Proper. hails from what city?",
      choices: ["Chicago", "Los Angeles", "New York", "Philadelphia"],
      type: "MCQs",
      correctAnswers: ["Philadelphia"],
    },
    {
      question:
        "What is the title of Proper.'s debut album released in 2019?",
      choices: [
        "Always Something",
        "It's Never Enough",
        "Made Up Dreams",
        "Be Your Own Someone",
      ],
      type: "MCQs",
      correctAnswers: ["Made Up Dreams"],
    },
  ],
};
