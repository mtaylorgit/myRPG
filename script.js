let xp = 0;
let health = 100;
let bits = 50;
let currentWeapon = 0;
let fighting;
let mockHealth;
let inventory = ["tutorials"];

const button1 = document.querySelector("#button1");//selector variable for Go to freeCodeCamp button
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("xpText");
const healthText = document.querySelector("#healthText");
const bitText = document.querySelector("#bitText");
const mockStats = document.querySelector("#mockStats");
const mockName = document.querySelector("#mockName");
const mockHealthText = document.querySelector("#mockHealth");

const tools = [
    {name: "freeCodeCamp", power:5},
    {name: "theOdinProject", power:30},
    {name: "codingBooks", power: 50}, //like Eloquent Javascript, it's free, Google it
    {name: "mainProject", power: 100}//You can apply your programming skills within a professional-grade framework or tools like ASP.NET MVC, Spring Boot, or React. Add user authentication.
];

const mocks = [
    {
        name: "mockTest",
        level: 2,
        health: 15
    },
    {
        name: "mockInterview",
        level: 8,
        health: 60
    },
    {
        name: "interview",
        level: 20,
        health: 300
    }
]

const locations = [
    {
        name: "computer",
        "button text": ["Go to freeCodeCamp", "Go to Coding Meetup", "Interview"],
        "button functions": [goFreeCodeCamp, goMeetup, interview],
        text: "You are on your computer. You see on your social media that there is a coding meetup."//this will need to be updated
    },
    //below, all locations should be from the one above
    {
        name: "freeCodeCamp",
        "button text": ["Study 10 knowledge (10 bits)", "Study tool (30 bits)", "Go to your computer"],
        "button functions": [studyKnowledge, studyTools, goComputer],
        text: "You go to your computer."
    },

    {
        name: "meetup",
        "button text": ["Complete a mock test", "Complete a mock interview", "Go to your computer"],
        "button functions": [mockTest, mockInterview, goComputer],
        text: "You go to a coding meetup. You have options for practicing skills."
    },
    {
        name: "interview",
        "button text": ["Answer coding question", "Dodge question", "Run out screaming"],
        "button functions": [answerQuestion, dodgeQuestion, Run],
        text: "You go to a live interview. You are given items to complete in person."
    }
    {
        name: "lose",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text: "You fail. &#x2620;"
    },
    { 
        name: "win", 
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"], 
        "button functions": [restart, restart, restart], 
        text: "You ace the interview! YOU WIN THE GAME! &#x1F389;" 
    }
];

//initialize buttons




