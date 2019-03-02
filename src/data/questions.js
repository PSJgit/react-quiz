import uuid from 'uuid'

const questions = [
  {
    question: 'What is the science of colours?',
    options: [
      'Thematics', 
      'Chromatics',
      'Makaton',
      'Taxonomy '
    ],
    answers: [1]
  }, 
  {
    question: 'What did Alfred Nobel develop?',
     options: [
      'Gunpowder', 
      'The atomic bomb',
      'Dynamite',
      'Nobelium'
    ],
    answers: [2]
  }, 
  {
    question: 'What is the name for the Jewish New Year?',
     options: [
      'Hanukkah', 
      'Yom Kippur',
      'Kwanzaa',
      'Rosh Hashanah'
    ],
    answers: [3]
  }, 
  {
    question: 'Which cars are produced by the Ford Motor Company?',
     options: [
      'F-150', 
      'Stinger',
      'Mustang GT Fastback',
      'MX-5',
      'GLS'
    ],
    answers: [0, 2]
  },
  {
    question: 'What are the two most common religions in India?',
     options: [
      'Islam', 
      'Jainism',
      'Christianity',
      'Hinduism',
      'Mormonism'
    ],
    answers: [0, 3]
  },
  {
    question: 'Which country is the smallest?',
     options: [
      'Monaco', 
      'Singapore',
      'Nauru',
      'San Marino'
    ],
    answers: [0]
  },
  {
    question: 'Which of these films were directed by Steven Spielberg?',
     options: [
      'Jaws', 
      'Hook',
      'The Colour Purple',
      'The Goonies',
      'Minority Report'
    ],
    answers: [0, 1, 2, 4]
  },
  {
    question: 'What\'s the rough population of the world as of 2019?',
     options: [
      '7 Million', 
      '10 Billion',
      '5 Billion',
      '7.6 Billion',
      '6.2 Billion'
    ],
    answers: [3]
  },
  {
    question: 'The universal symbol for truce is...?',
     options: [
      'A black flag', 
      'A red flag',
      'A white Flag',
      'The peace sign',
      'A green Flag'
    ],
    answers: [2]
  },
  {
    question: 'Which of the following are input devices for a computer?',
     options: [
      'Mouse', 
      'Cat',
      'Keyboard',
      'Laptop'
    ],
    answers: [0, 2]
  },
  {
    question: 'When was Australia founded?',
     options: [
      '30th Feburary, 1905', 
      '1st of June, 1910',
      '8th of Decemeber, 1903',
      '1st of January, 1901'
    ],
    answers: [3]
  },
  {
    question: 'Which one of the following are insects?',
     options: [
      'Mosquito',
      'Gorilla',
      'Flea',
      'Spider',
      'Tick'
    ],
    answers: [0, 3, 4]
  },
  {
    question: 'In Which Apollo mission did the first humans land on the moon?',
     options: [
      'Apollo 7',
      'Apollo 11',
      'Apollo 9',
      'Apollo 13'
    ],
    answers: [0]
  },
  {
    question: 'Who directed the film Taxi Driver?',
     options: [
      'Robert De Niro',
      'Martin Scorsese',
      'Paul Schrader',
      'Alred Hitchcock'
    ],
    answers: [1]
  },
  {
    question: 'Which actor has received the most Oscars?',
     options: [
      'Robert De Niro',
      'Katharine Hepburn',
      'Jack Black',
      'Daniel Day-Lewis'
    ],
    answers: [1]
  },
  {
    question: 'Who was the illustrator for Roald Dahl\'s books?',
     options: [
      'Colin Elgie',
      'Rolf Armstrong',
      'John “Derf” Backderf',
      'Sir Quentin Blake'
    ],
    answers: [3]
  },
  {
    question: 'Where would you find the Sea of Tranquility?',
     options: [
      'Mars',
      'Jupiter',
      'The Moon',
      'America'
    ],
    answers: [3]
  },
  {
    question: 'What are the three primary colours?',
     options: [
      'Green',
      'Blue',
      'Yellow',
      'Brown',
      'Beige',
      'Red'
    ],
    answers: [1, 2, 5]
  },
  {
    question: 'What is the biggest fish in the ocean?',
     options: [
      'Basking Shark',
      'Blue Whale',
      'Whale Shark',
      'Dolphin'
    ],
    answers: [2]
  },
  {
    question: 'Which country has the largest population in the world?',
     options: [
      'Finland',
      'India',
      'Russia',
      'China'
    ],
    answers: [3]
  }




]


export default questions