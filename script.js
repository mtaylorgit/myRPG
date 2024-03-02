let xp = 0;//same xp
let knowledge = 100;//health
let bits = 50; //gold
let currentTool = 0;//instead of weapons
let answer; //instead of fighting
let mockHealth;//instead of monsterHealth
let inventory = ["freeCodeCamp"];//the stick


const button1 = document.querySelector("#button1");//selector variable for Go to freeCodeCamp button
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("xpText");
const knowledgeText = document.querySelector("#knowledgeText");
const bitsText = document.querySelector("#bitsText");
const mockStats = document.querySelector("#mockStats");
const mockName = document.querySelector("#mockName");
const mockHealthText = document.querySelector("#mockHealth");

const tools = [ //the weapons
    {name: 'freeCodeCamp', power:5},
    {name: 'The Odin Project', power:30},
    {name: 'Coding Books', power: 50}, 
    {name: 'Big Project', power: 100}
];

const mocks = [ //the monsters
    {
        name: "Mock Test",
        level: 2,
        health: 15
    },
    {
        name: "Mock Interview",
        level: 8,
        health: 60
    },
    {
        name: "Interview",
        level: 20,
        health: 300
    }
]

const locations = [
    {
        name: "computer",
        "button text": ["Go to your Computer", "Go to Coding Meetup", "Go to Real Interview"],
        "button functions": [goComputer, goMeetup, goInterview],
        text: "You are on your computer. You see on your social media that there is a coding meetup."
    },
   
    {
        name: "freeCodeCamp",
        "button text": ["Study Chapter (10 bits)", "Study Tutorial (30 bits)", "Go to your computer"],
        "button functions": [studyKnowledge, studyTools, goComputer],//buy health, buy weapons
        text: "You go to your computer."
    },

    {
        name: "meetup",
        "button text": ["Complete a mock test", "Complete a mock interview", "Go to your computer"],
        "button functions": [mockTest, mockInterview, goComputer],
        text: "You go to a coding meetup. You have options for practicing skills."
    },
    {
        name: "start",
        "button text": ["Answer", "Dodge question", "Run out screaming"],
        "button functions": [goAnswer, dodge, goComputer],
        text: "You are now ready to answer the questions."
    },
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
button1.onclick = goComputer;
button2.onclick = goMeetup;
button3.onclick = goInterview;

function update(location) {
    mockStats.style.display = "none";
    button1.innerText = location["button text"][0];//the location object is PASSED in this function
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerHTML = location.text;
}

function goComputer() {
    update(locations[0]);
}

function goMeetup() {
    update(locations[1]);
}

function goInterview() {
    update (locations[2]);
}

function studyKnowledge() {
    if (bits >= 10) {
        bits -= 10;
        knowledge += 10;
        bitsText.innerText = bits;
        knowledgeText.innerText = knowledge;
    } else {
        text.innerText = "You do not have enough bits to buy knowledge";
    }

 }

 function studyTools() {
    if (currentTool < tools.length -1) {
        if (bits >=30) {
            bits -= 30;
            currentTool++;
            bitsText.innerText = bits;
            let newTool = tools[currentTool].name;
            text.innerText = "You now have a " + newTool + ".";
            inventory.push(newTool);
            text.innerText += " In your inventory you have: " + inventory;
        } else {
            text.innerText = "You do not have enough bits to buy knowledge.";
        }
    } else {
        text.innerText = "You already have the most powerful knowledge!";
        button2.innerText = "Share knowledge for 15 bits";
        button2.onclick = shareTools;
    }
 }
function shareTools() {
    if (inventory.length > 1) {
        bits += 15;
        bitsText.innerText = bits;
        let currentTool = inventory.shift();
        text.innerText = "You shared " + currentTool + ".";
        text.innerText = " In your inventory you have: " + inventory;
        } else {
            text.innerText = "You don't have enough to share";
        }
    
}

function mockTest() { //fightSlime
    answer = 0;
    goAnswer();
}

function mockInterview() { //fightBeast
    answer = 1;
    goAnswer();
}

function interview() { //fightDragon
    answer = 2;
    goAnswer();
}

function start() { //goFight
    update(locations[3]);
    mockHealth = mocks[answer].health;
    mockStats.style.display = "block";
    mockName.innerText = mocks[answer].name;
    mockHealthText.innerText = knowledge;
}
//[answerQuestion, dodgeQuestion, Run]


function goAnswer() { //attack
    text.innerText = "The " +mocks[attacking].name + " has a question.";
    text.innerText += " You answer it with your " + tools[currentTool].name + ".";
    knowledge -= getMockAnswerValue(mocks[fighting].level);
    if (isMockCleared()) {
        knowledge -= tools[currentTool].power + Math.floor(Math.random() * xp)
 + 1; 
   } else {
    text.innerText += " You missed the question.";
   }
   knowledgeText.innerText = knowledge;
   knowledgeText.innerText = knowledge;
   if (knowledge <= 0) {
    lose();
   } else if (knowledge <= 0) {
    if (start === 2) {
        winGame();
    } else {
        clearMock();
    }
   }
   if (Math.random() <= .1 && inventory.length !==1) {
    text.innerText += " Your internet connection to " + inventory.pop() + " breaks."
    currentTool--;
   }
}

function getMockAnswerValue(level) {
    const cleared = (level * 5) - (Math.floor(Math.random() * xp));
    console.log(cleared);
    return cleared > 0 ? cleared : 0;
}

function isMockCleared() {
    return Math.random() > .2 || health < 20;
}

function dodge() {
    text.innerText = "You dodge the question from the " + mocks[start].name;
}

function defeatMock() {
    bits += Math.floor(mocks[start].level * 6.7);
    bitsText.innerText = bits;
    xpText.innerText = xp;
    update(locations[4]);
}

function lose() {
    update (locations[4]);
}

function winGame() {
    update(locations[5]);
}

function restart() {
    xp = 0;
    knowledge = 100;
    bits = 50;
    currentTool = 0;
    inventory = ["tutorials"];
    bitsText.innerText = bits;
    knowledgeText.innerText = knowledge;
    xpText.innerText = xp;
    goComputer();
  }