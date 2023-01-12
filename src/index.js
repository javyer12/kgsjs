const messages = [
      "This is where it all begins...",
      "Commit committed",
      "Version control is awful",
      "COMMIT ALL THE FILES!",
      "The same thing we do every night, Pinky - try to take over the world!",
      "Lock S-foils in attack position",
      "👀Watchig👀",
      "💀Death💀",
      "🤪mocking🤪",
      "I'll explain when you're older!",
      "Here be Dragons",
      "Reinventing the wheel. Again.",
      "Batman! (this commit has no parents)",
      "Readme completed"
];
const errorCommit = [
      "This is not the commit message you are looking for",
      "This commit is a lie",
      "It's still not working❌ ",
      "Something is missing, i don't know what it is, but i'll fix it",
      "Server not working",
      "it's almost done",
      "dependencies are deprecated💔",
      "Uncompleted Readme "
]
const ERROR = 'kgs error'
const SUCCESS = "kgs success"
const ERRORLIST = 'kgs -l error'
const SUCCESSLIST = 'kgs -l success'

function Commit() {
      const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
      });

      readline.question(`run the commit you wish:  `, name => {
            const success = messages[ Math.floor(Math.random() * messages.length) ];
            const error = errorCommit[ Math.floor(Math.random() * messages.length) ];

            if (name === SUCCESS) {
                  console.log(success)
            } else if (name === ERROR) {
                  console.log(error)
            } else if (name === ERRORLIST) {
                  console.log("Error List Commit:")
                  console.log(" ")
                  errorCommit.map(item => {
                        console.log(item);
                  })
            } else if (name === SUCCESSLIST) {
                  console.log("Success List Commit: ")
                  console.log(" ")
                  messages.map(item => {
                        console.log(item);
                  })
            }
            else {
                  console.log("Command incorrect")
            }

            readline.close();
      });
}

//       console.log(`\x1b[34m${message}\x1b[89m`);

module.exports = { Commit };


// labo de javascript (practicar ejercicios js)
// labo de node
// contact backend con curso 
// kgs fin