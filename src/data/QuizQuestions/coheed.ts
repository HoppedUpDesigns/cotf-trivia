/***************************************************************************************************************************
 * @file: PROJECT-ROOT-FOLDER/src/data/QuizQuestions/coheed.ts
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: 
 *  - This file contains the quiz questions and answers related to the "Coheed and Cambria" topic.
 *  - Each question is structured with options, a question type, and the correct answer(s).
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: 
 *  - Provides a specific set of quiz questions for the "Coheed and Cambria" theme.
 *  - Supports multiple-choice questions (MCQs) and questions with multiple correct answers (MAQs).
 *  - Enhances the variety of the quiz by offering diverse questions within the same topic.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/26/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *  - Initial creation with a set of questions specifically curated for the "Coheed and Cambria" topic.
 *  - Regular updates to questions and answers to ensure accuracy and engagement.
 *  - Inclusion of additional questions to expand the question set over time.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *  - The questions in this file are designed to challenge fans of Coheed and Cambria and test their 
 *  - knowledge about specific details from the band's history.
 *  - Regular review and updates are crucial to keep the content fresh and accurate.
 ***************************************************************************************************************************/

// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from ".";

export const coheed: Topic = {
  topic: "Coheed and Cambria",
  totalQuestions: 96,
  questions: [
    {
      question: "What was Coheed and Cambria's first single?",
      choices: [
        "Junesong Provision",
        "Time Consumer",
        "Devil In Jersey City",
        "Hearshot Kid Disaster",
      ],
      type: "MCQs",
      correctAnswers: ["Devil In Jersey City"],
    },
    {
      question: "What is the name of the song that Coheed and Cambria decided not to release because of the COVID-19 pandemic?",
      choices: [
        "Jessie's Girl 2",
        "The Great Destroyer",
        "Hallelujah Quarantine",
        "Angel Dust",
      ],
      type: "MCQs",
      correctAnswers: ["Hallelujah Quarantine"],
    },
    {
      question: "What video game features the Coheed and Cambria song 'Deranged'?",
      choices: [
        "Dark Souls",
        "Batman: Arkham City",
        "Portal 2",
        "L.A. Noire",
      ],
      type: "MCQs",
      correctAnswers: ["Batman: Arkham City"],
    },
    {
      question: "What ZZ Top song did Coheed and Cambris record for the tribute album 'A Tribute from Friends'?",
      choices: [
        "Beer Drinkers & Hell Raisers",
        "La Grange",
        "Got Me Under Pressure",
        "Cheap Sunglasses",
      ],
      type: "MCQs",
      correctAnswers: ["Beer Drinkers & Hell Raisers"],
    },
    {
      question: "In 2011, what crime was bassist Michael Todd arrested for?",
      choices: [
        "Murder",
        "Armed Robbery",
        "Public Intoxication",
        "Jaywalking",
      ],
      type: "MCQs",
      correctAnswers: ["Armed Robbery"],
    },
    {
      question: "What is the name of Coheed and Cambria's first studio album?",
      choices: [
        "The Second Stage Turbine Blade",
        "Good Apollo, I'm Burning Star IV, Vol. 1",
        "The Color Before the Sun",
        "Good Apollo, I'm Burning Star IV, Vol. 2",
      ],
      type: "MCQs",
      correctAnswers: ["The Second Stage Turbine Blade"],
    },
    {
      question: "What year was 'The Second Stage Turbine Blade' released?",
      choices: ["2003", "2001", "2004", "2002"],
      type: "MCQs",
      correctAnswers: ["2002"],
    },
    {
      question: "What year was `In Keeping Secrets of Silent Earth: 3' released?",
      choices: ["2003", "2004", "2005", "2006"],
      type: "MCQs",
      correctAnswers: ["2003"],
    },
    {
      question:
        "What year was 'Good Apollo, I'm Burning Star IV, Vol. 1' released?",
      choices: ["2004", "2005", "2006", "2007"],
      type: "MCQs",
      correctAnswers: ["2005"],
    },
    {
      question:
        "What year was 'Good Apollo, I'm Burning Star IV, Vol. 2: No World For Tomorrow' released?",
      choices: ["2005", "2006", "2007", "2008"],
      type: "MCQs",
      correctAnswers: ["2007"],
    },
    {
      question: "What year was 'Year of the Black Rainbow' released?",
      choices: ["2010", "2008", "2009", "2011"],
      type: "MCQs",
      correctAnswers: ["2010"],
    },
    {
      question: "What year was 'The Afterman: Ascension' released?",
      choices: ["2012", "2011", "2010", "2013"],
      type: "MCQs",
      correctAnswers: ["2012"],
    },
    {
      question: "What year was 'The Afterman: Descension' released?",
      choices: ["2012", "2010", "2013", "2014"],
      type: "MCQs",
      correctAnswers: ["2013"],
    },
    {
      question: "What year was 'The Color Before the Sun' released?",
      choices: ["2011", "2012", "2015", "2016"],
      type: "MCQs",
      correctAnswers: ["2015"],
    },
    {
      question: "In what year was Coheed and Cambria formed under the name Shabūtie?",
      choices: ["1998", "2001", "1995", "2005"],
      type: "MCQs",
      correctAnswers: ["1995"],
    },
    {
      question: "Which founding members of Coheed and Cambria are still in the band as of 2023?",
      choices: [
        "Claudio Sanchez and Josh Eppard",
        "Claudio Sanchez and Travis Stever",
        "Travis Stever and Josh Eppard",
        "Claudio Sanchez, Travis Stever, and Michael Todd",
      ],
      type: "MCQs",
      correctAnswers: ["Claudio Sanchez and Travis Stever"],
    },
{
      question: "What is the name of the band that Claudio and Travis were in that broke up in 1995?",
      choices: [
        "Delirium Trigger",
        "Toxic Parents",
        "Beautiful Loser",
        "Shabütie",
      ],
      type: "MCQs",
      correctAnswers: ["Toxic Parents"],
    },
    {
      question: "What is the title of Coheed and Cambria's debut album?",
      choices: [
        "The Second Stage Turbine Blade",
        "In Keeping Secrets of Silent Earth: 3",
        "Good Apollo, I'm Burning Star IV",
        "The Afterman: Ascension",
      ],
      type: "MCQs",
      correctAnswers: ["The Second Stage Turbine Blade"],
    },
    {
      question:
        "Which member of the band joined after the release of their debut album?",
      choices: ["Travis Stever", "Josh Eppard", "Michael Todd", "Zach Cooper"],
      type: "MCQs",
      correctAnswers: ["Josh Eppard"],
    },
    {
      question: "What is the name of Coheed and Cambria's official fan club?",
      choices: [
        "The Prize Fighter Inferno",
        "The Children of the Fence",
        "The Keywork Collective",
        "The Amory Guild",
      ],
      type: "MCQs",
      correctAnswers: ["The Children of the Fence"],
    },
    {
      question:
        "Which member of Coheed and Cambria temporarily left the band but later returned?",
      choices: ["Josh Eppard", "Travis Stever", "Zach Cooper", "Chris Pennie"],
      type: "MCQs",
      correctAnswers: ["Josh Eppard"],
    },
    {
      question:
        "What significant event led to the formation of Coheed and Cambria?",
      choices: [
        "A shared vision",
        "A chance meeting",
        "A high school friendship",
        "A mutual love for progressive rock",
      ],
      type: "MCQs",
      correctAnswers: ["A high school friendship"],
    },
    {
      question:
        "In what city did Claudio Sanchez and Travis Stever form the band Coheed and Cambria?",
      choices: ["Nyack", "Boston", "Los Angeles", "Seattle"],
      type: "MCQs",
      correctAnswers: ["Nyack"],
    },
    {
      question:
        "Which Coheed and Cambria album serves as the prequel to 'The Amory Wars' concept?",
      choices: [
        "In Keeping Secrets of Silent Earth: 3",
        "Year of the Black Rainbow",
        "The Afterman: Ascension",
        "The Second Stage Turbine Blade",
      ],
      type: "MCQs",
      correctAnswers: ["Year of the Black Rainbow"],
    },
    {
      question:
        "Who inspired the character Coheed Kilgannon?",
      choices: [
        "A family member",
        "A friend",
        "A comic book character",
        "A historical figure",
      ],
      type: "MCQs",
      correctAnswers: ["A family member"],
    },
    {
      question:
        "Which album marked the return of Josh Eppard to Coheed and Cambria after a temporary departure?",
      choices: [
        "The Afterman: Descension",
        "Good Apollo, I'm Burning Star IV",
        "Vaxis - Act I: The Unheavenly Creatures",
        "No World for Tomorrow",
      ],
      type: "MCQs",
      correctAnswers: ["The Afterman: Descension"],
    },
    {
      question:
        "In 2012, which member of Coheed and Cambria was replaced by Zach Cooper?",
      choices: ["Michael Todd", "Chris Pennie", "Jon Carleo", "Josh Eppard"],
      type: "MCQs",
      correctAnswers: ["Michael Todd"],
    },
    {
      question:
        "What event served as the catalyst for Claudio Sanchez to start writing the story of 'The Amory Wars'?",
      choices: [
        "A personal tragedy",
        "A dream",
        "A science fiction movie",
        "A road trip",
      ],
      type: "MCQs",
      correctAnswers: ["A personal tragedy"],
    },
    {
      question:
        "Which song by Coheed and Cambria is considered a tribute to Claudio Sanchez's dog Apollo?",
      choices: [
        "Welcome Home",
        "The Suffering",
        "Feathers",
        "The Running Free",
      ],
      type: "MCQs",
      correctAnswers: ["Feathers"],
    },
    {
      question:
        "What role did Nate Kelley play in the early years of Coheed and Cambria?",
      choices: ["Lead vocalist", "Drummer", "Bassist", "Lead guitarist"],
      type: "MCQs",
      correctAnswers: ["Drummer"],
    },
    {
      question:
        "What was the original name of Coheed and Cambria?",
      choices: [
        "Shabütie",
        "The Prize Fighter Inferno",
        "Weerd Science",
        "The Amory Wars",
      ],
      type: "MCQs",
      correctAnswers: ["Shabütie"],
    },
    {
      question:
        "What band was Dr. Know who played guitar on the song 'Time Consumer' known for?",
      choices: ["Bad Brains", "Faith No More", "At the Drive-In", "Misfits"],
      type: "MCQs",
      correctAnswers: ["Bad Brains"],
    },
    {
      question:
        "The song 'Atlas' is about whom?",
      choices: ["Claudio's son", "Travis's son", "A Greek God", "Ayn Rand"],
      type: "MCQs",
      correctAnswers: ["Claudio's son"],
    },
    {
      question:
        "In what year did Coheed and Cambria sign their first major record deal?",
      choices: ["1998", "2001", "2003", "2005"],
      type: "MCQs",
      correctAnswers: ["2003"],
    },
    {
      question:
        "Which influential producer worked with Coheed and Cambria on 'In Keeping Secrets of Silent Earth: 3'?",
      choices: [
        "Butch Vig",
        "David Bottrill",
        "Chris Bittner",
        "Michael Birnbaum",
      ],
      type: "MCQs",
      correctAnswers: ["Michael Birnbaum"],
    },
    {
      question:
        "What is the the name of the third part of 'The Camper Velourium'?",
      choices: [
        "Al the Killer",
        "Faint of Hearts",
        "The Light & the Glass",
        "Backend of Forever",
      ],
      type: "MCQs",
      correctAnswers: ["Al the Killer"],
    },
    {
      question:
        "Which album marked the temporary inclusion of drummer Taylor Hawkins?",
      choices: [
        "Good Apollo, I'm Burning Star IV, Vol. 2",
        "The Afterman: Ascension",
        "Year of the Black Rainbow",
        "Vaxis - Act I: The Unheavenly Creatures",
      ],
      type: "MCQs",
      correctAnswers: ["Good Apollo, I'm Burning Star IV, Vol. 2"],
    },
    {
      question:
        "What award did Coheed and Cambria win in 2004?",
      choices: [
        "Grammy for Best Album",
        "Metal Hammer Golden Gods Award for Best Album",
        "The Road Woodie for Best Live Performance",
        "MTV Music Award for Best Band",
      ],
      type: "MCQs",
      correctAnswers: ["The Road Woodie for Best Live Performance"],
    },
    {
      question:
        "Which member of Coheed and Cambria took on the persona of 'Sirius Amory'?",
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
        "Which album by Coheed and Cambria marked a return to 'The Amory Wars' concept after a brief departure?",
      choices: [
        "Year of the Black Rainbow",
        "The Afterman: Descension",
        "Vaxis - Act I: The Unheavenly Creatures",
        "Good Apollo, I'm Burning Star IV",
      ],
      type: "MCQs",
      correctAnswers: ["Vaxis - Act I: The Unheavenly Creatures"],
    },
    {
      question:
        "During the recording of 'Year of the Black Rainbow,' which member of the band temporarily left, leading to Chris Pennie joining the band?",
      choices: [
        "Josh Eppard",
        "Travis Stever",
        "Michael Todd",
        "Claudio Sanchez",
      ],
      type: "MCQs",
      correctAnswers: ["Josh Eppard"],
    },
    {
      question:
        "In 2022, Coheed and Cambria celebrated the anniversary of which album with a special re-release?",
      choices: [
        "Good Apollo, I'm Burning Star IV",
        "The Second Stage Turbine Blade",
        "In Keeping Secrets of Silent Earth: 3",
        "Year of the Black Rainbow",
      ],
      type: "MCQs",
      correctAnswers: ["In Keeping Secrets of Silent Earth: 3"],
    },
    {
      question:
        "What was the title of Shabütie's first demo album released in 1999?",
      choices: [
        "The Second Stage Turbine Blade",
        "Plan to Take Over the World",
        "The Penelope EP",
        "The Delirium Trigger EP",
      ],
      type: "MCQs",
      correctAnswers: ["Plan to Take Over the World"],
    },
    {
      question:
        "What music festival did Coheed and Cambria co-headline in 2008?",
      choices: ["Coachella", "Burning Man", "Lollapalooza", "Bamboozle"],
      type: "MCQs",
      correctAnswers: ["Bamboozle"],
    },
    {
      question:
        "In 2005, Coheed and Cambria released a limited-edition graphic novel accompanying which album?",
      choices: [
        "Good Apollo, I'm Burning Star IV, Vol. 1",
        "In Keeping Secrets of Silent Earth: 3",
        "The Afterman: Ascension",
        "Vaxis - Act I: The Unheavenly Creatures",
      ],
      type: "MCQs",
      correctAnswers: ["Good Apollo, I'm Burning Star IV, Vol. 1"],
    },
    {
      question:
        "What is the second part of 'The Willing Well'?",
      choices: [
        "Mother May I",
        "From Fear Through the Eyes of Madness",
        "The Final Cut",
        "The Telling Truth",
      ],
      type: "MCQs",
      correctAnswers: ["From Fear Through the Eyes of Madness"],
    },
    {
      question:
        "In 2015, Coheed and Cambria launched a record label. What is the name of this label?",
      choices: [
        "Evil Ink Records",
        "Keywork Records",
        "Heed Your Call Records",
        "Amory Music",
      ],
      type: "MCQs",
      correctAnswers: ["Evil Ink Records"],
    },
    {
      question:
        "During the early years of Coheed and Cambria, what pseudonym did Claudio Sanchez use?",
      choices: [
        "Sirius Amory",
        "The Crowing",
        "The Prize Fighter Inferno",
        "The Running Free",
      ],
      type: "MCQs",
      correctAnswers: ["The Prize Fighter Inferno"],
    },
    {
      question:
        "Which Coheed and Cambria album features the single 'The Running Free'?",
      choices: [
        "The Afterman: Descension",
        "Year of the Black Rainbow",
        "Good Apollo, I'm Burning Star IV, Volume Two: No World for Tomorrow",
        "Vaxis - Act I: The Unheavenly Creatures",
      ],
      type: "MCQs",
      correctAnswers: ["Good Apollo, I'm Burning Star IV, Volume Two: No World for Tomorrow"],
    },
    {
      question:
        "In 2004, Coheed and Cambria joined the lineup of which major music festival, boosting their exposure?",
      choices: ["Coachella", "Lollapalooza", "Reading Festival", "Bonnaroo"],
      type: "MCQs",
      correctAnswers: ["Lollapalooza"],
    },
    {
      question:
        "What is the title of Coheed and Cambria's second music video?",
      choices: [
        "The Suffering",
        "A Favor House Atlantic",
        "Devil in Jersey City",
        "Blood Red Summer",
      ],
      type: "MCQs",
      correctAnswers: ["A Favor House Atlantic"],
    },
    {
      question:
        "In 2005, Coheed and Cambria released a live DVD. What is the title of this DVD?",
      choices: [
        "Live at the Roxy",
        "Live at the Starland Ballroom",
        "The Last Supper: Live at Hammerstein Ballroom",
        "Good Apollo, I'm Burning Star IV Live",
      ],
      type: "MCQs",
      correctAnswers: ["Live at the Starland Ballroom"],
    },
    {
      question:
        "What is the name of Coheed and Cambria's fifth studio album, released in 2010?",
      choices: [
        "The Afterman: Ascension",
        "Year of the Black Rainbow",
        "Vaxis - Act I: The Unheavenly Creatures",
        "The Color Before the Sun",
      ],
      type: "MCQs",
      correctAnswers: ["Year of the Black Rainbow"],
    },
    {
      question:
        "What year was Live at the Starland Ballroom filmed?",
      choices: [
        "2006",
        "2003",
        "2005",
        "2004",
      ],
      type: "MCQs",
      correctAnswers: ["2004"],
    },
    {
      question:
        "What is the name of Coheed and Cambria's first-ever headlining tour, launched in 2004?",
      choices: [
        "The Unheavenly Tour",
        "The Neverender Tour",
        "The Amory Wars Tour",
        "The Coheed Chronicles Tour",
      ],
      type: "MCQs",
      correctAnswers: ["The Neverender Tour"],
    },
    {
      question:
        "In 2013, Coheed and Cambria released a concept album that served as a prequel to 'The Amory Wars' storyline. What is the title of this album?",
      choices: [
        "Good Apollo, I'm Burning Star IV",
        "Year of the Black Rainbow",
        "The Afterman: Ascension",
        "The Afterman: Descension",
      ],
      type: "MCQs",
      correctAnswers: ["The Afterman: Ascension"],
    },
    {
      question:
        "Which member of Shabütie was primarily a  bass guitar but switched to guitar for the good of the band?",
      choices: [
        "Claudio Sanchez",
        "Michael Todd",
        "Zach Cooper",
        "Josh Eppard",
      ],
      type: "MCQs",
      correctAnswers: ["Michael Todd"],
    },
    {
      question:
        "What is the name of the main protagonist in 'The Amory Wars' narrative?",
      choices: ["Coheed Kilgannon", "Sirius Amory", "The Crowing", "Ambellina"],
      type: "MCQs",
      correctAnswers: ["Coheed Kilgannon"],
    },
    {
      question:
        "Which record label signed Coheed and Cambria for their debut album 'The Second Stage Turbine Blade'?",
      choices: [
        "Columbia Records",
        "Equal Vision Records",
        "Roadrunner Records",
        "Atlantic Records",
      ],
      type: "MCQs",
      correctAnswers: ["Equal Vision Records"],
    },
    {
      question:
        "What is the title of Coheed and Cambria's first live album, released in 2004?",
      choices: [
        "Live at the Apollo",
        "Live at the Roxy",
        "The Last Supper: Live at Hammerstein Ballroom",
        "Live at CBGB",
      ],
      type: "MCQs",
      correctAnswers: ["Live at the Roxy"],
    },
    {
      question:
        "In 2017, Coheed and Cambria released a single that was also featured in the soundtrack of a popular animated film. What is the title of this single?",
      choices: [
        "Old Flames",
        "You Got Spirit, Kid",
        "Here to Mars",
        "The Afterman",
      ],
      type: "MCQs",
      correctAnswers: ["You Got Spirit, Kid"],
    },
    {
      question:
        "Which Coheed and Cambria album features the character Ambellina?",
      choices: [
        "Vaxis - Act I: The Unheavenly Creatures",
        "Good Apollo, I'm Burning Star IV",
        "Year of the Black Rainbow",
        "In Keeping Secrets of Silent Earth: 3",
      ],
      type: "MCQs",
      correctAnswers: ["In Keeping Secrets of Silent Earth: 3"],
    },
    {
      question:
        "What was the name of Coheed and Cambria's 2018 tour?",
      choices: [
        "The Keywork Chronicles Tour",
        "The Vaxis Voyage Tour",
        "The Amory Wars Tour",
        "The Unheavenly Creatures Tour",
      ],
      type: "MCQs",
      correctAnswers: ["The Unheavenly Creatures Tour"],
    },
    {
      question:
        "In 2015, Coheed and Cambria released an album that marked a departure from 'The Amory Wars' concept. What is the title of this album?",
      choices: [
        "Vaxis - Act I: The Unheavenly Creatures",
        "The Afterman: Descension",
        "The Color Before the Sun",
        "Year of the Black Rainbow",
      ],
      type: "MCQs",
      correctAnswers: ["The Color Before the Sun"],
    },
    {
      question:
        "Which video game released in 2006 features the song 'Welcome Home'?",
      choices: [
        "Guitar Hero III: Legends of Rock",
        "Fallout 3",
        "Halo 3",
        "Rock Band",
      ],
      type: "MCQs",
      correctAnswers: ["Guitar Hero III: Legends of Rock"],
    },
    {
      question:
        "Coheed and Cambria's song 'The Suffering' gained significant radio play. In which year was it released as a single?",
      choices: ["2003", "2005", "2007", "2009"],
      type: "MCQs",
      correctAnswers: ["2005"],
    },
    {
      question:
        "Which famous comic book artist collaborated with Claudio Sanchez on 'The Amory Wars' comic book series?",
      choices: ["Jim Lee", "Todd McFarlane", "Alex Ross", "Brian Bolland"],
      type: "MCQs",
      correctAnswers: ["Jim Lee"],
    },
    {
      question:
        "Coheed and Cambria released a live album in 2009, capturing performances from their 'Neverender' tour. What is the title of this live album?",
      choices: [
        "The Unheavenly Creatures Tour: Live",
        "Neverender: Children of the Fence Edition",
        "Live at the Apollo",
        "The Last Supper: Live at Hammerstein Ballroom",
      ],
      type: "MCQs",
      correctAnswers: ["Neverender: Children of the Fence Edition"],
    },
    {
      question:
        "What is the title of the song that served as the lead single for Coheed and Cambria's album 'Vaxis - Act I: The Unheavenly Creatures'?",
      choices: [
        "The Dark Sentencer",
        "The Gutter",
        "Old Flames",
        "Unheavenly Creatures",
      ],
      type: "MCQs",
      correctAnswers: ["The Dark Sentencer"],
    },
    {
      question:
        "Coheed and Cambria's fourth studio album, 'No World for Tomorrow,' was released in 2007. What is the title of the opening track on this album?",
      choices: [
        "Feathers",
        "The End Complete I: The Fall of House Atlantic",
        "No World for Tomorrow",
        "The Hound (Of Blood and Rank)",
      ],
      type: "MCQs",
      correctAnswers: ["The End Complete I: The Fall of House Atlantic"],
    },
    {
      question:
        "What year did the Neverender: SSTB tour happen?",
      choices: [
        "2011",
        "2010",
        "2012",
        "2009",
      ],
      type: "MCQs",
      correctAnswers: ["2011"],
    },
    {
      question:
        "Which member of Coheed and Cambria joined the band in 1996, replacing Jon Carleo as bassist?",
      choices: ["Zach Cooper", "Michael Todd", "Josh Eppard", "Travis Stever"],
      type: "MCQs",
      correctAnswers: ["Michael Todd"],
    },
    {
      question:
        "What is the title of the song that served as the lead single for Coheed and Cambria's album 'Good Apollo, I'm Burning Star IV: Vol. 2 – No World for Tomorrow'?",
      choices: [
        "The Running Free",
        "Feathers",
        "Mother Superior",
        "The End Complete III: The End Complete",
      ],
      type: "MCQs",
      correctAnswers: ["The Running Free"],
    },
    {
      question:
        "Coheed and Cambria's album 'The Afterman: Descension' continues the story of a character introduced in 'The Afterman: Ascension.' What is the name of this character?",
      choices: ["Sirius Amory", "The Writer", "The Keywork", "Al the Killer"],
      type: "MCQs",
      correctAnswers: ["Sirius Amory"],
    },
    {
      question:
        "In 2017, Coheed and Cambria announced their collaboration with a brewery to release a signature beer. What is the name of this beer?",
      choices: [
        "Welcome Home Wheat",
        "Unheavenly Brew",
        "Gravity's Union IPA",
        "Keywork Lager",
      ],
      type: "MCQs",
      correctAnswers: ["Unheavenly Brew"],
    },
    {
      question:
        "Coheed and Cambria's album 'Vaxis - Act I: The Unheavenly Creatures' was released in 2018. What is the name of the character introduced in this album?",
      choices: ["Sirius Amory", "The Gutter", "Vic the Butcher", "Creature"],
      type: "MCQs",
      correctAnswers: ["Vic the Butcher"],
    },
    {
      question:
        "What year was The Last Supper: Live at Hammerstein filmed?",
      choices: [
        "2005",
        "2007",
        "2008",
        "2006",
      ],
      type: "MCQs",
      correctAnswers: ["2006"],
    },
    {
      question:
        "In 2015, Coheed and Cambria released an animated video for the song 'You Got Spirit, Kid.' Who directed this animated video?",
      choices: [
        "Wes Anderson",
        "Robert Rodriguez",
        "Claudio Sanchez",
        "Jon Schnepp",
      ],
      type: "MCQs",
      correctAnswers: ["Claudio Sanchez"],
    },
  {
    question: "Who were the founding members of the band Beautiful Loser after Toxic Parents split?",
    choices: [
      "Claudio Sanchez, Travis Stever, and Shawna Wirkus",
      "Claudio Sanchez, Travis Stever, and Nate Kelley",
      "Claudio Sanchez, Travis Stever, and Jon Carleo",
      "Claudio Sanchez, Travis Stever, and Michael Todd",
    ],
    type: "MCQs",
    correctAnswers: ["Claudio Sanchez, Travis Stever, and Shawna Wirkus"],
    },
  {
    question: "What led to the breakup of the band Beautiful Loser in June 1995?",
    choices: [
      "Creative differences",
      "Argument over gas money",
      "Lack of interest in music",
      "Disagreement on the band's name",
    ],
    type: "MCQs",
    correctAnswers: ["Argument over gas money"],
    },
    {
    question: "What African tribe chant inspired the band name Shabütie?",
    choices: [
      "Maasai",
      "Zulu",
      "Himba",
      "Xhosa",
    ],
    type: "MCQs",
    correctAnswers: ["Maasai"],
    },
    {
    question: "Who replaced Jon Carleo on bass when he left the band in August 1996?",
    choices: [
      "Nate Kelley",
      "Michael Todd",
      "Josh Eppard",
      "Chris Pennie",
    ],
    type: "MCQs",
    correctAnswers: ["Michael Todd"],
    },
    {
    question: "Who made a guest appearance on Coheed and Cambria's first studio album?",
    choices: [
      "John A. Hanson",
      "Claudio Sanchez",
      "Travis Stever",
      "Dr. Know",
    ],
    type: "MCQs",
    correctAnswers: ["Dr. Know"],
    },
    {
    question: "Who recorded the drums for Coheed and Cambria's fourth studio album?",
    choices: [
      "Josh Eppard",
      "Chris Pennie",
      "Taylor Hawkins",
      "Michael Petrak",
    ],
    type: "MCQs",
    correctAnswers: ["Taylor Hawkins"],
    },
    {
    question: "Who replaced Josh Eppard and Michael Todd in early November 2006?",
    choices: [
      "Matt Williams and Michael Petrak",
      "Chris Pennie and Taylor Hawkins",
      "Josh Eppard and Michael Todd",
      "Zachary Cooper and Chondra Echert",
    ],
    type: "MCQs",
    correctAnswers: ["Matt Williams and Michael Petrak"],
    },
    {
    question: "Who joined Coheed and Cambria as its drummer in June 2008?",
    choices: [
      "Nate Kelley",
      "Chris Pennie",
      "Taylor Hawkins",
      "Josh Eppard",
    ],
    type: "MCQs",
    correctAnswers: ["Chris Pennie"],
    },
    {
    question: "What was the name of the band formed by Claudio Sanchez, Travis Stever, and Shawna Wirkus after Toxic Parents split in March 1995?",
    choices: [
      "Beautiful Loser",
      "Shabütie",
      "Toxic Trio",
      "Naked Prey"
    ],
    type: "MCQs",
    correctAnswers: ["Beautiful Loser"],
    },
    {
    question: "Which band member left Shabütie after an argument over gas money, leading to the formation of the trio named Shabütie?",
    choices: [
      "Claudio Sanchez",
      "Travis Stever",
      "Nate Kelley",
      "Jon Carleo"
    ],
    type: "MCQs",
    correctAnswers: ["Travis Stever"],
    },
    {
    question: "What word, meaning 'naked prey' became the name of the trio formed after the breakup of Beautiful Loser?",
    choices: [
      "Shabütie",
      "Toxic",
      "Prey Trio",
      "Naked Losers"
    ],
    type: "MCQs",
    correctAnswers: ["Shabütie"],
    },
    {
    question: "Which member joined Shabütie in August 1996, replacing Jon Carleo on bass?",
    choices: [
      "Michael Todd",
      "Nate Kelley",
      "Josh Eppard",
      "Travis Stever"
    ],
    type: "MCQs",
    correctAnswers: ["Michael Todd"],
    },
    {
    question: "Who is Coheed and Cambria's manager?",
    choices: [
      "Blaze James",
      "Nick Raskulinecz",
      "Shawna Wirkus",
      "Michael Todd"
    ],
    type: "MCQs",
    correctAnswers: ["Blaze James"],
    },
    {
      question: "When did Nate Kelley leave Shabūtie?",
      choices: [
        "1999",
        "1998",
        "1996",
        "1995"
      ],
      type: "MCQs",
      correctAnswers: ["1999"],
      },
      {
        question: "When did Travis Stever join Shabūtie?",
        choices: [
          "1998",
          "1994",
          "1996",
          "1999"
        ],
        type: "MCQs",
        correctAnswers: ["1999"],
        },
        {
          question:
            "What was the title of Shabütie's second EP released in 1999?",
          choices: [
            "Toxic Parents",
            "Plan to Take Over the World",
            "The Naked Prey EP",
            "The Delirium Trigger EP",
          ],
          type: "MCQs",
          correctAnswers: ["The Penelope EP"],
        },
        {
          question:
            "Who is listed as the drummer in the liner notes of 'Delirium Trigger'?",
          choices: [
            "Nate Kelley",
            "Chris Pennie",
            "Taylor Hawkins",
            "Josh Eppard",
          ],
          type: "MCQs",
          correctAnswers: ["Josh Eppard"],
        },
        {
          question:
            "Who is the name of the actress who starred in the video for 'Feathers'?",
          choices: [
            "Gina Gershon",
            "Elizabeth Berkley",
            "Rena Riffel",
            "Bobbie Phillips",
          ],
          type: "MCQs",
          correctAnswers: ["Rena Riffel"],
        },
  ],
};
