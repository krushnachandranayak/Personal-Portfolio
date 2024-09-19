// upload.js

const algoliasearch = require('algoliasearch');

// Initialize Algolia client
const client = algoliasearch('CKEC07XCIQ', '9b9225a8b9c971f94995a70e72b7f059'); // Use Admin API Key for writing

// Initialize index
const index = client.initIndex('projects');

// Your project records
const records = [
    {
      "objectID": "1",
      "title": "PingPong Game",
      "description": "The game involves two paddles and a moving ball. The players have to move paddles in an upwards or downward direction and save the ball from getting hit by the wall.",
      "githubLink": "https://github.com/krushnachandranayak/Pingpong-game-useing-javascript.git",
      "previewLink": "https://krushnachandranayak.github.io/Pingpong-game-useing-javascript/",
      "image": "https://krushna-personal-portfolio.netlify.app/project1.webp"
    },
    {
      "objectID": "2",
      "title": "Basic Calculator",
      "description": "Basic calculators can do only addition, subtraction, multiplication, and division mathematical calculations.",
      "githubLink": "https://github.com/krushnachandranayak/Basic-Calculator.git",
      "previewLink": "https://krushnachandranayak.github.io/Basic-Calculator/",
      "image": "https://krushna-personal-portfolio.netlify.app/project2.webp"
    },
    {
      "objectID": "3",
      "title": "Age Calculator",
      "description": "The Age Calculator can determine the age or interval between two dates.",
      "githubLink": "https://github.com/krushnachandranayak/Age-calculator.git",
      "previewLink": "https://krushnachandranayak.github.io/Age-calculator/",
      "image": "https://krushna-personal-portfolio.netlify.app/project3.jpeg"
    },
    {
      "objectID": "4",
      "title": "Super Hero Hunt",
      "description": "A scavenger hunt in which children retrieve the potent weapons of the best-known Marvel superheroes!",
      "githubLink": "https://github.com/krushnachandranayak/super_heros_hunt.git",
      "previewLink": "https://krushnachandranayak.github.io/super_heros_hunt/",
      "image": "https://krushna-personal-portfolio.netlify.app/project4.jpg"
    },
    {
      "objectID": "5",
      "title": "Alarm Clock",
      "description": "An alarm clock that makes a sound or signal at a specified time to wake people up or remind them of something.",
      "githubLink": "https://github.com/krushnachandranayak/Alarm-clock.git",
      "previewLink": "https://krushnachandranayak.github.io/Alarm-clock/",
      "image": "https://krushna-personal-portfolio.netlify.app/project5.jpeg"
    },
    {
      "objectID": "6",
      "title": "Stopwatch",
      "description": "A stopwatch is a watch with buttons which you press at the beginning and end of an event, so that you can measure exactly how long it takes.",
      "githubLink": "https://github.com/krushnachandranayak/Stopwatch.git",
      "previewLink": "https://krushnachandranayak.github.io/Stopwatch/",
      "image": "https://krushna-personal-portfolio.netlify.app/project6.jpg"
    }
  ];

// Upload records to Algolia
index.saveObjects(records)
  .then(({ objectIDs }) => {
    console.log('Records uploaded successfully:', objectIDs);
  })
  .catch(err => {
    console.error('Error uploading records:', err);
  });
